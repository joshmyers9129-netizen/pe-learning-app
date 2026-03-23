/**
 * FinastraMegaUnitranche
 * Visualises the $5.5B mega-unitranche deal led by Apollo for Vista Equity's
 * Finastra acquisition. Compares traditional syndicated vs private credit
 * execution and highlights concentration risk tradeoffs.
 * Used in: Day 41 (Finastra's $5.5B mega-unitranche).
 */
export default function FinastraMegaUnitranche() {
  const comparison = [
    {
      label: "Traditional Syndicated Market",
      traits: [
        { text: "20+ banks", icon: "🏦" },
        { text: "Marketing period required", icon: "📢" },
        { text: "Execution uncertainty", icon: "⚠️" },
        { text: "Flex provisions & repricing risk", icon: "📉" },
      ],
      color: "#9A918A",
    },
    {
      label: "Private Credit Solution",
      traits: [
        { text: "Single lender (Apollo)", icon: "🎯" },
        { text: "Bilateral negotiation", icon: "🤝" },
        { text: "Certainty of close", icon: "✅" },
        { text: "Speed of execution", icon: "⚡" },
      ],
      color: "#2294BD",
    },
  ];

  const riskTradeoffs = [
    { factor: "Competitive Advantage", description: "Ability to write $5.5B check wins exclusive mandates", type: "pro" },
    { factor: "Pricing Power", description: "Sole lender captures full economics without syndication discount", type: "pro" },
    { factor: "Portfolio Concentration", description: "Single position can represent outsized share of fund NAV", type: "con" },
    { factor: "Loss Severity", description: "If Finastra stumbles, mark-to-market impact is amplified", type: "con" },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
        Day 41 — Finastra&apos;s $5.5B Mega-Unitranche
      </p>

      {/* Deal structure flow */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Deal Structure
        </p>
        <div className="flex items-center justify-between gap-2">
          <div className="flex-1 rounded-md bg-[#FBF7F3] border border-[#E8DDD4] p-2 text-center">
            <p className="text-[10px] font-bold text-[#9A918A]">Sponsor</p>
            <p className="text-[12px] font-bold text-[#404040]">Vista Equity Partners</p>
          </div>
          <span className="text-[#9A918A] text-sm">→</span>
          <div className="flex-1 rounded-md bg-[#FBF7F3] border border-[#E8DDD4] p-2 text-center">
            <p className="text-[10px] font-bold text-[#9A918A]">Target</p>
            <p className="text-[12px] font-bold text-[#404040]">Finastra</p>
            <p className="text-[9px] text-[#9A918A]">Financial Technology</p>
          </div>
          <span className="text-[#9A918A] text-sm">→</span>
          <div className="flex-1 rounded-md bg-[#2294BD]/10 border border-[#2294BD]/30 p-2 text-center">
            <p className="text-[10px] font-bold text-[#2294BD]">Private Credit</p>
            <p className="text-[12px] font-bold text-[#404040]">Apollo</p>
            <p className="text-[9px] text-[#2294BD] font-semibold">$5.5B Commitment</p>
          </div>
        </div>
      </div>

      {/* Comparison: Traditional vs Private Credit */}
      <div className="grid grid-cols-2 gap-3">
        {comparison.map((side) => (
          <div key={side.label} className="rounded-lg border border-[#E8DDD4] bg-white p-3">
            <p
              className="text-[10px] font-bold uppercase tracking-wider mb-2"
              style={{ color: side.color }}
            >
              {side.label}
            </p>
            <div className="space-y-1.5">
              {side.traits.map((t) => (
                <div key={t.text} className="flex items-start gap-1.5">
                  <span className="text-[11px] leading-none mt-0.5">{t.icon}</span>
                  <p className="text-[11px] text-[#404040]">{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Concentration risk tradeoff */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Concentration Risk Tradeoff
        </p>
        <div className="space-y-2">
          {riskTradeoffs.map((r) => (
            <div key={r.factor} className="flex items-start gap-2">
              <span
                className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-white"
                style={{
                  backgroundColor: r.type === "pro" ? "#2A9D60" : "#D9532B",
                }}
              >
                {r.type === "pro" ? "+" : "−"}
              </span>
              <div>
                <p className="text-[11px] font-semibold text-[#1A1A1A]">{r.factor}</p>
                <p className="text-[10px] text-[#9A918A]">{r.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scale context */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Scale Relative to Fund Size
        </p>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <p className="text-[11px] text-[#404040]">Finastra commitment</p>
            <p className="text-[11px] font-bold text-[#2294BD]">$5.5B</p>
          </div>
          <div className="relative h-4 rounded-full bg-[#E8DDD4] overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-[#2294BD]"
              style={{ width: "55%" }}
            />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[11px] text-[#404040]">Typical large direct-lending fund AUM</p>
            <p className="text-[11px] font-bold text-[#9A918A]">~$10B</p>
          </div>
          <p className="text-[10px] text-[#D9532B] font-semibold">
            A single deal at ~55% of fund AUM demands rigorous concentration limits
          </p>
        </div>
      </div>

      {/* Key insight callout */}
      <div className="rounded-lg border-l-4 border-l-[#2294BD] bg-white border border-[#E8DDD4] px-3 py-2.5">
        <span className="text-[9px] font-bold uppercase tracking-wider text-[#2294BD] mr-1.5">
          Key insight
        </span>
        <span className="text-[11px] text-[#404040]">
          Private credit&apos;s maturation brings new capabilities — and new concentration risks
          that allocators must monitor.
        </span>
      </div>
    </div>
  );
}
