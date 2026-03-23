/**
 * HarvardLiquidityStrain
 * Visual for Day 26: Harvard's 2009 liquidity strain showing convergence
 * of three risks, timeline from optimism to forced rethinking, and the
 * lesson that pacing is a governance topic.
 * Used in: Day 26 (Harvard endowment liquidity case study).
 */
export default function HarvardLiquidityStrain() {
  const risks = [
    {
      label: "Capital Commitments Binding",
      desc: "Unfunded commitments became mandatory cash calls that could not be deferred",
      level: 95,
      color: "#D9532B",
    },
    {
      label: "Operating Liquidity Needs Rising",
      desc: "University operating budget depended on endowment distributions that could not stop",
      level: 85,
      color: "#FAA51A",
    },
    {
      label: "Flexibility Shrinking",
      desc: "Liquid assets sold first, leaving an increasingly illiquid residual portfolio",
      level: 90,
      color: "#D9532B",
    },
  ];

  const timeline = [
    {
      year: "2004–2007",
      event: "Optimistic commitments made",
      detail: "PE, real estate, and natural resources allocations grow; total illiquid share rises above 50%",
      color: "bg-[#2294BD]",
    },
    {
      year: "2008",
      event: "GFC hits — endowment drops 27%",
      detail: "Portfolio falls from $36.9B to $26.0B; denominator shrinks but commitments remain fixed",
      color: "bg-[#D9532B]",
    },
    {
      year: "2008–2009",
      event: "Liquidity crisis emerges",
      detail: "Capital calls continue; distributions from PE and real assets slow dramatically; operating draws persist",
      color: "bg-[#FAA51A]",
    },
    {
      year: "2009",
      event: "Forced asset sales and borrowing",
      detail: "Harvard sells liquid assets at distressed prices and issues taxable bonds to meet obligations",
      color: "bg-[#D9532B]",
    },
    {
      year: "2010+",
      event: "Governance rethinking",
      detail: "Pacing, liquidity reserves, and commitment sizing become explicit governance topics — not just CIO decisions",
      color: "bg-[#2A9D60]",
    },
  ];

  const lessons = [
    {
      label: "Pacing is governance",
      detail: "Commitment pacing decisions must be reviewed at the board level, not delegated entirely to investment staff",
    },
    {
      label: "Diversification is conditional",
      detail: "A portfolio that looks diversified in benign conditions can become concentrated and fragile under stress",
    },
    {
      label: "Liquidity is not binary",
      detail: "The question is not 'liquid vs illiquid' but 'how much cash must flow out when inflows slow?'",
    },
    {
      label: "Denominator amplifies stress",
      detail: "When the portfolio shrinks, illiquid allocations mechanically grow — right when flexibility is most needed",
    },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
        Harvard 2009 — Convergence of Liquidity Risks
      </p>

      {/* Three converging risks */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Three Risks Converging Simultaneously
        </p>
        <div className="space-y-2">
          {risks.map((r, i) => (
            <div key={i}>
              <div className="flex items-center justify-between mb-1">
                <p className="text-[11px] font-semibold text-[#1A1A1A]">{r.label}</p>
                <span
                  className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full"
                  style={{ backgroundColor: `${r.color}15`, color: r.color }}
                >
                  Severe
                </span>
              </div>
              <div className="relative h-3 rounded-full bg-[#E8DDD4] overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{ width: `${r.level}%`, backgroundColor: r.color }}
                />
              </div>
              <p className="text-[10px] text-[#9A918A] mt-0.5">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Timeline: Optimism to Forced Rethinking
        </p>
        <div className="space-y-0">
          {timeline.map((item, i) => (
            <div key={item.year} className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className={`w-3 h-3 rounded-full ${item.color} flex-shrink-0`} />
                {i < timeline.length - 1 && (
                  <div className="w-px flex-1 bg-[#E8DDD4] min-h-[24px]" />
                )}
              </div>
              <div className="pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-[#1A1A1A]">{item.year}</span>
                  <span className="text-[11px] font-semibold text-[#404040]">{item.event}</span>
                </div>
                <p className="text-[10px] text-[#9A918A]">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key lessons */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Governance Lessons
        </p>
        <div className="grid grid-cols-2 gap-2">
          {lessons.map((l, i) => (
            <div key={i} className="rounded-md border border-[#E8DDD4] bg-[#FAF8F5] px-2.5 py-2">
              <p className="text-[11px] font-semibold text-[#1A1A1A]">{l.label}</p>
              <p className="text-[10px] text-[#9A918A] leading-snug mt-0.5">{l.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key insight */}
      <div className="rounded-lg bg-[#D9532B]/10 border border-[#D9532B]/30 px-3 py-2.5">
        <span className="text-[9px] font-bold uppercase tracking-wider text-[#D9532B] mr-1.5">
          Key insight
        </span>
        <span className="text-[11px] text-[#404040]">
          A programme can look diversified in benign conditions yet become fragile when distributions
          slow, the denominator shrinks, and commitments become binding — pacing is a governance
          topic, not just a portfolio-construction topic
        </span>
      </div>
    </div>
  );
}
