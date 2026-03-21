export default function TermSheetLayerTwo() {
  const rows = [
    { a: "Anti-dilution", b: "Reprices earlier investors economically when later shares are sold more cheaply", c: "Ownership and economics can shift materially in down rounds" },
    { a: "Pay-to-play", b: "Forces investors to keep funding to preserve rights or economics", c: "Reserve capacity and conviction become binding" },
    { a: "Pro rata / major investor rights", b: "Shapes access to future rounds and information", c: "Rights only matter if usable where it counts" },
    { a: "Protective provisions", b: "Gives consent rights over major actions", c: "Control can move without a simple change in ownership percentage" },
    { a: "Board rights", b: "Determines who can shape company decisions under stress", c: "Governance can matter as much as economics in difficult cases" }
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
              <p className="text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: "#2A9D60" }}>Main function</p>
              <p className="text-[11px] text-[#1A1A1A] leading-snug">{r.b}</p>
            </div>
            <div className="px-3.5 py-2.5">
              <p className="text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: "#D9532B" }}>Why allocator should care</p>
              <p className="text-[11px] text-[#1A1A1A] leading-snug">{r.c}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
