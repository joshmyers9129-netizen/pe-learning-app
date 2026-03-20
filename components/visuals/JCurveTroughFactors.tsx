/**
 * JCurveTroughFactors
 * Visual showing factors that deepen vs. shallow the J-curve trough.
 * Used in: Day 5 (J-curve mechanics).
 */
export default function JCurveTroughFactors() {
  const deeper = [
    { factor: "High mgmt fees on committed capital", detail: "$20M/yr drag accumulates before any value creation" },
    { factor: "Slow deployment", detail: "Extends the window of negative net cash flow" },
    { factor: "Early write-downs", detail: "Marks below cost without any realized loss" },
    { factor: "No subscription line", detail: "LP capital called at day zero of each deal" },
  ];
  const shallower = [
    { factor: "Fast deployment", detail: "Compresses the gap between call and value creation" },
    { factor: "High fee offsets", detail: "Transaction fees credited reduce net fee drag" },
    { factor: "Early profitable exits", detail: "DPI builds earlier; even one strong exit changes the IRR trajectory" },
    { factor: "Subscription line use", detail: "Delays LP outflows — improves IRR optics only, not LP economics" },
  ];

  return (
    <div className="my-3 grid grid-cols-2 gap-3">
      {/* Deeper trough */}
      <div className="rounded-xl border border-[#D9532B]/20 bg-white shadow-sm overflow-hidden">
        <div className="bg-gradient-to-r from-[#D9532B] to-[#B8421F] px-4 py-2.5 flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2L14 12H2L8 2Z" fill="white" fillOpacity="0.9"/></svg>
          <span className="text-white text-[11px] font-bold uppercase tracking-wider">Deeper Trough</span>
        </div>
        <div className="divide-y divide-[#E8DDD4]/60">
          {deeper.map((d, i) => (
            <div key={i} className="px-4 py-2.5">
              <p className="text-[12px] font-semibold text-[#1A1A1A] mb-0.5">{d.factor}</p>
              <p className="text-[10px] text-[#9A918A] leading-snug">{d.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Shallower trough */}
      <div className="rounded-xl border border-[#2A9D60]/20 bg-white shadow-sm overflow-hidden">
        <div className="bg-gradient-to-r from-[#2A9D60] to-[#1E7B48] px-4 py-2.5 flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 14L2 4H14L8 14Z" fill="white" fillOpacity="0.9"/></svg>
          <span className="text-white text-[11px] font-bold uppercase tracking-wider">Shallower Trough</span>
        </div>
        <div className="divide-y divide-[#E8DDD4]/60">
          {shallower.map((d, i) => (
            <div key={i} className="px-4 py-2.5">
              <p className="text-[12px] font-semibold text-[#1A1A1A] mb-0.5">{d.factor}</p>
              <p className="text-[10px] text-[#9A918A] leading-snug">{d.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
