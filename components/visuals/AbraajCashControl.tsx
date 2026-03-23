/**
 * AbraajCashControl
 * Gap between polished performance reporting and cash-control reporting.
 * Failure chain from weak cash reporting to lost LP oversight.
 * Used in: Day 23 (Abraaj and cash-control reporting).
 */
export default function AbraajCashControl() {
  const performanceReporting = [
    { label: "NAV", detail: "Quarterly marks based on valuation models and comparable analysis" },
    { label: "IRR", detail: "Time-weighted return figure emphasizing growth trajectory" },
    { label: "MOIC", detail: "Multiple on invested capital highlighting value creation" },
    { label: "Narrative", detail: "Portfolio commentary, strategic milestones, market positioning" },
  ];

  const controlReporting = [
    { label: "Cash Location", detail: "Where is fund cash held — which accounts, which jurisdictions, which entities?" },
    { label: "Use of Proceeds", detail: "Has capital called from LPs been deployed for stated purposes?" },
    { label: "Commingling Check", detail: "Are fund assets segregated from GP operating accounts?" },
    { label: "Administrator Oversight", detail: "Does an independent administrator verify cash balances and flows?" },
  ];

  const failureChain = [
    { step: "1", label: "Weak Cash Reporting", detail: "No independent verification of cash location or movement", color: "#FAA51A" },
    { step: "2", label: "Unclear Use of Proceeds", detail: "Capital called from LPs deployed to undisclosed purposes", color: "#D9532B" },
    { step: "3", label: "Lost LP Oversight", detail: "LPs unable to distinguish legitimate deployment from misuse", color: "#8B0000" },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
        Abraaj — The Cash-Control Reporting Gap
      </p>

      {/* Performance vs Control reporting side by side */}
      <div className="grid grid-cols-2 gap-3">
        {/* Performance reporting */}
        <div className="rounded-xl border border-[#E8DDD4] bg-white shadow-sm overflow-hidden">
          <div className="flex items-stretch">
            <div className="w-1.5 flex-shrink-0 bg-[#2294BD]" />
            <div className="flex-1">
              <div className="px-3.5 py-2.5 border-b border-[#E8DDD4] bg-[#FAF8F5]">
                <p className="text-[12px] font-bold text-[#1A1A1A]">Performance Reporting</p>
                <p className="text-[10px] text-[#9A918A] mt-0.5">What LPs typically receive</p>
              </div>
              <div className="px-3.5 py-2.5 space-y-2">
                {performanceReporting.map((item, i) => (
                  <div key={i}>
                    <p className="text-[10px] font-bold text-[#2294BD]">{item.label}</p>
                    <p className="text-[11px] text-[#404040] leading-snug">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Control reporting */}
        <div className="rounded-xl border border-[#E8DDD4] bg-white shadow-sm overflow-hidden">
          <div className="flex items-stretch">
            <div className="w-1.5 flex-shrink-0 bg-[#D9532B]" />
            <div className="flex-1">
              <div className="px-3.5 py-2.5 border-b border-[#E8DDD4] bg-[#FAF8F5]">
                <p className="text-[12px] font-bold text-[#1A1A1A]">Control Reporting</p>
                <p className="text-[10px] text-[#D9532B] font-semibold mt-0.5">What was missing at Abraaj</p>
              </div>
              <div className="px-3.5 py-2.5 space-y-2">
                {controlReporting.map((item, i) => (
                  <div key={i}>
                    <p className="text-[10px] font-bold text-[#D9532B]">{item.label}</p>
                    <p className="text-[11px] text-[#404040] leading-snug">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Failure chain */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-3">
          Failure Chain — From Weak Reporting to Lost Oversight
        </p>
        <div className="space-y-0">
          {failureChain.map((s, i) => (
            <div key={i} className="flex gap-3">
              {/* Vertical line + dot */}
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: s.color }}>
                  <span className="text-white text-[10px] font-bold">{s.step}</span>
                </div>
                {i < failureChain.length - 1 && (
                  <div className="w-px flex-1 min-h-[16px]" style={{ backgroundColor: s.color }} />
                )}
              </div>
              {/* Content */}
              <div className="pb-3">
                <p className="text-[11px] font-bold text-[#1A1A1A]">{s.label}</p>
                <p className="text-[10px] text-[#404040] leading-snug">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* The gap visualization */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          The Reporting Gap Abraaj Exploited
        </p>
        <div className="flex h-7 rounded overflow-hidden mb-2">
          <div className="bg-[#2294BD] flex items-center justify-center" style={{ width: "70%" }}>
            <span className="text-[9px] text-white font-bold">Polished Performance Data</span>
          </div>
          <div className="bg-[#D9532B] flex items-center justify-center" style={{ width: "30%" }}>
            <span className="text-[9px] text-white font-bold">Cash Controls</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[9px] text-[#2294BD] font-semibold">Extensively reported</span>
          <span className="text-[9px] text-[#D9532B] font-semibold">Absent or unverified</span>
        </div>
      </div>

      {/* Key insight */}
      <div className="rounded-lg bg-[#D9532B]/10 border border-[#D9532B]/30 px-3 py-2.5">
        <span className="text-[9px] font-bold uppercase tracking-wider text-[#D9532B] mr-1.5">
          Key insight
        </span>
        <span className="text-[11px] text-[#404040]">
          Cash-location reporting can be more important than polished valuation commentary. Abraaj showed that a GP can deliver compelling performance narratives while cash is being misused — the gap was not in returns reporting but in basic cash-control oversight.
        </span>
      </div>
    </div>
  );
}
