/**
 * ManagementFees
 * Fee structure comparison showing dollar impact of step-down timing.
 * Used in: Day 3 (fees).
 */
export default function ManagementFees() {
  const structures = [
    { label: "Structure A", desc: "2% on committed ($2B) throughout", y1_5: "$40M/yr = $200M", y6_10: "$40M/yr = $200M", total: "$400M", color: "#D9532B" },
    { label: "Structure B", desc: "2% committed → 1.5% invested ($1.7B)", y1_5: "$40M/yr = $200M", y6_10: "$25.5M/yr = $127.5M", total: "$327.5M", color: "#2A9D60" },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4">
      <p className="text-[10px] font-bold uppercase tracking-widest text-[#404040] mb-3">
        10-Year Fee Impact — $2B Fund
      </p>
      <div className="space-y-2.5 mb-3">
        {structures.map((s) => (
          <div key={s.label} className="rounded-lg border border-[#E8DDD4] bg-white shadow-sm overflow-hidden">
            <div className="flex items-stretch">
              <div className="w-1.5 flex-shrink-0" style={{ backgroundColor: s.color }} />
              <div className="flex-1 p-3">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-[12px] font-bold text-[#1A1A1A]">{s.label}</p>
                    <p className="text-[10px] text-[#9A918A]">{s.desc}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[16px] font-bold" style={{ color: s.color }}>{s.total}</p>
                    <p className="text-[9px] text-[#9A918A] uppercase tracking-wider">10-yr total</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded bg-[#FAF8F5] px-2.5 py-1.5">
                    <p className="text-[9px] font-bold uppercase tracking-wider text-[#9A918A] mb-0.5">Years 1–5</p>
                    <p className="text-[11px] text-[#1A1A1A]">{s.y1_5}</p>
                  </div>
                  <div className="rounded bg-[#FAF8F5] px-2.5 py-1.5">
                    <p className="text-[9px] font-bold uppercase tracking-wider text-[#9A918A] mb-0.5">Years 6–10</p>
                    <p className="text-[11px] text-[#1A1A1A]">{s.y6_10}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-lg bg-[#2A9D60]/8 border border-[#2A9D60]/15 px-3 py-2 text-center">
        <span className="text-[12px] font-bold text-[#2A9D60]">LP savings with step-down: $72.5M</span>
        <span className="text-[10px] text-[#404040] ml-2">≈ 3.6 cents per dollar of commitment</span>
      </div>
    </div>
  );
}
