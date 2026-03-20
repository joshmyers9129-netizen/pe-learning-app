/**
 * DenominatorProblem
 * Visual showing how denominator choice changes TVPI dramatically.
 * Used in: Day 5 (multiples).
 */
export default function DenominatorProblem() {
  const bases = [
    { name: "Committed", amount: "$1.5B", tvpi: "0.95x", desc: "Full LP obligation (called + uncalled)", user: "LPs computing own program return", tag: "Most conservative", color: "#2294BD" },
    { name: "Paid-In", amount: "$1.1B", tvpi: "1.30x", desc: "LP capital actually called to date", user: "Industry standard (CA/Preqin)", tag: "ILPA Standard", color: "#FAA51A" },
    { name: "Invested", amount: "$0.95B", tvpi: "1.51x", desc: "Capital deployed only; excludes fees", user: "GPs seeking favorable presentation", tag: "Highest", color: "#D9532B" },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4">
      <p className="text-[10px] font-bold uppercase tracking-widest text-[#404040] mb-1">
        Same Fund, Three TVPIs — Year 5 Example
      </p>
      <p className="text-[10px] text-[#9A918A] mb-4">
        Distributions = $180M, NAV = $1.25B → Numerator = $1.43B in all cases
      </p>

      <div className="space-y-2.5 mb-4">
        {bases.map((b, i) => (
          <div key={i} className="rounded-lg border border-[#E8DDD4] bg-white shadow-sm overflow-hidden flex items-stretch">
            <div className="w-1.5 flex-shrink-0" style={{ backgroundColor: b.color }} />
            <div className="flex-1 p-3 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <p className="text-[12px] font-bold text-[#1A1A1A]">{b.name} Capital</p>
                  <span className="text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full" style={{ backgroundColor: `${b.color}15`, color: b.color }}>{b.tag}</span>
                </div>
                <p className="text-[10px] text-[#9A918A]">{b.desc}</p>
              </div>
              <div className="text-right">
                <p className="text-[9px] text-[#9A918A]">{b.amount} denominator</p>
                <p className="text-[20px] font-bold" style={{ color: b.color }}>{b.tvpi}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-lg bg-[#D9532B]/8 border border-[#D9532B]/15 px-3 py-2 text-center">
        <span className="text-[12px] font-bold text-[#D9532B]">0.56x spread</span>
        <span className="text-[10px] text-[#404040] ml-2">entirely denominator-driven — no change in any investment</span>
      </div>
    </div>
  );
}
