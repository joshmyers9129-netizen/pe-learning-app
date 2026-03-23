/**
 * SmoothMarksGovernance
 * Shows how smooth marks create governance blind spots, with HarbourVest
 * discount example and risk ladder.
 * Used in: Day 18 case study (smooth marks and governance problems).
 */
export default function SmoothMarksGovernance() {
  const paradoxSteps = [
    { step: "Smooth Marks", detail: "Quarterly appraisals lag reality, dampen volatility", icon: "1" },
    { step: "Lower Reported Volatility", detail: "Portfolio appears stable relative to public markets", icon: "2" },
    { step: "False Comfort", detail: "Board and CIO see benign risk metrics", icon: "3" },
    { step: "Governance Blind Spots", detail: "Real risks accumulate unnoticed until they crystallise", icon: "4" },
  ];

  const riskLadder = [
    { risk: "Paper Stability", detail: "Smooth marks mask drawdowns that public markets would surface immediately", severity: "Low visibility", color: "#FAA51A" },
    { risk: "Denominator Risk", detail: "Stable PE marks inflate PE share when public assets fall, breaching allocation limits", severity: "Moderate", color: "#FAA51A" },
    { risk: "Opportunity Cost", detail: "Inability to rebalance because marks don't reflect real market conditions", severity: "Moderate-high", color: "#D9532B" },
    { risk: "Governance Stress", detail: "Board discovers true risk only when exits disappoint or secondaries reprice", severity: "High", color: "#D9532B" },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
        Smooth Marks — The Governance Paradox
      </p>

      {/* Smoothing paradox flow */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-3">
          The Smoothing Paradox
        </p>
        <div className="flex items-center gap-1">
          {paradoxSteps.map((s, i) => (
            <div key={i} className="flex-1 flex items-center">
              <div className="flex-1 rounded-lg border border-[#E8DDD4] bg-[#FAF8F5] p-2 text-center">
                <div
                  className="w-6 h-6 rounded-full mx-auto mb-1.5 flex items-center justify-center"
                  style={{
                    backgroundColor: i === 0 ? "#2A9D60" : i === 1 ? "#FAA51A" : i === 2 ? "#D9532B" : "#991B1B",
                  }}
                >
                  <span className="text-white text-[10px] font-bold">{s.icon}</span>
                </div>
                <p className="text-[10px] font-bold text-[#1A1A1A] leading-tight">{s.step}</p>
                <p className="text-[9px] text-[#9A918A] leading-snug mt-0.5">{s.detail}</p>
              </div>
              {i < paradoxSteps.length - 1 && (
                <span className="text-[#9A918A] text-xs font-bold mx-0.5 flex-shrink-0">&rarr;</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* HarbourVest discount example */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Market vs Appraisal Divergence — HarbourVest Global
        </p>
        <div className="grid grid-cols-3 gap-3 mb-2">
          <div className="rounded-md border border-[#E8DDD4] bg-[#FAF8F5] p-2 text-center">
            <p className="text-[9px] font-bold uppercase tracking-wider text-[#9A918A] mb-1">GP NAV</p>
            <p className="text-lg font-bold text-[#2A9D60]">100</p>
            <p className="text-[9px] text-[#9A918A]">Reported</p>
          </div>
          <div className="rounded-md border border-[#E8DDD4] bg-[#FAF8F5] p-2 text-center">
            <p className="text-[9px] font-bold uppercase tracking-wider text-[#9A918A] mb-1">Market Price</p>
            <p className="text-lg font-bold text-[#D9532B]">~55</p>
            <p className="text-[9px] text-[#9A918A]">~45% discount</p>
          </div>
          <div className="rounded-md border border-[#D9532B]/30 bg-[#D9532B]/5 p-2 text-center">
            <p className="text-[9px] font-bold uppercase tracking-wider text-[#D9532B] mb-1">Gap</p>
            <p className="text-lg font-bold text-[#D9532B]">~45%</p>
            <p className="text-[9px] text-[#D9532B]">Discount to NAV</p>
          </div>
        </div>
        <div className="relative h-4 rounded-full bg-[#2A9D60] overflow-hidden">
          <div
            className="absolute inset-y-0 right-0 rounded-r-full bg-[#D9532B]"
            style={{ width: "45%" }}
          />
          <div className="absolute inset-0 flex items-center justify-between px-2">
            <span className="text-white text-[8px] font-bold">NAV</span>
            <span className="text-white text-[8px] font-bold">Market discount</span>
          </div>
        </div>
      </div>

      {/* Risk ladder */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Risk Ladder — From Paper Stability to Governance Stress
        </p>
        <div className="space-y-0">
          {riskLadder.map((r, i) => (
            <div key={i} className="flex items-stretch">
              <div className="w-10 flex-shrink-0 flex items-center justify-center border-r border-[#E8DDD4]">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: r.color }}
                >
                  <span className="text-white text-[10px] font-bold">{i + 1}</span>
                </div>
              </div>
              <div className={`flex-1 px-3 py-2.5 border-b border-[#E8DDD4] ${i % 2 === 0 ? "bg-[#FAF8F5]" : "bg-white"}`}>
                <div className="flex items-center gap-2 mb-0.5">
                  <p className="text-[11px] font-semibold text-[#1A1A1A]">{r.risk}</p>
                  <span
                    className="text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full"
                    style={{ backgroundColor: `${r.color}15`, color: r.color }}
                  >
                    {r.severity}
                  </span>
                </div>
                <p className="text-[10px] text-[#9A918A] leading-snug">{r.detail}</p>
              </div>
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
          Smooth marks reduce noise on paper but don&apos;t eliminate real portfolio risks — boards that rely on reported volatility for comfort may not see concentration, liquidity, or denominator problems until they materialise
        </span>
      </div>
    </div>
  );
}
