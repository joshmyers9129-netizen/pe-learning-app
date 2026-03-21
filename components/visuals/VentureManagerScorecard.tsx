export default function VentureManagerScorecard() {
  const rows = [
    { a: "People", b: "Who really makes decisions, and is the franchise durable beyond a few rainmakers?", c: "Clear accountability, real succession, aligned economics" },
    { a: "Access", b: "Is sourcing differentiated in the actual sectors and stages the fund invests in?", c: "Founder choice and repeatable ecosystem position" },
    { a: "Selection", b: "Does the firm show repeatable judgment rather than narrative hindsight?", c: "Clear decision logic and credible passing discipline" },
    { a: "Construction", b: "Do ownership targets, reserves, and concentration fit the stated strategy?", c: "Ownership-aware, stage-consistent portfolio design" },
    { a: "Value-add", b: "Does the firm help in ways that fit the actual business models?", c: "Sector- and stage-specific support rather than generic platform language" },
    { a: "Outcomes", b: "Do logos convert into retained economics and eventually realized value?", c: "Ownership-adjusted winners and credible monetization" }
  ];
  return (
    <div className="my-3 space-y-2">
      {rows.map((r, i) => (
        <div key={i} className="rounded-lg border border-[#E8DDD4] bg-white shadow-sm overflow-hidden">
          <div className="bg-[#FAF8F5] px-4 py-1.5 border-b border-[#E8DDD4]">
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#404040]">{r.a}</p>
          </div>
          <div className="grid grid-cols-2 divide-x divide-[#E8DDD4]">
            <div className="px-3.5 py-2.5">
              <p className="text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: "#FAA51A" }}>What allocator should test</p>
              <p className="text-[11px] text-[#1A1A1A] leading-snug">{r.b}</p>
            </div>
            <div className="px-3.5 py-2.5">
              <p className="text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: "#6366F1" }}>Strong signal</p>
              <p className="text-[11px] text-[#1A1A1A] leading-snug">{r.c}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
