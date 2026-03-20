/**
 * StrategyDrift
 * Visual showing common strategy drift patterns as warning cards with flow arrows.
 * Used in: Day 8 (PE sub-strategies).
 */
export default function StrategyDrift() {
  const drifts = [
    {
      declared: "Growth Equity (minority)",
      drift: "Taking majority positions with leverage",
      why: "Control enables faster value realization; IRR motivation",
      impact: "LP now holds buyout risk in a growth equity benchmark slot",
      icon: "↗",
    },
    {
      declared: "Mid-Market Buyout ($100–500M EV)",
      drift: "Moving upmarket to $1B+ EV deals",
      why: "Larger fees, GP prestige, competitive deal dynamics",
      impact: "Different competitor set, return profile, concentration risk",
      icon: "⬆",
    },
    {
      declared: "Sector-Focused Buyout",
      drift: "Investing outside declared sector",
      why: "Opportunistic deal flow; specific partner relationships",
      impact: "LP loses the sector-expertise thesis they underwrote",
      icon: "↔",
    },
    {
      declared: "Early-Stage VC",
      drift: "Adding late-stage growth rounds",
      why: "Lower failure rate; easier marks; IRR-smoothing",
      impact: "Higher capital concentration; changes J-curve shape",
      icon: "↘",
    },
  ];

  return (
    <div className="my-3 space-y-2.5">
      {drifts.map((d, i) => (
        <div key={i} className="rounded-xl border border-[#E8DDD4] bg-white overflow-hidden shadow-sm">
          <div className="flex items-stretch">
            {/* Left: declared strategy */}
            <div className="w-[140px] flex-shrink-0 bg-[#FAF8F5] border-r border-[#E8DDD4] p-3 flex flex-col justify-center">
              <p className="text-[9px] font-bold uppercase tracking-wider text-[#9A918A] mb-1">Declared</p>
              <p className="text-[12px] font-semibold text-[#1A1A1A] leading-tight">{d.declared}</p>
            </div>

            {/* Arrow */}
            <div className="flex items-center px-2">
              <div className="flex flex-col items-center gap-0.5">
                <span className="text-lg text-[#D9532B]">{d.icon}</span>
                <span className="text-[8px] font-bold uppercase tracking-wider text-[#D9532B]">drift</span>
              </div>
            </div>

            {/* Right: drift details */}
            <div className="flex-1 p-3">
              <p className="text-[12px] font-semibold text-[#D9532B] mb-1">{d.drift}</p>
              <div className="flex gap-4">
                <div className="flex-1">
                  <p className="text-[9px] font-bold uppercase tracking-wider text-[#9A918A] mb-0.5">GP motivation</p>
                  <p className="text-[11px] text-[#404040] leading-snug">{d.why}</p>
                </div>
                <div className="flex-1">
                  <p className="text-[9px] font-bold uppercase tracking-wider text-[#9A918A] mb-0.5">LP impact</p>
                  <p className="text-[11px] text-[#404040] leading-snug">{d.impact}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
