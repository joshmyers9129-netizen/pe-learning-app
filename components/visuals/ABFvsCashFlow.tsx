export default function ABFvsCashFlow() {
  const rows = [
    { a: "Primary repayment source", b: "Borrower cash flow plus refinance or sale", c: "Collateral cash conversion, amortization, or asset-level collections" },
    { a: "Main underwriting lens", b: "EBITDA durability, leverage, docs, sponsor", c: "Eligibility rules, advance rates, collateral behavior, servicing, structural triggers" },
    { a: "Main hidden risk", b: "Earnings miss and weaker enterprise value", c: "Fraud, ineligible assets, obligor concentration, servicer failure, weak data, warehouse fragility" },
    { a: "What good reporting looks like", b: "Company operating KPIs and covenant data", c: "Asset-level tape, dilution and loss trends, concentration by obligor, trigger history, servicing metrics" },
    { a: "What manager edge looks like", b: "Origination discipline and sponsor access", c: "Data infrastructure, collateral analytics, workout plumbing, financing access, structural design" }
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
              <p className="text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: "#7C5CBF" }}>Direct lending</p>
              <p className="text-[11px] text-[#1A1A1A] leading-snug">{r.b}</p>
            </div>
            <div className="px-3.5 py-2.5">
              <p className="text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: "#FAA51A" }}>ABF / specialty credit</p>
              <p className="text-[11px] text-[#1A1A1A] leading-snug">{r.c}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
