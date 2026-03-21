export default function VentureUnderwritingSequence() {
  const rows = [
    { a: "Business model", b: "What kind of company is this really?", c: "Determines the relevant proof points and likely failure modes" },
    { a: "Stage", b: "What evidence should reasonably exist now?", c: "Evidence quality must be judged relative to company maturity" },
    { a: "Risk type", b: "Is the main risk product, go-to-market, regulatory, scientific, or capital intensity?", c: "Changes what manager edge should look like" },
    { a: "Sector overlay", b: "Does the sector add domain-specific complexity?", c: "Helps distinguish real specialist edge from generic pattern recognition" },
    { a: "Portfolio implication", b: "What does this model imply for reserves, duration, and concentration?", c: "Business model shapes fund construction, not just company selection" }
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
              <p className="text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: "#FAA51A" }}>Core question</p>
              <p className="text-[11px] text-[#1A1A1A] leading-snug">{r.b}</p>
            </div>
            <div className="px-3.5 py-2.5">
              <p className="text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: "#6366F1" }}>Why it matters</p>
              <p className="text-[11px] text-[#1A1A1A] leading-snug">{r.c}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
