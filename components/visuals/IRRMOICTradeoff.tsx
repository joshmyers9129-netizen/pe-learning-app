/**
 * IRRMOICTradeoff
 * Visual showing the tension between IRR and MOIC in exit timing.
 * Used in: Day 10 (exit strategies).
 */
export default function IRRMOICTradeoff() {
  const data = [
    { year: 4, equity: 336, moic: 2.8, irr: 24.0 },
    { year: 5, equity: 370, moic: 3.1, irr: 21.1 },
    { year: 6, equity: 408, moic: 3.4, irr: 19.1 },
  ];

  const maxEquity = 420;
  const maxIrr = 25;

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4">
      <p className="text-[10px] font-bold uppercase tracking-widest text-[#404040] mb-1">
        Exit Timing Trade-Off — $120M Equity Investment
      </p>
      <p className="text-[10px] text-[#9A918A] mb-4">
        Every additional year increases MOIC (absolute wealth) but reduces IRR (time-weighted return)
      </p>

      {/* Visual bars */}
      <div className="space-y-3 mb-4">
        {data.map((d) => {
          const equityPct = (d.equity / maxEquity) * 100;
          const irrPct = (d.irr / maxIrr) * 100;
          return (
            <div key={d.year} className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#1A1A1A] w-14">Year {d.year}</span>
                <div className="flex gap-4 text-[11px]">
                  <span className="text-[#2294BD] font-semibold">{d.moic}x MOIC</span>
                  <span className="text-[#D9532B] font-semibold">{d.irr}% IRR</span>
                </div>
              </div>
              {/* Equity value bar */}
              <div className="flex items-center gap-2">
                <span className="text-[9px] text-[#9A918A] w-14 text-right">Equity</span>
                <div className="flex-1 h-4 bg-white rounded border border-[#E8DDD4] relative">
                  <div
                    className="absolute inset-y-0 left-0 rounded bg-gradient-to-r from-[#2294BD] to-[#2294BD]/70 flex items-center justify-end pr-2"
                    style={{ width: `${equityPct}%` }}
                  >
                    <span className="text-[9px] text-white font-bold">${d.equity}M</span>
                  </div>
                </div>
              </div>
              {/* IRR bar */}
              <div className="flex items-center gap-2">
                <span className="text-[9px] text-[#9A918A] w-14 text-right">IRR</span>
                <div className="flex-1 h-4 bg-white rounded border border-[#E8DDD4] relative">
                  <div
                    className="absolute inset-y-0 left-0 rounded bg-gradient-to-r from-[#D9532B] to-[#D9532B]/70 flex items-center justify-end pr-2"
                    style={{ width: `${irrPct}%` }}
                  >
                    <span className="text-[9px] text-white font-bold">{d.irr}%</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Key insight */}
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-lg bg-[#2294BD]/8 border border-[#2294BD]/15 px-3 py-2">
          <p className="text-[9px] font-bold uppercase tracking-wider text-[#2294BD] mb-0.5">MOIC direction</p>
          <p className="text-[11px] text-[#1A1A1A] leading-snug">+$72M additional equity value from Year 4 to 6</p>
        </div>
        <div className="rounded-lg bg-[#D9532B]/8 border border-[#D9532B]/15 px-3 py-2">
          <p className="text-[9px] font-bold uppercase tracking-wider text-[#D9532B] mb-0.5">IRR direction</p>
          <p className="text-[11px] text-[#1A1A1A] leading-snug">~5 percentage points of IRR decline over same period</p>
        </div>
      </div>
    </div>
  );
}
