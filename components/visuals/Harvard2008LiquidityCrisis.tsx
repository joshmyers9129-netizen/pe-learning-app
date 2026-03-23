/**
 * Harvard2008LiquidityCrisis
 * Visualizes Harvard Management Company's 2008-2009 liquidity crisis — the endowment
 * decline, simultaneous pressures, forced response, and governance lessons.
 * Used in: Day 50 (Harvard 2008–2009 liquidity crisis).
 */
export default function Harvard2008LiquidityCrisis() {
  const pressures = [
    {
      title: "Public Equities Declined",
      desc: "Liquid base shrank — less to sell",
      icon: "\u2193",
      color: "#D9532B",
    },
    {
      title: "Private Distributions Slowed",
      desc: "No exit markets — GPs couldn't sell portfolio companies",
      icon: "\u23F8",
      color: "#D9532B",
    },
    {
      title: "Capital Calls Continued",
      desc: "Legally binding commitments — must fund regardless of conditions",
      icon: "\u2191",
      color: "#D9532B",
    },
    {
      title: "Spending Obligations Continued",
      desc: "35% of university budget depended on endowment distributions",
      icon: "$",
      color: "#D9532B",
    },
  ];

  const forcedResponses = [
    { action: "Distressed asset sales", detail: "Sold PE/RE stakes at deep discounts on secondary market" },
    { action: "$2.5B emergency bond issuance", detail: "Harvard borrowed against its credit to raise cash" },
    { action: "Hiring freezes", detail: "University-wide freeze on new positions" },
    { action: "Construction delays", detail: "Allston campus expansion halted mid-project" },
  ];

  const governanceLessons = [
    {
      title: "Commitment Pacing",
      desc: "Unfunded commitments must be sized relative to liquid assets, not total portfolio",
    },
    {
      title: "Liquidity Reserves",
      desc: "Maintain cash / liquid buffer sized for worst-case capital call + spending scenarios",
    },
    {
      title: "Spending Smoothing",
      desc: "Distribution rules must account for drawdown scenarios, not just trailing returns",
    },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
        Harvard Endowment — 2008–2009 Liquidity Crisis
      </p>

      {/* Endowment decline */}
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-[#E8DDD4] bg-white p-3 text-center">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-1">
            Pre-Crisis
          </p>
          <p className="text-2xl font-bold text-[#2A9D60]">$37B</p>
          <p className="text-[10px] text-[#9A918A] mt-0.5">June 2008</p>
        </div>
        <div className="rounded-lg border border-[#E8DDD4] bg-white p-3 text-center">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-1">
            Post-Crisis
          </p>
          <p className="text-2xl font-bold text-[#D9532B]">$26B</p>
          <p className="text-[10px] text-[#9A918A] mt-0.5">June 2009 (−30%)</p>
        </div>
      </div>

      {/* 4 simultaneous pressures */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-3">
          4 Simultaneous Pressures
        </p>
        <div className="grid grid-cols-2 gap-2">
          {pressures.map((p, i) => (
            <div
              key={i}
              className="rounded-lg border border-[#D9532B]/20 bg-[#D9532B]/5 p-2.5 text-center"
            >
              <span className="text-lg">{p.icon}</span>
              <p className="text-[11px] font-semibold text-[#1A1A1A] mt-1">
                {p.title}
              </p>
              <p className="text-[10px] text-[#9A918A] mt-0.5">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Forced response */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Forced Response
        </p>
        <div className="space-y-2">
          {forcedResponses.map((r, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-[10px] font-bold text-white bg-[#D9532B] rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-px">
                {i + 1}
              </span>
              <div>
                <p className="text-[11px] font-semibold text-[#1A1A1A]">{r.action}</p>
                <p className="text-[10px] text-[#9A918A]">{r.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Permanent governance lessons */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Permanent Governance Lesson
        </p>
        <p className="text-[10px] text-[#9A918A] mb-3">
          These three must be integrated <span className="font-semibold text-[#404040]">before</span> a crisis arrives:
        </p>
        <div className="flex gap-2">
          {governanceLessons.map((l, i) => (
            <div
              key={i}
              className="flex-1 rounded-lg border border-[#2294BD]/20 bg-[#2294BD]/5 p-2 text-center"
            >
              <p className="text-[11px] font-semibold text-[#2294BD]">{l.title}</p>
              <p className="text-[10px] text-[#9A918A] mt-1">{l.desc}</p>
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
          Private-markets stress is a portfolio-construction problem before it is a
          manager-selection problem — Harvard&apos;s crisis was caused by aggregate
          commitment levels, not bad fund selection.
        </span>
      </div>
    </div>
  );
}
