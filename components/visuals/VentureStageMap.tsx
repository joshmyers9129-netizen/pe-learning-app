/**
 * VentureStageMap
 * Pipeline visualization showing how risk, ownership, and evidence shift by stage.
 * Used in: Day 14 (venture capital).
 */
export default function VentureStageMap() {
  const stages = [
    {
      name: "Seed / Pre-Seed",
      color: "from-[#D9532B] to-[#B8421F]",
      accent: "#D9532B",
      uncertainty: "Can this become a real company?",
      evidence: "Founder quality, product insight, market thesis",
      ownership: "Highest",
      ownershipNote: "Small checks buy meaningful stakes",
      reserve: "High",
      portfolioCount: "30–80+",
      question: "Does the manager have real access and sparse-data judgment?",
    },
    {
      name: "Series A / Early",
      color: "from-[#FAA51A] to-[#E8940A]",
      accent: "#FAA51A",
      uncertainty: "Can early traction scale repeatably?",
      evidence: "Early commercial traction, customer adoption signals",
      ownership: "Moderate",
      ownershipNote: "First institutional round sets baseline",
      reserve: "Moderate–High",
      portfolioCount: "20–35",
      question: "Can the manager distinguish durable traction from noise?",
    },
    {
      name: "Series B / Breakout",
      color: "from-[#2294BD] to-[#1A7A9E]",
      accent: "#2294BD",
      uncertainty: "Can the company become a category leader?",
      evidence: "Revenue scale, retention, unit economics direction",
      ownership: "Lower",
      ownershipNote: "Larger rounds dilute more per dollar",
      reserve: "Moderate",
      portfolioCount: "15–25",
      question: "Is the manager disciplined on price and scaling evidence?",
    },
    {
      name: "Late-Stage / Pre-IPO",
      color: "from-[#7C5CBF] to-[#5E3FA3]",
      accent: "#7C5CBF",
      uncertainty: "Can the business exit at or above current valuation?",
      evidence: "Rich operating data, but mark sensitivity rises",
      ownership: "Lowest",
      ownershipNote: "Large checks, modest ownership",
      reserve: "Lower",
      portfolioCount: "10–20",
      question: "Is price discipline and exit-path realism strong enough?",
    },
  ];

  return (
    <div className="my-3">
      {/* Stage pipeline header */}
      <div className="flex gap-1 mb-4">
        {stages.map((s, i) => (
          <div key={i} className={`flex-1 bg-gradient-to-r ${s.color} rounded-lg px-3 py-2 relative`}>
            <p className="text-white text-[11px] font-bold leading-tight">{s.name}</p>
            <p className="text-white/70 text-[9px] mt-0.5">{s.portfolioCount} companies</p>
            {i < stages.length - 1 && (
              <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[6px] border-l-white/40 z-10" />
            )}
          </div>
        ))}
      </div>

      {/* Detail cards */}
      <div className="space-y-2">
        {stages.map((s, i) => (
          <div key={i} className="rounded-lg border border-[#E8DDD4] bg-white shadow-sm overflow-hidden">
            <div className="flex items-stretch">
              <div className={`w-1 flex-shrink-0 bg-gradient-to-b ${s.color}`} />
              <div className="flex-1 p-3">
                <p className="text-[12px] font-bold text-[#1A1A1A] mb-2">{s.name}</p>
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-wider text-[#9A918A] mb-0.5">Primary Uncertainty</p>
                    <p className="text-[11px] text-[#404040] leading-snug italic">{s.uncertainty}</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-wider text-[#9A918A] mb-0.5">Evidence at Entry</p>
                    <p className="text-[11px] text-[#404040] leading-snug">{s.evidence}</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-wider text-[#9A918A] mb-0.5">Ownership / Reserve</p>
                    <p className="text-[11px] text-[#404040] leading-snug">
                      <span className="font-medium" style={{ color: s.accent }}>{s.ownership}</span> — {s.ownershipNote}
                    </p>
                  </div>
                </div>
                <div className="mt-2 rounded bg-[#FAF8F5] px-2.5 py-1.5">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#2294BD] mr-1.5">Key question</span>
                  <span className="text-[11px] text-[#404040]">{s.question}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
