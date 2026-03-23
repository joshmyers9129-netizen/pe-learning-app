/**
 * SequoiaWhatsAppOwnership
 * Shows the economics of Sequoia's WhatsApp investment and the ownership
 * conversion framework that turns a famous logo into a fund-level case study.
 * Used in: Day 29 (Sequoia WhatsApp ownership concentration case study).
 */
export default function SequoiaWhatsAppOwnership() {
  const timeline = [
    {
      year: "2011",
      event: "Sequoia partners with WhatsApp",
      detail: "Early investment when messaging was not yet consensus; limited competing interest",
      color: "bg-[#2294BD]",
    },
    {
      year: "2011–2013",
      event: "Follow-on investments",
      detail: "Sequoia increased position across subsequent rounds; maintained ownership discipline",
      color: "bg-[#2A9D60]",
    },
    {
      year: "Feb 2014",
      event: "Facebook acquires WhatsApp for ~$19B",
      detail: "Sequoia's stake valued at approximately $3.5B at acquisition",
      color: "bg-[#7C5CBF]",
    },
  ];

  const conversionFramework = [
    {
      step: "Famous Logo",
      color: "bg-[#9A918A]",
      desc: "The company name that appears in marketing materials",
      question: "Was the firm actually invested, or just associated?",
    },
    {
      step: "Entry Ownership",
      color: "bg-[#2294BD]",
      desc: "Initial stake acquired at first investment",
      question: "How large was the initial position relative to the round and fund size?",
    },
    {
      step: "Dilution Events",
      color: "bg-[#D9532B]",
      desc: "Subsequent rounds, option pools, and conversions that reduce ownership",
      question: "Did the firm participate pro rata? How much ownership was lost?",
    },
    {
      step: "Retained Stake",
      color: "bg-[#FAA51A]",
      desc: "Actual ownership percentage at exit after all dilution",
      question: "What was the final ownership at exit — not entry?",
    },
    {
      step: "Fund-Level Impact",
      color: "bg-[#2A9D60]",
      desc: "Dollar return relative to fund size, driving DPI and MOIC",
      question: "Did retained ownership generate enough dollars to move fund-level returns?",
    },
  ];

  const fiveQuestions = [
    "What was the entry ownership percentage, and at what valuation?",
    "How many dilution events occurred between entry and exit?",
    "Did the firm maintain or increase its position through follow-on rounds?",
    "What was the retained ownership at exit, and what dollar value did that represent?",
    "Was the dollar outcome large enough relative to fund size to drive fund-level economics?",
  ];

  const metrics = [
    { label: "Entry", value: "2011", sub: "Partnered early" },
    { label: "Exit Event", value: "2014", sub: "Facebook acquisition" },
    { label: "Exit Value", value: "~$3.5B", sub: "Sequoia stake" },
    { label: "Holding Period", value: "~3 yrs", sub: "Entry to exit" },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
        Sequoia / WhatsApp — Ownership Concentration & Fund-Level Impact
      </p>

      {/* Key metrics */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Investment Summary
        </p>
        <div className="flex gap-2">
          {metrics.map((m) => (
            <div key={m.label} className="flex-1 rounded-lg bg-[#FAF8F5] p-2 text-center">
              <p className="text-[9px] font-bold uppercase tracking-wider text-[#9A918A]">
                {m.label}
              </p>
              <p className="text-[14px] font-bold text-[#1A1A1A]">{m.value}</p>
              <p className="text-[8px] text-[#9A918A]">{m.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Deal Timeline
        </p>
        <div className="space-y-0">
          {timeline.map((item, i) => (
            <div key={item.year} className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className={`w-3 h-3 rounded-full ${item.color} flex-shrink-0`} />
                {i < timeline.length - 1 && (
                  <div className="w-px flex-1 bg-[#E8DDD4] min-h-[24px]" />
                )}
              </div>
              <div className="pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-[#1A1A1A]">{item.year}</span>
                  <span className="text-[11px] font-semibold text-[#404040]">{item.event}</span>
                </div>
                <p className="text-[10px] text-[#9A918A]">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ownership conversion framework */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Ownership Conversion Framework: Logo to Fund-Level Impact
        </p>
        <div className="flex gap-1 mb-3">
          {conversionFramework.map((s, i) => (
            <div key={s.step} className={`flex-1 ${s.color} rounded-lg px-2 py-2 relative`}>
              <p className="text-white text-[10px] font-bold leading-tight">{s.step}</p>
              {i < conversionFramework.length - 1 && (
                <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[6px] border-l-white/40 z-10" />
              )}
            </div>
          ))}
        </div>
        <div className="space-y-1.5">
          {conversionFramework.map((s) => (
            <div key={s.step} className="flex items-stretch rounded-lg border border-[#E8DDD4] bg-white shadow-sm overflow-hidden">
              <div className={`w-1.5 flex-shrink-0 ${s.color}`} />
              <div className="flex-1 p-2.5 flex items-center gap-3">
                <div className="w-28 flex-shrink-0">
                  <p className="text-[11px] font-bold text-[#1A1A1A]">{s.step}</p>
                  <p className="text-[10px] text-[#9A918A] leading-snug">{s.desc}</p>
                </div>
                <div className="flex-1 rounded bg-[#FAF8F5] px-2.5 py-1.5">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#2294BD] mr-1">
                    Key question
                  </span>
                  <span className="text-[10px] text-[#404040]">{s.question}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Five questions */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Five Questions to Convert Any Venture Logo Into an Ownership Case Study
        </p>
        <div className="space-y-1.5">
          {fiveQuestions.map((q, i) => (
            <div key={i} className="rounded bg-[#FAF8F5] px-2.5 py-2 flex items-start gap-2">
              <div className="w-4 h-4 rounded-full bg-[#2294BD] flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-[9px] text-white font-bold">{i + 1}</span>
              </div>
              <p className="text-[11px] text-[#404040] leading-snug">{q}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key insight callout */}
      <div className="rounded-lg bg-[#D9532B]/10 border border-[#D9532B]/30 px-3 py-2.5">
        <span className="text-[9px] font-bold uppercase tracking-wider text-[#D9532B] mr-1.5">
          Key insight
        </span>
        <span className="text-[11px] text-[#404040]">
          The outcome mattered at the fund level because retained ownership was large enough to
          drive economics &mdash; not just because the company was famous. A logo without meaningful
          retained ownership is a marketing asset, not a return driver.
        </span>
      </div>
    </div>
  );
}
