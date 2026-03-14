"use client";

import { useState, useEffect } from "react";
import { getModuleProgress, dismissCard, getDismissedToday } from "@/lib/progress";
import { getModuleProgress, getAllQuizResults, getCardStruggleCounts, recordCardStruggle } from "@/lib/progress";
import {
  buildReviewQueue,
  groupByPriority,
  groupByTopic,
  QueueCard,
} from "@/lib/reviewQueue";
import { CardType, Priority } from "@/lib/types";
import { AiHelper } from "@/components/AiHelper";

// ── constants ─────────────────────────────────────────────────────────────────

const MODULE_ID = "pe-foundations";

const CARD_TYPE_CONFIG: Record<
  CardType,
  { label: string; bg: string; text: string; border: string }
> = {
  flashcard: {
    label: "Flashcard",
    bg: "bg-[#2294BD]/10",
    text: "text-[#2294BD]",
    border: "border-[#2294BD]/20",
  },
  "mini-case": {
    label: "Mini-case",
    bg: "bg-[#D9532B]/10",
    text: "text-[#D9532B]",
    border: "border-[#D9532B]/20",
  },
  reteach: {
    label: "Reteach",
    bg: "bg-[#FAA51A]/15",
    text: "text-[#9B6A00]",
    border: "border-[#FAA51A]/30",
  },
};

const PRIORITY_CONFIG: Record<
  Priority,
  { label: string; dot: string; text: string }
> = {
  high: { label: "High priority", dot: "bg-[#D9532B]", text: "text-[#D9532B]" },
  medium: { label: "Medium", dot: "bg-[#FAA51A]", text: "text-[#9B6A00]" },
  low: { label: "Low", dot: "bg-[#2294BD]", text: "text-[#2294BD]" },
};

const TOPIC_LABELS: Record<string, string> = {
  "fund-structure": "Fund Structure",
  "capital-flow": "Capital Flow",
  "gp-lp": "GP / LP",
  incentives: "Incentives",
  "carried-interest": "Carried Interest",
  "capital-calls": "Capital Calls",
  "j-curve": "J-Curve",
  "cash-flows": "Cash Flows",
  irr: "IRR",
  "performance-measurement": "Performance",
  tvpi: "TVPI",
  dpi: "DPI",
  rvpi: "RVPI",
  "fund-lifecycle": "Fund Lifecycle",
  "vintage-year": "Vintage Year",
  buyout: "Buyout",
  leverage: "Leverage",
  "deal-structure": "Deal Structure",
  "growth-equity": "Growth Equity",
  venture: "Venture",
  "value-creation": "Value Creation",
  operations: "Operations",
  "portfolio-companies": "Portfolio Cos",
  exits: "Exits",
  ipo: "IPO",
  secondary: "Secondaries",
  "fund-terms": "Fund Terms",
  lpa: "LPA",
  "manager-selection": "Manager Selection",
  "due-diligence": "Due Diligence",
  benchmarking: "Benchmarking",
  pme: "PME",
  pacing: "Pacing",
  "portfolio-construction": "Portfolio Construction",
  allocation: "Allocation",
  liquidity: "Liquidity",
  "gp-led": "GP-Led",
  "co-investment": "Co-Investment",
  "asset-allocation": "Asset Allocation",
  reporting: "Reporting",
  nav: "NAV",
  valuation: "Valuation",
  esg: "ESG",
  impact: "Impact",
  regulation: "Regulation",
  synthesis: "Synthesis",
  "meeting-fluency": "Meeting Fluency",
  "allocator-thinking": "Allocator Thinking",
};

function topicLabel(t: string) {
  return TOPIC_LABELS[t] ?? t.replace(/-/g, " ");
}

// ── card component ────────────────────────────────────────────────────────────

