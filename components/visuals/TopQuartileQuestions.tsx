/**
 * TopQuartileQuestions
 * Five numbered question cards for interrogating top-quartile claims.
 * Used in: Day 13 (benchmarking).
 */
export default function TopQuartileQuestions() {
  const questions = [
    {
      q: "What is the DPI?",
      reveals: "How much of the quartile result is confirmed cash vs. interim marks? A top-quartile fund with DPI 0.4x at year 7 has not yet confirmed the majority of its performance.",
    },
    {
      q: "What is the PME vs. a relevant public benchmark?",
      reveals: "Did the fund actually outperform the LP's liquid alternative on a cash-flow-adjusted basis? Quartile rank cannot answer this.",
    },
    {
      q: "What is the unrealized share of TVPI?",
      reveals: "If unrealized is >60% of TVPI past year 6, the headline result is substantially dependent on GP mark quality.",
    },
    {
      q: "What is the peer set composition?",
      reveals: "Are the 'peers' genuinely comparable — same vintage year, same size range, same strategy focus? Or is the fund comparing favorably against a diluted peer universe?",
    },
    {
      q: "What is the concentration of returns?",
      reveals: "Is the top-quartile result driven by broad portfolio performance or concentrated in one or two outlier deals? Concentration reduces the repeatability inference.",
    },
  ];

  return (
    <div className="my-3 space-y-2">
      {questions.map((q, i) => (
        <div key={i} className="rounded-xl border border-[#E8DDD4] bg-white shadow-sm overflow-hidden flex items-stretch">
          <div className="w-12 flex-shrink-0 bg-gradient-to-b from-[#FAA51A] to-[#E8940A] flex items-center justify-center">
            <span className="text-white text-lg font-bold">{i + 1}</span>
          </div>
          <div className="flex-1 p-3">
            <p className="text-[13px] font-bold text-[#1A1A1A] mb-1">{q.q}</p>
            <p className="text-[11px] text-[#404040] leading-snug">{q.reveals}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
