/**
 * VentureVsBuyout
 * Side-by-side contrast panels showing how allocator instincts must shift.
 * Used in: Day 14 (venture capital).
 */
export default function VentureVsBuyout() {
  const dimensions = [
    {
      dim: "Return Driver",
      buyout: "Broad portfolio quality; operational improvement across many holdings",
      venture: "A small number of extreme winners dominate total value",
      implication: "Evaluating average company quality misses the real economics",
    },
    {
      dim: "Hit Rate",
      buyout: "Higher hit rate generally means better fund",
      venture: "High hit rate of modest wins can still produce mediocre outcomes",
      implication: "Must ask how many companies can return the fund, not just how many survived",
    },
    {
      dim: "Construction Logic",
      buyout: "Concentrated positions; deep ownership in each",
      venture: "Enough names to find outliers; enough ownership to capture them",
      implication: "Too many names dilutes; too few creates fragile dependence",
    },
    {
      dim: "Evidence Standard",
      buyout: "Operating bridges, EBITDA growth, leverage paydown",
      venture: "Value concentration in top 1–5 names; ownership preservation; reserve effectiveness",
      implication: "Smooth attribution is rare — look for outlier capture evidence",
    },
    {
      dim: "Reserve / Follow-On",
      buyout: "Reserves for bolt-ons and operational support",
      venture: "Reserves are critical for maintaining ownership in breakout winners",
      implication: "Poor reserve discipline can turn a great pick into an immaterial outcome",
    },
    {
      dim: "Median Outcome",
      buyout: "Median company often informative about fund quality",
      venture: "Median company can be mediocre even in a top-performing fund",
      implication: "Fund evaluation must focus on the tails, not the middle",
    },
  ];

  return (
    <div className="my-3 space-y-2">
      {dimensions.map((d, i) => (
        <div key={i} className="rounded-xl border border-[#E8DDD4] bg-white shadow-sm overflow-hidden">
          {/* Dimension label */}
          <div className="px-4 py-1.5 bg-[#FAF8F5] border-b border-[#E8DDD4]">
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#404040]">{d.dim}</p>
          </div>

          <div className="grid grid-cols-2 divide-x divide-[#E8DDD4]">
            {/* Buyout instinct */}
            <div className="p-3">
              <div className="flex items-center gap-1.5 mb-1.5">
                <div className="w-3 h-0.5 rounded-full bg-[#2294BD]" />
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#2294BD]">Buyout instinct</span>
              </div>
              <p className="text-[11px] text-[#404040] leading-snug">{d.buyout}</p>
            </div>

            {/* Venture reality */}
            <div className="p-3">
              <div className="flex items-center gap-1.5 mb-1.5">
                <div className="w-3 h-0.5 rounded-full bg-[#D9532B]" />
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#D9532B]">Venture reality</span>
              </div>
              <p className="text-[11px] text-[#404040] leading-snug">{d.venture}</p>
            </div>
          </div>

          {/* Implication */}
          <div className="px-4 py-2 bg-[#2294BD]/5 border-t border-[#2294BD]/10">
            <span className="text-[9px] font-bold uppercase tracking-wider text-[#2294BD] mr-1.5">Why it matters</span>
            <span className="text-[10px] text-[#1A1A1A] leading-snug">{d.implication}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
