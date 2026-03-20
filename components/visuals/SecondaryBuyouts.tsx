/**
 * SecondaryBuyouts - Trade sale vs. SBO comparison.
 */
export default function SecondaryBuyouts() {
  const dims = [
    { dim: "Buyer", trade: "Industrial corporation (strategic)", sbo: "PE fund (financial)" },
    { dim: "Valuation basis", trade: "Standalone value + synergy premium", sbo: "Standalone value only (buyer needs their own return)" },
    { dim: "Multiple premium", trade: "+1–3x EV/EBITDA vs. SBO", sbo: "Baseline" },
    { dim: "GP's DPI timing", trade: "Immediate; cash close", sbo: "Immediate; cash close" },
    { dim: "Signal to LP", trade: "Strategic buyers saw value; GP created strategic interest", sbo: "Financial buyer was best available buyer" },
  ];
  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-white shadow-sm overflow-hidden">
      <div className="grid grid-cols-[130px_1fr_1fr]">
        <div className="bg-[#FAF8F5] px-3 py-2.5 border-r border-b border-[#E8DDD4]" />
        <div className="bg-gradient-to-r from-[#2A9D60] to-[#1E7B48] px-4 py-2.5 border-r border-b border-white/10">
          <span className="text-white text-[11px] font-bold uppercase tracking-wider">Trade Sale</span>
        </div>
        <div className="bg-gradient-to-r from-[#FAA51A] to-[#E8940A] px-4 py-2.5 border-b">
          <span className="text-white text-[11px] font-bold uppercase tracking-wider">Secondary Buyout</span>
        </div>
      </div>
      {dims.map((d, i) => (
        <div key={i} className={`grid grid-cols-[130px_1fr_1fr] ${i % 2 === 1 ? "bg-[#FAF8F5]" : ""}`}>
          <div className="px-3 py-2.5 border-r border-b border-[#E8DDD4]">
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#404040]">{d.dim}</p>
          </div>
          <div className="px-4 py-2.5 border-r border-b border-[#E8DDD4]"><p className="text-[11px] text-[#2A2A2A] leading-snug">{d.trade}</p></div>
          <div className="px-4 py-2.5 border-b border-[#E8DDD4]"><p className="text-[11px] text-[#2A2A2A] leading-snug">{d.sbo}</p></div>
        </div>
      ))}
    </div>
  );
}
