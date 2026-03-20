/**
 * PESuitability
 * When PE fits vs. doesn't fit a portfolio.
 * Used in: Day 20 (portfolio construction).
 */
export default function PESuitability() {
  const chars = [
    { dim: "Time Horizon", more: "Long-dated or perpetual capital base", less: "Near-term asset-liability matching needs" },
    { dim: "Liquidity Burden", more: "Modest near-term cash demands", less: "Significant recurring payout or liability needs" },
    { dim: "Governance Capacity", more: "Dedicated private markets staff / strong external support", less: "Limited team bandwidth and weak monitoring" },
    { dim: "Tolerance for Drift", more: "Can accept temporary allocation overshoots and valuation lag", less: "Requires frequent precise rebalancing" },
    { dim: "Manager Access", more: "Strong sourcing and re-up discipline", less: "Limited access, mostly commoditized fund exposure" },
  ];

  return (
    <div className="my-3 space-y-2">
      {chars.map((c, i) => (
        <div key={i} className="rounded-lg border border-[#E8DDD4] bg-white shadow-sm overflow-hidden">
          <div className="bg-[#FAF8F5] px-4 py-1.5 border-b border-[#E8DDD4]">
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#404040]">{c.dim}</p>
          </div>
          <div className="grid grid-cols-2 divide-x divide-[#E8DDD4]">
            <div className="px-3.5 py-2.5">
              <div className="flex items-center gap-1.5 mb-1">
                <div className="w-2 h-2 rounded-full bg-[#2A9D60]" />
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#2A9D60]">PE more suitable</span>
              </div>
              <p className="text-[11px] text-[#1A1A1A] leading-snug">{c.more}</p>
            </div>
            <div className="px-3.5 py-2.5">
              <div className="flex items-center gap-1.5 mb-1">
                <div className="w-2 h-2 rounded-full bg-[#D9532B]" />
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#D9532B]">PE less suitable</span>
              </div>
              <p className="text-[11px] text-[#404040] leading-snug">{c.less}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
