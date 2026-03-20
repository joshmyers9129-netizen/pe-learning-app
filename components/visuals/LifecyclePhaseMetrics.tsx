/**
 * LifecyclePhaseMetrics
 * Four lifecycle phases with metric behavior and key questions.
 * Used in: Day 6 (lifecycle).
 */
export default function LifecyclePhaseMetrics() {
  const phases = [
    { name: "Investment Period", years: "Yrs 1–5", dynamic: "Capital deployment; fee drag accumulating", irrSignal: "Structurally negative to low; J-curve dominates", dpiSignal: "Near zero; no exits yet", question: "What is deployment pace vs. IP close date?", color: "#D9532B" },
    { name: "Value Creation", years: "Yrs 3–8", dynamic: "Portfolio companies held; early exits possible", irrSignal: "Low single digits to ~10%; still early", dpiSignal: "Building slowly from first exits", question: "Which companies are marked up, and why?", color: "#FAA51A" },
    { name: "Harvest", years: "Yrs 6–12", dynamic: "Major exits occurring; DPI building rapidly", irrSignal: "High signal; reflects actual realized exits", dpiSignal: "Most informative metric", question: "What is remaining portfolio, and why aren't more exiting?", color: "#2294BD" },
    { name: "Wind-Down", years: "Yrs 10–14", dynamic: "Residual portfolio liquidated or held", irrSignal: "Close to final", dpiSignal: "Approaching TVPI", question: "What is extension rationale — who benefits?", color: "#2A9D60" },
  ];

  return (
    <div className="my-3 space-y-2.5">
      {phases.map((p, i) => (
        <div key={i} className="rounded-xl border border-[#E8DDD4] bg-white shadow-sm overflow-hidden">
          <div className="flex items-stretch">
            <div className="w-28 flex-shrink-0 flex flex-col items-center justify-center py-3 border-r border-[#E8DDD4]" style={{ backgroundColor: `${p.color}10` }}>
              <p className="text-[12px] font-bold" style={{ color: p.color }}>{p.name}</p>
              <p className="text-[10px] text-[#9A918A]">{p.years}</p>
            </div>
            <div className="flex-1 p-3">
              <p className="text-[11px] text-[#404040] mb-2">{p.dynamic}</p>
              <div className="grid grid-cols-2 gap-2 mb-2">
                <div className="rounded bg-[#FAF8F5] px-2.5 py-1.5">
                  <p className="text-[9px] font-bold uppercase tracking-wider text-[#9A918A] mb-0.5">IRR Signal</p>
                  <p className="text-[10px] text-[#1A1A1A] leading-snug">{p.irrSignal}</p>
                </div>
                <div className="rounded bg-[#FAF8F5] px-2.5 py-1.5">
                  <p className="text-[9px] font-bold uppercase tracking-wider text-[#9A918A] mb-0.5">DPI Signal</p>
                  <p className="text-[10px] text-[#1A1A1A] leading-snug">{p.dpiSignal}</p>
                </div>
              </div>
              <div className="rounded bg-[#2294BD]/6 border border-[#2294BD]/12 px-2.5 py-1.5">
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#2294BD] mr-1">Key question</span>
                <span className="text-[10px] text-[#404040]">{p.question}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
