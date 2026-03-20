/**
 * VintageYearEffects
 * Historical vintage effects with macro context visualization.
 * Used in: Day 6 (vintage year).
 */
export default function VintageYearEffects() {
  const vintages = [
    { window: "2005–2007", context: "Pre-GFC credit peak", entry: "9–11x", credit: "Very easy; 7–8x debt/EBITDA", irr: "8–11%", label: "Peak-entry drag", color: "#D9532B", entryBar: 85 },
    { window: "2008–2010", context: "GFC trough / recovery", entry: "6–8x", credit: "Tight; 4–5x debt/EBITDA", irr: "14–18%", label: "Distressed-entry premium", color: "#2A9D60", entryBar: 45 },
    { window: "2011–2015", context: "Recovery / expansion", entry: "8–10x", credit: "Recovering; 5–6x debt/EBITDA", irr: "12–16%", label: "Moderate", color: "#2294BD", entryBar: 65 },
    { window: "2019–2021", context: "Pre/post-COVID peak", entry: "11–14x", credit: "Very easy; 7–9x debt/EBITDA", irr: "8–12%", label: "High entry; compressing", color: "#FAA51A", entryBar: 95 },
  ];

  return (
    <div className="my-3 space-y-2.5">
      {vintages.map((v, i) => (
        <div key={i} className="rounded-xl border border-[#E8DDD4] bg-white shadow-sm overflow-hidden">
          <div className="flex items-stretch">
            <div className="w-24 flex-shrink-0 flex flex-col items-center justify-center py-3 border-r border-[#E8DDD4]" style={{ backgroundColor: `${v.color}10` }}>
              <p className="text-[14px] font-bold" style={{ color: v.color }}>{v.window}</p>
              <p className="text-[8px] font-bold uppercase tracking-wider text-[#9A918A] mt-0.5">{v.label}</p>
            </div>
            <div className="flex-1 p-3">
              <p className="text-[11px] font-semibold text-[#1A1A1A] mb-2">{v.context}</p>
              <div className="grid grid-cols-3 gap-3 mb-2">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-wider text-[#9A918A] mb-0.5">Entry EV/EBITDA</p>
                  <p className="text-[12px] font-bold" style={{ color: v.color }}>{v.entry}</p>
                </div>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-wider text-[#9A918A] mb-0.5">Credit</p>
                  <p className="text-[10px] text-[#404040]">{v.credit}</p>
                </div>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-wider text-[#9A918A] mb-0.5">Median Net IRR</p>
                  <p className="text-[12px] font-bold text-[#1A1A1A]">{v.irr}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[9px] text-[#9A918A] w-16 flex-shrink-0">Entry multiples</span>
                <div className="flex-1 h-1.5 bg-[#F5F0EB] rounded-full">
                  <div className="h-full rounded-full" style={{ width: `${v.entryBar}%`, backgroundColor: v.color, opacity: 0.5 }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
