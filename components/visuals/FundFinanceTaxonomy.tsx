/**
 * FundFinanceTaxonomy
 * Side-by-side comparison of subscription lines vs. NAV facilities.
 * Used in: Day 6 (fund finance).
 */
export default function FundFinanceTaxonomy() {
  const dimensions = [
    { dim: "Collateral Source", sub: "Uncalled LP commitments (lender looks 'up' at LPs)", nav: "Unrealized portfolio value (lender looks 'down' at assets)" },
    { dim: "Typical Timing", sub: "Early in fund life, during investment period", nav: "Later in fund life, often when portfolio is mature" },
    { dim: "Primary Use", sub: "Bridge capital calls, smooth deal execution", nav: "Follow-ons, support distributions, extend optionality" },
    { dim: "Leverage Character", sub: "Mainly timing and administrative", nav: "Asset-sensitive leverage with borrowing-base dynamics" },
    { dim: "Performance Effect", sub: "Can boost early IRR by delaying LP cash outflows", nav: "Can alter distribution timing and extend fund duration" },
    { dim: "Covenant Risk", sub: "Generally lower — secured by contractual commitments", nav: "Higher — sensitive to marks, concentration, exits" },
    { dim: "Key Allocator Question", sub: "Does it distort IRR timing materially?", nav: "What economic problem is being solved?" },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-white shadow-sm overflow-hidden">
      {/* Headers */}
      <div className="grid grid-cols-[180px_1fr_1fr]">
        <div className="bg-[#FAF8F5] px-4 py-3 border-r border-b border-[#E8DDD4]" />
        <div className="bg-gradient-to-r from-[#2294BD] to-[#1A7A9E] px-4 py-3 border-r border-b border-[#2294BD]/30">
          <p className="text-white text-[11px] font-bold uppercase tracking-wider">Subscription Facility</p>
          <p className="text-white/70 text-[9px] mt-0.5">Looks up at LPs</p>
        </div>
        <div className="bg-gradient-to-r from-[#7C5CBF] to-[#5E3FA3] px-4 py-3 border-b border-[#7C5CBF]/30">
          <p className="text-white text-[11px] font-bold uppercase tracking-wider">NAV Facility</p>
          <p className="text-white/70 text-[9px] mt-0.5">Looks down at assets</p>
        </div>
      </div>

      {/* Rows */}
      {dimensions.map((d, i) => (
        <div key={i} className={`grid grid-cols-[180px_1fr_1fr] ${i % 2 === 1 ? "bg-[#FAF8F5]" : ""}`}>
          <div className="px-4 py-2.5 border-r border-b border-[#E8DDD4]">
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#404040]">{d.dim}</p>
          </div>
          <div className="px-4 py-2.5 border-r border-b border-[#E8DDD4]">
            <p className="text-[11px] text-[#2A2A2A] leading-snug">{d.sub}</p>
          </div>
          <div className="px-4 py-2.5 border-b border-[#E8DDD4]">
            <p className="text-[11px] text-[#2A2A2A] leading-snug">{d.nav}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
