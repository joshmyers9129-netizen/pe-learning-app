/**
 * NAVLoanRiseMap
 * Post-2022 rise in NAV loans as exits slowed, what NAV borrowing replaces,
 * and the allocator question of distribution quality.
 * Used in: Day 25 (NAV loans and distribution quality).
 */
export default function NAVLoanRiseMap() {
  const environmentShift = [
    { period: "Pre-2022", label: "Strong Exit Market", detail: "Active IPO pipeline, strategic M&A, sponsor-to-sponsor deals generating clean realizations", color: "#2A9D60" },
    { period: "2022–2023", label: "Exits Slow Sharply", detail: "Rising rates, valuation gaps, and IPO window closure reduce realization activity", color: "#FAA51A" },
    { period: "2023+", label: "NAV Loans Fill the Gap", detail: "GPs borrow against portfolio NAV to fund distributions, bridge liquidity, and extend hold periods", color: "#D9532B" },
  ];

  const replacements = [
    { traditional: "Asset Sales", navAlternative: "Borrow against unrealized value instead of selling", risk: "Portfolio remains concentrated; exit timing deferred" },
    { traditional: "Slower Distributions", navAlternative: "Accelerate cash to LPs via borrowing", risk: "LP cash flow looks healthy but is debt-funded" },
    { traditional: "GP-Led Solutions", navAlternative: "Use NAV facility rather than a continuation fund process", risk: "Less LP governance around the liquidity event" },
    { traditional: "Longer Duration", navAlternative: "Maintain distribution pace despite slower exits", risk: "Masks true fund maturity and realization progress" },
  ];

  const distributionSpectrum = [
    { source: "Trade Sale Proceeds", quality: 95, color: "#2A9D60", label: "Clean" },
    { source: "IPO Monetization", quality: 80, color: "#2A9D60", label: "Clean" },
    { source: "Dividend Recap", quality: 50, color: "#FAA51A", label: "Mixed" },
    { source: "NAV Loan-Funded", quality: 25, color: "#D9532B", label: "Leverage" },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
        NAV Loan Rise — Post-2022 Distribution Quality
      </p>

      {/* Environment shift timeline */}
      <div className="space-y-0">
        {environmentShift.map((item, i) => (
          <div key={i} className="flex gap-3">
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
              {i < environmentShift.length - 1 && (
                <div className="w-px flex-1 bg-[#E8DDD4] min-h-[24px]" />
              )}
            </div>
            <div className="pb-3">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-[#1A1A1A]">{item.period}</span>
                <span className="text-[11px] font-semibold" style={{ color: item.color }}>{item.label}</span>
              </div>
              <p className="text-[10px] text-[#9A918A]">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>

      {/* What NAV borrowing replaces */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          What NAV Borrowing Replaces
        </p>
        <div className="space-y-2">
          {replacements.map((r, i) => (
            <div key={i} className="rounded-lg border border-[#E8DDD4] overflow-hidden">
              <div className="grid grid-cols-3 divide-x divide-[#E8DDD4]">
                <div className="px-3 py-2 bg-[#FAF8F5]">
                  <p className="text-[9px] font-bold uppercase tracking-wider text-[#9A918A] mb-0.5">Traditional Path</p>
                  <p className="text-[11px] font-semibold text-[#1A1A1A]">{r.traditional}</p>
                </div>
                <div className="px-3 py-2">
                  <p className="text-[9px] font-bold uppercase tracking-wider text-[#2294BD] mb-0.5">NAV Loan Alternative</p>
                  <p className="text-[11px] text-[#404040] leading-snug">{r.navAlternative}</p>
                </div>
                <div className="px-3 py-2">
                  <p className="text-[9px] font-bold uppercase tracking-wider text-[#D9532B] mb-0.5">Hidden Risk</p>
                  <p className="text-[11px] text-[#404040] leading-snug">{r.risk}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Distribution quality spectrum */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-3">
          Distribution Quality Spectrum — Are Distributions From Realizations or Leverage?
        </p>
        <div className="space-y-2">
          {distributionSpectrum.map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-[130px] flex-shrink-0">
                <p className="text-[10px] font-bold text-[#1A1A1A]">{s.source}</p>
              </div>
              <div className="flex-1 h-5 bg-[#F5F0EB] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full flex items-center justify-end pr-2"
                  style={{ width: `${s.quality}%`, backgroundColor: s.color }}
                >
                  <span className="text-white text-[8px] font-bold uppercase tracking-wider">
                    {s.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-[9px] text-[#D9532B] font-semibold">Leverage-funded</span>
          <span className="text-[9px] text-[#2A9D60] font-semibold">Clean realization</span>
        </div>
      </div>

      {/* Allocator question */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-2 h-2 rounded-full bg-[#2294BD]" />
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#2294BD]">
            Key Allocator Question
          </p>
        </div>
        <p className="text-[11px] text-[#1A1A1A] leading-snug font-semibold">
          Are distributions funded by clean realizations — or by balance-sheet flexibility?
        </p>
        <p className="text-[10px] text-[#9A918A] mt-1 leading-snug">
          A fund reporting strong DPI may be returning capital through NAV borrowing rather than exits. Allocators should decompose distributions by source before treating them as evidence of realization skill.
        </p>
      </div>

      {/* Key insight */}
      <div className="rounded-lg bg-[#D9532B]/10 border border-[#D9532B]/30 px-3 py-2.5">
        <span className="text-[9px] font-bold uppercase tracking-wider text-[#D9532B] mr-1.5">
          Key insight
        </span>
        <span className="text-[11px] text-[#404040]">
          Distributions funded through NAV facilities should not be read the same as distributions from clean exits. One reflects realized value; the other reflects borrowed liquidity against unrealized marks.
        </span>
      </div>
    </div>
  );
}
