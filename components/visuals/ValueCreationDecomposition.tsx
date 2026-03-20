/**
 * ValueCreationDecomposition
 * Horizontal bar chart showing value creation sources with repeatability indicators.
 * Used in: Day 9 (value creation).
 */
export default function ValueCreationDecomposition() {
  const sources = [
    {
      label: "Organic Revenue Growth",
      desc: "Volume and customer-driven top-line expansion",
      repeatability: 4,
      question: "Is growth from market share gains or market tailwinds?",
      color: "bg-[#2294BD]",
    },
    {
      label: "Pricing Improvement",
      desc: "Same volume, higher revenue per unit",
      repeatability: 4,
      question: "Can the GP show a systematic pricing methodology?",
      color: "bg-[#2A9D60]",
    },
    {
      label: "Margin Improvement",
      desc: "Fixed cost cuts, procurement savings, headcount",
      repeatability: 1,
      question: "How much of the margin gain is repeatable in the next fund?",
      color: "bg-[#FAA51A]",
    },
    {
      label: "Acquisition-Driven",
      desc: "Bolt-on EBITDA added to the platform",
      repeatability: 3,
      question: "What is organic EBITDA growth after stripping out acquired EBITDA?",
      color: "bg-[#D9532B]",
    },
    {
      label: "Multiple Expansion",
      desc: "Higher exit multiple vs. entry",
      repeatability: 1,
      question: "Would returns still work at flat or compressed exit multiples?",
      color: "bg-[#7C5CBF]",
    },
  ];

  const dots = (n: number) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4].map((d) => (
          <div
            key={d}
            className={`w-2 h-2 rounded-full ${d <= n ? "bg-[#2A9D60]" : "bg-[#E8DDD4]"}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="my-3 space-y-2">
      {sources.map((s, i) => (
        <div key={i} className="rounded-lg border border-[#E8DDD4] bg-white overflow-hidden shadow-sm">
          <div className="flex items-stretch">
            {/* Color accent bar */}
            <div className={`w-1.5 flex-shrink-0 ${s.color}`} />

            <div className="flex-1 p-3">
              <div className="flex items-center justify-between mb-1.5">
                <div>
                  <p className="text-[13px] font-semibold text-[#1A1A1A]">{s.label}</p>
                  <p className="text-[11px] text-[#9A918A]">{s.desc}</p>
                </div>
                <div className="flex flex-col items-end gap-0.5">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#9A918A]">Repeatability</span>
                  {dots(s.repeatability)}
                </div>
              </div>
              <div className="rounded bg-[#FAF8F5] px-2.5 py-1.5">
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#2294BD] mr-1.5">Key question</span>
                <span className="text-[11px] text-[#404040]">{s.question}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
