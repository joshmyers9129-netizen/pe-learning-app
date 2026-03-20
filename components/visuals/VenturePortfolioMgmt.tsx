/**
 * VenturePortfolioMgmt
 * Two-stage portfolio management map for venture funds.
 * Used in: Day 16 (venture portfolio management).
 */
export default function VenturePortfolioMgmt() {
  const stages = [
    { name: "Initial Check", q: "Did the GP enter the right companies at the right stage and ownership target?", why: "Sourcing and first underwriting set the opportunity set", phase: "selection" },
    { name: "Reserve Design", q: "How much capital was actually held back for follow-ons?", why: "Reserve policy determines how many winners can be defended", phase: "selection" },
    { name: "Follow-On Triage", q: "Which companies receive more capital, and why?", why: "This is where concentration is built or lost", phase: "allocation" },
    { name: "Ownership Defense", q: "Did participation preserve meaningful economics in the winners?", why: "Being right early is not enough without retained ownership", phase: "allocation" },
    { name: "Signaling", q: "What does participation or non-participation communicate to the market?", why: "Follow-on behavior can affect company financing outcomes", phase: "allocation" },
    { name: "Fund Outcome", q: "Did the manager convert selection into ownership-adjusted, realized economics?", why: "Portfolio management is a core driver of venture performance", phase: "allocation" },
  ];

  return (
    <div className="my-3">
      {/* Phase headers */}
      <div className="flex gap-3 mb-3">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-1 rounded-full bg-[#2294BD]" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#2294BD]">Selection Stage</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-1 rounded-full bg-[#D9532B]" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#D9532B]">Capital Allocation Stage</span>
        </div>
      </div>

      <div className="space-y-1.5">
        {stages.map((s, i) => {
          const isSelection = s.phase === "selection";
          const color = isSelection ? "#2294BD" : "#D9532B";
          return (
            <div key={i} className="rounded-lg border border-[#E8DDD4] bg-white shadow-sm overflow-hidden flex items-stretch">
              <div className="w-1.5 flex-shrink-0" style={{ backgroundColor: color }} />
              <div className="w-10 flex-shrink-0 flex items-center justify-center bg-[#FAF8F5] border-r border-[#E8DDD4]">
                <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: `${color}20` }}>
                  <span className="text-[10px] font-bold" style={{ color }}>{i + 1}</span>
                </div>
              </div>
              <div className="flex-1 p-2.5">
                <p className="text-[12px] font-bold text-[#1A1A1A] mb-0.5">{s.name}</p>
                <p className="text-[11px] text-[#404040] leading-snug mb-1">{s.q}</p>
                <p className="text-[10px] text-[#9A918A] italic">{s.why}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
