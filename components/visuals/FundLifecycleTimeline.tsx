/**
 * FundLifecycleTimeline
 * Teaches: the four phases of a PE fund lifecycle, with accurate phase overlaps.
 * Used in: Day 1 (fund model), Day 5 (lifecycle & multiples).
 * Gantt-style bars show that phases run concurrently, not sequentially.
 */
export default function FundLifecycleTimeline() {
  const TOTAL_YEARS = 12;

  const phases = [
    {
      label: "Fundraising",
      years: "Yr 0–1",
      start: 0,
      end: 1.5,
      color: "bg-[#2294BD]",
      textColor: "text-[#2294BD]",
      borderColor: "border-[#2294BD]/40",
      description: "GP raises committed capital from LPs",
    },
    {
      label: "Investment Period",
      years: "Yr 1–5",
      start: 1,
      end: 5.5,
      color: "bg-[#FAA51A]",
      textColor: "text-[#D9532B]",
      borderColor: "border-[#FAA51A]/50",
      description: "Capital called & deployed into companies",
    },
    {
      label: "Value Creation",
      years: "Yr 3–8",
      start: 3,
      end: 8,
      color: "bg-[#D9532B]",
      textColor: "text-[#D9532B]",
      borderColor: "border-[#D9532B]/40",
      description: "GP operates & grows portfolio companies",
    },
    {
      label: "Harvest",
      years: "Yr 6–12",
      start: 6,
      end: 12,
      color: "bg-[#404040]",
      textColor: "text-[#404040]",
      borderColor: "border-[#404040]/30",
      description: "Exits occur; cash distributed to LPs",
    },
  ];

  const yearMarkers = [0, 2, 4, 6, 8, 10, 12];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040] mb-4">
        PE Fund Lifecycle — Overlapping Phases
      </p>

      {/* Gantt bars */}
      <div className="space-y-2 mb-3">
        {phases.map((phase) => {
          const leftPct = (phase.start / TOTAL_YEARS) * 100;
          const widthPct = ((phase.end - phase.start) / TOTAL_YEARS) * 100;
          return (
            <div key={phase.label} className="flex items-center gap-2">
              {/* Phase label — fixed width */}
              <div className="w-[96px] flex-shrink-0">
                <p className={`text-[10px] font-bold uppercase tracking-wide ${phase.textColor} leading-tight`}>
                  {phase.label}
                </p>
                <p className="text-[9px] text-[#9A918A]">{phase.years}</p>
              </div>
              {/* Bar track */}
              <div className="flex-1 relative h-7 bg-white rounded border border-[#E8DDD4]">
                <div
                  className={`absolute top-0.5 bottom-0.5 rounded ${phase.color} opacity-80 flex items-center px-1.5`}
                  style={{ left: `${leftPct}%`, width: `${widthPct}%` }}
                >
                  <p className="text-[9px] text-white font-medium truncate leading-none">
                    {phase.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Year axis */}
      <div className="ml-[104px] relative flex justify-between pr-0">
        {yearMarkers.map((yr) => (
          <div
            key={yr}
            className="flex flex-col items-center"
            style={{ width: `${100 / (yearMarkers.length - 1)}%`, textAlign: "center" }}
          >
            <div className="w-px h-1.5 bg-[#D0C8C0]" />
            <p className="text-[9px] text-[#9A918A] mt-0.5">{yr === 0 ? "Yr 0" : yr}</p>
          </div>
        ))}
      </div>

      <p className="text-[10px] text-[#404040] mt-3 italic">
        Investment period close (typically Yr 5) is the key structural boundary: the GP can no longer make new platform investments after this date, only follow-on investments in existing portfolio companies.
      </p>
    </div>
  );
}
