/**
 * StrongVsWeakEvidence
 * Evidence grading framework with strength indicators.
 * Used in: Day 13 (manager evaluation).
 */
export default function StrongVsWeakEvidence() {
  const dims = [
    { dim: "Realized Depth", strong: "DPI ≥ 0.8x at year 7+; majority of value confirmed in cash", weak: "DPI < 0.5x at year 6+; performance is mostly interim GP marks" },
    { dim: "Return Distribution", strong: "Top 3 deals < 30% of fund value; consistent returns across 6+ exits", weak: "Top 2–3 deals > 60% of value; headline driven by 1–2 outliers" },
    { dim: "Edge Coherence", strong: "Claimed operational edge appears in EBITDA margins at exit; sourcing verifiable through deal logs", weak: "Claimed edge not visible in exit data; multiple expansion and leverage explain most returns" },
    { dim: "Fund-Size Continuity", strong: "Track record built at similar fund size and market segment as new fund", weak: "Track record at $500M; now raising $3B — different competitive market" },
    { dim: "Vintage Consistency", strong: "Multiple realized funds with similar return profiles across different market conditions", weak: "One strong fund; other vintages weaker or not disclosed" },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-white shadow-sm overflow-hidden">
      {dims.map((d, i) => (
        <div key={i} className={`${i > 0 ? "border-t border-[#E8DDD4]" : ""}`}>
          <div className="bg-gradient-to-r from-[#3B3B3B] to-[#4A4A4A] px-4 py-1.5">
            <p className="text-[10px] font-bold uppercase tracking-wider text-white/90">{d.dim}</p>
          </div>
          <div className="grid grid-cols-2 divide-x divide-[#E8DDD4]">
            <div className="px-3.5 py-2.5">
              <div className="flex items-center gap-1.5 mb-1">
                <div className="flex gap-0.5">
                  {[1,2,3,4].map(n => <div key={n} className="w-1.5 h-3 rounded-sm bg-[#2A9D60]" />)}
                </div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#2A9D60]">Strong</span>
              </div>
              <p className="text-[11px] text-[#1A1A1A] leading-snug">{d.strong}</p>
            </div>
            <div className="px-3.5 py-2.5">
              <div className="flex items-center gap-1.5 mb-1">
                <div className="flex gap-0.5">
                  {[1,2,3,4].map(n => <div key={n} className={`w-1.5 h-3 rounded-sm ${n <= 1 ? "bg-[#D9532B]" : "bg-[#E8DDD4]"}`} />)}
                </div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#D9532B]">Weak</span>
              </div>
              <p className="text-[11px] text-[#404040] leading-snug">{d.weak}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
