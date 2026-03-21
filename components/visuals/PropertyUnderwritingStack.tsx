export default function PropertyUnderwritingStack() {
  const rows = [
    { a: "Revenue base", b: "Occupancy, tenant quality, lease duration, rollover timing", c: "Revenue durability is the foundation of the case" },
    { a: "Expense base", b: "Operating costs, taxes, insurance, property management", c: "Optimistic expenses overstate true NOI" },
    { a: "Capital needs", b: "Tenant improvements, leasing commissions, deferred maintenance, recurring capex", c: "Cash available to equity is lower than simple NOI suggests" },
    { a: "Debt service", b: "Rate structure, amortization, covenants, extension tests, reserve requirements", c: "Financing can turn an operating issue into a default issue" },
    { a: "Exit / refinance", b: "Exit cap rate, lender appetite, market liquidity, refinance proceeds", c: "Terminal assumptions often decide whether equity works" }
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
              <p className="text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: "#2294BD" }}>What to test</p>
              <p className="text-[11px] text-[#1A1A1A] leading-snug">{r.b}</p>
            </div>
            <div className="px-3.5 py-2.5">
              <p className="text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: "#2A9D60" }}>Why it matters</p>
              <p className="text-[11px] text-[#1A1A1A] leading-snug">{r.c}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
