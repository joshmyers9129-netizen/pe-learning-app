/**
 * ComparisonFramework
 * Three-column strategy comparison with colored headers and metric cards.
 * Used in: Day 8 (PE sub-strategies).
 */
export default function ComparisonFramework() {
  const strategies = [
    {
      name: "Buyout",
      color: "from-[#2294BD] to-[#1A7A9E]",
      accent: "#2294BD",
      metrics: [
        { label: "Target Net IRR", value: "12–18%" },
        { label: "Target Net MOIC", value: "2.0–2.5x" },
        { label: "Leverage", value: "4–6x EBITDA" },
        { label: "Typical Stake", value: "Control (60–100%)" },
        { label: "Return Dispersion", value: "Narrowest" },
        { label: "J-Curve Depth", value: "Deep" },
        { label: "Exit Timing", value: "Years 4–7" },
        { label: "Failure Rate", value: "5–15%" },
        { label: "Return Driver", value: "EBITDA growth + leverage" },
        { label: "Credit Sensitivity", value: "High" },
      ],
      role: "Return consistency; moderate beta",
    },
    {
      name: "Growth Equity",
      color: "from-[#FAA51A] to-[#E8940A]",
      accent: "#FAA51A",
      metrics: [
        { label: "Target Net IRR", value: "15–22%" },
        { label: "Target Net MOIC", value: "2.5–4.0x" },
        { label: "Leverage", value: "None or minimal" },
        { label: "Typical Stake", value: "Minority (20–40%)" },
        { label: "Return Dispersion", value: "Moderate" },
        { label: "J-Curve Depth", value: "Moderate" },
        { label: "Exit Timing", value: "Years 3–5" },
        { label: "Failure Rate", value: "Low to moderate" },
        { label: "Return Driver", value: "Revenue / earnings growth" },
        { label: "Credit Sensitivity", value: "Low" },
      ],
      role: "Growth exposure; lower leverage risk",
    },
    {
      name: "Venture Capital",
      color: "from-[#D9532B] to-[#B8421F]",
      accent: "#D9532B",
      metrics: [
        { label: "Target Net IRR", value: "15–25%+" },
        { label: "Target Net MOIC", value: "3.0–5.0x+" },
        { label: "Leverage", value: "None" },
        { label: "Typical Stake", value: "Minority (10–25%)" },
        { label: "Return Dispersion", value: "Widest" },
        { label: "J-Curve Depth", value: "Deepest, longest" },
        { label: "Exit Timing", value: "Years 6–12" },
        { label: "Failure Rate", value: "40–60%+" },
        { label: "Return Driver", value: "Revenue growth (winners)" },
        { label: "Credit Sensitivity", value: "Very low" },
      ],
      role: "Asymmetric upside; illiquid option premium",
    },
  ];

  return (
    <div className="my-3">
      <div className="grid grid-cols-3 gap-3">
        {strategies.map((s) => (
          <div key={s.name} className="rounded-xl border border-[#E8DDD4] overflow-hidden bg-white shadow-sm">
            <div className={`bg-gradient-to-r ${s.color} px-4 py-3`}>
              <p className="text-white text-sm font-bold tracking-wide">{s.name}</p>
            </div>
            <div className="p-3 space-y-1.5">
              {s.metrics.map((m) => (
                <div key={m.label} className="flex items-baseline justify-between gap-2">
                  <span className="text-[10px] text-[#9A918A] uppercase tracking-wide leading-tight flex-shrink-0">{m.label}</span>
                  <span className="text-[12px] font-semibold text-[#1A1A1A] text-right">{m.value}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-[#E8DDD4] px-3 py-2.5 bg-[#FAF8F5]">
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-0.5">Portfolio Role</p>
              <p className="text-[11px] text-[#404040] leading-snug">{s.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
