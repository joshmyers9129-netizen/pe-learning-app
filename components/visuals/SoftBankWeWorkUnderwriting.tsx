/**
 * SoftBankWeWorkUnderwriting
 * Illustrates SoftBank Vision Fund's underwriting failure with WeWork — the
 * misclassification of a real-estate operator as a technology platform and
 * the collapse from $47B valuation through IPO withdrawal.
 * Used in: Day 34 (underwriting discipline and business-model classification).
 */
export default function SoftBankWeWorkUnderwriting() {
  const timeline = [
    { date: "2017", event: "SoftBank initial investment", value: null, color: "#2294BD" },
    { date: "Jan 2019", event: "Peak valuation", value: "$47B", color: "#2A9D60" },
    { date: "Aug 2019", event: "S-1 filed", value: null, color: "#9A918A" },
    { date: "Sep 2019", event: "IPO withdrawn", value: null, color: "#D9532B" },
    { date: "Post-2019", event: "Billions written down", value: null, color: "#D9532B" },
  ];

  const classified = [
    "Technology platform",
    "Network effects",
    "Software-like multiples (20x+ revenue)",
  ];

  const actual = [
    "Real estate operator",
    "Long-term lease liabilities",
    "Capital-intensive, negative unit economics",
  ];

  const ebitdaStripped = [
    { label: "Rent expense", color: "#D9532B" },
    { label: "Build-out costs", color: "#D9532B" },
    { label: "Operating costs", color: "#D9532B" },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
        SoftBank Vision Fund & WeWork — Underwriting Failure
      </p>

      {/* Side-by-side classification */}
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#2294BD] mb-2">
            How WeWork Was Classified
          </p>
          <ul className="space-y-1.5">
            {classified.map((item) => (
              <li key={item} className="flex items-start gap-1.5">
                <span className="text-[10px] text-[#2294BD] mt-[2px]">●</span>
                <span className="text-[11px] text-[#404040]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#D9532B] mb-2">
            What WeWork Actually Was
          </p>
          <ul className="space-y-1.5">
            {actual.map((item) => (
              <li key={item} className="flex items-start gap-1.5">
                <span className="text-[10px] text-[#D9532B] mt-[2px]">●</span>
                <span className="text-[11px] text-[#404040]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Investment timeline */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-3">
          Investment Timeline
        </p>
        <div className="space-y-2">
          {timeline.map((t) => (
            <div key={t.date} className="flex items-center gap-2">
              <div
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: t.color }}
              />
              <span className="text-[11px] font-semibold text-[#404040] w-[70px] flex-shrink-0">
                {t.date}
              </span>
              <span className="text-[11px] text-[#404040] flex-1">{t.event}</span>
              {t.value && (
                <span
                  className="text-[11px] font-bold flex-shrink-0"
                  style={{ color: t.color }}
                >
                  {t.value}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Community-adjusted EBITDA */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-1">
          &quot;Community-Adjusted EBITDA&quot;
        </p>
        <p className="text-[10px] text-[#9A918A] mb-2">
          WeWork&apos;s custom metric stripped out major real costs:
        </p>
        <div className="space-y-1.5">
          {ebitdaStripped.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span className="text-[11px] text-[#D9532B]">✕</span>
              <span className="text-[11px] text-[#404040]">{item.label}</span>
              <span className="text-[9px] text-[#9A918A]">— excluded from metric</span>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-[#9A918A] mt-2 italic">
          Removing these costs turned operating losses into apparent profitability.
        </p>
      </div>

      {/* Callout */}
      <div className="rounded-lg bg-[#2294BD]/10 border border-[#2294BD]/30 px-3 py-2.5">
        <span className="text-[9px] font-bold uppercase tracking-wider text-[#2294BD] mr-1.5">
          Key insight
        </span>
        <span className="text-[11px] text-[#404040]">
          Business-model misclassification is a fundamental underwriting error — applying technology
          multiples to a real-estate business produces valuations that cannot survive public scrutiny.
        </span>
      </div>
    </div>
  );
}
