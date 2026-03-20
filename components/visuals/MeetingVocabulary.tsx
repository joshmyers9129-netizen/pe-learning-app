/**
 * MeetingVocabulary
 * Glossary-style cards for fund model terminology.
 * Used in: Day 2 (fund model vocabulary).
 */
export default function MeetingVocabulary() {
  const terms = [
    { term: "Committed Capital", def: "Total LP obligations, including uncalled", day: "Day 1", color: "#2294BD" },
    { term: "Paid-In Capital", def: "LP capital actually drawn to date", day: "Day 1", color: "#2294BD" },
    { term: "Invested Capital", def: "Capital deployed into portfolio companies (paid-in minus fees)", day: "Day 1", color: "#2294BD" },
    { term: "Follow-On Reserve", def: "Committed capital reserved for subsequent investments in existing portfolio companies", day: "Day 1", color: "#2294BD" },
    { term: "NAV", def: "GP-determined fair value of the remaining portfolio per ASC 820 / IPEV guidelines", day: "Day 5", color: "#FAA51A" },
    { term: "TVPI", def: "(Distributions + NAV) / paid-in; the all-in value multiple", day: "Day 5", color: "#FAA51A" },
    { term: "DPI", def: "Distributions / paid-in; the only confirmed performance figure", day: "Day 5", color: "#FAA51A" },
    { term: "RVPI", def: "NAV / paid-in; the estimated, unrealized component of TVPI", day: "Day 5", color: "#FAA51A" },
    { term: "Gross IRR", def: "Fund-level return before management fees and carry", day: "Day 4", color: "#D9532B" },
    { term: "Net IRR", def: "LP-level return after all fees and carry; the only LP-comparable figure", day: "Day 4", color: "#D9532B" },
  ];

  return (
    <div className="my-3 grid grid-cols-2 gap-2">
      {terms.map((t, i) => (
        <div key={i} className="rounded-lg border border-[#E8DDD4] bg-white shadow-sm overflow-hidden flex items-stretch">
          <div className="w-1 flex-shrink-0" style={{ backgroundColor: t.color }} />
          <div className="flex-1 px-3 py-2">
            <div className="flex items-center justify-between mb-0.5">
              <p className="text-[12px] font-bold text-[#1A1A1A]">{t.term}</p>
              <span className="text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-[#F5F0EB] text-[#9A918A]">{t.day}</span>
            </div>
            <p className="text-[11px] text-[#404040] leading-snug">{t.def}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
