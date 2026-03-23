/**
 * VistaESGEvidence
 * Shows the ESG evidence chain from Vista Equity Partners.
 * Used in: Day 19 case study.
 */
export default function VistaESGEvidence() {
  const chain = [
    { step: "1", label: "Materiality thesis", detail: "Software sector \u2192 emissions, data privacy, talent" },
    { step: "2", label: "Portfolio measurement", detail: "2019 GHG emissions measured across all majority-owned cos" },
    { step: "3", label: "Management support", detail: "Toolkit and software provided to portfolio companies" },
    { step: "4", label: "Board discussion", detail: "Footprint results discussed at board level annually" },
    { step: "5", label: "Exit integration", detail: "Historical GHG data incorporated into sell-side materials" },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
        Vista Equity Partners — ESG Evidence Chain
      </p>

      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-3">
          From thesis to exit documentation
        </p>
        <div className="space-y-0">
          {chain.map((s, i) => (
            <div key={s.step}>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2A9D60] flex items-center justify-center">
                  <span className="text-[10px] font-bold text-white">{s.step}</span>
                </div>
                <div className="flex-1 pt-0.5">
                  <p className="text-[11px] font-semibold text-[#1A1A1A]">{s.label}</p>
                  <p className="text-[10px] text-[#9A918A]">{s.detail}</p>
                </div>
              </div>
              {i < chain.length - 1 && (
                <div className="ml-3 border-l-2 border-[#2A9D60]/30 h-3" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Evidence quality comparison
        </p>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg bg-[#2A9D60]/5 border border-[#2A9D60]/20 p-2.5">
            <p className="text-[10px] font-bold text-[#2A9D60] mb-1.5">Process evidence (strong)</p>
            <div className="space-y-1">
              {["Deal repriced or declined on ESG grounds", "Board-level follow-through documented", "Exit materials include ESG data", "Sector-specific risks identified"].map((t) => (
                <p key={t} className="text-[10px] text-[#404040]">{"\u2022"} {t}</p>
              ))}
            </div>
          </div>
          <div className="rounded-lg bg-[#D9532B]/5 border border-[#D9532B]/20 p-2.5">
            <p className="text-[10px] font-bold text-[#D9532B] mb-1.5">Policy only (weak)</p>
            <div className="space-y-1">
              {["PRI signatory badge displayed", "Annual report with generic KPIs", "No named deal-level examples", "Generic checklist across all sectors"].map((t) => (
                <p key={t} className="text-[10px] text-[#404040]">{"\u2022"} {t}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          ESG evidence hierarchy
        </p>
        <div className="space-y-1.5">
          {[
            { level: "Policy PDF", strength: 15, color: "#D9532B" },
            { level: "KPI reporting", strength: 35, color: "#E8A838" },
            { level: "Deal-level decisions", strength: 70, color: "#2294BD" },
            { level: "Economic impact at exit", strength: 95, color: "#2A9D60" },
          ].map((row) => (
            <div key={row.level} className="flex items-center gap-2">
              <span className="text-[10px] text-[#404040] w-[120px] flex-shrink-0">{row.level}</span>
              <div className="flex-1 relative h-4 rounded-full bg-[#E8DDD4] overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{ width: `${row.strength}%`, backgroundColor: row.color }}
                />
              </div>
            </div>
          ))}
          <div className="flex justify-between mt-0.5">
            <span className="text-[9px] text-[#9A918A]">Weak</span>
            <span className="text-[9px] text-[#9A918A]">Strong</span>
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-[#2294BD]/10 border border-[#2294BD]/30 px-3 py-2.5">
        <span className="text-[9px] font-bold uppercase tracking-wider text-[#2294BD] mr-1.5">
          Key insight
        </span>
        <span className="text-[11px] text-[#404040]">
          ESG should change decisions, not just reporting — credit only the evidence that shows
          altered underwriting, ownership behaviour, or economic outcomes
        </span>
      </div>
    </div>
  );
}
