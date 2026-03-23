/**
 * Broadway1740LossWaterfall
 * Visualizes the 1740 Broadway CMBS loss waterfall — how losses climbed from the
 * first-loss B tranche all the way up to AAA-rated bonds.
 * Used in: Day 49 (1740 Broadway CMBS loss waterfall).
 */
export default function Broadway1740LossWaterfall() {
  const capitalStack = [
    { rating: "AAA", pct: 40, loss: true, color: "#D9532B" },
    { rating: "AA", pct: 12, loss: true, color: "#D9532B" },
    { rating: "A", pct: 10, loss: true, color: "#D9532B" },
    { rating: "BBB", pct: 12, loss: true, color: "#D9532B" },
    { rating: "BB", pct: 14, loss: true, color: "#D9532B" },
    { rating: "B", pct: 12, loss: true, color: "#D9532B" },
  ];

  const riskComparison = [
    {
      feature: "Collateral",
      singleAsset: "One property",
      diversified: "50-200+ loans",
    },
    {
      feature: "Concentration Risk",
      singleAsset: "Extreme",
      diversified: "Spread across assets",
    },
    {
      feature: "Tenant Dependency",
      singleAsset: "Single anchor can cause total loss",
      diversified: "No single tenant dominates",
    },
    {
      feature: "AAA Safety",
      singleAsset: "Can take losses",
      diversified: "Very well protected",
    },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
        1740 Broadway — CMBS Loss Waterfall
      </p>

      {/* Capital stack */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-3">
          CMBS Capital Stack — Losses Climbed to AAA
        </p>
        <div className="flex flex-col gap-1">
          {capitalStack.map((tranche, i) => {
            const isFirstLoss = i === capitalStack.length - 1;
            const isAAA = i === 0;
            return (
              <div key={tranche.rating} className="flex items-center gap-2">
                <span
                  className={`text-[11px] font-bold w-[36px] text-right ${
                    isAAA ? "text-[#D9532B]" : "text-[#404040]"
                  }`}
                >
                  {tranche.rating}
                </span>
                <div className="flex-1 relative h-7 rounded overflow-hidden bg-[#FAF8F5]">
                  <div
                    className="absolute inset-y-0 left-0 rounded flex items-center justify-center"
                    style={{
                      width: `${tranche.pct}%`,
                      backgroundColor: tranche.loss ? "#D9532B" : "#2A9D60",
                      minWidth: "60px",
                    }}
                  >
                    <span className="text-[9px] font-bold text-white">
                      {tranche.pct}%
                    </span>
                  </div>
                  {tranche.loss && (
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[9px] text-[#D9532B] font-semibold">
                      {isFirstLoss ? "First loss \u2190" : isAAA ? "Losses reached here \u2191" : "Wiped out"}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-2 flex justify-between text-[9px] text-[#9A918A]">
          <span>&#x2191; Supposedly safest</span>
          <span>First loss &#x2193;</span>
        </div>
      </div>

      {/* What caused it */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          What Caused the Collapse
        </p>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#D9532B] flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs font-bold">1</span>
            </div>
            <div className="flex-1">
              <p className="text-[11px] font-semibold text-[#1A1A1A]">
                Anchor tenant (L Brands) didn&apos;t renew
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-[#9A918A] text-xs">&#x2193;</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#D9532B] flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs font-bold">2</span>
            </div>
            <div className="flex-1">
              <p className="text-[11px] font-semibold text-[#1A1A1A]">
                Occupancy collapsed
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-[#9A918A] text-xs">&#x2193;</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#D9532B] flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs font-bold">3</span>
            </div>
            <div className="flex-1">
              <p className="text-[11px] font-semibold text-[#1A1A1A]">
                Distressed sale price far below mortgage balance
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Single-asset vs diversified comparison */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Single-Asset vs Diversified CMBS
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-[11px]">
            <thead>
              <tr className="border-b border-[#E8DDD4]">
                <th className="text-left py-1.5 pr-2 text-[#9A918A] font-semibold" />
                <th className="text-center py-1.5 px-1 text-[#D9532B] font-semibold">
                  Single-Asset
                </th>
                <th className="text-center py-1.5 px-1 text-[#2A9D60] font-semibold">
                  Diversified
                </th>
              </tr>
            </thead>
            <tbody>
              {riskComparison.map((row) => (
                <tr key={row.feature} className="border-b border-[#E8DDD4]/60">
                  <td className="py-1.5 pr-2 text-[#404040] font-medium">
                    {row.feature}
                  </td>
                  <td className="py-1.5 px-1 text-center text-[#D9532B]">
                    {row.singleAsset}
                  </td>
                  <td className="py-1.5 px-1 text-center text-[#2A9D60]">
                    {row.diversified}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Key insight callout */}
      <div className="rounded-lg border-l-4 border-[#2294BD] bg-[#2294BD]/10 px-3 py-2.5">
        <span className="text-[9px] font-bold uppercase tracking-wider text-[#2294BD] mr-1.5">
          Key insight
        </span>
        <span className="text-[11px] text-[#404040]">
          Credit ratings and capital-stack labels are not substitutes for property-level
          underwriting — when the underlying property fails severely enough, even
          AAA-rated bonds can take losses.
        </span>
      </div>
    </div>
  );
}
