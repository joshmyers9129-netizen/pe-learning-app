/**
 * KleinerPerkinsTeamSplit
 * Illustrates the Kleiner Perkins team evolution, the addition of Mary Meeker's
 * growth team, and the eventual split — highlighting team risk and strategy drift.
 * Used in: Day 13 (Kleiner Perkins / Bond split).
 */
export default function KleinerPerkinsTeamSplit() {
  const timeline = [
    {
      phase: "Original Firm",
      period: "Pre-2010",
      color: "#2294BD",
      desc: "Classic early-stage VC — Doerr, Caufield era",
      members: ["John Doerr", "Vinod Khosla", "Brook Byers"],
      strategy: "Early-stage venture",
    },
    {
      phase: "Growth Addition",
      period: "2010–2018",
      color: "#2A9D60",
      desc: "Meeker joins to build a growth equity practice within the firm",
      members: ["Existing partners", "Mary Meeker (Growth)", "Growth team hires"],
      strategy: "Venture + Growth hybrid",
    },
    {
      phase: "Team Split",
      period: "2018–2019",
      color: "#D9532B",
      desc: "Meeker departs to launch Bond Capital, taking the growth team",
      members: ["Remaining KP partners", "Meeker → Bond Capital", "Growth team departs"],
      strategy: "Separate entities",
    },
  ];

  const riskFactors = [
    { factor: "Team Continuity", risk: "Partial departure of key investment professionals", level: "High" },
    { factor: "Strategy Drift", risk: "Growth overlay changed the firm's risk profile", level: "Medium" },
    { factor: "Track Record Attribution", risk: "Which returns belong to which team?", level: "High" },
    { factor: "LP Underwriting", risk: "Re-up decision changes when team composition shifts", level: "High" },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
        Kleiner Perkins — Team Evolution &amp; Bond Split
      </p>

      {/* Timeline */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-3">
          Team Evolution Timeline
        </p>
        <div className="space-y-3">
          {timeline.map((t, i) => (
            <div key={t.phase} className="flex gap-3">
              {/* Timeline indicator */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-bold"
                  style={{ backgroundColor: t.color }}
                >
                  {i + 1}
                </div>
                {i < timeline.length - 1 && (
                  <div className="w-0.5 flex-1 mt-1 bg-[#E8DDD4]" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-2">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-[11px] font-bold" style={{ color: t.color }}>
                    {t.phase}
                  </p>
                  <span className="text-[9px] text-[#9A918A] bg-[#E8DDD4]/50 rounded px-1.5 py-0.5">
                    {t.period}
                  </span>
                </div>
                <p className="text-[10px] text-[#404040] mb-1.5">{t.desc}</p>
                <div className="flex flex-wrap gap-1">
                  {t.members.map((m) => (
                    <span
                      key={m}
                      className="text-[9px] rounded-full px-2 py-0.5 border"
                      style={{
                        borderColor: `${t.color}30`,
                        backgroundColor: `${t.color}08`,
                        color: t.color,
                      }}
                    >
                      {m}
                    </span>
                  ))}
                </div>
                <p className="text-[9px] text-[#9A918A] mt-1">
                  Strategy: <span className="font-semibold">{t.strategy}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Org split diagram */}
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-[#2294BD]/30 bg-white p-3 text-center">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-1">
            Post-Split: Kleiner Perkins
          </p>
          <p className="text-lg font-bold text-[#2294BD]">Venture Focus</p>
          <p className="text-[10px] text-[#9A918A] mt-0.5">Early-stage, core DNA restored</p>
        </div>
        <div className="rounded-lg border border-[#D9532B]/30 bg-white p-3 text-center">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-1">
            Post-Split: Bond Capital
          </p>
          <p className="text-lg font-bold text-[#D9532B]">Growth Focus</p>
          <p className="text-[10px] text-[#9A918A] mt-0.5">Meeker-led, late-stage growth</p>
        </div>
      </div>

      {/* Risk factors */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          LP Underwriting Risk Factors
        </p>
        <div className="space-y-2">
          {riskFactors.map((r) => (
            <div key={r.factor} className="flex items-center gap-2">
              <div className="w-[120px] flex-shrink-0">
                <p className="text-[11px] font-semibold text-[#1A1A1A]">{r.factor}</p>
              </div>
              <div className="flex-1">
                <p className="text-[10px] text-[#404040]">{r.risk}</p>
              </div>
              <span
                className={`flex-shrink-0 text-[9px] font-bold rounded-full px-2 py-0.5 ${
                  r.level === "High"
                    ? "bg-[#D9532B]/10 text-[#D9532B]"
                    : "bg-[#E8A817]/10 text-[#E8A817]"
                }`}
              >
                {r.level}
              </span>
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
          Team continuity is not binary — partial departures and strategy pivots can fundamentally
          change the risk profile an LP originally underwrote, even when the firm name stays the same
        </span>
      </div>
    </div>
  );
}
