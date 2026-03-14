/**
 * FundLifecycleTimeline
 * Teaches: the four phases of a PE fund lifecycle.
 * Used in: Day 1 (fund model), Day 6 (lifecycle & vintage year).
 * Mobile-first: stacks as a vertical list on xs, horizontal on sm+.
 */
export default function FundLifecycleTimeline() {
  const phases = [
    {
      label: "Fundraising",
      years: "Yr 0–1",
      description: "GP raises committed capital from LPs",
      color: "bg-[#2294BD]",
      text: "text-[#2294BD]",
      border: "border-[#2294BD]/30",
    },
    {
      label: "Investment",
      years: "Yr 1–4",
      description: "Capital called & deployed into companies",
      color: "bg-[#FAA51A]",
      text: "text-[#D9532B]",
      border: "border-[#FAA51A]/30",
    },
    {
      label: "Value Creation",
      years: "Yr 3–7",
      description: "GP operates & grows portfolio companies",
      color: "bg-[#D9532B]",
      text: "text-[#D9532B]",
      border: "border-[#D9532B]/30",
    },
    {
      label: "Harvest",
      years: "Yr 6–10+",
      description: "Exits occur; cash distributed to LPs",
      color: "bg-[#404040]",
      text: "text-[#404040]",
      border: "border-[#404040]/20",
    },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040] mb-3">
        PE Fund Lifecycle — 10-Year Arc
      </p>

      {/* Horizontal on sm+, vertical on xs */}
      <div className="hidden sm:flex items-start gap-0">
        {phases.map((phase, i) => (
          <div key={phase.label} className="flex items-start flex-1">
            <div className={`flex-1 rounded-lg border ${phase.border} bg-white px-3 py-2.5`}>
              <div className={`text-[10px] font-bold uppercase tracking-wide ${phase.text} mb-0.5`}>
                {phase.label}
              </div>
              <div className="text-xs font-medium text-[#000000] mb-1">{phase.years}</div>
              <div className="text-[11px] text-[#404040] leading-snug">{phase.description}</div>
            </div>
            {i < phases.length - 1 && (
              <div className="flex items-center mt-3 px-1">
                <span className="text-[#D0C8C0] text-sm">→</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Vertical fallback for mobile */}
      <div className="sm:hidden flex flex-col gap-2">
        {phases.map((phase, i) => (
          <div key={phase.label} className="flex items-start gap-3">
            <div className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${phase.color}`} />
            <div>
              <span className={`text-xs font-bold ${phase.text}`}>{phase.label}</span>
              <span className="text-xs text-[#404040] ml-1.5">{phase.years}</span>
              <p className="text-[11px] text-[#404040] leading-snug">{phase.description}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-[10px] text-[#404040] mt-3 italic">
        Phases overlap. Investment and value-creation run concurrently for early portfolio companies.
      </p>
    </div>
  );
}
