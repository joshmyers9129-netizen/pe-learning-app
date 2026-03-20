/**
 * VentureEdgeChain
 * Chain showing how a venture firm's edge must survive each investment stage.
 * Used in: Day 16 (venture edge evaluation).
 */
export default function VentureEdgeChain() {
  const links = [
    { stage: "Access", q: "Does the firm see attractive deals earlier or on better footing?", weak: "Brand language without evidence on founder choice or opportunity set", color: "#2294BD" },
    { stage: "Selection", q: "Does the firm choose well within that opportunity set?", weak: "Reliance on one or two famous winners without broader process proof", color: "#1A7A9E" },
    { stage: "Ownership", q: "Does the firm buy and preserve enough ownership in winners?", weak: "Good logos, weak retained economics", color: "#FAA51A" },
    { stage: "Reserves", q: "Does follow-on capital go where evidence genuinely improved?", weak: "Broad, defensive optionality instead of concentrated conviction", color: "#D9532B" },
    { stage: "Value-Add", q: "Does the firm help in ways that fit the business model?", weak: "Generic platform language not tied to actual bottlenecks", color: "#7C5CBF" },
    { stage: "Monetization", q: "Does the firm turn company success into realized economics?", weak: "Great marks, weak DPI, vague exit discipline", color: "#2A9D60" },
  ];

  return (
    <div className="my-3">
      {/* Chain visualization */}
      <div className="flex items-center gap-1 mb-4 overflow-x-auto">
        {links.map((l, i) => (
          <div key={i} className="flex items-center flex-shrink-0">
            <div className="rounded-lg px-3 py-1.5 border" style={{ borderColor: `${l.color}40`, backgroundColor: `${l.color}10` }}>
              <p className="text-[10px] font-bold uppercase tracking-wider whitespace-nowrap" style={{ color: l.color }}>{l.stage}</p>
            </div>
            {i < links.length - 1 && (
              <div className="w-4 h-px bg-[#E8DDD4] flex-shrink-0" />
            )}
          </div>
        ))}
      </div>

      {/* Detail cards */}
      <div className="grid grid-cols-2 gap-2">
        {links.map((l, i) => (
          <div key={i} className="rounded-lg border border-[#E8DDD4] bg-white shadow-sm overflow-hidden flex items-stretch">
            <div className="w-1.5 flex-shrink-0" style={{ backgroundColor: l.color }} />
            <div className="flex-1 p-2.5">
              <p className="text-[11px] font-bold mb-1" style={{ color: l.color }}>{l.stage}</p>
              <p className="text-[11px] text-[#1A1A1A] leading-snug mb-1.5">{l.q}</p>
              <div className="rounded bg-[#FAF8F5] px-2 py-1">
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#D9532B] mr-1">Weak signal</span>
                <span className="text-[10px] text-[#404040]">{l.weak}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
