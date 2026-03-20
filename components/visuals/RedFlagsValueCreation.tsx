/**
 * RedFlagsValueCreation
 * Alert-style cards for GP presentation red flags.
 * Used in: Day 9 (value creation).
 */
export default function RedFlagsValueCreation() {
  const flags = [
    {
      pattern: "\"We grew EBITDA 90% across the portfolio\"",
      indicates: "Significant bolt-on acquisition component inflating the aggregate",
      ask: "What is the organic EBITDA growth rate controlling for acquired EBITDA?",
    },
    {
      pattern: "\"Our operating partners drove significant value\"",
      indicates: "Operating partners are board advisors, not functional improvement resources",
      ask: "Which operating partner was most involved in the Fund III exit with the best EBITDA improvement, and what did they specifically do?",
    },
    {
      pattern: "\"We generated 2.8x MOIC through operational improvement\"",
      indicates: "Multiple expansion, debt paydown, or both contributed meaningfully; EBITDA growth may be secondary",
      ask: "Can you show the value bridge for each exit decomposing MOIC between EBITDA growth, multiple change, and debt paydown?",
    },
    {
      pattern: "\"Our portfolio companies outperform their sector peers\"",
      indicates: "Sector selection, not GP value add, may be the explanatory variable",
      ask: "For your top three exits, how did the company's EBITDA growth compare to the organic growth rate of sector peers?",
    },
    {
      pattern: "\"We replaced management teams in 70% of deals\"",
      indicates: "Management replacement is disruptive and costly; claim conflates correlation with causation",
      ask: "In the 30% of cases where you retained incumbent management, how did returns compare?",
    },
  ];

  return (
    <div className="my-3 space-y-2.5">
      {flags.map((f, i) => (
        <div key={i} className="rounded-xl border border-[#D9532B]/20 bg-white overflow-hidden shadow-sm">
          {/* GP claim header */}
          <div className="bg-gradient-to-r from-[#D9532B]/8 to-transparent px-4 py-2.5 border-b border-[#D9532B]/10">
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 rounded-full bg-[#D9532B]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-[#D9532B] text-[10px] font-bold">!</span>
              </div>
              <p className="text-[12px] font-semibold text-[#1A1A1A] italic leading-snug">{f.pattern}</p>
            </div>
          </div>

          <div className="p-3.5">
            {/* What it may indicate */}
            <div className="mb-2.5">
              <p className="text-[9px] font-bold uppercase tracking-wider text-[#D9532B] mb-0.5">What this may indicate</p>
              <p className="text-[11px] text-[#404040] leading-snug">{f.indicates}</p>
            </div>

            {/* Better question */}
            <div className="rounded-lg bg-[#2294BD]/6 border border-[#2294BD]/15 px-3 py-2">
              <p className="text-[9px] font-bold uppercase tracking-wider text-[#2294BD] mb-0.5">Better question to ask</p>
              <p className="text-[11px] text-[#1A1A1A] leading-snug">{f.ask}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
