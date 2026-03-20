/**
 * CreditRiskDashboard
 * KPI dashboard for private credit monitoring.
 * Used in: Day 18 (private credit).
 */
export default function CreditRiskDashboard() {
  const kpis = [
    { name: "Top 10 Borrower Concentration", why: "Shows whether idiosyncratic problems can dominate returns", category: "concentration" },
    { name: "Top Sponsor Exposure", why: "Reveals whether one sponsor relationship is driving portfolio behavior", category: "concentration" },
    { name: "Sector Mix", why: "Identifies correlated earnings and valuation risk", category: "concentration" },
    { name: "Weighted-Avg Leverage", why: "High leverage reduces margin for error", category: "credit" },
    { name: "Weighted-Avg Interest Coverage", why: "Tight coverage signals vulnerability if rates stay high", category: "credit" },
    { name: "Covenant Headroom", why: "Measures distance to lender intervention points", category: "credit" },
    { name: "Non-Accrual / Watch-List %", why: "Early indicator of credit migration", category: "stress" },
    { name: "Cash Yield vs. PIK / Deferred", why: "Distinguishes realized carry from fragile income", category: "stress" },
    { name: "Maturity Ladder / Refinance Wall", why: "Highlights periods where market access matters most", category: "stress" },
    { name: "Mark-to-Public Gap", why: "Tests whether valuations may be lagging external signals", category: "stress" },
  ];

  const catStyles: Record<string, { label: string; bg: string; text: string; dot: string }> = {
    concentration: { label: "Concentration", bg: "bg-[#2294BD]/8", text: "text-[#2294BD]", dot: "bg-[#2294BD]" },
    credit: { label: "Credit Quality", bg: "bg-[#FAA51A]/8", text: "text-[#9B6A00]", dot: "bg-[#FAA51A]" },
    stress: { label: "Stress Signals", bg: "bg-[#D9532B]/8", text: "text-[#D9532B]", dot: "bg-[#D9532B]" },
  };

  return (
    <div className="my-3">
      {/* Category legend */}
      <div className="flex gap-4 mb-3">
        {Object.values(catStyles).map((c) => (
          <div key={c.label} className="flex items-center gap-1.5">
            <div className={`w-2 h-2 rounded-full ${c.dot}`} />
            <span className={`text-[10px] font-bold uppercase tracking-wider ${c.text}`}>{c.label}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-2">
        {kpis.map((k, i) => {
          const cat = catStyles[k.category];
          return (
            <div key={i} className={`rounded-lg border border-[#E8DDD4] ${cat.bg} px-3.5 py-2.5 shadow-sm`}>
              <div className="flex items-start gap-2">
                <div className={`w-1.5 h-1.5 rounded-full ${cat.dot} mt-1.5 flex-shrink-0`} />
                <div>
                  <p className="text-[11px] font-semibold text-[#1A1A1A] mb-0.5">{k.name}</p>
                  <p className="text-[10px] text-[#404040] leading-snug">{k.why}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
