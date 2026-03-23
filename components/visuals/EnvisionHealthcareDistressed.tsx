/**
 * EnvisionHealthcareDistressed
 * Traces Envision Healthcare from KKR's $10B acquisition through Chapter 11
 * and lender-led business separation. Shows the convergence of regulatory,
 * pandemic, and labor-cost pressures plus the distressed control process.
 * Used in: Day 44 (Envision Healthcare: from $10B buyout to lender-led breakup).
 */
export default function EnvisionHealthcareDistressed() {
  const timeline = [
    { year: "2018", event: "KKR acquires Envision", detail: "~$10B leveraged buyout of physician-staffing platform", color: "#2294BD" },
    { year: "2021", event: "No Surprises Act", detail: "Federal law changes out-of-network billing economics", color: "#D9532B" },
    { year: "2022", event: "Leverage unsustainable", detail: "Labor costs surge post-pandemic, revenue model broken", color: "#D9532B" },
    { year: "May 2023", event: "Chapter 11 filing", detail: "Filed with restructuring support agreement (RSA)", color: "#D9532B" },
    { year: "Exit", event: "Lender-led separation", detail: "Split into AMSURG + Envision Physician Services, owned by lender groups", color: "#2A9D60" },
  ];

  const stressFactors = [
    { factor: "Regulatory Change", detail: "No Surprises Act eliminated out-of-network billing leverage", icon: "📜", severity: 95 },
    { factor: "Pandemic Disruption", detail: "Procedure volumes collapsed, then recovered unevenly", icon: "🦠", severity: 75 },
    { factor: "Wage Inflation", detail: "Healthcare worker shortages drove compensation sharply higher", icon: "💰", severity: 85 },
  ];

  const controlProcess = [
    { step: "Accumulated Positions", detail: "Distressed investors bought debt at discount, building blocking positions" },
    { step: "Negotiated RSA", detail: "Pre-packaged restructuring support agreement shaped Chapter 11 terms" },
    { step: "Shaped Separation", detail: "Lenders directed business-unit split to maximize recovery by segment" },
    { step: "Became New Owners", detail: "Debt-for-equity conversion gave lender groups control of successor entities" },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
        Day 44 — Envision Healthcare: $10B Buyout to Lender-Led Breakup
      </p>

      {/* Timeline */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Timeline
        </p>
        <div className="space-y-0">
          {timeline.map((t, i) => (
            <div key={t.year} className="flex items-start gap-2">
              <div className="flex flex-col items-center">
                <span
                  className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-[8px] font-bold text-white"
                  style={{ backgroundColor: t.color }}
                >
                  {i + 1}
                </span>
                {i < timeline.length - 1 && <div className="w-px h-5 bg-[#E8DDD4]" />}
              </div>
              <div className="pb-2">
                <div className="flex items-baseline gap-1.5">
                  <p className="text-[11px] font-bold" style={{ color: t.color }}>
                    {t.year}
                  </p>
                  <p className="text-[11px] font-semibold text-[#1A1A1A]">{t.event}</p>
                </div>
                <p className="text-[10px] text-[#9A918A]">{t.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stress factors */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Simultaneous Stress Factors
        </p>
        <div className="space-y-2">
          {stressFactors.map((s) => (
            <div key={s.factor}>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px]">{s.icon}</span>
                  <p className="text-[11px] font-semibold text-[#1A1A1A]">{s.factor}</p>
                </div>
                <p className="text-[10px] font-bold text-[#D9532B]">{s.severity}% impact</p>
              </div>
              <div className="relative h-3 rounded-full bg-[#E8DDD4] overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 rounded-full bg-[#D9532B]"
                  style={{ width: `${s.severity}%` }}
                />
              </div>
              <p className="text-[9px] text-[#9A918A] mt-0.5">{s.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Distressed control process */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Distressed Control Process
        </p>
        <div className="space-y-2">
          {controlProcess.map((c, i) => (
            <div key={c.step} className="flex items-start gap-2">
              <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-[#2A9D60] text-[9px] font-bold text-white">
                {i + 1}
              </span>
              <div>
                <p className="text-[11px] font-semibold text-[#1A1A1A]">{c.step}</p>
                <p className="text-[10px] text-[#9A918A]">{c.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Outcome */}
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-[#E8DDD4] bg-white p-3 text-center">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-1">
            Successor Entity
          </p>
          <p className="text-[13px] font-bold text-[#2A9D60]">AMSURG</p>
          <p className="text-[9px] text-[#9A918A]">Ambulatory surgery centers</p>
        </div>
        <div className="rounded-lg border border-[#E8DDD4] bg-white p-3 text-center">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-1">
            Successor Entity
          </p>
          <p className="text-[13px] font-bold text-[#2A9D60]">Envision Physician Services</p>
          <p className="text-[9px] text-[#9A918A]">Physician staffing platform</p>
        </div>
      </div>

      {/* Key insight callout */}
      <div className="rounded-lg border-l-4 border-l-[#2294BD] bg-white border border-[#E8DDD4] px-3 py-2.5">
        <span className="text-[9px] font-bold uppercase tracking-wider text-[#2294BD] mr-1.5">
          Key insight
        </span>
        <span className="text-[11px] text-[#404040]">
          Distressed credit is a control and process game — the winning investors underwrote
          governance, separation complexity, and post-reorganization ownership, not just
          recovery rates.
        </span>
      </div>
    </div>
  );
}
