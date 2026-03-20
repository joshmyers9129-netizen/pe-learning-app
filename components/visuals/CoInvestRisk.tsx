/**
 * CoInvestRisk
 * Side-by-side comparison of main fund vs. co-invest exposure.
 * Used in: Day 16 (co-investments).
 */
export default function CoInvestRisk() {
  const dims = [
    { dim: "Fee Burden", fund: "Full fund management fee and carry", coinvest: "Typically zero or reduced fee/carry" },
    { dim: "Diversification", fund: "Spread across many portfolio companies", coinvest: "Single-name or small-basket exposure" },
    { dim: "Underwriting Burden", fund: "GP underwrites; LP underwrites GP/fund", coinvest: "LP must underwrite GP and the individual deal" },
    { dim: "Timeline", fund: "Commitment decision over weeks to months", coinvest: "Often days, not weeks" },
    { dim: "Control", fund: "Indirect through fund structure", coinvest: "Still indirect; GP remains sponsor" },
    { dim: "Downside Concentration", fund: "One weak deal diluted by portfolio breadth", coinvest: "One weak deal has direct, visible impact" },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-white shadow-sm overflow-hidden">
      {/* Headers */}
      <div className="grid grid-cols-[140px_1fr_1fr]">
        <div className="bg-[#FAF8F5] px-3 py-2.5 border-r border-b border-[#E8DDD4]" />
        <div className="bg-gradient-to-r from-[#2294BD] to-[#1A7A9E] px-4 py-2.5 border-r border-b border-[#2294BD]/30 flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-white/20 flex items-center justify-center"><span className="text-white text-[10px] font-bold">F</span></div>
          <span className="text-white text-[11px] font-bold uppercase tracking-wider">Main Fund</span>
        </div>
        <div className="bg-gradient-to-r from-[#FAA51A] to-[#E8940A] px-4 py-2.5 border-b border-[#FAA51A]/30 flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-white/20 flex items-center justify-center"><span className="text-white text-[10px] font-bold">C</span></div>
          <span className="text-white text-[11px] font-bold uppercase tracking-wider">Co-Invest</span>
        </div>
      </div>
      {dims.map((d, i) => (
        <div key={i} className={`grid grid-cols-[140px_1fr_1fr] ${i % 2 === 1 ? "bg-[#FAF8F5]" : ""}`}>
          <div className="px-3 py-2.5 border-r border-b border-[#E8DDD4]">
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#404040]">{d.dim}</p>
          </div>
          <div className="px-4 py-2.5 border-r border-b border-[#E8DDD4]">
            <p className="text-[11px] text-[#2A2A2A] leading-snug">{d.fund}</p>
          </div>
          <div className="px-4 py-2.5 border-b border-[#E8DDD4]">
            <p className="text-[11px] text-[#2A2A2A] leading-snug">{d.coinvest}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
