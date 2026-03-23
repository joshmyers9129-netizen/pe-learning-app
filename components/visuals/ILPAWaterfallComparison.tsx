/**
 * ILPAWaterfallComparison
 * Side-by-side comparison of European (whole-fund) vs American (deal-by-deal) waterfall
 * structures. Includes flow diagram and key difference highlights.
 * Used in: Day 11 (ILPA dual model LPAs).
 */
export default function ILPAWaterfallComparison() {
  const steps = [
    { label: "Return of Capital", euro: "All capital first", amer: "Deal-level capital" },
    { label: "Preferred Return", euro: "On total fund", amer: "On deal basis" },
    { label: "GP Catch-up", euro: "After full pref", amer: "Per-deal catch-up" },
    { label: "Carry Split", euro: "80/20 on profits", amer: "80/20 per deal" },
  ];

  const differences = [
    { factor: "Timing of Carry", euro: "Late (after full return)", amer: "Early (deal-by-deal)", euroFavour: true },
    { factor: "Clawback Exposure", euro: "Minimal", amer: "Significant", euroFavour: true },
    { factor: "LP Protection", euro: "Higher", amer: "Lower", euroFavour: true },
    { factor: "GP Cash Flow", euro: "Back-loaded", amer: "Front-loaded", euroFavour: false },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
        ILPA Waterfall Comparison — European vs American Model
      </p>

      {/* Column headers */}
      <div className="grid grid-cols-[1fr_1fr_1fr] gap-2">
        <div />
        <div className="rounded-lg border border-[#2A9D60]/30 bg-[#2A9D60]/10 p-2 text-center">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#2A9D60]">
            European (Whole-Fund)
          </p>
        </div>
        <div className="rounded-lg border border-[#D9532B]/30 bg-[#D9532B]/10 p-2 text-center">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#D9532B]">
            American (Deal-by-Deal)
          </p>
        </div>
      </div>

      {/* Waterfall flow steps */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3 space-y-1.5">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Waterfall Flow
        </p>
        {steps.map((step, i) => (
          <div key={step.label}>
            <div className="grid grid-cols-[1fr_1fr_1fr] gap-2 items-center">
              <div className="flex items-center gap-1.5">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#2294BD] text-white text-[10px] font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <p className="text-[11px] font-semibold text-[#1A1A1A]">{step.label}</p>
              </div>
              <div className="rounded bg-[#2A9D60]/5 px-2 py-1.5 text-center">
                <p className="text-[10px] text-[#404040]">{step.euro}</p>
              </div>
              <div className="rounded bg-[#D9532B]/5 px-2 py-1.5 text-center">
                <p className="text-[10px] text-[#404040]">{step.amer}</p>
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="flex justify-[10px] ml-2 my-0.5">
                <span className="text-[#9A918A] text-[10px]">&#8595;</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Key differences */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Key Differences
        </p>
        <div className="space-y-2">
          {differences.map((d) => (
            <div key={d.factor} className="grid grid-cols-[1fr_1fr_1fr] gap-2 items-center">
              <p className="text-[11px] font-semibold text-[#1A1A1A]">{d.factor}</p>
              <div className={`rounded px-2 py-1.5 text-center ${d.euroFavour ? "bg-[#2A9D60]/10" : "bg-white"}`}>
                <p className={`text-[10px] ${d.euroFavour ? "font-semibold text-[#2A9D60]" : "text-[#404040]"}`}>
                  {d.euro}
                </p>
              </div>
              <div className={`rounded px-2 py-1.5 text-center ${!d.euroFavour ? "bg-[#D9532B]/10" : "bg-white"}`}>
                <p className={`text-[10px] ${!d.euroFavour ? "font-semibold text-[#D9532B]" : "text-[#404040]"}`}>
                  {d.amer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LP-favourability summary */}
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-[#E8DDD4] bg-white p-3 text-center">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-1">
            LP-Preferred Model
          </p>
          <p className="text-lg font-bold text-[#2A9D60]">European</p>
          <p className="text-[10px] text-[#9A918A] mt-0.5">Higher protection, lower clawback risk</p>
        </div>
        <div className="rounded-lg border border-[#E8DDD4] bg-white p-3 text-center">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-1">
            GP-Preferred Model
          </p>
          <p className="text-lg font-bold text-[#D9532B]">American</p>
          <p className="text-[10px] text-[#9A918A] mt-0.5">Earlier carry, faster GP cash flow</p>
        </div>
      </div>

      {/* Callout */}
      <div className="rounded-lg bg-[#2294BD]/10 border border-[#2294BD]/30 px-3 py-2.5">
        <span className="text-[9px] font-bold uppercase tracking-wider text-[#2294BD] mr-1.5">
          Key insight
        </span>
        <span className="text-[11px] text-[#404040]">
          Waterfall structure directly affects net-to-LP economics — the same gross return can
          produce materially different net outcomes depending on whether carry is calculated on a
          whole-fund or deal-by-deal basis
        </span>
      </div>
    </div>
  );
}
