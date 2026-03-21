export default function PrivateCreditMap() {
  const rows = [
    { a: "Direct lending", b: "Sponsor-backed middle-market companies", c: "Cash flow and eventual refinancing or sale", d: "Leverage, documentation weakness, refinance dependence" },
    { a: "Asset-based finance", b: "Borrowers with receivables, inventory, equipment, or contractual assets", c: "Asset cash flows and collateral value", d: "Collateral volatility, servicing, structure complexity" },
    { a: "Distressed / opportunistic", b: "Stressed or dislocated issuers", c: "Restructuring, recovery, control, or repricing", d: "Timing, legal complexity, mark volatility" },
    { a: "Special situations", b: "Companies needing bespoke capital", c: "Contractual return plus negotiated downside protection", d: "Complexity, event risk, deal idiosyncrasy" },
    { a: "Real-estate debt", b: "Property-backed borrowers", c: "Property cash flow, refinance, or asset sale", d: "LTV drift, market liquidity, property fundamentals" },
    { a: "Venture debt", b: "Venture-backed growth companies", c: "New equity financing, cash runway, or strategic event", d: "Equity-market dependence, weak cash-flow support" }
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
              <p className="text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: "#6366F1" }}>Typical borrower / collateral</p>
              <p className="text-[10px] text-[#1A1A1A] leading-snug">{r.b}</p>
            </div>
            <div className="px-3 py-2.5">
              <p className="text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: "#2294BD" }}>Primary repayment source</p>
              <p className="text-[10px] text-[#1A1A1A] leading-snug">{r.c}</p>
            </div>
            <div className="px-3 py-2.5">
              <p className="text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: "#2A9D60" }}>Main allocator risk</p>
              <p className="text-[10px] text-[#1A1A1A] leading-snug">{r.d}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
