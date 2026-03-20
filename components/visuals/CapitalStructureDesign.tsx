/**
 * CapitalStructureDesign - LBO capital structure layers with leverage amplification.
 */
export default function CapitalStructureDesign() {
  const layers = [
    { name: "Senior Secured", size: "4–5x EBITDA", cost: "SOFR + 3.5–5.0%", seniority: "1st lien", chars: "Largest piece; covenant-lite common", pct: 55, color: "#2294BD" },
    { name: "Second-Lien / Unitranche", size: "0.5–1.0x EBITDA", cost: "Higher spread", seniority: "2nd lien", chars: "Prevalent in mid-market", pct: 15, color: "#FAA51A" },
    { name: "High-Yield Bonds", size: "1–2x EBITDA", cost: "6–9% fixed", seniority: "Junior unsecured", chars: "Larger transactions; less common post-2022", pct: 10, color: "#D9532B" },
    { name: "GP / Co-Investor Equity", size: "40–55% of EV", cost: "N/A", seniority: "Residual", chars: "Lowest priority; highest upside", pct: 45, color: "#404040" },
  ];
  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4">
      <p className="text-[10px] font-bold uppercase tracking-widest text-[#404040] mb-3">LBO Capital Structure — Post-2015 Large Buyout</p>
      <div className="space-y-1.5 mb-4">
        {layers.map((l, i) => (
          <div key={i} className="rounded-lg border border-[#E8DDD4] bg-white shadow-sm overflow-hidden flex items-stretch">
            <div className="w-1.5 flex-shrink-0" style={{ backgroundColor: l.color }} />
            <div className="flex-1 p-2.5 flex items-center gap-3">
              <div className="w-28 flex-shrink-0">
                <p className="text-[11px] font-bold text-[#1A1A1A]">{l.name}</p>
                <p className="text-[9px] text-[#9A918A]">{l.seniority}</p>
              </div>
              <div className="flex-1">
                <div className="h-2 bg-[#F5F0EB] rounded-full mb-1"><div className="h-full rounded-full" style={{ width: `${l.pct}%`, backgroundColor: l.color, opacity: 0.6 }} /></div>
                <div className="flex justify-between text-[10px]">
                  <span className="text-[#404040] font-medium">{l.size}</span>
                  <span className="text-[#9A918A]">{l.cost}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-lg bg-[#2A9D60]/8 border border-[#2A9D60]/15 px-3 py-2">
          <p className="text-[9px] font-bold uppercase tracking-wider text-[#2A9D60] mb-0.5">EV +25% at 50% equity</p>
          <p className="text-[16px] font-bold text-[#2A9D60]">+50% <span className="text-[10px] font-normal text-[#404040]">equity return</span></p>
        </div>
        <div className="rounded-lg bg-[#D9532B]/8 border border-[#D9532B]/15 px-3 py-2">
          <p className="text-[9px] font-bold uppercase tracking-wider text-[#D9532B] mb-0.5">EV −25% at 50% equity</p>
          <p className="text-[16px] font-bold text-[#D9532B]">−50% <span className="text-[10px] font-normal text-[#404040]">equity loss</span></p>
        </div>
      </div>
    </div>
  );
}
