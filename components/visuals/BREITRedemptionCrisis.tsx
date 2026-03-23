/**
 * BREITRedemptionCrisis
 * Visualizes the BREIT redemption crisis timeline, the NAV vs market price gap,
 * and the compounding factors that drove the crisis.
 * Used in: Day 47 (BREIT redemption crisis).
 */
export default function BREITRedemptionCrisis() {
  const timeline = [
    { year: "2017", event: "BREIT launched", color: "#2294BD" },
    { year: "Mid-2022", event: "~$70B NAV reached", color: "#2A9D60" },
    { year: "Nov 2022", event: "First month requests exceed 2% cap", color: "#D9532B" },
    { year: "Dec 2022", event: "Redemption pressure continued", color: "#D9532B" },
    { year: "Jan 2023", event: "UC invests $4B backstop", color: "#2294BD" },
    { year: "2024", event: "Redemption queue worked through", color: "#2A9D60" },
  ];

  const compoundingFactors = [
    {
      title: "Appraisal Lag",
      desc: "NAV based on periodic appraisals trails actual market moves by months",
    },
    {
      title: "Wealth Channel Behavior",
      desc: "Individual investors more prone to redeem during uncertainty than institutions",
    },
    {
      title: "Liquidity Mismatch",
      desc: "Illiquid underlying assets paired with periodic liquidity promises",
    },
    {
      title: "Redemption Queue Mechanics",
      desc: "Pro-rata allocation when cap hit creates uncertainty, triggering more requests",
    },
    {
      title: "Sponsor Support Required",
      desc: "Blackstone needed external capital (UC's $4B) to restore confidence",
    },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
        BREIT Redemption Crisis
      </p>

      {/* Timeline */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-3">
          Timeline
        </p>
        <div className="space-y-2">
          {timeline.map((t, i) => (
            <div key={i} className="flex items-center gap-3">
              <span
                className="text-[10px] font-bold w-[72px] flex-shrink-0 text-right"
                style={{ color: t.color }}
              >
                {t.year}
              </span>
              <div
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: t.color }}
              />
              {i < timeline.length - 1 && (
                <div className="absolute ml-[93px] mt-6 w-px h-3 bg-[#E8DDD4]" />
              )}
              <p className="text-[11px] text-[#404040]">{t.event}</p>
            </div>
          ))}
        </div>
      </div>

      {/* NAV vs Market Price gap */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          The Gap That Triggered Concern
        </p>
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="text-center rounded-lg bg-[#2A9D60]/10 p-2">
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-1">
              BREIT Reported NAV
            </p>
            <p className="text-lg font-bold text-[#2A9D60]">Smooth &amp; Stable</p>
            <p className="text-[10px] text-[#9A918A]">Appraisal-based, slow-moving</p>
          </div>
          <div className="text-center rounded-lg bg-[#D9532B]/10 p-2">
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-1">
              Public REIT Prices
            </p>
            <p className="text-lg font-bold text-[#D9532B]">&minus;20-40%</p>
            <p className="text-[10px] text-[#9A918A]">Market-priced, real-time</p>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded bg-[#D9532B]/5 px-2 py-1.5">
          <span className="text-[#D9532B] text-xs font-bold">&#x26A0;</span>
          <p className="text-[10px] text-[#404040]">
            Investors questioned: if public REITs fell 20-40%, why is BREIT&apos;s NAV
            flat? This gap drove redemption requests.
          </p>
        </div>
      </div>

      {/* Endowment size comparison */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-3">
          5 Compounding Factors
        </p>
        <div className="space-y-2">
          {compoundingFactors.map((f, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-[10px] font-bold text-white bg-[#D9532B] rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-px">
                {i + 1}
              </span>
              <div>
                <p className="text-[11px] font-semibold text-[#1A1A1A]">{f.title}</p>
                <p className="text-[10px] text-[#9A918A]">{f.desc}</p>
              </div>
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
          Appraisal-based NAV and market value are not the same thing — smoothing means
          marks are right on average but can be significantly wrong at any given point.
        </span>
      </div>
    </div>
  );
}
