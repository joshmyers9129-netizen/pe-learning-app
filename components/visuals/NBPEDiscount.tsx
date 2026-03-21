/**
 * NBPEDiscount
 * Compares NB Private Equity Partners NAV per share vs market price, showing the
 * persistent discount. Includes peer comparison with other listed PE vehicles.
 * Used in: Day 16 (listed PE vehicles & NAV discounts).
 */
export default function NBPEDiscount() {
  const peers = [
    { name: "Pantheon International", discount: 35 },
    { name: "HarbourVest Global", discount: 30 },
    { name: "NB Private Equity Partners", discount: 26.5, highlight: true },
    { name: "Princess Private Equity", discount: 20 },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
        NB Private Equity Partners — NAV vs Market Price
      </p>

      {/* NAV vs Market Price comparison */}
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-[#E8DDD4] bg-white p-3 text-center">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-1">
            NAV per Share
          </p>
          <p className="text-2xl font-bold text-[#2A9D60]">&pound;21.49</p>
          <p className="text-[10px] text-[#9A918A] mt-0.5">Reported net asset value</p>
        </div>
        <div className="rounded-lg border border-[#E8DDD4] bg-white p-3 text-center">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-1">
            Market Price
          </p>
          <p className="text-2xl font-bold text-[#D9532B]">&pound;15.80</p>
          <p className="text-[10px] text-[#9A918A] mt-0.5">Public trading price</p>
        </div>
      </div>

      {/* Discount bar */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[11px] font-semibold text-[#1A1A1A]">Discount to NAV</p>
          <p className="text-[13px] font-bold text-[#D9532B]">26.5%</p>
        </div>
        <div className="relative h-4 rounded-full bg-[#E8DDD4] overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-[#D9532B]"
            style={{ width: "26.5%" }}
          />
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-[9px] text-[#9A918A]">0%</span>
          <span className="text-[9px] text-[#9A918A]">50%</span>
        </div>
      </div>

      {/* Peer comparison */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Listed PE Vehicle Discounts
        </p>
        <div className="space-y-2">
          {peers.map((p) => (
            <div key={p.name} className="flex items-center gap-2">
              <div className="w-[140px] flex-shrink-0">
                <p
                  className={`text-[11px] ${
                    p.highlight ? "font-bold text-[#2294BD]" : "text-[#404040]"
                  }`}
                >
                  {p.name}
                </p>
              </div>
              <div className="flex-1 relative h-5 rounded bg-[#FAF8F5]">
                <div
                  className={`absolute inset-y-0 left-0 rounded ${
                    p.highlight ? "bg-[#2294BD]" : "bg-[#9A918A]/40"
                  }`}
                  style={{ width: `${(p.discount / 50) * 100}%` }}
                />
              </div>
              <span
                className={`text-[11px] font-semibold w-[36px] text-right ${
                  p.highlight ? "text-[#2294BD]" : "text-[#404040]"
                }`}
              >
                ~{p.discount}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Callout */}
      <div className="rounded-lg bg-[#2294BD]/10 border border-[#2294BD]/30 px-3 py-2.5">
        <span className="text-[9px] font-bold uppercase tracking-wider text-[#2294BD] mr-1.5">
          Key insight
        </span>
        <span className="text-[11px] text-[#404040]">
          Even a diversified, well-governed PE portfolio can trade at a persistent discount to NAV
        </span>
      </div>
    </div>
  );
}
