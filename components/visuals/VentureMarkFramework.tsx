export default function VentureMarkFramework() {
  const rows = [
    { a: "Security", b: "What security was priced in the transaction?", c: "The new round may not be economically comparable to the fund\'s stake" },
    { a: "Terms", b: "Did the new investor receive stronger protections?", c: "Headline valuation may overstate common-equity value" },
    { a: "Independence", b: "Was the round broad and externally led, or insider-led and strategic?", c: "Price-discovery quality can vary materially" },
    { a: "Context", b: "What changed in public comps, liquidity conditions, and company fundamentals?", c: "A stale price anchor may no longer be decision-useful" },
    { a: "Translation", b: "How was the event converted into fair value for the fund\'s actual position?", c: "Marks should reflect interpretation, not simple price copying" }
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
              <p className="text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: "#7C5CBF" }}>Allocator question</p>
              <p className="text-[11px] text-[#1A1A1A] leading-snug">{r.b}</p>
            </div>
            <div className="px-3.5 py-2.5">
              <p className="text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: "#FAA51A" }}>Why it matters</p>
              <p className="text-[11px] text-[#1A1A1A] leading-snug">{r.c}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
