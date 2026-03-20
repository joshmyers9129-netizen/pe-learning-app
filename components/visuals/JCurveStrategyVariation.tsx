/**
 * JCurveStrategyVariation
 * J-curve depth and timing across PE sub-strategies.
 * Used in: Day 5 (J-curve).
 */
export default function JCurveStrategyVariation() {
  const strategies = [
    { name: "Buyout", fee: "1.5–2% committed", hold: "3–6 yrs", exits: "Yrs 4–7", trough: "Deep", signal: "Yrs 5–7", caveat: "Leverage amplifies both depth and recovery", troughPct: 70, color: "from-[#2294BD] to-[#1A7A9E]" },
    { name: "Growth Equity", fee: "Lower, often invested", hold: "3–5 yrs", exits: "Yrs 3–5", trough: "Shallow", signal: "Yrs 4–6", caveat: "Less leverage; more predictable exits", troughPct: 35, color: "from-[#FAA51A] to-[#E8940A]" },
    { name: "Venture", fee: "2% committed", hold: "7–12 yrs", exits: "Yrs 5–10+", trough: "Deepest", signal: "Yrs 8–12", caveat: "Year-3 VC IRR is nearly meaningless", troughPct: 95, color: "from-[#D9532B] to-[#B8421F]" },
    { name: "Secondaries", fee: "Lower; on NAV", hold: "2–5 yrs", exits: "Yrs 1–3", trough: "Near-flat", signal: "Near-immediate", caveat: "J-curve largely eliminated; not comparable to primary", troughPct: 10, color: "from-[#7C5CBF] to-[#5E3FA3]" },
  ];

  return (
    <div className="my-3 space-y-2.5">
      {strategies.map((s, i) => (
        <div key={i} className="rounded-xl border border-[#E8DDD4] bg-white shadow-sm overflow-hidden">
          <div className={`bg-gradient-to-r ${s.color} px-4 py-2.5 flex items-center justify-between`}>
            <span className="text-white text-[12px] font-bold">{s.name}</span>
            <span className="text-white/70 text-[10px]">Trough: {s.trough}</span>
          </div>
          <div className="p-3">
            <div className="grid grid-cols-4 gap-3 mb-2.5">
              <div><p className="text-[9px] font-bold uppercase tracking-wider text-[#9A918A] mb-0.5">Fee basis</p><p className="text-[11px] text-[#1A1A1A]">{s.fee}</p></div>
              <div><p className="text-[9px] font-bold uppercase tracking-wider text-[#9A918A] mb-0.5">Avg hold</p><p className="text-[11px] text-[#1A1A1A]">{s.hold}</p></div>
              <div><p className="text-[9px] font-bold uppercase tracking-wider text-[#9A918A] mb-0.5">First exits</p><p className="text-[11px] text-[#1A1A1A]">{s.exits}</p></div>
              <div><p className="text-[9px] font-bold uppercase tracking-wider text-[#9A918A] mb-0.5">IRR signal</p><p className="text-[11px] text-[#1A1A1A]">{s.signal}</p></div>
            </div>
            {/* Trough depth bar */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[9px] text-[#9A918A] w-16 flex-shrink-0">J-curve depth</span>
              <div className="flex-1 h-2 bg-[#F5F0EB] rounded-full">
                <div className={`h-full rounded-full bg-gradient-to-r ${s.color} opacity-70`} style={{ width: `${s.troughPct}%` }} />
              </div>
            </div>
            <p className="text-[10px] text-[#9A918A] italic">{s.caveat}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
