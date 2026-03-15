/**
 * OvercommitmentRiskMap
 * Teaches: The three conditions that break overcommitment equilibrium, and
 *          how they compound in market stress. Allocators must understand each
 *          driver and the compound scenario, not just the overcommitment ratio.
 * Used in: Day 14 (Portfolio Construction and Commitment Pacing).
 * Pure Tailwind — no charting library.
 */
export default function OvercommitmentRiskMap() {
  const risks = [
    {
      id: "calls",
      title: "Call Acceleration",
      color: "#2294BD",
      borderColor: "border-[#2294BD]/30",
      bgColor: "bg-[#2294BD]/10",
      labelColor: "text-[#2294BD]",
      trigger: "Multiple funds enter active deployment simultaneously; GPs face end-of-period pressure",
      effect: "Actual calls in 12 months exceed projection by 40–70%",
      warning: "Signs: 3+ funds in year 1–3 of deployment; GP indicates active pipeline",
      severity: 3,
    },
    {
      id: "dist",
      title: "Distribution Freeze",
      color: "#FAA51A",
      borderColor: "border-[#FAA51A]/30",
      bgColor: "bg-[#FAA51A]/10",
      labelColor: "text-[#C07800]",
      trigger: "IPO windows close; strategic buyers pause; GPs extend holding periods through a cycle",
      effect: "Expected $30–50M in distributions arrives as $5–15M; PE weight creeps up",
      warning: "Signs: public equity IPO volume declining; M&A deal pace slowing; GP marks stable but DPI flat",
      severity: 3,
    },
    {
      id: "denom",
      title: "Denominator Effect",
      color: "#7C5CBF",
      borderColor: "border-[#7C5CBF]/30",
      bgColor: "bg-[#7C5CBF]/10",
      labelColor: "text-[#7C5CBF]",
      trigger: "Public equity / fixed income portfolio declines 20–30%; PE NAV sticky due to lagged marks",
      effect: "PE allocation as % of total rises from 14% to 18–19% without new commitments",
      warning: "Signs: equity markets in drawdown; PE marks based on Q3 stale data; allocation shows overage",
      severity: 2,
    },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040] mb-1">
        Overcommitment Risk Map: Three Conditions That Break Equilibrium
      </p>
      <p className="text-[11px] text-[#9A918A] mb-4 italic">
        Each condition alone is manageable. The compound scenario — all three arriving simultaneously, as in 2008–09 — is what creates genuine illiquidity.
      </p>

      <div className="space-y-2.5 mb-4">
        {risks.map((r) => (
          <div
            key={r.id}
            className={`rounded-lg border ${r.borderColor} bg-white p-3`}
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <p className={`text-[10px] font-bold uppercase tracking-wide ${r.labelColor}`}>
                {r.title}
              </p>
              <div className="flex gap-0.5 flex-shrink-0">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-2.5 h-2.5 rounded-sm"
                    style={{
                      backgroundColor: i <= r.severity ? r.color : "#E8DDD4",
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="space-y-1.5">
              <div>
                <p className="text-[8px] uppercase tracking-wide text-[#9A918A]">Trigger</p>
                <p className="text-[10px] text-[#404040]">{r.trigger}</p>
              </div>
              <div>
                <p className="text-[8px] uppercase tracking-wide text-[#9A918A]">Effect on programme</p>
                <p className="text-[10px] text-[#404040]">{r.effect}</p>
              </div>
              <div className={`rounded px-2 py-1 ${r.bgColor} border ${r.borderColor}`}>
                <p className="text-[8px] uppercase tracking-wide text-[#9A918A]">Early warning signals</p>
                <p className={`text-[9px] ${r.labelColor}`}>{r.warning}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Compound scenario */}
      <div className="rounded-lg bg-[#D9532B]/10 border border-[#D9532B]/30 p-3">
        <p className="text-[10px] font-bold uppercase tracking-wide text-[#D9532B] mb-1.5">
          Compound Scenario — All Three Simultaneous
        </p>
        <div className="space-y-1 mb-2">
          <div className="flex items-start gap-1.5">
            <span className="text-[9px] text-[#D9532B] flex-shrink-0 mt-0.5">▸</span>
            <p className="text-[10px] text-[#404040]">Calls spike 50% above projection as 2021–2023 funds enter active deployment</p>
          </div>
          <div className="flex items-start gap-1.5">
            <span className="text-[9px] text-[#D9532B] flex-shrink-0 mt-0.5">▸</span>
            <p className="text-[10px] text-[#404040]">Distributions fall to near zero as exit markets close</p>
          </div>
          <div className="flex items-start gap-1.5">
            <span className="text-[9px] text-[#D9532B] flex-shrink-0 mt-0.5">▸</span>
            <p className="text-[10px] text-[#404040]">Public portfolio declines 25%; PE allocation reads 22% vs. 15% target</p>
          </div>
        </div>
        <p className="text-[10px] text-[#D9532B] font-semibold">
          Historical case: 2008–09 — many overcommitted endowments faced liquidity crises funding calls with no distributions and declining liquid assets. Some sold PE positions in the secondary market at 50–60 cents on the dollar.
        </p>
      </div>

      <div className="mt-3 rounded-lg bg-[#2A9D60]/10 border border-[#2A9D60]/30 px-3 py-2">
        <p className="text-[10px] text-[#404040]">
          <span className="font-semibold text-[#2A9D60]">What good overcommitment management looks like:</span> Unfunded-to-NAV ratio below 75%; at least 12 months of expected calls covered by liquid assets; distribution assumptions stress-tested to 50% of base case.
        </p>
      </div>
    </div>
  );
}
