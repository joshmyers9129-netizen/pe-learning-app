/**
 * RecommendationLanguage - Weak vs. strong phrasing by evidence state.
 */
export default function RecommendationLanguage() {
  const rows = [
    { state: "Broad, realized, coherent", weak: "'Looks attractive'", strong: "'Recommend approval based on realized track record, coherent attribution, and manageable open risks'" },
    { state: "Good but unresolved", weak: "'Probably a strong opportunity'", strong: "'Positive inclination, but approval should depend on resolving X and Y'" },
    { state: "Interesting but thin evidence", weak: "'Would like to stay close to the story'", strong: "'Not ready to approve because realized evidence and repeatability remain insufficient'" },
    { state: "Programme fit is the issue", weak: "'Good manager but perhaps not now'", strong: "'Quality acknowledged, but pacing/vintage/liquidity argue against committing now'" },
  ];
  return (
    <div className="my-3 space-y-2">
      {rows.map((r, i) => (
        <div key={i} className="rounded-lg border border-[#E8DDD4] bg-white shadow-sm overflow-hidden">
          <div className="bg-[#FAF8F5] px-4 py-1.5 border-b border-[#E8DDD4]">
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#404040]">{r.state}</p>
          </div>
          <div className="grid grid-cols-2 divide-x divide-[#E8DDD4]">
            <div className="px-3.5 py-2.5">
              <div className="flex items-center gap-1.5 mb-1"><div className="w-2 h-2 rounded-full bg-[#D9532B]" /><span className="text-[9px] font-bold uppercase tracking-wider text-[#D9532B]">Weak</span></div>
              <p className="text-[11px] text-[#404040] italic leading-snug">{r.weak}</p>
            </div>
            <div className="px-3.5 py-2.5">
              <div className="flex items-center gap-1.5 mb-1"><div className="w-2 h-2 rounded-full bg-[#2A9D60]" /><span className="text-[9px] font-bold uppercase tracking-wider text-[#2A9D60]">Strong</span></div>
              <p className="text-[11px] text-[#1A1A1A] leading-snug">{r.strong}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
