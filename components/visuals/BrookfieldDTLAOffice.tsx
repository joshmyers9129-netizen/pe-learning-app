/**
 * BrookfieldDTLAOffice
 * Visualizes Brookfield DTLA's office defaults — the compounding stress diagram,
 * Gas Company Tower debt structure, and why even a well-capitalized owner walked away.
 * Used in: Day 48 (Brookfield DTLA office defaults).
 */
export default function BrookfieldDTLAOffice() {
  const pressures = [
    {
      title: "Weak Office Demand",
      desc: "Post-COVID remote work permanently reduced occupancy",
      icon: "\u2193",
      color: "#D9532B",
    },
    {
      title: "Declining NOI + Rising Capex",
      desc: "Tenant departures and costly re-leasing drove cash flow negative",
      icon: "$",
      color: "#D9532B",
    },
    {
      title: "Rising Interest Rates",
      desc: "Refinancing became far more expensive than original terms",
      icon: "%",
      color: "#D9532B",
    },
    {
      title: "Approaching Debt Maturities",
      desc: "Extension options not exercised — maturity default triggered",
      icon: "\u23F0",
      color: "#D9532B",
    },
  ];

  const debtStack = [
    { label: "Mortgage", amount: 285, color: "#2294BD" },
    { label: "Mezzanine", amount: 110, color: "#9A918A" },
    { label: "Junior Mezzanine", amount: 70, color: "#D9532B" },
  ];

  const totalDebt = debtStack.reduce((sum, d) => sum + d.amount, 0);

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
        Brookfield DTLA — Office Defaults
      </p>

      {/* Compounding stress diagram */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-3">
          4 Simultaneous Pressures
        </p>
        <div className="grid grid-cols-2 gap-2">
          {pressures.map((p, i) => (
            <div
              key={i}
              className="rounded-lg border border-[#D9532B]/20 bg-[#D9532B]/5 p-2.5 text-center"
            >
              <span className="text-lg">{p.icon}</span>
              <p className="text-[11px] font-semibold text-[#1A1A1A] mt-1">
                {p.title}
              </p>
              <p className="text-[10px] text-[#9A918A] mt-0.5">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-center">
          <div className="rounded-full bg-[#D9532B] px-4 py-1.5">
            <p className="text-[11px] font-bold text-white text-center">
              All 4 hit simultaneously &#x2192; Default
            </p>
          </div>
        </div>
      </div>

      {/* Gas Company Tower debt */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-1">
          Gas Company Tower — Debt Structure
        </p>
        <p className="text-[10px] text-[#9A918A] mb-3">
          Total debt: $465M across three tranches
        </p>
        <div className="space-y-1.5">
          {debtStack.map((d) => (
            <div key={d.label} className="flex items-center gap-2">
              <div className="w-[110px] flex-shrink-0">
                <p className="text-[11px] text-[#404040] font-medium">{d.label}</p>
              </div>
              <div className="flex-1 relative h-5 rounded bg-[#FAF8F5] overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 rounded"
                  style={{
                    width: `${(d.amount / totalDebt) * 100}%`,
                    backgroundColor: d.color,
                  }}
                />
              </div>
              <span className="text-[11px] font-semibold text-[#404040] w-[50px] text-right">
                ${d.amount}M
              </span>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded bg-[#D9532B]/5 px-2 py-1.5">
          <p className="text-[10px] text-[#404040]">
            <span className="font-semibold text-[#D9532B]">Maturity default:</span>{" "}
            Extension option not exercised — Brookfield rationally chose not to inject
            more capital into a declining asset.
          </p>
        </div>
      </div>

      {/* Why Brookfield walked away */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Why a Well-Capitalized Owner Walked Away
        </p>
        <div className="space-y-1.5">
          <div className="flex items-start gap-2">
            <span className="text-[#D9532B] text-xs mt-0.5">&#x2717;</span>
            <p className="text-[11px] text-[#404040]">
              Property value had fallen well below total debt — equity was deeply
              underwater
            </p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-[#D9532B] text-xs mt-0.5">&#x2717;</span>
            <p className="text-[11px] text-[#404040]">
              Future cash flows insufficient to service debt, let alone generate returns
            </p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-[#D9532B] text-xs mt-0.5">&#x2717;</span>
            <p className="text-[11px] text-[#404040]">
              Capex needed to re-lease space would compound losses, not recover them
            </p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-[#2A9D60] text-xs mt-0.5">&#x2713;</span>
            <p className="text-[11px] text-[#404040]">
              Non-recourse structure allowed Brookfield to limit losses to equity invested
            </p>
          </div>
        </div>
      </div>

      {/* Key insight callout */}
      <div className="rounded-lg border-l-4 border-[#2294BD] bg-[#2294BD]/10 px-3 py-2.5">
        <span className="text-[9px] font-bold uppercase tracking-wider text-[#2294BD] mr-1.5">
          Key insight
        </span>
        <span className="text-[11px] text-[#404040]">
          A beautiful building is not a safe investment if cash flow is declining, capital
          needs are rising, and debt maturity is approaching.
        </span>
      </div>
    </div>
  );
}
