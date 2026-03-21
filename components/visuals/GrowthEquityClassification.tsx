export default function GrowthEquityClassification() {
  const rows = [
    { a: "Core underwriting question", b: "Can this company become a category leader?", c: "Can this proven business compound enough to justify price without control?", d: "Can we improve and exit a controlled asset at attractive leverage-adjusted returns?" },
    { a: "Evidence at entry", b: "Often incomplete, narrative heavy", c: "Revenue proof, cohort evidence, some operating history", d: "Mature financials, diligence depth, control roadmap" },
    { a: "Primary risk", b: "Product and market risk", c: "Growth durability and valuation risk", d: "Leverage, cyclicality, execution under control" },
    { a: "Governance posture", b: "Minority, round-based", c: "Minority or shared-control, rights matter", d: "Control" },
    { a: "Typical mistake", b: "Paying for possibility", c: "Paying too much for quality or overstating influence without control", d: "Assuming leverage and control can solve a weak business" }
  ];
  return (
    <div className="my-3 space-y-2">
      {rows.map((r, i) => (
        <div key={i} className="rounded-lg border border-[#E8DDD4] bg-white shadow-sm overflow-hidden">
          <div className="bg-[#FAF8F5] px-4 py-1.5 border-b border-[#E8DDD4]">
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#404040]">{r.a}</p>
          </div>
          <div className="grid grid-cols-3 divide-x divide-[#E8DDD4]">
            <div className="px-3 py-2.5">
              <p className="text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: "#D9532B" }}>Late-stage venture</p>
              <p className="text-[10px] text-[#1A1A1A] leading-snug">{r.b}</p>
            </div>
            <div className="px-3 py-2.5">
              <p className="text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: "#7C5CBF" }}>Growth equity</p>
              <p className="text-[10px] text-[#1A1A1A] leading-snug">{r.c}</p>
            </div>
            <div className="px-3 py-2.5">
              <p className="text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: "#FAA51A" }}>Buyout</p>
              <p className="text-[10px] text-[#1A1A1A] leading-snug">{r.d}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
