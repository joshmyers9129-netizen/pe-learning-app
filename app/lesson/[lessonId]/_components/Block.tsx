import { LessonBlock, LessonBlockType } from "@/lib/types";
import { LESSON_VISUALS } from "@/components/visuals";
import { renderContent } from "./renderContent";

const BLOCK_STYLE: Record<
  LessonBlockType,
  {
    label: string;
    border: string;
    bg: string;
    labelColor: string;
    accent?: string;
    contentClass?: string;
  }
> = {
  intro: {
    label: "Context",
    border: "border-[#2294BD]/20",
    bg: "bg-[#2294BD]/5",
    labelColor: "text-[#2294BD]",
    accent: "border-l-[#2294BD]/50",
  },
  framing: {
    label: "Framing",
    border: "border-[#2294BD]/20",
    bg: "bg-[#2294BD]/5",
    labelColor: "text-[#2294BD]",
    accent: "border-l-[#2294BD]/50",
  },
  teaching: {
    label: "Core concept",
    border: "border-[#000]/10",
    bg: "bg-white",
    labelColor: "text-[#404040]",
  },
  example: {
    label: "Example",
    border: "border-[#FAA51A]/25",
    bg: "bg-[#FAA51A]/6",
    labelColor: "text-[#9B6A00]",
    accent: "border-l-[#FAA51A]",
  },
  quote: {
    label: "Quote",
    border: "border-[#7C5CBF]/20",
    bg: "bg-[#7C5CBF]/5",
    labelColor: "text-[#7C5CBF]",
    accent: "border-l-[#7C5CBF]/60",
    contentClass: "italic",
  },
  visual: {
    label: "Visual",
    border: "border-[#E8DDD4]",
    bg: "bg-[#F9F6F3]",
    labelColor: "text-[#404040]",
  },
  "inference-boundary": {
    label: "Inference boundary",
    border: "border-[#FAA51A]/40",
    bg: "bg-[#FAA51A]/10",
    labelColor: "text-[#9B6A00]",
    accent: "border-l-[#FAA51A]",
  },
  "weak-answer": {
    label: "Weak answer",
    border: "border-[#D9532B]/25",
    bg: "bg-[#D9532B]/5",
    labelColor: "text-[#D9532B]",
    accent: "border-l-[#D9532B]/60",
  },
  exercise: {
    label: "Exercise",
    border: "border-[#D9532B]/20",
    bg: "bg-[#D9532B]/5",
    labelColor: "text-[#D9532B]",
  },
  "meeting-application": {
    label: "Meeting application",
    border: "border-[#2A9D60]/20",
    bg: "bg-[#2A9D60]/5",
    labelColor: "text-[#1A6B42]",
    accent: "border-l-[#2A9D60]",
  },
  "source-note": {
    label: "Source note",
    border: "border-[#E8DDD4]",
    bg: "bg-[#F9F6F3]",
    labelColor: "text-[#9A918A]",
    contentClass: "text-[#9A918A]",
  },
};

export function Block({ block }: { block: LessonBlock }) {
  const s = BLOCK_STYLE[block.type];
  const accentClass = s.accent ? `border-l-4 ${s.accent}` : "";

  if (block.type === "visual") {
    const VisualComponent = block.visualId
      ? LESSON_VISUALS[block.visualId]
      : null;
    return (
      <div
        className={`rounded-xl border ${s.border} ${s.bg} px-5 py-5 mb-5`}
      >
        <p
          className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${s.labelColor}`}
        >
          {s.label}
        </p>
        <p className="text-[15px] font-semibold text-[#000000] leading-snug mb-4">
          {block.title}
        </p>

        {VisualComponent && (
          <div className="mb-4">
            <VisualComponent />
          </div>
        )}
        {block.src && !VisualComponent && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={block.src}
            alt={block.caption ?? block.title}
            className="w-full rounded-lg mb-4 object-contain max-h-80"
          />
        )}
        {block.content && (
          <div className="text-[15px] text-[#000000] leading-[1.7] mb-3">
            {renderContent(block.content)}
          </div>
        )}
        {block.caption && (
          <p className="text-xs text-[#404040] italic mb-3">{block.caption}</p>
        )}
        {block.whyItMatters && (
          <div className="rounded-lg border border-[#2294BD]/20 bg-[#2294BD]/5 px-4 py-3 mb-3">
            <span className="text-xs font-bold text-[#2294BD] uppercase tracking-wide">
              Why this matters —{" "}
            </span>
            <span className="text-sm text-[#000000] leading-relaxed">
              {block.whyItMatters}
            </span>
          </div>
        )}
        {block.sourceNote && (
          <p className="text-[11px] text-[#9A918A] leading-relaxed">
            Source: {block.sourceNote}
          </p>
        )}
      </div>
    );
  }

  return (
    <div
      className={`rounded-xl border ${s.border} ${accentClass} ${s.bg} px-5 py-5 mb-5`}
    >
      <p
        className={`text-[10px] font-bold uppercase tracking-widest mb-1.5 ${s.labelColor}`}
      >
        {s.label}
      </p>
      <p className="text-[15px] font-semibold text-[#000000] leading-snug mb-2.5">
        {block.title}
      </p>
      {block.content && (
        <div
          className={`text-[15px] text-[#000000] leading-[1.7] ${s.contentClass ?? ""}`}
        >
          {renderContent(block.content)}
        </div>
      )}
    </div>
  );
}
