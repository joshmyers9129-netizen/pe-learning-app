import { CONFIDENCE_SHORT_LABELS } from "@/lib/ui-config";

export function ConfidenceRating({
  value,
  onChange,
}: {
  value: number | null;
  onChange: (v: number) => void;
}) {
  return (
    <div className="rounded-2xl border border-[#E8DDD4] bg-white px-6 py-5 mt-2">
      <p className="text-[15px] font-semibold text-[#000000] mb-1">
        How confident do you feel?
      </p>
      <p className="text-sm text-[#404040] mb-4">
        Rate your understanding of today&apos;s material.
      </p>
      <div className="flex gap-2 justify-between" role="radiogroup" aria-label="Confidence rating">
        {CONFIDENCE_SHORT_LABELS.map((label, i) => {
          const v = i + 1;
          const active = value === v;
          return (
            <button
              key={v}
              onClick={() => onChange(v)}
              role="radio"
              aria-checked={active}
              aria-label={`${v} - ${label}`}
              className={`flex-1 flex flex-col items-center gap-1 py-3 rounded-xl border text-xs font-medium transition-colors ${
                active
                  ? "border-[#2294BD] bg-[#2294BD] text-white"
                  : "border-[#E8DDD4] bg-white text-[#404040] hover:border-[#2294BD]/50 hover:bg-[#2294BD]/5"
              }`}
            >
              <span className="text-base font-bold">{v}</span>
              <span className="hidden sm:block text-[10px] leading-tight text-center">
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
