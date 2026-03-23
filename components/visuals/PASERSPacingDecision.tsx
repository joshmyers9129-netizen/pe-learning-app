/**
 * PASERSPacingDecision
 * Illustrates Pennsylvania SERS' 2024 decision to cut PE pacing from ~$1.1B to $800M,
 * showing the three factors that drove the programme-level arithmetic change.
 * Used in: Day 14 case study.
 */
export default function PASERSPacingDecision() {
  const factors = [
    {
      label: "Slowed distributions",
      detail: "Exit activity fell, reducing cash returned to the plan",
      icon: "\u2193",
    },
    {
      label: "Denominator effects",
      detail: "Public-market declines pushed PE above target weight",
      icon: "\u2696",
    },
    {
      label: "Liquidity conditions",
      detail: "Total-fund liquidity needs required more flexibility",
      icon: "\u2248",
    },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
        Pennsylvania SERS — Pacing Discipline in Action
      </p>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-[#E8DDD4] bg-white p-3 text-center">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-1">
            Prior Pacing
          </p>
          <p className="text-2xl font-bold text-[#9A918A]">~$1.1B</p>
          <p className="text-[10px] text-[#9A918A] mt-0.5">Annual commitment rhythm</p>
        </div>
        <div className="rounded-lg border border-[#E8DDD4] bg-white p-3 text-center">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-1">
            Adjusted Pacing
          </p>
          <p className="text-2xl font-bold text-[#2A9D60]">$800M</p>
          <p className="text-[10px] text-[#9A918A] mt-0.5">Reduced to fit programme math</p>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="rounded-lg border border-[#E8DDD4] bg-white px-4 py-1.5">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#D9532B] text-center">
            ~27% reduction driven by three factors
          </p>
        </div>
      </div>

      <div className="space-y-2">
        {factors.map((f) => (
          <div
            key={f.label}
            className="rounded-lg border border-[#E8DDD4] bg-white p-3 flex items-start gap-3"
          >
            <span className="text-lg flex-shrink-0 w-6 text-center">{f.icon}</span>
            <div>
              <p className="text-[11px] font-semibold text-[#1A1A1A]">{f.label}</p>
              <p className="text-[10px] text-[#9A918A] mt-0.5">{f.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Programme-Level Decision Logic
        </p>
        <div className="space-y-1.5">
          {[
            { q: "Are managers attractive?", a: "Yes \u2014 but irrelevant in isolation" },
            { q: "Can the portfolio absorb new commitments?", a: "Not at the prior pace" },
            { q: "Would maintaining pace create liquidity stress?", a: "Yes \u2014 hidden but real" },
          ].map((row) => (
            <div key={row.q} className="flex items-start gap-2">
              <span className="text-[10px] text-[#2294BD] font-bold mt-0.5">Q:</span>
              <div className="flex-1">
                <span className="text-[11px] text-[#404040]">{row.q}</span>
                <span className="text-[11px] text-[#9A918A] ml-2">{"\u2192"} {row.a}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg bg-[#2294BD]/10 border border-[#2294BD]/30 px-3 py-2.5">
        <span className="text-[9px] font-bold uppercase tracking-wider text-[#2294BD] mr-1.5">
          Key insight
        </span>
        <span className="text-[11px] text-[#404040]">
          Pacing discipline means adjusting to programme conditions, not just GP quality — a strong
          manager at the wrong programme moment can still be the wrong commitment
        </span>
      </div>
    </div>
  );
}
