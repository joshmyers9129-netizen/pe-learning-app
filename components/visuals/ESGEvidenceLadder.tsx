/**
 * ESGEvidenceLadder
 * Vertical ladder showing evidence types from weakest to strongest.
 * Used in: Day 17 (ESG integration).
 */
export default function ESGEvidenceLadder() {
  const rungs = [
    { type: "Policy statement or PRI signatory", tells: "The firm has stated an intention", weight: "Low", level: 1 },
    { type: "Annual ESG report with broad KPIs", tells: "The firm is reporting activity", weight: "Low–Moderate", level: 2 },
    { type: "Sector-specific materiality map", tells: "The GP has a framework for what should matter by company type", weight: "Moderate", level: 3 },
    { type: "Deal memo where ESG changed price, structure, or pass", tells: "ESG affected underwriting", weight: "High", level: 4 },
    { type: "Board-level ownership plan with named KPIs", tells: "ESG affected portfolio management", weight: "High", level: 5 },
    { type: "Exit or lender diligence showing commercial impact", tells: "ESG affected realized economics or process quality", weight: "Highest", level: 6 },
  ];

  return (
    <div className="my-3">
      <div className="space-y-0">
        {rungs.map((r, i) => {
          const idx = rungs.length - 1 - i; // reverse order: strongest at top
          const rung = rungs[idx];
          const opacity = 0.15 + (idx / (rungs.length - 1)) * 0.85;
          const bgColor = `rgba(42, 157, 96, ${opacity})`;
          return (
            <div key={idx} className="flex items-stretch">
              {/* Level indicator */}
              <div className="w-12 flex-shrink-0 flex items-center justify-center border-r border-[#E8DDD4]">
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: bgColor }}>
                    <span className="text-white text-[10px] font-bold">{rung.level}</span>
                  </div>
                </div>
              </div>
              {/* Content */}
              <div className={`flex-1 px-4 py-2.5 border-b border-[#E8DDD4] ${idx % 2 === 0 ? "bg-white" : "bg-[#FAF8F5]"}`}>
                <div className="flex items-center gap-2 mb-0.5">
                  <p className="text-[12px] font-semibold text-[#1A1A1A]">{rung.type}</p>
                  <span className={`text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full ${
                    rung.level >= 5 ? "bg-[#2A9D60]/15 text-[#2A9D60]" :
                    rung.level >= 3 ? "bg-[#FAA51A]/15 text-[#9B6A00]" :
                    "bg-[#E8DDD4] text-[#9A918A]"
                  }`}>{rung.weight}</span>
                </div>
                <p className="text-[10px] text-[#9A918A] leading-snug">{rung.tells}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
