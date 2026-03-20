/**
 * IRRSubStrategies
 * IRR calibration across PE sub-strategies with distribution shape indicators.
 * Used in: Day 4 (IRR).
 */
export default function IRRSubStrategies() {
  const strats = [
    { name: "Large/Mid-Cap Buyout", median: "12–18%", topQ: "20%+", shape: "Normal-ish", note: "Standard CA benchmark applies; vintage and leverage era matter", color: "#2294BD", dispersion: 40 },
    { name: "Small/Mid-Cap Buyout", median: "Higher than mega", topQ: "Varies", shape: "Moderate spread", note: "Smaller markets less efficient; single exit moves needle", color: "#1A7A9E", dispersion: 55 },
    { name: "Growth Equity", median: "10–15%", topQ: "~18%+", shape: "Tighter", note: "More predictable; lower leverage", color: "#FAA51A", dispersion: 30 },
    { name: "Venture Capital", median: "Below buyout", topQ: "30–50%+", shape: "Extreme power-law", note: "Median VC IRR is nearly meaningless — top-decile drives all value", color: "#D9532B", dispersion: 95 },
    { name: "PE Secondaries", median: "Highest early IRR", topQ: "N/A", shape: "Compressed", note: "Not comparable to primary funds — J-curve eliminated", color: "#7C5CBF", dispersion: 15 },
  ];

  return (
    <div className="my-3 space-y-2">
      {strats.map((s, i) => (
        <div key={i} className="rounded-lg border border-[#E8DDD4] bg-white shadow-sm overflow-hidden flex items-stretch">
          <div className="w-1.5 flex-shrink-0" style={{ backgroundColor: s.color }} />
          <div className="flex-1 p-3">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[12px] font-bold text-[#1A1A1A]">{s.name}</p>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-[9px] font-bold uppercase tracking-wider text-[#9A918A]">Median</p>
                  <p className="text-[13px] font-bold" style={{ color: s.color }}>{s.median}</p>
                </div>
                <div className="text-right">
                  <p className="text-[9px] font-bold uppercase tracking-wider text-[#9A918A]">Top Q</p>
                  <p className="text-[13px] font-bold text-[#1A1A1A]">{s.topQ}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[9px] text-[#9A918A] w-16 flex-shrink-0">Dispersion</span>
              <div className="flex-1 h-1.5 bg-[#F5F0EB] rounded-full">
                <div className="h-full rounded-full" style={{ width: `${s.dispersion}%`, backgroundColor: s.color, opacity: 0.6 }} />
              </div>
              <span className="text-[9px] text-[#9A918A]">{s.shape}</span>
            </div>
            <p className="text-[10px] text-[#9A918A] italic">{s.note}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
