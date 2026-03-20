/**
 * BenchmarkingToolkit
 * Four tools for PE performance assessment shown as tool cards.
 * Used in: Day 13 (benchmarking).
 */
export default function BenchmarkingToolkit() {
  const tools = [
    {
      name: "Peer Quartile Ranking",
      question: "How did the fund perform vs. PE peers in the same vintage and strategy?",
      limitation: "Does not compare to public alternatives; affected by survivor bias and peer-set composition",
      icon: "Q",
      color: "from-[#2294BD] to-[#1A7A9E]",
    },
    {
      name: "Vintage-Year Comparison",
      question: "How does fund performance look in the context of its macro and market environment?",
      limitation: "Does not isolate skill from vintage tailwind/headwind",
      icon: "V",
      color: "from-[#FAA51A] to-[#E8940A]",
    },
    {
      name: "PME (Public Market Equivalent)",
      question: "Did the fund outperform a liquid public-market alternative given the same cash-flow timing?",
      limitation: "Depends on benchmark choice; does not eliminate strategy, leverage, or valuation quality concerns",
      icon: "P",
      color: "from-[#D9532B] to-[#B8421F]",
    },
    {
      name: "Realized vs. Unrealized Split",
      question: "How much of the reported return is confirmed cash vs. GP-estimated marks?",
      limitation: "Does not assess whether remaining marks are accurate; requires deal-level investigation",
      icon: "R",
      color: "from-[#7C5CBF] to-[#5E3FA3]",
    },
  ];

  return (
    <div className="my-3 grid grid-cols-2 gap-2.5">
      {tools.map((t, i) => (
        <div key={i} className="rounded-xl border border-[#E8DDD4] bg-white shadow-sm overflow-hidden">
          <div className={`bg-gradient-to-r ${t.color} px-4 py-3 flex items-center gap-3`}>
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm font-bold">{t.icon}</span>
            </div>
            <p className="text-white text-[12px] font-bold leading-tight">{t.name}</p>
          </div>
          <div className="p-3 space-y-2">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-wider text-[#2294BD] mb-0.5">Primary question</p>
              <p className="text-[11px] text-[#1A1A1A] leading-snug">{t.question}</p>
            </div>
            <div className="rounded bg-[#FAF8F5] px-2.5 py-1.5">
              <p className="text-[9px] font-bold uppercase tracking-wider text-[#D9532B] mb-0.5">Key limitation</p>
              <p className="text-[10px] text-[#404040] leading-snug">{t.limitation}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
