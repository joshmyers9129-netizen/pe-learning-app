/**
 * SquareIPORatchet
 * Shows how Square's IPO ratchet protection for Series E investors shifted
 * dilution costs to common holders and earlier investors when the IPO priced
 * below the private valuation.
 * Used in: Day 32 (ratchet protection and anti-dilution mechanics).
 */
export default function SquareIPORatchet() {
  const timeline = [
    { date: "Oct 2014", event: "Series E raised", value: "$6.0B", color: "#2A9D60" },
    { date: "Nov 2015", event: "IPO at $9/share", value: "~$2.9B", color: "#D9532B" },
  ];

  const stakeholders = [
    {
      label: "Series E Investors",
      note: "Ratchet-protected",
      impact: "~Same economics",
      barWidth: 90,
      color: "#2A9D60",
    },
    {
      label: "Earlier Investors",
      note: "No ratchet",
      impact: "Diluted",
      barWidth: 55,
      color: "#D9532B",
    },
    {
      label: "Employees & Founders",
      note: "Common holders",
      impact: "Absorbed cost",
      barWidth: 40,
      color: "#D9532B",
    },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
        Square IPO — Ratchet Protection in Action (2015)
      </p>

      {/* Valuation drop */}
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-[#E8DDD4] bg-white p-3 text-center">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-1">
            Private Valuation (Series E)
          </p>
          <p className="text-2xl font-bold text-[#2A9D60]">$6.0B</p>
          <p className="text-[10px] text-[#9A918A] mt-0.5">October 2014</p>
        </div>
        <div className="rounded-lg border border-[#E8DDD4] bg-white p-3 text-center">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-1">
            IPO Valuation
          </p>
          <p className="text-2xl font-bold text-[#D9532B]">~$2.9B</p>
          <p className="text-[10px] text-[#9A918A] mt-0.5">November 2015 at $9/share</p>
        </div>
      </div>

      {/* Timeline */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-3">
          Timeline
        </p>
        <div className="relative flex justify-between items-center">
          <div className="absolute top-[10px] left-0 right-0 h-[2px] bg-[#E8DDD4]" />
          {timeline.map((t) => (
            <div key={t.date} className="relative text-center z-10">
              <div
                className="w-5 h-5 rounded-full mx-auto border-2 border-white"
                style={{ backgroundColor: t.color }}
              />
              <p className="text-[10px] font-semibold text-[#404040] mt-1">{t.date}</p>
              <p className="text-[9px] text-[#9A918A]">{t.event}</p>
              <p className="text-[11px] font-bold" style={{ color: t.color }}>
                {t.value}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-3 text-center">
          <span className="text-[10px] font-semibold text-[#D9532B]">
            Ratchet triggered — IPO price below Series E price
          </span>
        </div>
      </div>

      {/* Stakeholder impact bar chart */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Outcome by Stakeholder (Relative Value Retention)
        </p>
        <div className="space-y-2">
          {stakeholders.map((s) => (
            <div key={s.label} className="flex items-center gap-2">
              <div className="w-[120px] flex-shrink-0">
                <p className="text-[11px] font-semibold text-[#404040]">{s.label}</p>
                <p className="text-[9px] text-[#9A918A]">{s.note}</p>
              </div>
              <div className="flex-1 relative h-5 rounded bg-[#FAF8F5]">
                <div
                  className="absolute inset-y-0 left-0 rounded"
                  style={{
                    width: `${s.barWidth}%`,
                    backgroundColor: s.color,
                  }}
                />
              </div>
              <span
                className="text-[11px] font-semibold w-[90px] text-right"
                style={{ color: s.color }}
              >
                {s.impact}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Callout */}
      <div className="rounded-lg bg-[#2294BD]/10 border border-[#2294BD]/30 px-3 py-2.5">
        <span className="text-[9px] font-bold uppercase tracking-wider text-[#2294BD] mr-1.5">
          Key insight
        </span>
        <span className="text-[11px] text-[#404040]">
          The same IPO price produced different outcomes for different security holders based on the terms each negotiated.
        </span>
      </div>
    </div>
  );
}
