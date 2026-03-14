import type { LessonBlock as LessonBlockType } from "@/types/content";

const blockStyles: Record<
  LessonBlockType["type"],
  { border: string; bg: string; badge: string; badgeColor: string }
> = {
  intro: {
    border: "border-access/30",
    bg: "bg-access/5",
    badge: "Why this matters",
    badgeColor: "text-access",
  },
  teaching: {
    border: "border-black/10",
    bg: "bg-white",
    badge: "Concept",
    badgeColor: "text-black/50",
  },
  example: {
    border: "border-amber/40",
    bg: "bg-amber/5",
    badge: "Example",
    badgeColor: "text-amber",
  },
  exercise: {
    border: "border-rust/30",
    bg: "bg-rust/5",
    badge: "Exercise",
    badgeColor: "text-rust",
  },
  callout: {
    border: "border-black/20",
    bg: "bg-cream/50",
    badge: "Key insight",
    badgeColor: "text-black/60",
  },
};

interface Props {
  block: LessonBlockType;
}

export default function LessonBlock({ block }: Props) {
  const style = blockStyles[block.type];
  return (
    <div className={`rounded-lg border p-4 ${style.border} ${style.bg}`}>
      <div className="flex items-center gap-2 mb-2">
        <span className={`text-xs font-semibold uppercase tracking-wider ${style.badgeColor}`}>
          {style.badge}
        </span>
      </div>
      <h3 className="font-semibold text-base mb-1">{block.title}</h3>
      <p className="text-sm leading-relaxed text-black/80">{block.content}</p>
    </div>
  );
}
