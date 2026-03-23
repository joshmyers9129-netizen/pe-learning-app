/**
 * SequoiaAdaptingEndure
 * Tracks Sequoia's structural experimentation — from the open-ended fund
 * announcement through the "Adapting to Endure" portfolio guidance to the
 * eventual reversal and separation into regional entities.
 * Used in: Day 35 (institutional adaptation and fund structure innovation).
 */
export default function SequoiaAdaptingEndure() {
  const phases = [
    {
      date: "2021",
      title: "Open-Ended Fund Announced",
      description:
        "Sequoia announces a permanent, open-ended fund structure — the Sequoia Fund — eliminating traditional fund lifecycles.",
      color: "#2A9D60",
    },
    {
      date: "May 2022",
      title: "\"Adapting to Endure\" Presentation",
      description:
        "Sequoia delivers guidance to portfolio companies warning of a prolonged downturn. Key message: survival over growth.",
      color: "#D9532B",
    },
    {
      date: "2023",
      title: "Structure Reversed & Split",
      description:
        "Sequoia separates into three independent entities: Sequoia US/EU, HongShan (China), and Peak XV (India/SEA).",
      color: "#2294BD",
    },
  ];

  const advice = [
    "Cut burn rate immediately",
    "Extend runway to 24+ months",
    "Prioritize path to profitability",
    "Shift from growth-at-all-costs to capital efficiency",
  ];

  const tradeoffs = [
    {
      permanent: "Compounding without return-of-capital",
      closedEnd: "Forced liquidity discipline",
    },
    {
      permanent: "LP lock-up concerns",
      closedEnd: "Clear fund lifecycle and DPI",
    },
    {
      permanent: "Flexibility to hold winners longer",
      closedEnd: "Predictable distributions",
    },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
        Sequoia — &quot;Adapting to Endure&quot; & Fund Restructuring
      </p>

      {/* 3-phase timeline */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-3">
          Three-Phase Timeline
        </p>
        <div className="space-y-3">
          {phases.map((phase, idx) => (
            <div key={phase.date} className="flex gap-3">
              <div className="flex flex-col items-center">
                <div
                  className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center"
                  style={{ backgroundColor: phase.color }}
                >
                  <span className="text-[9px] font-bold text-white">{idx + 1}</span>
                </div>
                {idx < phases.length - 1 && (
                  <div className="w-[2px] flex-1 bg-[#E8DDD4] mt-1" />
                )}
              </div>
              <div className="pb-2">
                <p className="text-[11px] font-bold text-[#404040]">
                  {phase.date} — {phase.title}
                </p>
                <p className="text-[10px] text-[#9A918A] mt-0.5">{phase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What Adapting to Endure advised */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          What &quot;Adapting to Endure&quot; Advised
        </p>
        <div className="space-y-1.5">
          {advice.map((item) => (
            <div key={item} className="flex items-start gap-1.5">
              <span className="text-[10px] text-[#D9532B] mt-[2px]">●</span>
              <span className="text-[11px] text-[#404040]">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Structural tradeoffs */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Permanent Vehicle vs Closed-End Fund
        </p>
        <div className="grid grid-cols-2 gap-2 mb-2">
          <p className="text-[10px] font-bold text-[#2A9D60] text-center">Permanent Vehicle</p>
          <p className="text-[10px] font-bold text-[#2294BD] text-center">Closed-End Fund</p>
        </div>
        <div className="space-y-2">
          {tradeoffs.map((t, idx) => (
            <div key={idx} className="grid grid-cols-2 gap-2">
              <div className="rounded bg-[#2A9D60]/10 px-2 py-1.5">
                <p className="text-[10px] text-[#404040]">{t.permanent}</p>
              </div>
              <div className="rounded bg-[#2294BD]/10 px-2 py-1.5">
                <p className="text-[10px] text-[#404040]">{t.closedEnd}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Callout */}
      <div className="rounded-lg bg-[#2294BD]/10 border border-[#2294BD]/30 px-3 py-2.5">
        <span className="text-[9px] font-bold uppercase tracking-wider text-[#2294BD] mr-1.5">
          Key insight
        </span>
        <span className="text-[11px] text-[#404040]">
          Even the most prestigious firms can misjudge structural innovation timing — and the
          willingness to reverse course is itself a signal of institutional quality.
        </span>
      </div>
    </div>
  );
}
