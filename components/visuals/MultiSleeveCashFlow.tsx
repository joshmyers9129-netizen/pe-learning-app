/**
 * MultiSleeveCashFlow
 * Cash-flow profile comparison across four private-markets sleeves.
 * Used in: Day 20 (programme management).
 */
export default function MultiSleeveCashFlow() {
  const sleeves = [
    {
      name: "Buyout",
      call: "Front-loaded J-curve; steady draws over 3–5 years",
      dist: "Returns capital mid-life if exits function",
      duration: "5–8 years",
      stress: "Exits stall in weak M&A markets; distributions slow sharply",
      color: "from-[#2294BD] to-[#1A7A9E]",
      durationPct: 55,
    },
    {
      name: "Venture",
      call: "Drawn over 3–5 years; follow-on reserves extend calls",
      dist: "Back-ended; highly concentrated in a few winners",
      duration: "7–12+ years",
      stress: "Most value stays unrealized; follow-on needs consume liquidity",
      color: "from-[#D9532B] to-[#B8421F]",
      durationPct: 85,
    },
    {
      name: "Private Credit",
      call: "Varies by vehicle — closed-end vs. evergreen vs. specialty",
      dist: "Income-like in normal periods; lumpy in distressed",
      duration: "Short–medium",
      stress: "Refinancing stress slows repayments; evergreen gates reduce access",
      color: "from-[#FAA51A] to-[#E8940A]",
      durationPct: 35,
    },
    {
      name: "Real Estate",
      call: "Depends on vehicle — closed-end vs. open-end core",
      dist: "Open-end: redemption-based; closed-end: exit-driven",
      duration: "Varies widely",
      stress: "Open-end vehicles tighten redemptions; opportunistic exits delay",
      color: "from-[#7C5CBF] to-[#5E3FA3]",
      durationPct: 50,
    },
  ];

  return (
    <div className="my-3 space-y-2.5">
      {sleeves.map((s, i) => (
        <div key={i} className="rounded-xl border border-[#E8DDD4] bg-white shadow-sm overflow-hidden">
          <div className={`bg-gradient-to-r ${s.color} px-4 py-2.5 flex items-center justify-between`}>
            <span className="text-white text-[12px] font-bold tracking-wide">{s.name}</span>
            <span className="text-white/70 text-[10px]">{s.duration} to meaningful DPI</span>
          </div>
          <div className="p-3">
            <div className="grid grid-cols-2 gap-3 mb-2.5">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-wider text-[#9A918A] mb-0.5">Call pattern</p>
                <p className="text-[11px] text-[#1A1A1A] leading-snug">{s.call}</p>
              </div>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-wider text-[#9A918A] mb-0.5">Distribution profile</p>
                <p className="text-[11px] text-[#1A1A1A] leading-snug">{s.dist}</p>
              </div>
            </div>
            {/* Duration bar */}
            <div className="mb-2">
              <div className="h-1.5 bg-[#F5F0EB] rounded-full">
                <div className={`h-full rounded-full bg-gradient-to-r ${s.color} opacity-60`} style={{ width: `${s.durationPct}%` }} />
              </div>
            </div>
            <div className="rounded bg-[#D9532B]/5 border border-[#D9532B]/10 px-2.5 py-1.5">
              <span className="text-[9px] font-bold uppercase tracking-wider text-[#D9532B] mr-1.5">Stress-case risk</span>
              <span className="text-[10px] text-[#404040]">{s.stress}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
