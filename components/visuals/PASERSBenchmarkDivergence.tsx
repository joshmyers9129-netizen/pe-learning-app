/**
 * PASERSBenchmarkDivergence
 * Shows PA SERS PE portfolio performance against peer benchmark and public market
 * benchmark, highlighting how peer-relative and public-market-relative success diverge.
 * Used in: Day 12 (PA SERS benchmark divergence).
 */
export default function PASERSBenchmarkDivergence() {
  const metrics = [
    { label: "PE Portfolio IRR", value: 16.6, color: "#2294BD", desc: "PA SERS actual return" },
    { label: "Private Peer Benchmark", value: 15.0, color: "#9A918A", desc: "Peer median IRR" },
    { label: "Russell 3000", value: 18.0, color: "#1A1A1A", desc: "Public market alternative" },
  ];

  const maxVal = 22;

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
        PA SERS — Peer vs Public Market Benchmark Divergence
      </p>

      {/* Bar chart */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-3">
          Performance Comparison (IRR)
        </p>
        <div className="space-y-3">
          {metrics.map((m) => (
            <div key={m.label}>
              <div className="flex items-center justify-between mb-1">
                <p className="text-[11px] font-semibold text-[#1A1A1A]">{m.label}</p>
                <p className="text-[13px] font-bold" style={{ color: m.color }}>
                  {m.value.toFixed(1)}%
                </p>
              </div>
              <div className="relative h-5 rounded-full bg-[#E8DDD4] overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{ width: `${(m.value / maxVal) * 100}%`, backgroundColor: m.color }}
                />
              </div>
              <p className="text-[9px] text-[#9A918A] mt-0.5">{m.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-[9px] text-[#9A918A]">0%</span>
          <span className="text-[9px] text-[#9A918A]">{maxVal}%</span>
        </div>
      </div>

      {/* Verdict cards */}
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-[#E8DDD4] bg-white p-3 text-center">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-1">
            vs Peer Benchmark
          </p>
          <p className="text-2xl font-bold text-[#2A9D60]">+1.6%</p>
          <p className="text-[10px] text-[#2A9D60] font-semibold mt-0.5">Outperformed</p>
          <p className="text-[9px] text-[#9A918A] mt-0.5">16.6% vs 15.0%</p>
        </div>
        <div className="rounded-lg border border-[#E8DDD4] bg-white p-3 text-center">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-1">
            vs Public Market
          </p>
          <p className="text-2xl font-bold text-[#D9532B]">&minus;1.4%</p>
          <p className="text-[10px] text-[#D9532B] font-semibold mt-0.5">Underperformed</p>
          <p className="text-[9px] text-[#9A918A] mt-0.5">16.6% vs 18.0%</p>
        </div>
      </div>

      {/* Verdict summary */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Verdict
        </p>
        <div className="space-y-1.5">
          <div className="flex items-start gap-2">
            <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-[#2A9D60]/15 text-[#2A9D60] text-[10px] font-bold flex items-center justify-center">
              &#10003;
            </span>
            <p className="text-[11px] text-[#404040]">
              <span className="font-semibold text-[#1A1A1A]">Peer-relative:</span> PA SERS
              selected above-median managers, beating the private benchmark by 160 bps
            </p>
          </div>
          <div className="flex items-start gap-2">
            <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-[#D9532B]/15 text-[#D9532B] text-[10px] font-bold flex items-center justify-center">
              &#10007;
            </span>
            <p className="text-[11px] text-[#404040]">
              <span className="font-semibold text-[#1A1A1A]">Public-relative:</span> The entire PE
              asset class lagged public equities, so even good manager selection did not compensate
            </p>
          </div>
        </div>
      </div>

      {/* Callout */}
      <div className="rounded-lg bg-[#2294BD]/10 border border-[#2294BD]/30 px-3 py-2.5">
        <span className="text-[9px] font-bold uppercase tracking-wider text-[#2294BD] mr-1.5">
          Key insight
        </span>
        <span className="text-[11px] text-[#404040]">
          Peer-relative success and public-market-relative success are not the same question —
          beating other PE funds does not guarantee beating a passive public equity alternative
        </span>
      </div>
    </div>
  );
}
