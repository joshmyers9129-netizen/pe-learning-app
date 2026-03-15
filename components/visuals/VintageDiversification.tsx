/**
 * VintageDiversification
 * Teaches: What vintage concentration looks like in a real programme, and the
 *          four dimensions of concentration beyond vintage year alone.
 *          A bar chart of commitments by year shows what "balanced" vs.
 *          "concentrated" looks like — and why it matters for programme resilience.
 * Used in: Day 14 (Portfolio Construction and Commitment Pacing).
 * Pure Tailwind — no charting library.
 */
export default function VintageDiversification() {
  // Illustrative programme — concentrated in 2020–2021
  const vintages = [
    { year: "2017", amount: 30, pct: 8, concentrated: false },
    { year: "2018", amount: 40, pct: 11, concentrated: false },
    { year: "2019", amount: 45, pct: 12, concentrated: false },
    { year: "2020", amount: 85, pct: 23, concentrated: true },
    { year: "2021", amount: 95, pct: 26, concentrated: true },
    { year: "2022", amount: 45, pct: 12, concentrated: false },
    { year: "2023", amount: 20, pct: 5, concentrated: false },
    { year: "2024", amount: 10, pct: 3, concentrated: false },
  ];

  const totalAmount = vintages.reduce((sum, v) => sum + v.amount, 0); // 370M

  const otherDimensions = [
    {
      label: "GP Concentration",
      risk: "Over 25–30% of programme with a single GP",
      good: "No single GP above 25% of total committed capital",
      color: "#2294BD",
      borderColor: "border-[#2294BD]/30",
      bgColor: "bg-[#2294BD]/10",
      labelColor: "text-[#2294BD]",
    },
    {
      label: "Sector Concentration",
      risk: "Heavy tech / healthcare at peak entry multiples (e.g., 2021)",
      good: "Sector mix reflects strategy diversity across the economic cycle",
      color: "#7C5CBF",
      borderColor: "border-[#7C5CBF]/30",
      bgColor: "bg-[#7C5CBF]/10",
      labelColor: "text-[#7C5CBF]",
    },
    {
      label: "Geography",
      risk: "North America–only concentration; missing European / Asian cycles",
      good: "At least two distinct geographies represented in the programme",
      color: "#2A9D60",
      borderColor: "border-[#2A9D60]/30",
      bgColor: "bg-[#2A9D60]/10",
      labelColor: "text-[#2A9D60]",
    },
    {
      label: "Strategy / Style",
      risk: "All large-cap buyout; no growth equity, lower-middle-market, or venture exposure",
      good: "Strategy mix provides exposure to different parts of the cycle and return spectrum",
      color: "#FAA51A",
      borderColor: "border-[#FAA51A]/30",
      bgColor: "bg-[#FAA51A]/10",
      labelColor: "text-[#C07800]",
    },
  ];

  const maxAmt = Math.max(...vintages.map((v) => v.amount));

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040] mb-1">
        Vintage Concentration: Illustrative Programme ($370M Total Committed)
      </p>
      <p className="text-[11px] text-[#9A918A] mb-3 italic">
        The 2020–2021 vintages represent 49% of total committed capital — nearly half the programme entered a single macro and valuation environment.
      </p>

      {/* Bar chart */}
      <div className="space-y-1.5 mb-4">
        {vintages.map((v) => {
          const barWidth = Math.round((v.amount / maxAmt) * 100);
          return (
            <div key={v.year} className="flex items-center gap-2">
              <div className="text-[10px] font-semibold text-[#404040] w-8 flex-shrink-0 text-right">
                {v.year}
              </div>
              <div className="flex-1 flex items-center gap-1.5">
                <div
                  className={`h-5 rounded-sm flex items-center px-2 transition-all ${
                    v.concentrated
                      ? "bg-[#D9532B]/70"
                      : "bg-[#2294BD]/40"
                  }`}
                  style={{ width: `${barWidth}%`, minWidth: "12px" }}
                >
                  <span className="text-[8px] font-medium text-white whitespace-nowrap">
                    ${v.amount}M
                  </span>
                </div>
                <span
                  className={`text-[9px] font-semibold flex-shrink-0 ${
                    v.concentrated ? "text-[#D9532B]" : "text-[#9A918A]"
                  }`}
                >
                  {v.pct}%{v.concentrated ? " ▲" : ""}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Concentration callout */}
      <div className="rounded-lg bg-[#D9532B]/10 border border-[#D9532B]/30 px-3 py-2 mb-4">
        <p className="text-[10px] text-[#404040]">
          <span className="font-semibold text-[#D9532B]">Concentration risk:</span> 2020 and 2021 funds entered at compressed-yield, high-multiple conditions. If this entry environment underperforms expectations, 49% of the programme is affected. Adding 2022–2024 vintage commitments reduces this share over time — but only if pacing resumes.
        </p>
      </div>

      {/* Four other concentration dimensions */}
      <p className="text-[10px] font-semibold uppercase tracking-wide text-[#404040] mb-2">
        Four additional concentration dimensions
      </p>
      <div className="grid grid-cols-2 gap-2">
        {otherDimensions.map((d) => (
          <div
            key={d.label}
            className={`rounded-lg border ${d.borderColor} bg-white p-2.5`}
          >
            <p className={`text-[9px] font-bold uppercase tracking-wide ${d.labelColor} mb-1`}>
              {d.label}
            </p>
            <p className="text-[9px] text-[#9A918A] mb-1">
              <span className="text-[#D9532B] font-medium">Risk: </span>
              {d.risk}
            </p>
            <p className="text-[9px] text-[#9A918A]">
              <span className="text-[#2A9D60] font-medium">Healthy: </span>
              {d.good}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
