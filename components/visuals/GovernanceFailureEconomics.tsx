/**
 * GovernanceFailureEconomics
 * Two governance failure patterns side by side: American Infrastructure & Blackstone.
 * Used in: Day 22 (governance failures and economic consequences).
 */
export default function GovernanceFailureEconomics() {
  const failures = [
    {
      name: "American Infrastructure",
      type: "Asset Transfer Without Consent",
      color: "#D9532B",
      trigger: "GP transferred assets across funds without LP consent or proper disclosure",
      mechanism: "Changed fund duration and LP choice — investors ended up holding different assets than they underwrote",
      economicHarm: "Duration risk shifted to LPs; portfolio composition changed unilaterally; exit timing no longer LP-aligned",
      governanceGap: "No effective consent mechanism; LPAC engagement absent or performative; LPA language too permissive",
    },
    {
      name: "Blackstone",
      type: "Undisclosed Fee Practices",
      color: "#7C5CBF",
      trigger: "Fee arrangements with portfolio companies not fully disclosed to fund investors",
      mechanism: "Changed who captures value — economics flowed to GP-affiliated entities rather than to the fund",
      economicHarm: "Fee leakage reduced net returns; LP-level economics diluted by undisclosed GP-side revenue streams",
      governanceGap: "Disclosure gaps in related-party transactions; offset mechanisms unclear; reporting lacked granularity",
    },
  ];

  const spectrum = [
    { label: "Disclosure Gap", detail: "Incomplete or delayed information to LPs", severity: 20, color: "#FAA51A" },
    { label: "Consent Failure", detail: "Actions taken without required LP or LPAC approval", severity: 45, color: "#D9532B" },
    { label: "Economic Diversion", detail: "Value flows to GP or affiliates rather than fund", severity: 70, color: "#D9532B" },
    { label: "Structural Harm", detail: "Fund composition, duration, or risk profile changed without LP choice", severity: 95, color: "#8B0000" },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
        Governance Failure Economics — Two Patterns
      </p>

      {/* Side-by-side failure patterns */}
      <div className="grid grid-cols-2 gap-3">
        {failures.map((f, i) => (
          <div key={i} className="rounded-xl border border-[#E8DDD4] bg-white shadow-sm overflow-hidden">
            <div className="flex items-stretch">
              <div className="w-1.5 flex-shrink-0" style={{ backgroundColor: f.color }} />
              <div className="flex-1">
                <div className="px-3.5 py-2.5 border-b border-[#E8DDD4] bg-[#FAF8F5]">
                  <p className="text-[12px] font-bold text-[#1A1A1A]">{f.name}</p>
                  <p className="text-[10px] font-semibold mt-0.5" style={{ color: f.color }}>{f.type}</p>
                </div>
                <div className="px-3.5 py-2.5 space-y-2.5">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-wider text-[#9A918A] mb-0.5">Trigger</p>
                    <p className="text-[11px] text-[#404040] leading-snug">{f.trigger}</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-wider text-[#9A918A] mb-0.5">Mechanism</p>
                    <p className="text-[11px] text-[#1A1A1A] leading-snug">{f.mechanism}</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-wider text-[#D9532B] mb-0.5">Economic Harm</p>
                    <p className="text-[11px] text-[#404040] leading-snug">{f.economicHarm}</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-wider text-[#9A918A] mb-0.5">Governance Gap</p>
                    <p className="text-[11px] text-[#404040] leading-snug">{f.governanceGap}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Governance risk spectrum */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-3">
          Governance Risk Spectrum — From Disclosure Gaps to Economic Harm
        </p>
        <div className="space-y-2">
          {spectrum.map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-[100px] flex-shrink-0">
                <p className="text-[10px] font-bold text-[#1A1A1A]">{s.label}</p>
              </div>
              <div className="flex-1 h-5 bg-[#F5F0EB] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full flex items-center justify-end pr-2"
                  style={{ width: `${s.severity}%`, backgroundColor: s.color }}
                >
                  <span className="text-white text-[8px] font-bold uppercase tracking-wider">
                    {s.severity < 40 ? "" : s.severity < 70 ? "Moderate" : s.severity < 90 ? "Severe" : "Critical"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-[9px] text-[#9A918A]">Optics risk</span>
          <span className="text-[9px] text-[#9A918A]">Economic risk</span>
        </div>
      </div>

      {/* Key insight */}
      <div className="rounded-lg bg-[#2294BD]/10 border border-[#2294BD]/30 px-3 py-2.5">
        <span className="text-[9px] font-bold uppercase tracking-wider text-[#2294BD] mr-1.5">
          Key insight
        </span>
        <span className="text-[11px] text-[#404040]">
          Governance failures move economics, not just optics. Whether the mechanism is asset transfer without consent or undisclosed fee capture, the result is the same: LP-level returns are reshaped by decisions made outside their visibility or control.
        </span>
      </div>
    </div>
  );
}
