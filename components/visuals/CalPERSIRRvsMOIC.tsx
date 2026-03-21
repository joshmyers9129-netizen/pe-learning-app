/**
 * CalPERSIRRvsMOIC
 * Side-by-side comparison showing why IRR and MOIC can tell different stories,
 * illustrated with two hypothetical fund examples and a CalPERS data point.
 * Used in: Day 5 (multiples, IRR mechanics & measurement pitfalls).
 */
export default function CalPERSIRRvsMOIC() {
  const funds = [
    {
      name: "Fund A",
      subtitle: "Speed-optimized",
      irr: "22%",
      moic: "1.4x",
      irrBar: 88,
      moicBar: 47,
      irrColor: "bg-[#2A9D60]",
      moicColor: "bg-[#FAA51A]",
      explanation: "Returned capital fast — short hold periods inflate IRR",
      border: "border-[#2A9D60]/30",
      bg: "bg-[#2A9D60]/5",
    },
    {
      name: "Fund B",
      subtitle: "Value-optimized",
      irr: "15%",
      moic: "2.1x",
      irrBar: 60,
      moicBar: 84,
      irrColor: "bg-[#FAA51A]",
      moicColor: "bg-[#2A9D60]",
      explanation: "Held longer but created substantially more total value",
      border: "border-[#2294BD]/30",
      bg: "bg-[#2294BD]/5",
    },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
        IRR vs MOIC — Why They Tell Different Stories
      </p>

      {/* Fund comparison */}
      <div className="grid grid-cols-2 gap-3">
        {funds.map((f) => (
          <div key={f.name} className={`rounded-lg border ${f.border} ${f.bg} p-3`}>
            <p className="text-[12px] font-bold text-[#1A1A1A]">{f.name}</p>
            <p className="text-[9px] text-[#9A918A] mb-3">{f.subtitle}</p>

            {/* IRR */}
            <div className="mb-2">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#9A918A]">IRR</span>
                <span className="text-[13px] font-bold text-[#1A1A1A]">{f.irr}</span>
              </div>
              <div className="h-2.5 rounded-full bg-[#E8DDD4] overflow-hidden">
                <div className={`h-full rounded-full ${f.irrColor}`} style={{ width: `${f.irrBar}%` }} />
              </div>
            </div>

            {/* MOIC */}
            <div className="mb-2">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#9A918A]">MOIC</span>
                <span className="text-[13px] font-bold text-[#1A1A1A]">{f.moic}</span>
              </div>
              <div className="h-2.5 rounded-full bg-[#E8DDD4] overflow-hidden">
                <div className={`h-full rounded-full ${f.moicColor}`} style={{ width: `${f.moicBar}%` }} />
              </div>
            </div>

            <p className="text-[10px] text-[#404040] italic">{f.explanation}</p>
          </div>
        ))}
      </div>

      {/* Explanation row */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3 flex items-center gap-3">
        <div className="w-1 h-8 rounded bg-[#7C5CBF] flex-shrink-0" />
        <div>
          <p className="text-[11px] font-semibold text-[#1A1A1A]">
            Fund A returned capital fast. Fund B created more total value.
          </p>
          <p className="text-[10px] text-[#9A918A]">
            IRR rewards speed; MOIC rewards magnitude. You need both metrics to evaluate a fund.
          </p>
        </div>
      </div>

      {/* CalPERS callout */}
      <div className="rounded-lg bg-[#2294BD]/10 border border-[#2294BD]/30 px-3 py-2.5">
        <span className="text-[9px] font-bold uppercase tracking-wider text-[#2294BD] mr-1.5">
          CalPERS data point
        </span>
        <span className="text-[11px] text-[#404040]">
          CalPERS public data showed funds with highest IRRs were not always the funds with highest
          multiples
        </span>
      </div>
    </div>
  );
}
