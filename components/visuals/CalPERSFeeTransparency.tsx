/**
 * CalPERSFeeTransparency
 * Timeline and dashboard showing CalPERS' journey to PE fee disclosure,
 * including fee breakdown and the industry impact of their transparency push.
 * Used in: Day 14 (fee transparency & LP governance).
 */
export default function CalPERSFeeTransparency() {
  const timeline = [
    {
      year: "2015",
      event: "First published PE fee data",
      detail: "CalPERS becomes one of the first large LPs to publish fee information",
      color: "bg-[#2294BD]",
    },
    {
      year: "2016",
      event: "Revealed $3.4B in carry/fees paid",
      detail: "Total cost far exceeded what most stakeholders expected",
      color: "bg-[#FAA51A]",
    },
    {
      year: "2017",
      event: "Board review: total PE cost higher than reported",
      detail: "Additional layers of costs discovered beyond management fees",
      color: "bg-[#D9532B]",
    },
    {
      year: "2018+",
      event: "Industry-wide push for ILPA fee templates",
      detail: "Standardized fee reporting becomes an LP governance priority",
      color: "bg-[#2A9D60]",
    },
  ];

  const feeBreakdown = [
    { label: "Management Fees", pct: 30, color: "bg-[#2294BD]", desc: "Annual % of committed capital" },
    { label: "Carried Interest", pct: 40, color: "bg-[#7C5CBF]", desc: "Performance fee (typically 20%)" },
    { label: "Fund Expenses", pct: 15, color: "bg-[#FAA51A]", desc: "Legal, audit, admin costs" },
    { label: "Portfolio Co. Fees", pct: 15, color: "bg-[#D9532B]", desc: "Monitoring, transaction, advisory" },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
        CalPERS Fee Transparency Journey
      </p>

      {/* Timeline */}
      <div className="space-y-0">
        {timeline.map((item, i) => (
          <div key={item.year} className="flex gap-3">
            {/* Vertical line + dot */}
            <div className="flex flex-col items-center">
              <div className={`w-3 h-3 rounded-full ${item.color} flex-shrink-0`} />
              {i < timeline.length - 1 && (
                <div className="w-px flex-1 bg-[#E8DDD4] min-h-[24px]" />
              )}
            </div>
            {/* Content */}
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

      {/* Fee breakdown */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Total PE Cost Breakdown
        </p>
        {/* Stacked bar */}
        <div className="flex h-7 rounded overflow-hidden mb-2">
          {feeBreakdown.map((f) => (
            <div
              key={f.label}
              className={`${f.color} flex items-center justify-center`}
              style={{ width: `${f.pct}%` }}
            >
              <span className="text-[8px] text-white font-bold">{f.pct}%</span>
            </div>
          ))}
        </div>
        {/* Legend */}
        <div className="grid grid-cols-2 gap-1.5">
          {feeBreakdown.map((f) => (
            <div key={f.label} className="flex items-start gap-1.5">
              <div className={`w-2 h-2 rounded-sm ${f.color} mt-0.5 flex-shrink-0`} />
              <div>
                <p className="text-[10px] font-semibold text-[#1A1A1A]">{f.label}</p>
                <p className="text-[9px] text-[#9A918A]">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Callout */}
      <div className="rounded-lg bg-[#D9532B]/10 border border-[#D9532B]/30 px-3 py-2.5">
        <span className="text-[9px] font-bold uppercase tracking-wider text-[#D9532B] mr-1.5">
          Key takeaway
        </span>
        <span className="text-[11px] text-[#404040]">
          CalPERS showed that &ldquo;net returns&rdquo; can still hide billions in total costs
        </span>
      </div>
    </div>
  );
}
