/**
 * GoodTechnologyWaterfall
 * Illustrates how a $425M acquisition by BlackBerry produced near-zero returns
 * for common shareholders due to $290M+ in cumulative liquidation preferences.
 * Used in: Day 31 (preference stacks and waterfall mechanics).
 */
export default function GoodTechnologyWaterfall() {
  const waterfallSteps = [
    { label: "Series D Preferred", amount: 110, cumulative: 110, color: "#D9532B" },
    { label: "Series C Preferred", amount: 95, cumulative: 205, color: "#D9532B" },
    { label: "Series B Preferred", amount: 50, cumulative: 255, color: "#D9532B" },
    { label: "Series A Preferred", amount: 35, cumulative: 290, color: "#D9532B" },
    { label: "Remaining to Common", amount: 135, cumulative: 425, color: "#2A9D60" },
  ];

  const maxAmount = 425;

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
        Good Technology → BlackBerry — $425M Acquisition Waterfall (2015)
      </p>

      {/* Exit headline */}
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-[#E8DDD4] bg-white p-3 text-center">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-1">
            Total Exit
          </p>
          <p className="text-2xl font-bold text-[#2294BD]">$425M</p>
          <p className="text-[10px] text-[#9A918A] mt-0.5">Acquisition by BlackBerry</p>
        </div>
        <div className="rounded-lg border border-[#E8DDD4] bg-white p-3 text-center">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-1">
            Cumulative Preferences
          </p>
          <p className="text-2xl font-bold text-[#D9532B]">$290M+</p>
          <p className="text-[10px] text-[#9A918A] mt-0.5">Paid before common holders</p>
        </div>
      </div>

      {/* 3-step simplified waterfall */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-3">
          Preference Stack Waterfall
        </p>
        <div className="space-y-2">
          {waterfallSteps.map((step) => (
            <div key={step.label} className="flex items-center gap-2">
              <div className="w-[130px] flex-shrink-0">
                <p className="text-[11px] text-[#404040]">{step.label}</p>
              </div>
              <div className="flex-1 relative h-5 rounded bg-[#FAF8F5]">
                <div
                  className="absolute inset-y-0 left-0 rounded"
                  style={{
                    width: `${(step.amount / maxAmount) * 100}%`,
                    backgroundColor: step.color,
                  }}
                />
              </div>
              <span className="text-[11px] font-semibold w-[48px] text-right text-[#404040]">
                ${step.amount}M
              </span>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2 px-[138px]">
          <span className="text-[9px] text-[#9A918A]">$0</span>
          <span className="text-[9px] text-[#9A918A]">$425M</span>
        </div>
      </div>

      {/* Common holder comparison */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Common Shareholder Outcome
        </p>
        <div className="grid grid-cols-2 gap-3">
          <div className="text-center">
            <p className="text-[10px] text-[#9A918A] mb-0.5">Expected per Share</p>
            <p className="text-lg font-bold text-[#2A9D60]">~$20+</p>
            <p className="text-[9px] text-[#9A918A]">Based on headline valuation</p>
          </div>
          <div className="text-center">
            <p className="text-[10px] text-[#9A918A] mb-0.5">Actual per Share</p>
            <p className="text-lg font-bold text-[#D9532B]">~$4</p>
            <p className="text-[9px] text-[#9A918A]">After preference stack</p>
          </div>
        </div>
      </div>

      {/* Callout */}
      <div className="rounded-lg bg-[#2294BD]/10 border border-[#2294BD]/30 px-3 py-2.5">
        <span className="text-[9px] font-bold uppercase tracking-wider text-[#2294BD] mr-1.5">
          Key insight
        </span>
        <span className="text-[11px] text-[#404040]">
          A $425 million exit can deliver near-zero to common when preference stacks grow with each financing round.
        </span>
      </div>
    </div>
  );
}
