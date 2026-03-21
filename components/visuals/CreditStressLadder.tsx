export default function CreditStressLadder() {
  const rows = [
    { a: "Early strain", b: "Covenant pressure, weaker coverage, softer collateral performance", c: "Underwriting assumptions are being tested" },
    { a: "Accommodation", b: "Amendments, waivers, PIK, maturity pushes", c: "Reported stability may hide rising risk" },
    { a: "Workout mode", b: "Sponsor negotiation, restructuring, collateral enforcement", c: "Manager skill and legal position become critical" },
    { a: "Resolution", b: "Refinance, sale, restructuring, or loss realization", c: "This is where true recovery economics appear" }
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
              <p className="text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: "#2294BD" }}>What it may look like</p>
              <p className="text-[11px] text-[#1A1A1A] leading-snug">{r.b}</p>
            </div>
            <div className="px-3.5 py-2.5">
              <p className="text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: "#2A9D60" }}>Why allocator should care</p>
              <p className="text-[11px] text-[#1A1A1A] leading-snug">{r.c}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
