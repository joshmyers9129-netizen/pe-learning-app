/**
 * KraftHeinzValueCreation
 * Timeline and two-panel comparison showing how Kraft Heinz's aggressive cost-cutting appeared to
 * create value but ultimately destroyed brand equity, culminating in a $15.4B writedown.
 * Used in: Day 9 (value creation — margin improvement vs. durable value).
 */
export default function KraftHeinzValueCreation() {
  const timeline = [
    {
      year: "2015",
      event: "3G Capital & Berkshire merge Kraft + Heinz",
      detail: "Combination creates 5th-largest food company globally",
      color: "#2294BD",
    },
    {
      year: "2015–2018",
      event: "Aggressive zero-based budgeting",
      detail: "Deep cost cuts across R&D, marketing, and headcount drive margin expansion",
      color: "#2A9D60",
    },
    {
      year: "2019",
      event: "$15.4B writedown",
      detail: "Brand deterioration becomes visible; SEC investigation disclosed; dividend cut",
      color: "#D9532B",
    },
  ];

  const appeared = [
    { metric: "Operating Margins", detail: "Rose from ~20% to ~26%" },
    { metric: "Cost Savings", detail: "Billions in documented cuts" },
    { metric: "EBITDA Growth", detail: "Short-term improvement on paper" },
    { metric: "Efficiency Narrative", detail: "\"World-class operator\" reputation" },
  ];

  const reality = [
    { metric: "R&D Spending", detail: "Cut to fraction of peers" },
    { metric: "Brand Equity", detail: "Consumer perception eroding" },
    { metric: "Revenue Trend", detail: "Organic sales declining" },
    { metric: "Competitive Position", detail: "Lost share to private label and insurgent brands" },
  ];

  return (
    <div className="my-3 space-y-3">
      {/* Timeline */}
      <div className="rounded-xl border border-[#E8DDD4] bg-white shadow-sm overflow-hidden">
        <div className="px-4 py-2 bg-[#FAF8F5] border-b border-[#E8DDD4]">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#404040]">Timeline</p>
        </div>
        <div className="px-4 py-3">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-[9px] top-3 bottom-3 w-0.5 bg-[#E8DDD4]" />
            <div className="space-y-4">
              {timeline.map((t, i) => (
                <div key={i} className="flex items-start gap-3 relative">
                  <div
                    className="w-[19px] h-[19px] rounded-full flex items-center justify-center flex-shrink-0 z-10"
                    style={{ backgroundColor: `${t.color}18`, border: `2px solid ${t.color}` }}
                  >
                    <span className="text-[8px] font-bold" style={{ color: t.color }}>
                      {i + 1}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span
                        className="text-[10px] font-bold px-1.5 py-0.5 rounded"
                        style={{ backgroundColor: `${t.color}12`, color: t.color }}
                      >
                        {t.year}
                      </span>
                      <span className="text-[11px] font-semibold text-[#1A1A1A]">{t.event}</span>
                    </div>
                    <p className="text-[10px] text-[#404040] leading-snug">{t.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Two-panel comparison */}
      <div className="grid grid-cols-2 gap-2.5">
        {/* Left: What looked like value creation */}
        <div className="rounded-xl border border-[#2A9D60]/20 bg-white shadow-sm overflow-hidden">
          <div className="px-3.5 py-2 bg-gradient-to-r from-[#2A9D60]/8 to-transparent border-b border-[#2A9D60]/15">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#2A9D60]/15 flex items-center justify-center">
                <span className="text-[#2A9D60] text-[9px] font-bold">+</span>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#2A9D60]">
                What Looked Like Value Creation
              </p>
            </div>
          </div>
          <div className="p-3 space-y-2">
            {appeared.map((a, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2A9D60] mt-1.5 flex-shrink-0" />
                <div>
                  <p className="text-[11px] font-semibold text-[#1A1A1A]">{a.metric}</p>
                  <p className="text-[10px] text-[#404040] leading-snug">{a.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: What was actually happening */}
        <div className="rounded-xl border border-[#D9532B]/20 bg-white shadow-sm overflow-hidden">
          <div className="px-3.5 py-2 bg-gradient-to-r from-[#D9532B]/8 to-transparent border-b border-[#D9532B]/15">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#D9532B]/15 flex items-center justify-center">
                <span className="text-[#D9532B] text-[9px] font-bold">!</span>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#D9532B]">
                What Was Actually Happening
              </p>
            </div>
          </div>
          <div className="p-3 space-y-2">
            {reality.map((r, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D9532B] mt-1.5 flex-shrink-0" />
                <div>
                  <p className="text-[11px] font-semibold text-[#1A1A1A]">{r.metric}</p>
                  <p className="text-[10px] text-[#404040] leading-snug">{r.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Callout */}
      <div className="rounded-xl border border-[#D9532B]/25 bg-[#D9532B]/5 px-4 py-3">
        <div className="flex items-start gap-2.5">
          <div className="w-5 h-5 rounded-full bg-[#D9532B]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-[#D9532B] text-[10px] font-bold">!</span>
          </div>
          <p className="text-[11px] text-[#1A1A1A] leading-snug">
            Kraft Heinz is the canonical case for why margin improvement does not equal durable value creation.
            The allocator must ask: are cuts building or consuming the franchise?
          </p>
        </div>
      </div>
    </div>
  );
}
