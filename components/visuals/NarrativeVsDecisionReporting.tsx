/**
 * NarrativeVsDecisionReporting
 * Contrast cards showing weak narrative vs. strong decision-useful reporting.
 * Used in: Day 12 (reporting and monitoring).
 */
export default function NarrativeVsDecisionReporting() {
  const dimensions = [
    { dim: "Performance Explanation", weak: "Net IRR and TVPI headline only", strong: "Beginning-NAV to ending-NAV bridge with attribution" },
    { dim: "Portfolio Detail", weak: "Selected anecdotes on winners", strong: "Consistent company-level table with cost, fair value, and operating data" },
    { dim: "Cash-Flow Transparency", weak: "Cumulative totals only", strong: "Quarterly and cumulative contributions, distributions, and recallable amounts" },
    { dim: "Fee & Expense Disclosure", weak: "Bundled at high level", strong: "Granular breakout: management fee, fund expenses, broken-deal costs, offsets" },
    { dim: "Valuation Commentary", weak: "'Portfolio performing well'", strong: "Methodology notes, market calibration, and mark-movement explanation" },
    { dim: "Programme Usability", weak: "PDF-only, format changes quarterly", strong: "Structured data files with consistent identifiers" },
  ];

  return (
    <div className="my-3 space-y-2">
      {dimensions.map((d, i) => (
        <div key={i} className="rounded-lg border border-[#E8DDD4] bg-white shadow-sm overflow-hidden">
          <div className="bg-[#FAF8F5] px-4 py-1.5 border-b border-[#E8DDD4]">
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#404040]">{d.dim}</p>
          </div>
          <div className="grid grid-cols-2 divide-x divide-[#E8DDD4]">
            <div className="px-3.5 py-2.5 bg-[#D9532B]/3">
              <div className="flex items-center gap-1.5 mb-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D9532B]" />
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#D9532B]">Narrative-heavy</span>
              </div>
              <p className="text-[11px] text-[#404040] leading-snug">{d.weak}</p>
            </div>
            <div className="px-3.5 py-2.5 bg-[#2A9D60]/3">
              <div className="flex items-center gap-1.5 mb-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2A9D60]" />
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#2A9D60]">Decision-useful</span>
              </div>
              <p className="text-[11px] text-[#1A1A1A] leading-snug">{d.strong}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
