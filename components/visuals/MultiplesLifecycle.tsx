/**
 * MultiplesLifecycle
 * How TVPI/DPI/RVPI evolve across fund lifecycle stages.
 * Used in: Day 5 (multiples).
 */
export default function MultiplesLifecycle() {
  const phases = [
    { age: "Yrs 1–2", phase: "Early Deployment", dpi: "0", tvpi: "~1.0x or below", rvpi: "NAV at cost minus fees", signal: "None — structural only", color: "#E8DDD4", barDPI: 0, barTVPI: 20 },
    { age: "Yrs 3–4", phase: "Deployment Peak", dpi: "0–0.1x", tvpi: "1.0–1.25x", rvpi: "Carries essentially all value", signal: "Deployment pace only", color: "#D9532B", barDPI: 5, barTVPI: 35 },
    { age: "Yrs 5–6", phase: "First Exits", dpi: "0.15–0.45x", tvpi: "1.25–1.55x", rvpi: "Significant; DPI starting", signal: "First meaningful signal", color: "#FAA51A", barDPI: 25, barTVPI: 55 },
    { age: "Yrs 7–8", phase: "Active Harvest", dpi: "0.8–1.4x", tvpi: "1.5–2.0x", rvpi: "Declining toward residual", signal: "Strong signal", color: "#2294BD", barDPI: 65, barTVPI: 80 },
    { age: "Yrs 9–10", phase: "Wind-Down", dpi: "1.4–2.0x", tvpi: "Converging w/ DPI", rvpi: "Small, diminishing", signal: "Near-confirmed", color: "#2A9D60", barDPI: 90, barTVPI: 95 },
  ];

  return (
    <div className="my-3 space-y-2">
      {phases.map((p, i) => (
        <div key={i} className="rounded-lg border border-[#E8DDD4] bg-white shadow-sm overflow-hidden flex items-stretch">
          {/* Left phase label */}
          <div className="w-24 flex-shrink-0 border-r border-[#E8DDD4] flex flex-col items-center justify-center p-2" style={{ backgroundColor: `${p.color}15` }}>
            <p className="text-[11px] font-bold text-[#1A1A1A]">{p.age}</p>
            <p className="text-[9px] text-[#9A918A] text-center leading-tight">{p.phase}</p>
          </div>
          <div className="flex-1 p-2.5">
            <div className="grid grid-cols-3 gap-2 mb-2">
              <div><p className="text-[9px] font-bold uppercase tracking-wider text-[#2A9D60] mb-0.5">DPI</p><p className="text-[11px] font-semibold text-[#1A1A1A]">{p.dpi}</p></div>
              <div><p className="text-[9px] font-bold uppercase tracking-wider text-[#2294BD] mb-0.5">TVPI</p><p className="text-[11px] font-semibold text-[#1A1A1A]">{p.tvpi}</p></div>
              <div><p className="text-[9px] font-bold uppercase tracking-wider text-[#9A918A] mb-0.5">RVPI</p><p className="text-[10px] text-[#404040]">{p.rvpi}</p></div>
            </div>
            {/* Mini bars */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 flex-1">
                <span className="text-[8px] text-[#2A9D60] w-6">DPI</span>
                <div className="flex-1 h-1 bg-[#F5F0EB] rounded-full"><div className="h-full rounded-full bg-[#2A9D60]" style={{ width: `${p.barDPI}%` }} /></div>
              </div>
              <div className="flex items-center gap-1 flex-1">
                <span className="text-[8px] text-[#2294BD] w-6">TVPI</span>
                <div className="flex-1 h-1 bg-[#F5F0EB] rounded-full"><div className="h-full rounded-full bg-[#2294BD]" style={{ width: `${p.barTVPI}%` }} /></div>
              </div>
              <span className="text-[9px] text-[#9A918A] italic w-32 text-right">{p.signal}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