function ReviewCardTile({
  card,
  onDismiss,
  onStruggle,
}: {
  card: QueueCard;
  onDismiss: (id: string) => void;
  onStruggle: (id: string) => void;
}) {
  const [flipped, setFlipped] = useState(false);
  const typeCfg = CARD_TYPE_CONFIG[card.cardType];
  const priCfg = PRIORITY_CONFIG[card.priority];
  const isFlipCard = card.cardType === "flashcard";
  const bodyVisible = !isFlipCard || flipped;
  const aiPrompt = `Help me understand this PE concept from a review card. Question: "${card.front}" — Answer: "${card.back}". I'm a CFA charterholder with strong public-markets experience but limited PE fluency. Make the concept more intuitive.`;

  return (
    <div
      className={`rounded-2xl border bg-white shadow-sm overflow-hidden ${typeCfg.border}`}
    >
      {/* Card header */}
      <div
        className={`flex items-center justify-between px-4 py-2.5 border-b ${typeCfg.border} ${typeCfg.bg}`}
      >
        <div className="flex items-center gap-2">
          <span
            className={`text-xs font-semibold uppercase tracking-wider ${typeCfg.text}`}
          >
            {typeCfg.label}
          </span>
          <span className="text-[#D0C8C0]">·</span>
          <span className="text-xs text-[#404040] bg-white/60 px-1.5 py-0.5 rounded-md">
            {topicLabel(card.topic)}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className={`w-1.5 h-1.5 rounded-full ${priCfg.dot}`} />
          <span className={`text-xs font-medium ${priCfg.text}`}>
            {priCfg.label}
          </span>
          <span className="text-[#D0C8C0] ml-1">·</span>
          <span className="text-xs text-[#404040]">Day {card.dayNumber}</span>
        </div>
      </div>

      {/* Card body */}
      <div className="px-4 py-4">
        {isFlipCard ? (
          <>
            <p className="text-sm font-medium text-[#000000] leading-relaxed mb-3">
              {card.front}
            </p>
            {flipped ? (
              <div className="rounded-xl bg-[#F0E6DD] px-4 py-3 mt-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#404040] mb-1">
                  Answer
                </p>
                <p className="text-sm text-[#000000] leading-relaxed">
                  {card.back}
                </p>
              </div>
            ) : (
              <button
                onClick={() => setFlipped(true)}
                className="w-full text-sm text-[#2294BD] font-medium bg-[#2294BD]/8 hover:bg-[#2294BD]/15 rounded-xl py-2.5 transition-colors"
              >
                Show answer
              </button>
            )}
          </>
        ) : (
          <>
            {/* mini-case / reteach: show both sides directly */}
            <p className="text-sm font-medium text-[#000000] leading-relaxed mb-3">
              {card.front}
            </p>
            <div className="rounded-xl bg-[#F0E6DD] px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#404040] mb-1">
                {card.cardType === "mini-case" ? "Analysis" : "Key point"}
              </p>
              <p className="text-sm text-[#000000] leading-relaxed">
                {card.back}
              </p>
            </div>
          </>
        )}
      </div>

      {/* AI helper + dismiss */}
      <div className="px-4 pb-4 pt-1">
        {bodyVisible && (
          <AiHelper prompt={aiPrompt} label="Help me understand this" />
        )}
        <div className="flex justify-end gap-2 mt-2">
          {bodyVisible && (
            <button
              onClick={() => { onStruggle(card.cardId); onDismiss(card.cardId); }}
              className="text-xs text-[#FAA51A] hover:text-[#9B6A00] font-medium px-3 py-1.5 rounded-lg hover:bg-[#FAA51A]/10 transition-colors"
            >
              Still learning
            </button>
          )}
          <button
            onClick={() => onDismiss(card.cardId)}
            className="text-xs text-[#404040] hover:text-[#D9532B] font-medium px-3 py-1.5 rounded-lg hover:bg-[#D9532B]/8 transition-colors"
          >
            Done for now
          </button>
        </div>
      </div>
    </div>
  );
}

// ── empty state ───────────────────────────────────────────────────────────────

function EmptyState({ hasProgress }: { hasProgress: boolean }) {
  return (
    <div className="rounded-2xl border border-[#E8DDD4] bg-white px-6 py-10 text-center">
      <div className="text-3xl mb-3">{hasProgress ? "✓" : "○"}</div>
      <h3 className="text-base font-semibold text-[#000000] mb-2">
        {hasProgress ? "All caught up" : "No cards yet"}
      </h3>
      <p className="text-sm text-[#404040] leading-relaxed max-w-xs mx-auto">
        {hasProgress
          ? "Review cards appear here as you complete lessons. Come back after your next session — or mark more lessons complete on the Modules page."
          : "Complete or start a lesson on the Modules page to unlock review cards here."}
      </p>
      {!hasProgress && (
        <a
          href="/modules"
          className="inline-block mt-4 text-sm font-medium text-[#2294BD] bg-[#2294BD]/10 hover:bg-[#2294BD]/18 px-4 py-2 rounded-xl transition-colors"
        >
          Go to Modules →
        </a>
      )}
    </div>
  );
}

// ── grouping views ────────────────────────────────────────────────────────────

const PRIORITY_ORDER: Priority[] = ["high", "medium", "low"];

