/**
 * VintageYearComparison
 * Vintage-year effect cards showing how entry conditions drive returns.
 * Used in: Day 13 (benchmarking).
 */
export default function VintageYearComparison() {
  const vintages = [
    { years: "2006–2007", context: "Pre-GFC credit peak", entry: "9–11x", exit: "Mixed (crisis, then recovery)", leverage: "Abundant, then absent", irr: "8–11%", outcome: "Peak-entry drag", color: "#D9532B" },
    { years: "2009–2011", context: "GFC trough / recovery", entry: "6–8x", exit: "Strong (rising multiples)", leverage: "Improving", irr: "14–18%", outcome: "Distressed-entry premium", color: "#2A9D60" },
    { years: "2014–2016", context: "Recovery / expansion", entry: "8–10x", exit: "Good (pre-COVID)", leverage: "Favorable", irr: "12–16%", outcome: "Moderate", color: "#2294BD" },
    { years: "2019–2021", context: "Pre/post-COVID peak", entry: "10–13x", exit: "Challenged (rising rates)", leverage: "Constrained post-2022", irr: "8–12%", outcome: "Early data; compressing", color: "#FAA51A" },
  ];

  return (
    <div className="my-3 space-y-2.5">
      {vintages.map((v, i) => (
        <div key={i} className="rounded-xl border border-[#E8DDD4] bg-white shadow-sm overflow-hidden">
          <div className="flex items-stretch">
            <div className="w-20 flex-shrink-0 flex flex-col items-center justify-center py-3" style={{ backgroundColor: `${v.color}10` }}>
              <p className="text-[14px] font-bold" style={{ color: v.color }}>{v.years}</p>
              <p className="text-[9px] text-[#9A918A] text-center leading-tight mt-0.5">{v.outcome}</p>
            </div>
            <div className="flex-1 p-3 border-l border-[#E8DDD4]">
              <p className="text-[11px] font-semibold text-[#1A1A1A] mb-2">{v.context}</p>
              <div className="grid grid-cols-4 gap-2">
                <div><p className="text-[9px] font-bold uppercase tracking-wider text-[#9A918A] mb-0.5">Entry EV/EBITDA</p><p className="text-[11px] text-[#1A1A1A] font-medium">{v.entry}</p></div>
                <div><p className="text-[9px] font-bold uppercase tracking-wider text-[#9A918A] mb-0.5">Exit market</p><p className="text-[11px] text-[#404040]">{v.exit}</p></div>
                <div><p className="text-[9px] font-bold uppercase tracking-wider text-[#9A918A] mb-0.5">Leverage</p><p className="text-[11px] text-[#404040]">{v.leverage}</p></div>
                <div><p className="text-[9px] font-bold uppercase tracking-wider text-[#9A918A] mb-0.5">Median Net IRR</p><p className="text-[12px] font-bold" style={{ color: v.color }}>{v.irr}</p></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
