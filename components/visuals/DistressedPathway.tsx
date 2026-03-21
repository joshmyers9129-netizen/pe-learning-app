export default function DistressedPathway() {
  const rows = [
    { a: "Early strain", b: "Coverage weakens, covenants tighten, liquidity shrinks", c: "Documentation and speed of lender response" },
    { a: "Accommodation", b: "Amend and extend, PIK toggles, covenant resets, rescue capital", c: "Negotiating leverage and sponsor incentives" },
    { a: "Liability management", b: "Exchange offers, uptiers, drop-downs, debt repricing", c: "Intercreditor rules, blocker language, lender cohesion" },
    { a: "Formal restructuring", b: "Out-of-court exchange or bankruptcy process", c: "Legal skill, fulcrum positioning, process speed" },
    { a: "Control / recovery", b: "Debt-for-equity, DIP, exit financing, asset sale", c: "Operational capability and recovery discipline" }
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
              <p className="text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: "#D9532B" }}>What it looks like</p>
              <p className="text-[11px] text-[#1A1A1A] leading-snug">{r.b}</p>
            </div>
            <div className="px-3.5 py-2.5">
              <p className="text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: "#7C5CBF" }}>What determines the outcome</p>
              <p className="text-[11px] text-[#1A1A1A] leading-snug">{r.c}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
