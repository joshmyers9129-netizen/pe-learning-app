/**
 * BDCDiscountCrisis2020
 * Visualises the March 2020 BDC discount-to-NAV crisis and Golub Capital's
 * PIK migration sequence from performing loan to non-accrual. Highlights the
 * pricing lag between public and private credit markets.
 * Used in: Day 43 (BDC discount crisis of March 2020 + Golub PIK migration).
 */
export default function BDCDiscountCrisis2020() {
  const bdcDiscounts = [
    { name: "Golub Capital BDC", discount: 50, highlight: true },
    { name: "Ares Capital", discount: 45 },
    { name: "Sector Average", discount: 45, dashed: true },
    { name: "Blue Owl", discount: 40 },
  ];

  const golubSequence = [
    { stage: "Performing", value: "Full par", color: "#2A9D60", detail: "Cash-pay interest current" },
    { stage: "PIK Feature", value: "$1.4B", color: "#2294BD", detail: "Interest paid-in-kind, accruing to principal" },
    { stage: "Amendment", value: "Restructured", color: "#9A918A", detail: "Terms modified, covenants reset" },
    { stage: "Non-Accrual", value: "$99M at cost", color: "#D9532B", detail: "Income recognition suspended" },
    { stage: "Fair Value Markdown", value: "$61M FV", color: "#D9532B", detail: "~38% write-down from cost basis" },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
        Day 43 — BDC Discount Crisis of March 2020
      </p>

      {/* BDC Discount bars */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          March 2020 Discounts to NAV
        </p>
        <div className="space-y-2">
          {bdcDiscounts.map((b) => (
            <div key={b.name} className="flex items-center gap-2">
              <div className="w-[120px] flex-shrink-0">
                <p
                  className={`text-[11px] ${
                    b.highlight ? "font-bold text-[#2294BD]" : b.dashed ? "italic text-[#9A918A]" : "text-[#404040]"
                  }`}
                >
                  {b.name}
                </p>
              </div>
              <div className="flex-1 relative h-5 rounded bg-[#FAF8F5]">
                <div
                  className={`absolute inset-y-0 left-0 rounded ${
                    b.highlight ? "bg-[#2294BD]" : "bg-[#D9532B]/70"
                  }`}
                  style={{
                    width: `${(b.discount / 60) * 100}%`,
                    ...(b.dashed
                      ? {
                          background: "repeating-linear-gradient(90deg, #D9532B 0, #D9532B 4px, transparent 4px, transparent 8px)",
                          opacity: 0.5,
                        }
                      : {}),
                  }}
                />
              </div>
              <span
                className={`text-[11px] font-semibold w-[36px] text-right ${
                  b.highlight ? "text-[#2294BD]" : "text-[#D9532B]"
                }`}
              >
                -{b.discount}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing lag timeline */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Public vs Private Pricing Lag
        </p>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-md bg-[#D9532B]/10 border border-[#D9532B]/20 p-2 text-center">
            <p className="text-[10px] font-bold text-[#D9532B]">Public Market</p>
            <p className="text-2xl font-bold text-[#D9532B]">Days</p>
            <p className="text-[9px] text-[#9A918A]">BDC share prices repriced immediately</p>
          </div>
          <div className="rounded-md bg-[#9A918A]/10 border border-[#9A918A]/20 p-2 text-center">
            <p className="text-[10px] font-bold text-[#9A918A]">Private Marks</p>
            <p className="text-2xl font-bold text-[#9A918A]">Quarters</p>
            <p className="text-[9px] text-[#9A918A]">NAV updated on quarterly cycle</p>
          </div>
        </div>
        <p className="text-[10px] text-[#D9532B] font-semibold mt-2">
          Gap creates the discount overshoot: public price reflects fear, private NAV reflects stale marks
        </p>
      </div>

      {/* Golub PIK migration sequence */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Golub PIK Migration Sequence
        </p>
        <div className="space-y-0">
          {golubSequence.map((s, i) => (
            <div key={s.stage} className="flex items-start gap-2">
              {/* Vertical timeline connector */}
              <div className="flex flex-col items-center">
                <span
                  className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-[8px] font-bold text-white"
                  style={{ backgroundColor: s.color }}
                >
                  {i + 1}
                </span>
                {i < golubSequence.length - 1 && (
                  <div className="w-px h-5 bg-[#E8DDD4]" />
                )}
              </div>
              <div className="pb-2">
                <div className="flex items-baseline gap-1.5">
                  <p className="text-[11px] font-semibold text-[#1A1A1A]">{s.stage}</p>
                  <p className="text-[11px] font-bold" style={{ color: s.color }}>
                    {s.value}
                  </p>
                </div>
                <p className="text-[10px] text-[#9A918A]">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key insight callout */}
      <div className="rounded-lg border-l-4 border-l-[#2294BD] bg-white border border-[#E8DDD4] px-3 py-2.5">
        <span className="text-[9px] font-bold uppercase tracking-wider text-[#2294BD] mr-1.5">
          Key insight
        </span>
        <span className="text-[11px] text-[#404040]">
          Public-market pricing of credit vehicles can serve as an early warning system for
          private portfolios holding similar assets.
        </span>
      </div>
    </div>
  );
}
