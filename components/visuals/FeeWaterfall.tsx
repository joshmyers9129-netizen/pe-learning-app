/**
 * FeeWaterfall
 * Teaches: the distribution waterfall — who gets paid, in what order, and why.
 * Used in: Day 2 (GP/LP incentive stack), Day 11 (fund terms).
 * Pure Tailwind — no charting library.
 */
export default function FeeWaterfall() {
  const steps = [
    {
      step: "1",
      label: "Return of Capital",
      recipient: "100% → LP",
      description:
        "All called LP capital is returned in full. No GP participation. The LP is made whole before any profit sharing begins.",
      numColor: "bg-[#2294BD]",
      textColor: "text-[#2294BD]",
      border: "border-[#2294BD]/30",
      bg: "bg-[#2294BD]/6",
    },
    {
      step: "2",
      label: "Preferred Return",
      recipient: "100% → LP",
      description:
        "LPs receive 8% per annum compounded on unreturned capital. The GP earns zero carry until this threshold is cleared.",
      numColor: "bg-[#2294BD]",
      textColor: "text-[#2294BD]",
      border: "border-[#2294BD]/20",
      bg: "bg-[#2294BD]/4",
    },
    {
      step: "3",
      label: "GP Catch-Up",
      recipient: "80–100% → GP",
      description:
        "GP receives 80–100% of distributions until it has earned 20% of total profits above cost. LP cash flow pauses (or slows significantly) during this tranche.",
      numColor: "bg-[#FAA51A]",
      textColor: "text-[#D9532B]",
      border: "border-[#FAA51A]/40",
      bg: "bg-[#FAA51A]/8",
    },
    {
      step: "4",
      label: "Carried Interest Split",
      recipient: "80% LP / 20% GP",
      description:
        "All remaining profits split: 80% to LPs, 20% to GP as carried interest. This continues for all subsequent distributions.",
      numColor: "bg-[#2A9D60]",
      textColor: "text-[#1A6B42]",
      border: "border-[#2A9D60]/30",
      bg: "bg-[#2A9D60]/5",
    },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040] mb-3">
        Distribution Waterfall — Sequence of LP and GP Payments
      </p>

      <div className="space-y-1.5">
        {steps.map((s, i) => (
          <div key={s.step}>
            <div
              className={`rounded-lg border ${s.border} ${s.bg} px-3 py-2.5 flex items-start gap-3`}
            >
              <div
                className={`flex-shrink-0 w-5 h-5 rounded-full ${s.numColor} flex items-center justify-center mt-0.5`}
              >
                <span className="text-white text-[9px] font-bold">{s.step}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-0.5">
                  <span className={`text-[12px] font-bold ${s.textColor}`}>
                    {s.label}
                  </span>
                  <span className="text-[10px] font-semibold text-[#404040] bg-white border border-[#E8DDD4] rounded px-1.5 py-0.5 leading-none">
                    {s.recipient}
                  </span>
                </div>
                <p className="text-[11px] text-[#404040] leading-snug">
                  {s.description}
                </p>
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="flex justify-start ml-5 my-0.5">
                <span className="text-[#D0C8C0] text-xs">↓</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="text-[10px] text-[#404040] mt-3 italic">
        European (whole-fund) waterfall shown — LP capital and preferred return
        across all deals must be returned before any carry is earned. American
        (deal-by-deal) structures allow carry on individual profitable deals
        before the full fund clears the hurdle, creating clawback risk.
      </p>
    </div>
  );
}
