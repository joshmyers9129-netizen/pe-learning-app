/**
 * LargerPEAllocation
 * What increasing PE allocation demands from an institution.
 * Used in: Day 20 (portfolio construction).
 */
export default function LargerPEAllocation() {
  const rows = [
    { increase: "Higher return-seeking exposure", accept: "Greater dependence on manager selection skill", color: "#2294BD" },
    { increase: "More funded NAV over time", accept: "Slower rebalancing and more denominator-effect risk", color: "#FAA51A" },
    { increase: "More commitments and relationships", accept: "Higher governance load and monitoring burden", color: "#D9532B" },
    { increase: "Higher illiquid allocation weight", accept: "More stress-period allocation drift and fewer adjustment tools", color: "#7C5CBF" },
    { increase: "More capital calls in active years", accept: "Greater liquidity planning discipline and pacing risk", color: "#2A9D60" },
  ];

  return (
    <div className="my-3 space-y-2">
      {rows.map((r, i) => (
        <div key={i} className="rounded-lg border border-[#E8DDD4] bg-white shadow-sm overflow-hidden flex items-stretch">
          <div className="w-1.5 flex-shrink-0" style={{ backgroundColor: r.color }} />
          <div className="flex-1 grid grid-cols-2 divide-x divide-[#E8DDD4]">
            <div className="px-3.5 py-2.5">
              <p className="text-[9px] font-bold uppercase tracking-wider mb-0.5" style={{ color: r.color }}>If PE increases...</p>
              <p className="text-[11px] text-[#1A1A1A] leading-snug font-medium">{r.increase}</p>
            </div>
            <div className="px-3.5 py-2.5 bg-[#FAF8F5]">
              <p className="text-[9px] font-bold uppercase tracking-wider text-[#9A918A] mb-0.5">Must also accept...</p>
              <p className="text-[11px] text-[#404040] leading-snug">{r.accept}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
