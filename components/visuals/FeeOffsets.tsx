/**
 * FeeOffsets
 * Monitoring, transaction, and directors' fee offset comparison.
 * Used in: Day 3 (fees).
 */
export default function FeeOffsets() {
  const fees = [
    { type: "Monitoring Fees", source: "Annual retainer from portfolio company", rate: "$1–3M/company/year", noOffset: "GP revenue above mgmt fee", withOffset: "Credited against LP mgmt fee" },
    { type: "Transaction Fees", source: "Deal closing at entry and exit", rate: "0.5–1% of EV", noOffset: "GP revenue above mgmt fee", withOffset: "Credited against LP mgmt fee" },
    { type: "Directors' Fees", source: "Board compensation", rate: "Variable", noOffset: "GP revenue above mgmt fee", withOffset: "Credited against LP mgmt fee" },
  ];

  return (
    <div className="my-3 space-y-2">
      {fees.map((f, i) => (
        <div key={i} className="rounded-lg border border-[#E8DDD4] bg-white shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r from-[#3B3B3B] to-[#4A4A4A] px-4 py-2 flex items-center justify-between">
            <span className="text-white text-[11px] font-bold tracking-wide">{f.type}</span>
            <span className="text-white/60 text-[10px]">{f.rate}</span>
          </div>
          <div className="px-4 py-1.5 bg-[#FAF8F5] border-b border-[#E8DDD4]">
            <p className="text-[10px] text-[#9A918A]"><span className="font-semibold">Source:</span> {f.source}</p>
          </div>
          <div className="grid grid-cols-2 divide-x divide-[#E8DDD4]">
            <div className="px-3.5 py-2.5">
              <div className="flex items-center gap-1.5 mb-1">
                <div className="w-2 h-2 rounded-full bg-[#D9532B]" />
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#D9532B]">Without offset</span>
              </div>
              <p className="text-[11px] text-[#404040]">{f.noOffset}</p>
            </div>
            <div className="px-3.5 py-2.5">
              <div className="flex items-center gap-1.5 mb-1">
                <div className="w-2 h-2 rounded-full bg-[#2A9D60]" />
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#2A9D60]">With 100% offset</span>
              </div>
              <p className="text-[11px] text-[#1A1A1A]">{f.withOffset}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
