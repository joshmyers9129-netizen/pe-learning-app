/**
 * CompanyToFundRelevance
 * Step-by-step flow showing how company success translates (or doesn't) to fund returns.
 * Used in: Day 15 (venture ownership).
 */
export default function CompanyToFundRelevance() {
  const steps = [
    { step: "Company Value", q: "Did the company become valuable?", fail: "LPs stop the analysis here", color: "#2A9D60" },
    { step: "Fund Ownership", q: "What percent does the fund actually own now?", fail: "Entry ownership is cited instead of current or exit ownership", color: "#2294BD" },
    { step: "Dilution Basis", q: "Is that ownership fully diluted and pro forma?", fail: "Basic ownership overstates economics", color: "#1A7A9E" },
    { step: "Security Stack", q: "Do preferences or senior terms absorb value first?", fail: "Common-equity intuition is applied too early", color: "#FAA51A" },
    { step: "Capital Invested", q: "How much follow-on capital was required?", fail: "First-check bragging hides later cost", color: "#D9532B" },
    { step: "Fund Impact", q: "Can this outcome move total fund returns?", fail: "Great company, weak fund contribution", color: "#7C5CBF" },
  ];

  return (
    <div className="my-3">
      <div className="space-y-1">
        {steps.map((s, i) => (
          <div key={i} className="flex items-stretch gap-0">
            {/* Left: flow connector */}
            <div className="w-8 flex-shrink-0 flex flex-col items-center">
              <div className="w-3 h-3 rounded-full border-2 flex-shrink-0" style={{ borderColor: s.color, backgroundColor: `${s.color}30` }} />
              {i < steps.length - 1 && <div className="w-px flex-1 bg-[#E8DDD4]" />}
            </div>
            {/* Right: content */}
            <div className="flex-1 pb-2.5">
              <div className="rounded-lg border border-[#E8DDD4] bg-white shadow-sm p-3">
                <p className="text-[12px] font-bold mb-1" style={{ color: s.color }}>{s.step}</p>
                <p className="text-[11px] text-[#1A1A1A] mb-1.5">{s.q}</p>
                <div className="rounded bg-[#D9532B]/6 border border-[#D9532B]/10 px-2 py-1">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#D9532B] mr-1">Failure mode</span>
                  <span className="text-[10px] text-[#404040]">{s.fail}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
