/**
 * DenominatorEffect
 * Shows how a public equity crash mechanically increases PE's portfolio share
 * even with no PE activity, creating governance pressure on LP allocations.
 * Used in: Day 16 (portfolio construction & denominator effect).
 */
export default function DenominatorEffect() {
  const before = [
    { label: "Public Equity", pct: 40, color: "bg-[#2294BD]" },
    { label: "Fixed Income", pct: 25, color: "bg-[#2A9D60]" },
    { label: "Private Equity", pct: 15, color: "bg-[#7C5CBF]" },
    { label: "Real Assets", pct: 10, color: "bg-[#FAA51A]" },
    { label: "Hedge Funds", pct: 10, color: "bg-[#9A918A]" },
  ];

  const after = [
    { label: "Public Equity", pct: 28, color: "bg-[#2294BD]", note: "Dropped ~30%" },
    { label: "Fixed Income", pct: 27, color: "bg-[#2A9D60]", note: "Share rises" },
    { label: "Private Equity", pct: 20, color: "bg-[#7C5CBF]", note: "Unchanged $ value" },
    { label: "Real Assets", pct: 13, color: "bg-[#FAA51A]", note: "Share rises" },
    { label: "Hedge Funds", pct: 12, color: "bg-[#9A918A]", note: "Share rises" },
  ];

  const renderAllocation = (
    title: string,
    items: { label: string; pct: number; color: string; note?: string }[],
    subtitle: string
  ) => (
    <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
      <p className="text-[11px] font-bold text-[#1A1A1A] mb-0.5">{title}</p>
      <p className="text-[9px] text-[#9A918A] mb-2">{subtitle}</p>
      {/* Stacked bar */}
      <div className="flex h-6 rounded overflow-hidden mb-2">
        {items.map((item) => (
          <div
            key={item.label}
            className={`${item.color} flex items-center justify-center`}
            style={{ width: `${item.pct}%` }}
          >
            <span className="text-[8px] text-white font-bold">{item.pct}%</span>
          </div>
        ))}
      </div>
      {/* Legend */}
      <div className="flex flex-wrap gap-x-3 gap-y-1">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-1">
            <div className={`w-2 h-2 rounded-sm ${item.color}`} />
            <span className="text-[9px] text-[#404040]">{item.label}</span>
            {item.note && (
              <span className="text-[8px] text-[#D9532B] italic">({item.note})</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4 space-y-3">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
        The Denominator Effect — Mechanical Rebalancing Pressure
      </p>

      {renderAllocation("Before Crash", before, "Total portfolio = $10B")}

      {/* Arrow */}
      <div className="flex items-center justify-center gap-2">
        <div className="h-px flex-1 bg-[#D9532B]" />
        <span className="text-[10px] font-bold text-[#D9532B] whitespace-nowrap">
          Public equity drops 30%
        </span>
        <div className="h-px flex-1 bg-[#D9532B]" />
      </div>

      {renderAllocation("After Crash", after, "Total portfolio = $7.5B (PE $ unchanged)")}

      {/* Governance pressure */}
      <div className="rounded-lg border border-[#7C5CBF]/30 bg-[#7C5CBF]/5 p-3">
        <div className="flex items-start gap-2">
          <div className="w-1 h-full min-h-[32px] rounded bg-[#7C5CBF] flex-shrink-0" />
          <div>
            <p className="text-[11px] font-semibold text-[#7C5CBF] mb-0.5">Governance Pressure</p>
            <p className="text-[11px] text-[#404040]">
              PE went from <span className="font-bold">15% target</span> to{" "}
              <span className="font-bold text-[#D9532B]">20% actual</span> — forced to slow
              commitments or sell secondaries at a discount to get back on target.
            </p>
          </div>
        </div>
      </div>

      {/* Callout */}
      <p className="text-[10px] text-[#404040] italic">
        The denominator effect is purely mechanical — PE did not grow, everything else shrank. But
        the governance response (cutting PE) can lock in losses and reduce future returns.
      </p>
    </div>
  );
}
