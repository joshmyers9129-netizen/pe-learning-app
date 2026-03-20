/**
 * ValuationGovernance
 * Framework showing valuation standards, process, and failure modes.
 * Used in: Day 12 (valuation and governance).
 */
export default function ValuationGovernance() {
  const layers = [
    {
      name: "IPEV Guidelines",
      covers: "Fair value framework for private capital; market-participant-based pricing",
      signal: "Common language for methodology and calibration across managers",
      risk: "GP marks anchored to preference rather than market evidence",
      color: "bg-[#2294BD]",
    },
    {
      name: "ASC 820 / Fair Value",
      covers: "U.S. accounting framework; Level 1–3 classification",
      signal: "Private assets are typically Level 3 — unobservable inputs require stronger governance",
      risk: "False comfort from framework compliance without process discipline",
      color: "bg-[#1A7A9E]",
    },
    {
      name: "Valuation Committee",
      covers: "Internal body that reviews and challenges deal-team mark proposals",
      signal: "Real separation between deal advocacy and mark approval",
      risk: "Rubber-stamp process where the investment team controls the final number",
      color: "bg-[#FAA51A]",
    },
    {
      name: "Third-Party Support",
      covers: "External valuation firms providing range analysis or methodology review",
      signal: "Adds discipline, especially in conflict-heavy periods",
      risk: "Selective or decorative use that does not actually constrain the GP",
      color: "bg-[#D9532B]",
    },
    {
      name: "Calibration",
      covers: "Anchoring marks to observable events and updating as evidence changes",
      signal: "Forces explanation of what changed since last observable price",
      risk: "Marks that float on narrative rather than evidence",
      color: "bg-[#7C5CBF]",
    },
    {
      name: "Backtesting",
      covers: "Comparing prior marks with eventual exits or later financing rounds",
      signal: "Reveals whether mark accuracy is acceptable over time",
      risk: "Repeated late write-downs or sudden reality catches",
      color: "bg-[#2A9D60]",
    },
  ];

  return (
    <div className="my-3 space-y-2">
      {layers.map((l, i) => (
        <div key={i} className="rounded-lg border border-[#E8DDD4] bg-white shadow-sm overflow-hidden">
          <div className="flex items-stretch">
            <div className={`w-1.5 flex-shrink-0 ${l.color}`} />
            <div className="flex-1 p-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[12px] font-bold text-[#1A1A1A]">{l.name}</span>
                <span className="text-[10px] text-[#9A918A]">— {l.covers}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded bg-[#2A9D60]/6 border border-[#2A9D60]/12 px-2.5 py-1.5">
                  <p className="text-[9px] font-bold uppercase tracking-wider text-[#2A9D60] mb-0.5">Allocator signal</p>
                  <p className="text-[10px] text-[#1A1A1A] leading-snug">{l.signal}</p>
                </div>
                <div className="rounded bg-[#D9532B]/6 border border-[#D9532B]/12 px-2.5 py-1.5">
                  <p className="text-[9px] font-bold uppercase tracking-wider text-[#D9532B] mb-0.5">Key risk if weak</p>
                  <p className="text-[10px] text-[#404040] leading-snug">{l.risk}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
