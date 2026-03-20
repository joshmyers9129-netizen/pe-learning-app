/**
 * SAFEInferenceMap - Benefits and burdens of SAFE-heavy portfolios.
 */
export default function SAFEInferenceMap() {
  const rows = [
    { feature: "Fast deployment through SAFEs", up: "Better access to early rounds and founder-friendly positioning", concern: "Weak pricing discipline or shallow ownership modeling" },
    { feature: "Consistent use of post-money SAFEs", up: "Better ownership predictability", concern: "Still does not eliminate later dilution and reserve pressure" },
    { feature: "Large unconverted SAFE stack", up: "Exposure to early company formation before formal rounds", concern: "Ownership and cap-table uncertainty may be understated" },
    { feature: "Mixed SAFE and note structures", up: "Flexibility by company context", concern: "Harder portfolio-level modeling and reserve planning" },
    { feature: "Frequent MFN references", up: "Some protection against later term drift", concern: "Signals complexity that must actually be tracked and exercised" },
  ];
  return (
    <div className="my-3 space-y-2">
      {rows.map((r, i) => (
        <div key={i} className="rounded-lg border border-[#E8DDD4] bg-white shadow-sm overflow-hidden">
          <div className="bg-[#FAF8F5] px-4 py-1.5 border-b border-[#E8DDD4]">
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#404040]">{r.feature}</p>
          </div>
          <div className="grid grid-cols-2 divide-x divide-[#E8DDD4]">
            <div className="px-3.5 py-2.5">
              <div className="flex items-center gap-1.5 mb-1"><div className="w-2 h-2 rounded-full bg-[#2A9D60]" /><span className="text-[9px] font-bold uppercase tracking-wider text-[#2A9D60]">Potential upside</span></div>
              <p className="text-[11px] text-[#1A1A1A] leading-snug">{r.up}</p>
            </div>
            <div className="px-3.5 py-2.5">
              <div className="flex items-center gap-1.5 mb-1"><div className="w-2 h-2 rounded-full bg-[#D9532B]" /><span className="text-[9px] font-bold uppercase tracking-wider text-[#D9532B]">Allocator concern</span></div>
              <p className="text-[11px] text-[#404040] leading-snug">{r.concern}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
