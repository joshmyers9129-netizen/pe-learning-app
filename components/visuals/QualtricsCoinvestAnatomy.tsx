/**
 * QualtricsCoinvestAnatomy
 * Shows the Qualtrics co-invest syndication deal structure and risk trade-offs.
 * Used in: Day 16 case study (Qualtrics co-invest syndication).
 */
export default function QualtricsCoinvestAnatomy() {
  const gains = [
    { label: "Zero management fee", detail: "No 1.5-2% annual drag on committed capital" },
    { label: "Zero carried interest", detail: "Full upside retained by LP on co-invest allocation" },
    { label: "Direct exposure", detail: "Targeted access to a specific high-conviction asset" },
    { label: "Portfolio cost reduction", detail: "Blended fee load falls as co-invest share rises" },
  ];

  const accepts = [
    { label: "Single-name concentration", detail: "One company outcome drives entire co-invest return" },
    { label: "Compressed timeline", detail: "Days to evaluate, not weeks; limited independent diligence" },
    { label: "Look-through concentration", detail: "Fund + co-invest exposure to same company compounds risk" },
    { label: "Adverse selection risk", detail: "GP may syndicate deals where they want to cap exposure" },
  ];

  const riskDims = [
    { dim: "Fee Savings", level: "High benefit", pct: 90, color: "#2A9D60" },
    { dim: "Concentration Risk", level: "High risk", pct: 85, color: "#D9532B" },
    { dim: "Timeline Pressure", level: "Moderate-high risk", pct: 70, color: "#FAA51A" },
    { dim: "Adverse Selection", level: "Moderate risk", pct: 55, color: "#FAA51A" },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
        Qualtrics Co-Invest Syndication — Deal Anatomy
      </p>

      {/* Deal structure */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Deal Structure
        </p>
        <div className="flex items-center gap-2 mb-2">
          <div className="flex-1 rounded-md bg-[#2294BD] px-3 py-2 text-center">
            <p className="text-white text-[10px] font-bold uppercase tracking-wider">Silver Lake</p>
            <p className="text-white/80 text-[9px]">Lead Sponsor</p>
          </div>
          <span className="text-[#9A918A] text-xs font-bold">+</span>
          <div className="flex-1 rounded-md bg-[#1A7A9E] px-3 py-2 text-center">
            <p className="text-white text-[10px] font-bold uppercase tracking-wider">CPP Investments</p>
            <p className="text-white/80 text-[9px]">Co-Lead</p>
          </div>
        </div>
        <div className="rounded-md border border-[#E8DDD4] bg-[#FAF8F5] px-3 py-2 text-center">
          <p className="text-[11px] font-bold text-[#1A1A1A]">$1.75B equity commitment</p>
          <p className="text-[10px] text-[#9A918A] mt-0.5">+ co-investors syndicated into the deal alongside lead sponsors</p>
        </div>
      </div>

      {/* Split view: gains vs accepts */}
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-[#2A9D60]/30 bg-[#2A9D60]/5 p-3">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#2A9D60] mb-2">
            What You Gain
          </p>
          <div className="space-y-2">
            {gains.map((g, i) => (
              <div key={i} className="rounded-md bg-white border border-[#E8DDD4] px-2.5 py-2">
                <p className="text-[11px] font-semibold text-[#1A1A1A]">{g.label}</p>
                <p className="text-[10px] text-[#9A918A] leading-snug mt-0.5">{g.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-[#D9532B]/30 bg-[#D9532B]/5 p-3">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#D9532B] mb-2">
            What You Accept
          </p>
          <div className="space-y-2">
            {accepts.map((a, i) => (
              <div key={i} className="rounded-md bg-white border border-[#E8DDD4] px-2.5 py-2">
                <p className="text-[11px] font-semibold text-[#1A1A1A]">{a.label}</p>
                <p className="text-[10px] text-[#9A918A] leading-snug mt-0.5">{a.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Risk dimensions */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Co-Invest Risk Dimensions
        </p>
        <div className="space-y-2">
          {riskDims.map((r, i) => (
            <div key={i}>
              <div className="flex items-center justify-between mb-1">
                <p className="text-[11px] font-semibold text-[#1A1A1A]">{r.dim}</p>
                <span
                  className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full"
                  style={{ backgroundColor: `${r.color}15`, color: r.color }}
                >
                  {r.level}
                </span>
              </div>
              <div className="relative h-3 rounded-full bg-[#E8DDD4] overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{ width: `${r.pct}%`, backgroundColor: r.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key insight */}
      <div className="rounded-lg bg-[#2294BD]/10 border border-[#2294BD]/30 px-3 py-2.5">
        <span className="text-[9px] font-bold uppercase tracking-wider text-[#2294BD] mr-1.5">
          Key insight
        </span>
        <span className="text-[11px] text-[#404040]">
          Syndication is about concentration management and deal size, not necessarily weak conviction — LPs must weigh fee savings against single-name risk and compressed diligence timelines
        </span>
      </div>
    </div>
  );
}
