/**
 * VentureMarkHierarchy
 * Evidence hierarchy for venture marks with signal-strength bars.
 * Used in: Day 15 (venture valuation).
 */
export default function VentureMarkHierarchy() {
  const evidence = [
    { type: "Broad New External Round", strength: 5, signal: "Stronger", question: "What security was issued, and on what terms?" },
    { type: "Structured Round", strength: 3, signal: "Mixed", question: "How much of the price reflects protection rather than common-equity value?" },
    { type: "Inside Round", strength: 2, signal: "Lower independence", question: "How much new information did the round really provide?" },
    { type: "Tender / Secondary Block", strength: 3, signal: "Context-sensitive", question: "What class traded, at what scale, and under what conditions?" },
    { type: "Stale Prior Round", strength: 1, signal: "Weakening", question: "What changed in fundamentals and market context since then?" },
    { type: "409A Update", strength: 2, signal: "Supporting", question: "What does the gap say about preferred versus common economics?" },
  ];

  return (
    <div className="my-3 space-y-2">
      {evidence.map((e, i) => (
        <div key={i} className="rounded-lg border border-[#E8DDD4] bg-white shadow-sm overflow-hidden flex items-stretch">
          {/* Signal strength bars */}
          <div className="w-16 flex-shrink-0 bg-[#FAF8F5] border-r border-[#E8DDD4] flex flex-col items-center justify-center py-2 gap-0.5">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(n => (
                <div key={n} className={`w-1.5 h-4 rounded-sm ${n <= e.strength ? "bg-[#2A9D60]" : "bg-[#E8DDD4]"}`} />
              ))}
            </div>
            <span className="text-[8px] font-bold uppercase tracking-wider text-[#9A918A]">{e.signal}</span>
          </div>
          <div className="flex-1 p-2.5">
            <p className="text-[12px] font-semibold text-[#1A1A1A] mb-1">{e.type}</p>
            <div className="rounded bg-[#2294BD]/6 px-2 py-1">
              <span className="text-[9px] font-bold uppercase tracking-wider text-[#2294BD] mr-1">Ask</span>
              <span className="text-[10px] text-[#404040]">{e.question}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
