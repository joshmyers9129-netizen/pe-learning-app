/**
 * NAVSignalNotVerdict
 * Shows the spectrum from GP Reported NAV to Market Clearing Price,
 * with the interpretive framework for understanding NAV discounts.
 * Used in: Day 17 case study (NBPE discount as signal, not verdict).
 */
export default function NAVSignalNotVerdict() {
  const discountDrivers = [
    { driver: "Illiquidity premium", detail: "Buyer demands compensation for lock-up and uncertainty of exit timing" },
    { driver: "Fee drag", detail: "Market prices in future management fees and carry that reduce net returns" },
    { driver: "Mark uncertainty", detail: "Buyers discount appraisal-based NAVs that lack transaction validation" },
    { driver: "Complexity discount", detail: "Multi-layered fund-of-fund structures reduce transparency" },
  ];

  const interpretations = [
    {
      label: "NAV ≠ Cash Value",
      detail: "Reported NAV is an appraisal estimate, not a liquidation price. It reflects modelled fair value under orderly assumptions, not what you would receive if you sold today.",
      color: "#2294BD",
    },
    {
      label: "Market Applies Structural Haircut",
      detail: "Secondary buyers discount for illiquidity, fees, mark uncertainty, and complexity. The discount is not a verdict on NAV accuracy — it is the price of transferring those risks.",
      color: "#1A7A9E",
    },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
        NAV Discount — Signal, Not Verdict
      </p>

      {/* Spectrum */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-3">
          Valuation Spectrum
        </p>
        <div className="relative">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-bold text-[#2A9D60]">GP Reported NAV</span>
            <span className="text-[10px] font-bold text-[#D9532B]">Market Clearing Price</span>
          </div>
          <div className="relative h-5 rounded-full overflow-hidden bg-gradient-to-r from-[#2A9D60] via-[#FAA51A] to-[#D9532B]">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-[9px] font-bold uppercase tracking-wider drop-shadow">
                Discount Gap
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between mt-1.5">
            <span className="text-[9px] text-[#9A918A]">Appraised fair value</span>
            <span className="text-[9px] text-[#9A918A]">Transaction-tested price</span>
          </div>
        </div>
      </div>

      {/* Wrong vs right interpretation */}
      <div className="rounded-lg border border-[#D9532B]/30 bg-[#D9532B]/5 px-3 py-2.5">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[10px] font-bold text-[#D9532B]">&#10007;</span>
          <span className="text-[11px] font-semibold text-[#D9532B]">Common Misread</span>
        </div>
        <p className="text-[11px] text-[#404040] leading-snug">
          &ldquo;The discount means the NAV is wrong.&rdquo;
        </p>
      </div>
      <div className="rounded-lg border border-[#2A9D60]/30 bg-[#2A9D60]/5 px-3 py-2.5">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[10px] font-bold text-[#2A9D60]">&#10003;</span>
          <span className="text-[11px] font-semibold text-[#2A9D60]">Disciplined Read</span>
        </div>
        <p className="text-[11px] text-[#404040] leading-snug">
          &ldquo;The discount reflects the market pricing illiquidity, uncertainty, and fees — not a correction of the NAV itself.&rdquo;
        </p>
      </div>

      {/* Two disciplined interpretations */}
      <div className="grid grid-cols-2 gap-3">
        {interpretations.map((interp, i) => (
          <div key={i} className="rounded-lg border border-[#E8DDD4] bg-white p-3">
            <div className="flex items-center gap-2 mb-2">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: interp.color }}
              >
                <span className="text-white text-[10px] font-bold">{i + 1}</span>
              </div>
              <p className="text-[11px] font-bold text-[#1A1A1A]">{interp.label}</p>
            </div>
            <p className="text-[10px] text-[#9A918A] leading-snug">{interp.detail}</p>
          </div>
        ))}
      </div>

      {/* Discount drivers */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          What the Discount Actually Prices
        </p>
        <div className="space-y-1.5">
          {discountDrivers.map((d, i) => (
            <div key={i} className={`rounded-md px-3 py-2 ${i % 2 === 0 ? "bg-[#FAF8F5]" : "bg-white"}`}>
              <p className="text-[11px] font-semibold text-[#1A1A1A]">{d.driver}</p>
              <p className="text-[10px] text-[#9A918A] leading-snug mt-0.5">{d.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key insight */}
      <div className="rounded-lg bg-[#2294BD]/10 border border-[#2294BD]/30 px-3 py-2.5">
        <span className="text-[9px] font-bold uppercase tracking-wider text-[#2294BD] mr-1.5">
          Key insight
        </span>
        <span className="text-[11px] text-[#404040]">
          Use discounts and secondary pricing as external stress tests on mark credibility — the gap between NAV and market price tells you what the market charges for structural uncertainty, not what the GP got wrong
        </span>
      </div>
    </div>
  );
}
