/**
 * JCurveDepthFactors
 * Teaches: what makes the J-curve trough deeper or shallower.
 * Used in: Day 3 (capital calls and the J-curve).
 * Pure Tailwind — no charting library.
 */
export default function JCurveDepthFactors() {
  const deepens = [
    {
      label: "High fee base",
      detail:
        "2% on committed capital front-loads fee drag before any capital is deployed or exits occur.",
    },
    {
      label: "Slow deployment",
      detail:
        "Capital called early but invested over 4–5 years extends the window of negative cash flow with no offsetting distributions.",
    },
    {
      label: "Early write-downs",
      detail:
        "Portfolio marks below cost in years 1–3 deepen the NAV decline before exits can recover it.",
    },
    {
      label: "No subscription line",
      detail:
        "LP capital is called at deal close (day zero), so the clock on fees and returns starts from the earliest possible date.",
    },
  ];

  const flattens = [
    {
      label: "Fast deployment + early exits",
      detail:
        "Compressed hold periods on initial investments generate DPI before the trough has time to deepen.",
    },
    {
      label: "Fee offsets",
      detail:
        "Transaction and monitoring fees credited back to the fund reduce net fee drag dollar-for-dollar.",
    },
    {
      label: "Subscription line use",
      detail:
        "Delays LP cash outflow — improves reported IRR optics but does not change the LP's actual cash-on-cash return or MOIC.",
    },
    {
      label: "Lower fee rate / invested-capital basis",
      detail:
        "1.5% on invested capital reduces cumulative fee drag versus 2% on committed capital during deployment.",
    },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040] mb-3">
        J-Curve Depth — What Makes the Trough Deeper or Shallower
      </p>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wide text-[#D9532B] mb-1.5">
            Deepens the Trough
          </p>
          <div className="space-y-1.5">
            {deepens.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-[#FAA51A]/30 bg-[#FAA51A]/8 px-2.5 py-2"
              >
                <p className="text-[11px] font-bold text-[#D9532B]">{item.label}</p>
                <p className="text-[10px] text-[#404040] leading-snug mt-0.5">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wide text-[#2A9D60] mb-1.5">
            Flattens the Curve
          </p>
          <div className="space-y-1.5">
            {flattens.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-[#2A9D60]/25 bg-[#2A9D60]/5 px-2.5 py-2"
              >
                <p className="text-[11px] font-bold text-[#2A9D60]">{item.label}</p>
                <p className="text-[10px] text-[#404040] leading-snug mt-0.5">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="text-[10px] text-[#404040] mt-3 italic">
        Subscription line use is listed as a curve-flattener in IRR terms only — it
        delays the LP&apos;s cash outflow date, which mechanically improves reported IRR without
        improving MOIC or LP economics. ILPA guidance recommends reporting both
        subscription-line-adjusted and unadjusted IRR so LPs can see the difference.
      </p>
    </div>
  );
}
