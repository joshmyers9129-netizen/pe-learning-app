/**
 * StripeValuationReset
 * Charts Stripe's valuation journey from $95B peak through the $50B reset
 * and partial recovery to ~$65B+, alongside public comparable compression.
 * Used in: Day 33 (venture marks and price-discovery gaps).
 */
export default function StripeValuationReset() {
  const valuationPoints = [
    { date: "Mar 2021", value: 95, label: "$95B", color: "#2A9D60", note: "Peak private round" },
    { date: "Mar 2023", value: 50, label: "$50B", color: "#D9532B", note: "409A / tender mark" },
    { date: "Early 2024", value: 65, label: "~$65B+", color: "#2294BD", note: "Recovery via secondary" },
  ];

  const comparables = [
    { name: "Adyen", decline: 70 },
    { name: "PayPal", decline: 65 },
    { name: "Block (Square)", decline: 60 },
  ];

  const maxVal = 95;

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
        Stripe — Valuation Journey ($95B → $50B → $65B+)
      </p>

      {/* Three key data points */}
      <div className="grid grid-cols-3 gap-3">
        {valuationPoints.map((p) => (
          <div
            key={p.date}
            className="rounded-lg border border-[#E8DDD4] bg-white p-3 text-center"
          >
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-1">
              {p.date}
            </p>
            <p className="text-xl font-bold" style={{ color: p.color }}>
              {p.label}
            </p>
            <p className="text-[9px] text-[#9A918A] mt-0.5">{p.note}</p>
          </div>
        ))}
      </div>

      {/* Valuation bar chart */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-3">
          Valuation Timeline
        </p>
        <div className="space-y-2">
          {valuationPoints.map((p) => (
            <div key={p.date} className="flex items-center gap-2">
              <div className="w-[80px] flex-shrink-0">
                <p className="text-[11px] font-semibold text-[#404040]">{p.date}</p>
              </div>
              <div className="flex-1 relative h-5 rounded bg-[#FAF8F5]">
                <div
                  className="absolute inset-y-0 left-0 rounded"
                  style={{
                    width: `${(p.value / maxVal) * 100}%`,
                    backgroundColor: p.color,
                  }}
                />
              </div>
              <span
                className="text-[11px] font-semibold w-[48px] text-right"
                style={{ color: p.color }}
              >
                {p.label}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-2 flex items-center justify-center gap-1">
          <span className="text-[9px] text-[#D9532B] font-semibold">▼ 47%</span>
          <span className="text-[9px] text-[#9A918A]">peak to trough</span>
        </div>
      </div>

      {/* Public comparable compression */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Public Comparable Compression (2021–2023)
        </p>
        <div className="space-y-2">
          {comparables.map((c) => (
            <div key={c.name} className="flex items-center gap-2">
              <div className="w-[100px] flex-shrink-0">
                <p className="text-[11px] text-[#404040]">{c.name}</p>
              </div>
              <div className="flex-1 relative h-5 rounded bg-[#FAF8F5]">
                <div
                  className="absolute inset-y-0 left-0 rounded bg-[#D9532B]"
                  style={{ width: `${c.decline}%` }}
                />
              </div>
              <span className="text-[11px] font-semibold w-[40px] text-right text-[#D9532B]">
                –{c.decline}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Mark gap note */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-1">
          The Mark Gap
        </p>
        <p className="text-[11px] text-[#404040]">
          Between 2021 and 2023, no priced transaction occurred for Stripe. Portfolio marks were
          inferential — based on public comparables, revenue multiples, and fund-level policies —
          not actual price discovery. The market moved months before marks reflected it.
        </p>
      </div>

      {/* Callout */}
      <div className="rounded-lg bg-[#2294BD]/10 border border-[#2294BD]/30 px-3 py-2.5">
        <span className="text-[9px] font-bold uppercase tracking-wider text-[#2294BD] mr-1.5">
          Key insight
        </span>
        <span className="text-[11px] text-[#404040]">
          Venture marks can lag reality by 12–18 months when no price-discovery event occurs.
        </span>
      </div>
    </div>
  );
}
