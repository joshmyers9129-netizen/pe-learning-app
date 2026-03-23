/**
 * BCREDRedemptionStress
 * Illustrates BCRED's redemption stress test: the largest semi-liquid private credit
 * fund's experience when redemption requests exceeded the quarterly cap.
 * Used in: Day 46 (BCRED redemption stress).
 */
export default function BCREDRedemptionStress() {
  const comparison = [
    {
      feature: "Liquidity Frequency",
      semiLiquid: "Quarterly",
      closedEnd: "None until exit",
      publicBDC: "Daily (exchange)",
    },
    {
      feature: "Redemption Caps",
      semiLiquid: "~5% NAV / quarter",
      closedEnd: "N/A",
      publicBDC: "N/A (market sale)",
    },
    {
      feature: "Pricing Basis",
      semiLiquid: "Appraised NAV",
      closedEnd: "Appraised NAV",
      publicBDC: "Market price",
    },
    {
      feature: "Investor Base",
      semiLiquid: "Wealth channel",
      closedEnd: "Institutional",
      publicBDC: "Retail / institutional",
    },
  ];

  const diligenceQuestions = [
    "What is the redemption cap level (% of NAV per period)?",
    "What happens when requests exceed the cap — pro-rata, queue, or rejection?",
    "Does the board have discretion to upsize or restrict redemptions?",
    "Will the sponsor provide co-investment or backstop support?",
    "How is NAV determined — frequency, methodology, third-party validation?",
  ];

  const stressSteps = [
    { label: "Requests exceeded 5% cap", icon: "!" },
    { label: "Board upsized to 7% max", icon: "\u2191" },
    { label: "Blackstone + employees invested alongside", icon: "$" },
    { label: "100% of requests honored", icon: "\u2713" },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
        BCRED Redemption Stress Test
      </p>

      {/* BCRED overview */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          BCRED Overview
        </p>
        <div className="grid grid-cols-2 gap-3">
          <div className="text-center">
            <p className="text-lg font-bold text-[#2294BD]">Largest</p>
            <p className="text-[10px] text-[#9A918A]">Semi-liquid private credit fund</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-[#2294BD]">5% NAV</p>
            <p className="text-[10px] text-[#9A918A]">Quarterly repurchase cap</p>
          </div>
        </div>
      </div>

      {/* Stress scenario timeline */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-3">
          Stress Scenario Sequence
        </p>
        <div className="space-y-2">
          {stressSteps.map((step, i) => (
            <div key={i} className="flex items-center gap-2">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 ${
                  i === stressSteps.length - 1 ? "bg-[#2A9D60]" : "bg-[#2294BD]"
                }`}
              >
                {step.icon}
              </div>
              <div className="flex-1 h-px bg-[#E8DDD4]" />
              <p
                className={`text-[11px] flex-shrink-0 ${
                  i === stressSteps.length - 1
                    ? "font-bold text-[#2A9D60]"
                    : "text-[#404040]"
                }`}
              >
                {step.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison table */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Vehicle Comparison
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-[11px]">
            <thead>
              <tr className="border-b border-[#E8DDD4]">
                <th className="text-left py-1.5 pr-2 text-[#9A918A] font-semibold" />
                <th className="text-center py-1.5 px-1 text-[#2294BD] font-semibold">
                  Semi-Liquid
                </th>
                <th className="text-center py-1.5 px-1 text-[#404040] font-semibold">
                  Closed-End
                </th>
                <th className="text-center py-1.5 px-1 text-[#404040] font-semibold">
                  Public BDC
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.feature} className="border-b border-[#E8DDD4]/60">
                  <td className="py-1.5 pr-2 text-[#404040] font-medium">
                    {row.feature}
                  </td>
                  <td className="py-1.5 px-1 text-center text-[#2294BD]">
                    {row.semiLiquid}
                  </td>
                  <td className="py-1.5 px-1 text-center text-[#404040]">
                    {row.closedEnd}
                  </td>
                  <td className="py-1.5 px-1 text-center text-[#404040]">
                    {row.publicBDC}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 5 diligence questions */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          5 Key Diligence Questions
        </p>
        <div className="space-y-1.5">
          {diligenceQuestions.map((q, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-[10px] font-bold text-white bg-[#2294BD] rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-px">
                {i + 1}
              </span>
              <p className="text-[11px] text-[#404040]">{q}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key insight callout */}
      <div className="rounded-lg border-l-4 border-[#2294BD] bg-[#2294BD]/10 px-3 py-2.5">
        <span className="text-[9px] font-bold uppercase tracking-wider text-[#2294BD] mr-1.5">
          Key insight
        </span>
        <span className="text-[11px] text-[#404040]">
          Vehicle design is not peripheral to private credit investing — it defines the
          investor experience during stress.
        </span>
      </div>
    </div>
  );
}
