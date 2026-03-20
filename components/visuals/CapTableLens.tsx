/**
 * CapTableLens
 * Sequential question framework for evaluating venture cap tables.
 * Used in: Day 15 (venture ownership).
 */
export default function CapTableLens() {
  const layers = [
    { name: "Entry", q: "What ownership did the fund buy at first check?", why: "Entry stake is the starting point for all later economics" },
    { name: "Basis", q: "Is the quoted ownership basic or fully diluted?", why: "Basic ownership can overstate economic participation" },
    { name: "Dilution Path", q: "What rounds, option-pool changes, or conversions reduced ownership?", why: "Ownership is dynamic, not static" },
    { name: "Defense", q: "Did the fund use reserves and pro rata rights to maintain exposure?", why: "Being right early is not enough without ownership defense" },
    { name: "Stack Position", q: "What terms sit ahead of the stake at exit?", why: "A company win can still produce weaker common-equity economics" },
    { name: "Fund Relevance", q: "Can the retained stake actually move the fund?", why: "Great company outcomes do not automatically become great fund outcomes" },
  ];

  const colors = ["#2294BD", "#1A7A9E", "#FAA51A", "#D9532B", "#7C5CBF", "#2A9D60"];

  return (
    <div className="my-3">
      {/* Funnel-like progression */}
      <div className="space-y-1.5">
        {layers.map((l, i) => (
          <div key={i} className="rounded-lg border border-[#E8DDD4] bg-white shadow-sm overflow-hidden flex items-stretch">
            {/* Step number + color */}
            <div className="w-20 flex-shrink-0 flex items-center justify-center gap-1.5" style={{ backgroundColor: `${colors[i]}12` }}>
              <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: colors[i] }}>
                <span className="text-white text-[10px] font-bold">{i + 1}</span>
              </div>
              <span className="text-[10px] font-bold" style={{ color: colors[i] }}>{l.name}</span>
            </div>
            <div className="flex-1 p-2.5 border-l border-[#E8DDD4]">
              <p className="text-[12px] font-semibold text-[#1A1A1A] mb-0.5">{l.q}</p>
              <p className="text-[10px] text-[#9A918A] leading-snug italic">{l.why}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
