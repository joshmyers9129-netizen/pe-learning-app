/**
 * PEMarksSmoother
 * Side-by-side comparison of public vs. PE valuation characteristics.
 * Used in: Day 12 (valuation).
 */
export default function PEMarksSmoother() {
  const features = [
    { feature: "Pricing Frequency", pub: "Continuous market price", pe: "Quarterly appraisal estimate" },
    { feature: "Primary Basis", pub: "Executed trades", pe: "Modeled fair value using selected inputs" },
    { feature: "Sensitivity to Sentiment", pub: "Immediate", pe: "Delayed and filtered through judgment" },
    { feature: "Volatility Pattern", pub: "Visible in real time", pe: "Smoothed over reporting periods" },
    { feature: "Correlation to Equity Markets", pub: "Observable immediately", pe: "Often understated in short windows because marks lag" },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-white shadow-sm overflow-hidden">
      <div className="grid grid-cols-[160px_1fr_1fr]">
        <div className="bg-[#FAF8F5] px-3 py-2.5 border-r border-b border-[#E8DDD4]" />
        <div className="bg-gradient-to-r from-[#2294BD] to-[#1A7A9E] px-4 py-2.5 border-r border-b border-white/10">
          <span className="text-white text-[11px] font-bold uppercase tracking-wider">Public Equities</span>
        </div>
        <div className="bg-gradient-to-r from-[#404040] to-[#3B3B3B] px-4 py-2.5 border-b">
          <span className="text-white text-[11px] font-bold uppercase tracking-wider">Private Equity NAV</span>
        </div>
      </div>
      {features.map((f, i) => (
        <div key={i} className={`grid grid-cols-[160px_1fr_1fr] ${i % 2 === 1 ? "bg-[#FAF8F5]" : ""}`}>
          <div className="px-3 py-2.5 border-r border-b border-[#E8DDD4]">
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#404040]">{f.feature}</p>
          </div>
          <div className="px-4 py-2.5 border-r border-b border-[#E8DDD4]">
            <p className="text-[11px] text-[#2A2A2A]">{f.pub}</p>
          </div>
          <div className="px-4 py-2.5 border-b border-[#E8DDD4]">
            <p className="text-[11px] text-[#2A2A2A]">{f.pe}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