function GroupedByPriority({
  cards,
  dismissed,
  onDismiss,
  onStruggle,
}: {
  cards: QueueCard[];
  dismissed: Set<string>;
  onDismiss: (id: string) => void;
  onStruggle: (id: string) => void;
}) {
  const groups = groupByPriority(cards);
  return (
    <>
      {PRIORITY_ORDER.map((p) => {
        const visible = groups[p].filter((c) => !dismissed.has(c.cardId));
        if (visible.length === 0) return null;
        const priCfg = PRIORITY_CONFIG[p];
        return (
          <section key={p} className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className={`w-2 h-2 rounded-full ${priCfg.dot}`} />
              <h3 className={`text-xs font-bold uppercase tracking-widest ${priCfg.text}`}>
                {priCfg.label}
              </h3>
              <span className="text-xs text-[#404040]">({visible.length})</span>
            </div>
            <div className="space-y-3">
              {visible.map((c) => (
                <ReviewCardTile key={c.cardId} card={c} onDismiss={onDismiss} onStruggle={onStruggle} />
              ))}
            </div>
          </section>
        );
      })}
    </>
  );
}

function GroupedByTopic({
  cards,
  dismissed,
  onDismiss,
  onStruggle,
}: {
  cards: QueueCard[];
  dismissed: Set<string>;
  onDismiss: (id: string) => void;
  onStruggle: (id: string) => void;
}) {
  const groups = groupByTopic(cards);
  const topics = Object.keys(groups).sort();
  return (
    <>
      {topics.map((t) => {
        const visible = groups[t].filter((c) => !dismissed.has(c.cardId));
        if (visible.length === 0) return null;
        return (
          <section key={t} className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#404040]">
                {topicLabel(t)}
              </h3>
              <span className="text-xs text-[#404040]">({visible.length})</span>
            </div>
            <div className="space-y-3">
              {visible.map((c) => (
                <ReviewCardTile key={c.cardId} card={c} onDismiss={onDismiss} onStruggle={onStruggle} />
              ))}
            </div>
          </section>
        );
      })}
    </>
  );
}

// ── page ──────────────────────────────────────────────────────────────────────

type GroupMode = "priority" | "topic";

export default function ReviewPage() {
  const [cards, setCards] = useState<QueueCard[]>([]);
  const [dismissed, setDismissed] = useState<Set<string>>(() => getDismissedToday());
  const [groupMode, setGroupMode] = useState<GroupMode>("priority");
  const [hasProgress, setHasProgress] = useState(false);

  useEffect(() => {
    const progress = getModuleProgress(MODULE_ID);
    const hasAny = Object.keys(progress).length > 0;
    setHasProgress(hasAny);
    setCards(buildReviewQueue(progress, getAllQuizResults(), getCardStruggleCounts()));
  }, []);

  const dismiss = (id: string) => {
    dismissCard(id);
    setDismissed((prev) => new Set([...prev, id]));
  };

  const struggle = (id: string) => {
    recordCardStruggle(id);
  };

  const visible = cards.filter((c) => !dismissed.has(c.cardId));
  const isEmpty = visible.length === 0;

  return (
    <main className="min-h-screen bg-[#FBF7F3]">
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
              Review
            </h2>
            {!isEmpty && (
              <p className="text-xs text-[#404040] mt-0.5">
                {visible.length} card{visible.length !== 1 ? "s" : ""} queued
              </p>
            )}
          </div>

          {/* Group toggle — only show when there are cards */}
          {!isEmpty && (
            <div className="flex items-center bg-white border border-[#E8DDD4] rounded-xl p-0.5 text-xs font-medium">
              {(["priority", "topic"] as GroupMode[]).map((m) => (
                <button
                  key={m}
                  onClick={() => setGroupMode(m)}
                  className={`px-3 py-1.5 rounded-lg capitalize transition-colors ${
                    groupMode === m
                      ? "bg-[#2294BD] text-white shadow-sm"
                      : "text-[#404040] hover:text-[#000000]"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Card type legend */}
        {!isEmpty && (
          <div className="flex flex-wrap gap-3 mb-5">
            {(Object.entries(CARD_TYPE_CONFIG) as [CardType, (typeof CARD_TYPE_CONFIG)[CardType]][]).map(
              ([type, cfg]) => (
                <span
                  key={type}
                  className={`text-xs font-medium px-2 py-1 rounded-lg ${cfg.bg} ${cfg.text}`}
                >
                  {cfg.label}
                </span>
              )
            )}
            <span className="text-xs text-[#404040] self-center ml-auto">
              Flip card · dismiss when done
            </span>
          </div>
        )}

        {/* Content */}
        {isEmpty ? (
          <EmptyState hasProgress={hasProgress} />
        ) : groupMode === "priority" ? (
          <GroupedByPriority
            cards={cards}
            dismissed={dismissed}
            onDismiss={dismiss}
            onStruggle={struggle}
          />
        ) : (
          <GroupedByTopic
            cards={cards}
            dismissed={dismissed}
            onDismiss={dismiss}
            onStruggle={struggle}
          />
        )}
      </div>
    </main>
  );
}
