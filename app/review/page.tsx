"use client";

import { useState } from "react";
import { getModuleProgress, dismissCard, getDismissedToday, getAllQuizResults, getCardStruggleCounts, recordCardStruggle, updateSRS, getAllSRSStates } from "@/lib/progress";
import {
  buildReviewQueue,
  groupByPriority,
  groupByTopic,
  QueueCard,
} from "@/lib/reviewQueue";
import { CardType, Priority, SRSCardState } from "@/lib/types";
import { AiHelper } from "@/components/AiHelper";
import { topicLabel } from "@/lib/topics";
import { DEFAULT_MODULE_ID } from "@/lib/modules";
import { CARD_TYPE_CONFIG, PRIORITY_CONFIG, SRS_RATINGS } from "@/lib/ui-config";

// ── constants ─────────────────────────────────────────────────────────────────

const MODULE_ID = DEFAULT_MODULE_ID;

function ReviewCardTile({
  card,
  srsState,
  onDismiss,
  onStruggle,
  onSRSRate,
}: {
  card: QueueCard;
  srsState?: SRSCardState;
  onDismiss: (id: string) => void;
  onStruggle: (id: string) => void;
  onSRSRate: (id: string, quality: number) => void;
}) {
  const [flipped, setFlipped] = useState(false);
  const [rated, setRated] = useState(false);
  const typeCfg = CARD_TYPE_CONFIG[card.cardType];
  const priCfg = PRIORITY_CONFIG[card.priority];
  const isFlipCard = card.cardType === "flashcard";
  const bodyVisible = !isFlipCard || flipped;
  const aiPrompt =
    `Card type: ${typeCfg.label} | Topic: ${topicLabel(card.topic)}\n\n` +
    `Prompt: "${card.front}"\nAnswer: "${card.back}"\n\n` +
    `Help me understand this PE concept deeply.`;

  function handleRate(quality: number) {
    onSRSRate(card.cardId, quality);
    if (quality < 3) {
      onStruggle(card.cardId);
    }
    setRated(true);
    onDismiss(card.cardId);
  }

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
          {srsState && (
            <>
              <span className="text-[#D0C8C0] ml-1">·</span>
              <span className="text-[10px] text-[#9A918A]">
                {srsState.interval}d interval
              </span>
            </>
          )}
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
                aria-label={`Show answer for: ${card.front.slice(0, 60)}`}
                className="w-full text-sm text-[#2294BD] font-medium bg-[#2294BD]/8 hover:bg-[#2294BD]/15 rounded-xl py-2.5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2294BD]"
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

      {/* AI helper + SRS rating + dismiss */}
      <div className="px-4 pb-4 pt-1">
        {bodyVisible && (
          <AiHelper prompt={aiPrompt} label="Help me understand this" />
        )}

        {/* SRS rating buttons — shown after answer is visible */}
        {bodyVisible && !rated && (
          <div className="mt-3">
            <p className="text-[10px] font-bold text-[#404040] uppercase tracking-widest mb-2">
              How well did you know this?
            </p>
            <div className="flex gap-1.5">
              {SRS_RATINGS.map((r) => (
                <button
                  key={r.quality}
                  onClick={() => handleRate(r.quality)}
                  className={`flex-1 text-xs font-medium py-2 rounded-lg transition-colors ${r.color}`}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {rated && (
          <div className="mt-3 text-xs text-[#2294BD] font-medium">
            ✓ Scheduled for next review
          </div>
        )}

        {!rated && (
          <div className="flex justify-end gap-2 mt-2">
            <button
              onClick={() => onDismiss(card.cardId)}
              title="Dismiss without rating"
              aria-label="Dismiss card"
              className="text-xs text-[#404040] hover:text-[#D9532B] font-medium px-3 py-1.5 rounded-lg hover:bg-[#D9532B]/8 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9532B]"
            >
              Skip
            </button>
          </div>
        )}
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
  srsStates,
  onDismiss,
  onStruggle,
  onSRSRate,
}: {
  cards: QueueCard[];
  dismissed: Set<string>;
  srsStates: Record<string, SRSCardState>;
  onDismiss: (id: string) => void;
  onStruggle: (id: string) => void;
  onSRSRate: (id: string, quality: number) => void;
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
                <ReviewCardTile key={c.cardId} card={c} srsState={srsStates[c.cardId]} onDismiss={onDismiss} onStruggle={onStruggle} onSRSRate={onSRSRate} />
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
  srsStates,
  onDismiss,
  onStruggle,
  onSRSRate,
}: {
  cards: QueueCard[];
  dismissed: Set<string>;
  srsStates: Record<string, SRSCardState>;
  onDismiss: (id: string) => void;
  onStruggle: (id: string) => void;
  onSRSRate: (id: string, quality: number) => void;
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
                <ReviewCardTile key={c.cardId} card={c} srsState={srsStates[c.cardId]} onDismiss={onDismiss} onStruggle={onStruggle} onSRSRate={onSRSRate} />
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
  const [groupMode, setGroupMode] = useState<GroupMode>("priority");
  const [srsStates, setSrsStates] = useState<Record<string, SRSCardState>>(() => {
    if (typeof window === "undefined") return {};
    return getAllSRSStates();
  });

  // Compute initial state synchronously to avoid effect warnings
  const [initialData] = useState(() => {
    if (typeof window === "undefined") return { cards: [] as QueueCard[], hasProgress: false, dismissed: new Set<string>(), srs: {} as Record<string, SRSCardState> };
    const progress = getModuleProgress(MODULE_ID);
    const hasAny = Object.keys(progress).length > 0;
    const allCards = buildReviewQueue(progress, getAllQuizResults(), getCardStruggleCounts());
    const today = new Date().toISOString().slice(0, 10);
    const srs = getAllSRSStates();
    const filtered = allCards.filter((c) => {
      const state = srs[c.cardId];
      if (!state) return true;
      return state.nextReviewDate <= today;
    });
    return { cards: filtered, hasProgress: hasAny, dismissed: getDismissedToday(), srs };
  });

  const [cards] = useState<QueueCard[]>(initialData.cards);
  const [dismissed, setDismissed] = useState<Set<string>>(initialData.dismissed);
  const [hasProgress] = useState(initialData.hasProgress);


  const dismiss = (id: string) => {
    dismissCard(id);
    setDismissed((prev) => new Set([...prev, id]));
  };

  const struggle = (id: string) => {
    recordCardStruggle(id);
  };

  const handleSRSRate = (cardId: string, quality: number) => {
    const updated = updateSRS(cardId, quality);
    setSrsStates((prev) => ({ ...prev, [cardId]: updated }));
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
            srsStates={srsStates}
            onDismiss={dismiss}
            onStruggle={struggle}
            onSRSRate={handleSRSRate}
          />
        ) : (
          <GroupedByTopic
            cards={cards}
            dismissed={dismissed}
            srsStates={srsStates}
            onDismiss={dismiss}
            onStruggle={struggle}
            onSRSRate={handleSRSRate}
          />
        )}
      </div>
    </main>
  );
}
