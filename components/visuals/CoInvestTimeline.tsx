/**
 * CoInvestTimeline
 * Visualizes the Qualtrics deal flow across three ownership phases (SAP acquisition, spin-out/IPO,
 * Silver Lake + CPP take-private) and highlights co-investment concentration risks.
 * Used in: Day 16 (co-investments — Qualtrics case study).
 */
export default function CoInvestTimeline() {
  const phases = [
    {
      year: "2018",
      event: "SAP Acquires Qualtrics",
      detail: "SAP buys Qualtrics for $8B just before its planned IPO",
      color: "#2294BD",
      icon: "1",
    },
    {
      year: "2021",
      event: "Qualtrics Spin-Out / IPO",
      detail: "SAP takes Qualtrics public; market cap reaches ~$27B at peak",
      color: "#2A9D60",
      icon: "2",
    },
    {
      year: "2023",
      event: "Silver Lake + CPP Take-Private",
      detail: "Consortium takes Qualtrics private again at $12.5B enterprise value",
      color: "#7C5CBF",
      icon: "3",
    },
  ];

  const risks = [
    {
      risk: "Single-Name Concentration",
      detail: "Co-investors hold a large, undiversified position in a single company",
      severity: 3,
    },
    {
      risk: "Tech Sector Correlation",
      detail: "Qualtrics correlates heavily with broader SaaS/tech multiples and sentiment",
      severity: 3,
    },
    {
      risk: "Limited Diversification Benefit",
      detail: "Large co-invest check offsets the diversification gained from the main fund",
      severity: 2,
    },
    {
      risk: "Valuation Re-Entry Risk",
      detail: "Take-private at $12.5B after $27B peak — significant markdown from highs",
      severity: 2,
    },
  ];

  const maxSeverity = 3;

  return (
    <div className="my-3 space-y-3">
      {/* Deal flow timeline */}
      <div className="rounded-xl border border-[#E8DDD4] bg-white shadow-sm overflow-hidden">
        <div className="px-4 py-2 bg-[#FAF8F5] border-b border-[#E8DDD4]">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#404040]">
            Qualtrics — Deal Flow Timeline
          </p>
        </div>
        <div className="px-4 py-3">
          {/* Horizontal timeline */}
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-[9px] left-8 right-8 h-0.5 bg-[#E8DDD4]" />
            <div className="grid grid-cols-3 gap-3 relative">
              {phases.map((p, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  {/* Node */}
                  <div
                    className="w-[19px] h-[19px] rounded-full flex items-center justify-center z-10 mb-2"
                    style={{ backgroundColor: `${p.color}18`, border: `2px solid ${p.color}` }}
                  >
                    <span className="text-[8px] font-bold" style={{ color: p.color }}>
                      {p.icon}
                    </span>
                  </div>
                  {/* Year badge */}
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded mb-1.5"
                    style={{ backgroundColor: `${p.color}12`, color: p.color }}
                  >
                    {p.year}
                  </span>
                  <p className="text-[11px] font-semibold text-[#1A1A1A] mb-0.5">{p.event}</p>
                  <p className="text-[10px] text-[#404040] leading-snug">{p.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Concentration risks */}
      <div className="rounded-xl border border-[#E8DDD4] bg-white shadow-sm overflow-hidden">
        <div className="px-4 py-2 bg-[#FAF8F5] border-b border-[#E8DDD4]">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#404040]">
            Co-Investment Risk Factors
          </p>
        </div>
        <div className="p-3 space-y-2">
          {risks.map((r, i) => (
            <div key={i} className="rounded-lg border border-[#E8DDD4] p-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <p className="text-[11px] font-semibold text-[#1A1A1A] mb-0.5">{r.risk}</p>
                  <p className="text-[10px] text-[#404040] leading-snug">{r.detail}</p>
                </div>
                {/* Severity meter */}
                <div className="flex-shrink-0 flex flex-col items-end">
                  <p className="text-[8px] font-bold uppercase tracking-wider text-[#9A918A] mb-1">Risk</p>
                  <div className="flex gap-0.5">
                    {Array.from({ length: maxSeverity }).map((_, j) => (
                      <div
                        key={j}
                        className="w-3 h-3 rounded-sm"
                        style={{
                          backgroundColor: j < r.severity ? "#D9532B" : "#E8DDD4",
                          opacity: j < r.severity ? 0.2 + (j + 1) * (0.8 / maxSeverity) : 1,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Aggregate risk meter */}
      <div className="rounded-xl border border-[#E8DDD4] bg-white shadow-sm overflow-hidden">
        <div className="px-4 py-2.5 bg-[#FAF8F5] border-b border-[#E8DDD4]">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#404040]">
            Overall Concentration Risk
          </p>
        </div>
        <div className="px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <div className="w-full h-3 rounded-full bg-[#E8DDD4] overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: "82%",
                    background: "linear-gradient(90deg, #FAA51A, #D9532B)",
                  }}
                />
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-[9px] text-[#9A918A]">Low</span>
                <span className="text-[9px] text-[#9A918A]">Moderate</span>
                <span className="text-[9px] font-bold text-[#D9532B]">High</span>
              </div>
            </div>
            <div className="flex-shrink-0 text-right">
              <p className="text-[16px] font-bold text-[#D9532B]">High</p>
              <p className="text-[9px] text-[#404040]">Concentration</p>
            </div>
          </div>
        </div>
      </div>

      {/* Callout */}
      <div className="rounded-xl border border-[#7C5CBF]/25 bg-[#7C5CBF]/5 px-4 py-3">
        <div className="flex items-start gap-2.5">
          <div className="w-5 h-5 rounded-full bg-[#7C5CBF]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-[#7C5CBF] text-[10px] font-bold">!</span>
          </div>
          <p className="text-[11px] text-[#1A1A1A] leading-snug">
            Co-investment at scale reduces fee drag but concentrates single-name and sector risk.
            Qualtrics showed that size-driven syndication does not remove fundamental risk — it merely
            shifts it from fee cost to concentration cost.
          </p>
        </div>
      </div>
    </div>
  );
}
