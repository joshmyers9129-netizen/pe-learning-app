/**
 * ReserveDecisionTree
 * Decision tree for venture follow-on reserve deployment.
 * Used in: Day 16 (venture reserves).
 */
export default function ReserveDecisionTree() {
  const layers = [
    { name: "Thesis Update", q: "Has the evidence actually improved since the first check?", fail: "Manager supports the company out of familiarity rather than conviction" },
    { name: "Price / Terms", q: "Is the new round economically attractive enough?", fail: "Ownership defense becomes valuation indifference" },
    { name: "Reserve Capacity", q: "Can the fund support the position without harming better opportunities?", fail: "Rights exist on paper but not in practice" },
    { name: "Relative Ranking", q: "Is this one of the highest-value uses of capital in the portfolio today?", fail: "Reserves get spread too broadly" },
    { name: "Signaling Impact", q: "What does participation or non-participation communicate?", fail: "Manager either ignores or overweights signaling" },
    { name: "Ownership Outcome", q: "Will this check preserve enough economics to matter?", fail: "Small defensive checks create noise, not fund impact" },
  ];

  return (
    <div className="my-3">
      <div className="space-y-0">
        {layers.map((l, i) => (
          <div key={i} className="flex items-stretch">
            {/* Gate indicator */}
            <div className="w-10 flex-shrink-0 flex flex-col items-center">
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                i === 0 ? "border-[#2A9D60] bg-[#2A9D60]/10" : "border-[#E8DDD4] bg-white"
              }`}>
                <span className={`text-[10px] font-bold ${i === 0 ? "text-[#2A9D60]" : "text-[#9A918A]"}`}>{i + 1}</span>
              </div>
              {i < layers.length - 1 && (
                <div className="w-px flex-1 bg-[#E8DDD4] my-0.5" />
              )}
            </div>

            {/* Content card */}
            <div className="flex-1 mb-2 ml-1">
              <div className="rounded-lg border border-[#E8DDD4] bg-white shadow-sm p-3">
                <p className="text-[12px] font-bold text-[#1A1A1A] mb-1">{l.name}</p>
                <p className="text-[11px] text-[#404040] leading-snug mb-1.5">{l.q}</p>
                <div className="rounded bg-[#D9532B]/6 border border-[#D9532B]/10 px-2 py-1 inline-flex items-center gap-1">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#D9532B]">If weak:</span>
                  <span className="text-[10px] text-[#404040]">{l.fail}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
