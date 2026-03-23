/**
 * InstacartValuationUnwind
 * Tracks Instacart's valuation decline from $39B peak to $10B IPO, showing
 * the waterfall, percentage decline, and what actually changed.
 * Used in: Day 38 (Instacart's valuation unwind).
 */
export default function InstacartValuationUnwind() {
  const timeline = [
    { date: "Mar 2021", value: 39, label: "$39B", note: "Crossover-led round", color: "#2A9D60" },
    { date: "Mid-2022", value: 14, label: "~$13–15B", note: "Internal cuts", color: "#D9532B" },
    { date: "Early 2023", value: 10, label: "~$10B", note: "Internal estimate", color: "#D9532B" },
    { date: "Sep 2023", value: 10, label: "$10B", note: "IPO pricing", color: "#2294BD" },
  ];

  const maxVal = 39;

  const whatChanged = [
    { label: "Interest rates", detail: "Near-zero → 5%+", changed: true },
    { label: "Public comps", detail: "Compressed 50–70%", changed: true },
    { label: "Multiple regime", detail: "Growth premium evaporated", changed: true },
    { label: "Revenue growth", detail: "Still growing", changed: false },
    { label: "Profitability", detail: "Still profitable", changed: false },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
        Instacart — $39B to $10B IPO Journey
      </p>

      {/* Valuation waterfall */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-3">
          Valuation Timeline
        </p>
        <div className="space-y-2.5">
          {timeline.map((t) => (
            <div key={t.date} className="flex items-center gap-2">
              <div className="w-[72px] flex-shrink-0 text-right">
                <p className="text-[10px] font-semibold text-[#404040]">{t.date}</p>
              </div>
              <div className="flex-1 relative h-6 rounded bg-[#FAF8F5]">
                <div
                  className="absolute inset-y-0 left-0 rounded"
                  style={{
                    width: `${(t.value / maxVal) * 100}%`,
                    backgroundColor: t.color,
                  }}
                />
                <span className="absolute inset-y-0 left-2 flex items-center text-[10px] font-bold text-white">
                  {t.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decline percentages */}
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-[#E8DDD4] bg-white p-3 text-center">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-1">
            By Mid-2022
          </p>
          <p className="text-2xl font-bold text-[#D9532B]">-62%</p>
          <p className="text-[10px] text-[#9A918A] mt-0.5">$39B → ~$14B</p>
        </div>
        <div className="rounded-lg border border-[#E8DDD4] bg-white p-3 text-center">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-1">
            By IPO (Sep 2023)
          </p>
          <p className="text-2xl font-bold text-[#D9532B]">-75%</p>
          <p className="text-[10px] text-[#9A918A] mt-0.5">$39B → $10B</p>
        </div>
      </div>

      {/* What changed */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          What Changed?
        </p>
        <div className="space-y-1.5">
          {whatChanged.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span
                className="text-[10px] font-bold w-5 text-center flex-shrink-0"
                style={{ color: item.changed ? "#D9532B" : "#2A9D60" }}
              >
                {item.changed ? "▲" : "—"}
              </span>
              <p className="text-[11px] font-semibold text-[#404040] w-[110px] flex-shrink-0">
                {item.label}
              </p>
              <p
                className="text-[11px]"
                style={{ color: item.changed ? "#D9532B" : "#2A9D60" }}
              >
                {item.detail}
              </p>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-[#9A918A] mt-2 italic">
          The business didn&apos;t break — the valuation framework shifted.
        </p>
      </div>

      {/* Key insight callout */}
      <div className="rounded-lg bg-[#2294BD]/10 border border-[#2294BD]/30 px-3 py-2.5">
        <span className="text-[9px] font-bold uppercase tracking-wider text-[#2294BD] mr-1.5">
          Key insight
        </span>
        <span className="text-[11px] text-[#404040]">
          Crossover participation is information about demand, not validation of long-term
          fair value.
        </span>
      </div>
    </div>
  );
}
