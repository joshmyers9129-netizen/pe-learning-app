export default function DirectLendingUnderwriting() {
  const rows = [
    { a: "Business quality", b: "Revenue durability, margins, cash conversion, customer concentration", c: "Growth story without proof of resilient free cash flow" },
    { a: "Leverage", b: "Debt burden versus realistic EBITDA and cash interest", c: "Reliance on adjusted EBITDA to make leverage look safer" },
    { a: "Collateral / enterprise value", b: "Recovery path if the company misses plan", c: "Thin tangible collateral and optimistic valuation support" },
    { a: "Sponsor behavior", b: "Incentive to support versus preserve equity optionality", c: "Aggressive leverage, weak docs, refinance-at-all-costs mentality" },
    { a: "Documentation", b: "Ability to intervene early and prevent leakage", c: "Loose baskets, weak reporting, covenant-lite drift" },
    { a: "Exit path", b: "Sale, refinance, or de-leveraging that returns principal", c: "Heavy dependence on future market reopening" }
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
              <p className="text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: "#2A9D60" }}>What the lender is really testing</p>
              <p className="text-[11px] text-[#1A1A1A] leading-snug">{r.b}</p>
            </div>
            <div className="px-3.5 py-2.5">
              <p className="text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: "#D9532B" }}>What weak underwriting looks like</p>
              <p className="text-[11px] text-[#1A1A1A] leading-snug">{r.c}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
