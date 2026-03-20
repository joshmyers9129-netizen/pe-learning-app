/**
 * SeedInstrumentMap - SAFE vs. convertible note vs. priced round comparison.
 */
export default function SeedInstrumentMap() {
  const instruments = [
    { name: "SAFE", receives: "A right to receive equity in a future financing or liquidity event", deferred: "Exact share count and ownership until conversion", concern: "Ownership predictability and dilution uncertainty", color: "from-[#D9532B] to-[#B8421F]" },
    { name: "Convertible Note", receives: "Debt that may convert into equity later, often with cap and/or discount", deferred: "Exact equity economics until conversion, plus debt-related risk", concern: "Maturity, interest, and what happens if conversion doesn't occur cleanly", color: "from-[#FAA51A] to-[#E8940A]" },
    { name: "Priced Preferred", receives: "Actual preferred equity ownership and negotiated terms today", deferred: "Future dilution still exists, but current ownership is clearer", concern: "Less uncertainty at entry, but not necessarily lower overall risk", color: "from-[#2294BD] to-[#1A7A9E]" },
  ];
  return (
    <div className="my-3 space-y-2.5">
      {instruments.map((s, i) => (
        <div key={i} className="rounded-xl border border-[#E8DDD4] bg-white shadow-sm overflow-hidden">
          <div className={`bg-gradient-to-r ${s.color} px-4 py-2.5`}>
            <span className="text-white text-[12px] font-bold tracking-wide">{s.name}</span>
          </div>
          <div className="p-3 space-y-2">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-wider text-[#2A9D60] mb-0.5">What investor receives</p>
              <p className="text-[11px] text-[#1A1A1A] leading-snug">{s.receives}</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded bg-[#FAF8F5] px-2.5 py-1.5">
                <p className="text-[9px] font-bold uppercase tracking-wider text-[#9A918A] mb-0.5">What is deferred</p>
                <p className="text-[10px] text-[#404040] leading-snug">{s.deferred}</p>
              </div>
              <div className="rounded bg-[#D9532B]/6 border border-[#D9532B]/10 px-2.5 py-1.5">
                <p className="text-[9px] font-bold uppercase tracking-wider text-[#D9532B] mb-0.5">Main concern</p>
                <p className="text-[10px] text-[#404040] leading-snug">{s.concern}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
