/**
 * RecommendationStack
 * Five-layer recommendation checklist shown as stacked layers.
 * Used in: Day 20 (recommendations).
 */
export default function RecommendationStack() {
  const layers = [
    { name: "Performance Quality", q: "What is realized, benchmarked, and credible?", fail: "Headline IRR accepted without testing DPI, PME, or marks", color: "#2294BD" },
    { name: "Return Source", q: "What actually drove returns?", fail: "Market beta or leverage mistaken for repeatable skill", color: "#1A7A9E" },
    { name: "Team & Process Durability", q: "Can this track record plausibly repeat?", fail: "Old performance underwritten to a changed team or larger fund", color: "#FAA51A" },
    { name: "Terms & Alignment", q: "Do economics and governance protect LP outcomes?", fail: "'Market terms' accepted without understanding carry timing or protection gaps", color: "#D9532B" },
    { name: "Programme Fit", q: "Does the commitment improve the total programme?", fail: "Good manager approved in the wrong pacing or vintage context", color: "#7C5CBF" },
  ];

  return (
    <div className="my-3">
      <div className="space-y-0">
        {layers.map((l, i) => (
          <div key={i} className="relative" style={{ marginLeft: `${i * 8}px`, marginRight: `${i * 8}px` }}>
            <div className="rounded-lg border border-[#E8DDD4] bg-white shadow-sm overflow-hidden mb-1.5 flex items-stretch">
              <div className="w-10 flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: l.color }}>
                <span className="text-white text-sm font-bold">{i + 1}</span>
              </div>
              <div className="flex-1 p-2.5">
                <p className="text-[12px] font-bold text-[#1A1A1A] mb-1">{l.name}</p>
                <p className="text-[11px] text-[#404040] leading-snug mb-1.5">{l.q}</p>
                <div className="rounded bg-[#D9532B]/6 border border-[#D9532B]/10 px-2 py-1 inline-block">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#D9532B] mr-1">If skipped:</span>
                  <span className="text-[10px] text-[#404040]">{l.fail}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
