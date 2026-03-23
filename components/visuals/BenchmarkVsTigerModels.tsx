/**
 * BenchmarkVsTigerModels
 * Detailed side-by-side comparison of Benchmark Capital vs Tiger Global across
 * 8 dimensions, color-coded by downturn resilience.
 * Used in: Day 39 (contrasting GP models).
 */
export default function BenchmarkVsTigerModels() {
  const dimensions = [
    {
      label: "Partnership Size",
      benchmark: "5–6 equal partners",
      tiger: "Large hierarchy",
      benchmarkWin: true,
    },
    {
      label: "Fund Size",
      benchmark: "$300–500M",
      tiger: "$10B+",
      benchmarkWin: true,
    },
    {
      label: "Deal Pace",
      benchmark: "Selective, few per year",
      tiger: "Hundreds per year",
      benchmarkWin: true,
    },
    {
      label: "Board Involvement",
      benchmark: "Yes, active",
      tiger: "No, minority only",
      benchmarkWin: true,
    },
    {
      label: "Price Discipline",
      benchmark: "High",
      tiger: "Speed over price",
      benchmarkWin: true,
    },
    {
      label: "Governance Rights",
      benchmark: "Full",
      tiger: "Minimal",
      benchmarkWin: true,
    },
    {
      label: "Vintage Concentration",
      benchmark: "Low",
      tiger: "High",
      benchmarkWin: true,
    },
    {
      label: "2022 Outcome",
      benchmark: "Resilient",
      tiger: "Massive write-downs",
      benchmarkWin: true,
    },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
        Benchmark vs Tiger Global — Contrasting Models
      </p>

      {/* Summary cards */}
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-[#E8DDD4] bg-white p-3 text-center">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#2A9D60] mb-1">
            Benchmark Capital
          </p>
          <p className="text-[13px] font-bold text-[#404040]">Concentrated craft</p>
          <p className="text-[10px] text-[#9A918A] mt-0.5">Small fund, deep engagement</p>
        </div>
        <div className="rounded-lg border border-[#E8DDD4] bg-white p-3 text-center">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#D9532B] mb-1">
            Tiger Global
          </p>
          <p className="text-[13px] font-bold text-[#404040]">Scale &amp; speed</p>
          <p className="text-[10px] text-[#9A918A] mt-0.5">Mega-fund, high velocity</p>
        </div>
      </div>

      {/* Detailed comparison */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Head-to-Head Across 8 Dimensions
        </p>
        <div className="space-y-1.5">
          <div className="grid grid-cols-3 gap-2 mb-1">
            <div />
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#2A9D60] text-center">
              Benchmark
            </p>
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#D9532B] text-center">
              Tiger Global
            </p>
          </div>
          {dimensions.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-3 gap-2 items-center py-0.5"
            >
              <p className="text-[11px] font-semibold text-[#404040]">{row.label}</p>
              <p className="text-[11px] text-center text-[#2A9D60] font-medium">
                {row.benchmark}
              </p>
              <p className="text-[11px] text-center text-[#D9532B]">{row.tiger}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Downturn result */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          2022 Downturn Scorecard
        </p>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-md bg-[#2A9D60]/10 px-3 py-2 text-center">
            <p className="text-[11px] font-bold text-[#2A9D60]">Benchmark</p>
            <p className="text-[10px] text-[#404040] mt-0.5">
              Disciplined fund size &amp; governance protected returns
            </p>
          </div>
          <div className="rounded-md bg-[#D9532B]/10 px-3 py-2 text-center">
            <p className="text-[11px] font-bold text-[#D9532B]">Tiger Global</p>
            <p className="text-[10px] text-[#404040] mt-0.5">
              Massive write-downs, ~50% hedge fund loss, vintage concentration exposed
            </p>
          </div>
        </div>
      </div>

      {/* Key insight callout */}
      <div className="rounded-lg bg-[#2294BD]/10 border border-[#2294BD]/30 px-3 py-2.5">
        <span className="text-[9px] font-bold uppercase tracking-wider text-[#2294BD] mr-1.5">
          Key insight
        </span>
        <span className="text-[11px] text-[#404040]">
          Allocators should underwrite the model, not just the returns — fund structure,
          governance philosophy, and vintage discipline predict how a manager performs across
          market cycles.
        </span>
      </div>
    </div>
  );
}
