/**
 * SecondaryPricing
 * Four-dimension framework for interpreting NAV discounts/premiums.
 * Used in: Day 16 (secondaries).
 */
export default function SecondaryPricing() {
  const dims = [
    { dim: "NAV Quality", higher: "Conservative marks, credible exit comps, recent realizations above carrying value", lower: "Stale marks, optimistic multiples, weak recent exits", icon: "Q" },
    { dim: "Duration / Timing", higher: "Near-term distributions, mature assets, low remaining unfunded", lower: "Long hold duration, uncertain exit path, heavy unfunded", icon: "D" },
    { dim: "Portfolio Quality", higher: "Diversified, stronger companies, high-conviction GP, visible buyers", lower: "Concentrated, weak assets, challenged GP, no clear exit routes", icon: "P" },
    { dim: "Market Technicals", higher: "Competitive buyer market, cheap financing, limited supply", lower: "Forced sellers, expensive financing, risk-off environment", icon: "M" },
  ];

  const colors = ["#2294BD", "#FAA51A", "#D9532B", "#7C5CBF"];

  return (
    <div className="my-3 grid grid-cols-2 gap-2.5">
      {dims.map((d, i) => (
        <div key={i} className="rounded-xl border border-[#E8DDD4] bg-white shadow-sm overflow-hidden">
          <div className="px-4 py-2.5 border-b border-[#E8DDD4] bg-[#FAF8F5] flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${colors[i]}15` }}>
              <span className="text-[10px] font-bold" style={{ color: colors[i] }}>{d.icon}</span>
            </div>
            <p className="text-[11px] font-bold text-[#1A1A1A]">{d.dim}</p>
          </div>
          <div className="p-3 space-y-2">
            <div>
              <div className="flex items-center gap-1 mb-0.5"><div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[5px] border-b-[#2A9D60]" /><span className="text-[9px] font-bold uppercase tracking-wider text-[#2A9D60]">Favors higher price</span></div>
              <p className="text-[10px] text-[#1A1A1A] leading-snug">{d.higher}</p>
            </div>
            <div>
              <div className="flex items-center gap-1 mb-0.5"><div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[5px] border-t-[#D9532B]" /><span className="text-[9px] font-bold uppercase tracking-wider text-[#D9532B]">Favors lower price</span></div>
              <p className="text-[10px] text-[#404040] leading-snug">{d.lower}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
