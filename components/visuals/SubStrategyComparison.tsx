/**
 * SubStrategyComparison
 * Three-card comparison showing how Coupa (buyout), Liftoff (growth equity), and Snowflake (venture/crossover)
 * represent fundamentally different sub-strategies despite all being labeled "technology PE."
 * Used in: Day 7 (sub-strategy differences within PE).
 */
export default function SubStrategyComparison() {
  const deals = [
    {
      company: "Coupa",
      strategy: "Buyout",
      color: "#2294BD",
      sponsor: "Thoma Bravo",
      headline: "$8B take-private (2022)",
      details: [
        "Control deal — 100% acquisition",
        "Operational improvement playbook",
        "Financial engineering via leverage",
        "Predictable cash flow generation",
      ],
    },
    {
      company: "Liftoff",
      strategy: "Growth Equity",
      color: "#2A9D60",
      sponsor: "General Atlantic",
      headline: "Mobile ad-tech investment",
      details: [
        "Minority stake — no control",
        "High-growth company, scaling revenue",
        "Path to profitability thesis",
        "Market expansion as return driver",
      ],
    },
    {
      company: "Snowflake",
      strategy: "Venture / Crossover",
      color: "#7C5CBF",
      sponsor: "Sutter Hill Ventures",
      headline: "Backed from seed stage",
      details: [
        "Classic venture bet from inception",
        "Power-law outcome expectation",
        "Data infrastructure platform play",
        "Multi-round ownership preservation",
      ],
    },
  ];

  const differences = [
    { label: "Ownership", values: ["Control", "Minority", "Early-stage equity"] },
    { label: "Value Lever", values: ["Cost reduction & efficiency", "Revenue growth & scaling", "Power-law returns"] },
    { label: "Cash Flow", values: ["Predictable CF", "Path to profitability", "Cash-burning, pre-profit"] },
  ];

  return (
    <div className="my-3 space-y-3">
      {/* Three deal cards */}
      <div className="grid grid-cols-3 gap-2.5">
        {deals.map((d, i) => (
          <div key={i} className="rounded-xl border border-[#E8DDD4] bg-white shadow-sm overflow-hidden">
            {/* Header */}
            <div
              className="px-3.5 py-2.5 border-b"
              style={{ background: `linear-gradient(135deg, ${d.color}12, ${d.color}06)`, borderColor: `${d.color}25` }}
            >
              <div className="flex items-center gap-2 mb-1">
                <div
                  className="w-5 h-5 rounded-md flex items-center justify-center"
                  style={{ backgroundColor: `${d.color}18` }}
                >
                  <span className="text-[10px] font-bold" style={{ color: d.color }}>
                    {d.strategy[0]}
                  </span>
                </div>
                <span className="text-[9px] font-bold uppercase tracking-wider" style={{ color: d.color }}>
                  {d.strategy}
                </span>
              </div>
              <p className="text-[13px] font-bold text-[#1A1A1A]">{d.company}</p>
              <p className="text-[10px] text-[#404040] mt-0.5">{d.sponsor}</p>
            </div>

            {/* Headline */}
            <div className="px-3.5 py-2 border-b border-[#E8DDD4] bg-[#FAF8F5]">
              <p className="text-[11px] font-semibold text-[#1A1A1A]">{d.headline}</p>
            </div>

            {/* Details */}
            <div className="px-3.5 py-2.5 space-y-1.5">
              {d.details.map((detail, j) => (
                <div key={j} className="flex items-start gap-2">
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-1 flex-shrink-0"
                    style={{ backgroundColor: d.color }}
                  />
                  <p className="text-[11px] text-[#404040] leading-snug">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Key differences row */}
      <div className="rounded-xl border border-[#E8DDD4] bg-white shadow-sm overflow-hidden">
        <div className="px-4 py-2 bg-[#FAF8F5] border-b border-[#E8DDD4]">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#404040]">Key Differences</p>
        </div>
        {differences.map((diff, i) => (
          <div
            key={i}
            className={`grid grid-cols-[100px_1fr_1fr_1fr] ${i % 2 === 1 ? "bg-[#FAF8F5]" : ""} ${i < differences.length - 1 ? "border-b border-[#E8DDD4]" : ""}`}
          >
            <div className="px-3 py-2 border-r border-[#E8DDD4]">
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#404040]">{diff.label}</p>
            </div>
            {diff.values.map((val, j) => (
              <div key={j} className={`px-3 py-2 ${j < 2 ? "border-r border-[#E8DDD4]" : ""}`}>
                <p className="text-[11px] font-medium" style={{ color: deals[j].color }}>
                  {val}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Callout */}
      <div className="rounded-xl border border-[#FAA51A]/25 bg-[#FAA51A]/5 px-4 py-3">
        <div className="flex items-start gap-2.5">
          <div className="w-5 h-5 rounded-full bg-[#FAA51A]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-[#FAA51A] text-[10px] font-bold">!</span>
          </div>
          <p className="text-[11px] text-[#1A1A1A] leading-snug">
            All three are &ldquo;technology PE&rdquo; — but the risk profiles, return drivers, and GP skill
            requirements are completely different. Labeling all three as the same allocation bucket obscures
            more than it reveals.
          </p>
        </div>
      </div>
    </div>
  );
}
