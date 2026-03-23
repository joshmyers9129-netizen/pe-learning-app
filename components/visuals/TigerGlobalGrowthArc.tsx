/**
 * TigerGlobalGrowthArc
 * Timeline of Tiger Global's 2020-2023 boom and bust, with a comparison of
 * the Tiger model vs traditional growth equity investing.
 * Used in: Day 37 (Tiger Global's growth arc).
 */
export default function TigerGlobalGrowthArc() {
  const phases = [
    {
      label: "Rise",
      period: "2020–2021",
      color: "#2A9D60",
      details: [
        "Hundreds of deals closed",
        "PIP 15 raised >$12B",
        "Premium valuations paid",
        "No board seats taken",
      ],
    },
    {
      label: "Peak",
      period: "Late 2021",
      color: "#2294BD",
      details: [
        "Massive paper returns",
        "Aggressive deployment pace",
        "Record fund-raising cycle",
      ],
    },
    {
      label: "Correction",
      period: "2022–2023",
      color: "#D9532B",
      details: [
        "Nasdaq fell ~30%",
        "Public tech multiples compressed 50–70%",
        "Massive portfolio write-downs",
        "~50% hedge fund loss",
      ],
    },
  ];

  const comparison = [
    { dimension: "Deal Pace", tiger: "Hundreds per year", traditional: "Selective, few per year" },
    { dimension: "Governance", tiger: "No board seats", traditional: "Active board involvement" },
    { dimension: "Fund Size", tiger: "$10B+ mega-funds", traditional: "Disciplined sizing" },
    { dimension: "Price Discipline", tiger: "Speed over price", traditional: "Rigorous valuation" },
    { dimension: "Vintage Concentration", tiger: "High (2021 heavy)", traditional: "Diversified across years" },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
        Tiger Global — 2021–2022 Boom &amp; Bust
      </p>

      {/* Timeline phases */}
      <div className="grid grid-cols-3 gap-3">
        {phases.map((phase) => (
          <div
            key={phase.label}
            className="rounded-lg border border-[#E8DDD4] bg-white p-3"
          >
            <div className="flex items-center gap-1.5 mb-2">
              <div
                className="h-2.5 w-2.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: phase.color }}
              />
              <p className="text-[11px] font-bold" style={{ color: phase.color }}>
                {phase.label}
              </p>
            </div>
            <p className="text-[10px] font-semibold text-[#9A918A] mb-1.5">{phase.period}</p>
            <ul className="space-y-1">
              {phase.details.map((d) => (
                <li key={d} className="text-[10px] text-[#404040] leading-tight">
                  • {d}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Comparison table */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Tiger Model vs Traditional Growth Equity
        </p>
        <div className="space-y-1.5">
          <div className="grid grid-cols-3 gap-2 mb-1">
            <div />
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#D9532B] text-center">
              Tiger Model
            </p>
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#2A9D60] text-center">
              Traditional
            </p>
          </div>
          {comparison.map((row) => (
            <div key={row.dimension} className="grid grid-cols-3 gap-2 items-center">
              <p className="text-[11px] font-semibold text-[#404040]">{row.dimension}</p>
              <p className="text-[11px] text-[#D9532B] text-center">{row.tiger}</p>
              <p className="text-[11px] text-[#2A9D60] text-center">{row.traditional}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key insight callout */}
      <div className="rounded-lg bg-[#2294BD]/10 border border-[#2294BD]/30 px-3 py-2.5">
        <span className="text-[9px] font-bold uppercase tracking-wider text-[#2294BD] mr-1.5">
          Key insight
        </span>
        <span className="text-[11px] text-[#404040]">
          Returns alone cannot distinguish between a manager with durable edge and a manager
          whose returns are a leveraged bet on market conditions.
        </span>
      </div>
    </div>
  );
}
