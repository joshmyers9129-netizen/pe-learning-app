/**
 * DocumentationRiskMap
 * Credit agreement feature map showing where value can leak.
 * Used in: Day 18 (private credit).
 */
export default function DocumentationRiskMap() {
  const features = [
    { name: "Maintenance Covenant", governs: "Ongoing leverage or coverage tests", care: "Creates early intervention points", risk: "high" },
    { name: "Incurrence Covenant", governs: "Debt, liens, investments, restricted payments", care: "May allow deterioration until a specific action is taken", risk: "high" },
    { name: "EBITDA Definition", governs: "How leverage and coverage are measured", care: "Can make weak credits appear safer and enlarge baskets", risk: "critical" },
    { name: "Baskets", governs: "Permitted leakage, debt, investments, transfers", care: "Small drafting changes can create large flexibility", risk: "critical" },
    { name: "Restricted / Unrestricted Subs", governs: "Which assets sit inside lender protection", care: "Value can move outside the collateral package", risk: "high" },
    { name: "Sacred Rights", governs: "What requires unanimous or broad lender consent", care: "Determines whether lender-on-lender violence is possible", risk: "medium" },
    { name: "Reporting Covenant", governs: "Timeliness and detail of information", care: "Weak reporting delays detection of stress", risk: "medium" },
  ];

  const riskColors: Record<string, { bg: string; text: string; label: string }> = {
    critical: { bg: "bg-[#D9532B]", text: "text-white", label: "Critical" },
    high: { bg: "bg-[#FAA51A]", text: "text-white", label: "High" },
    medium: { bg: "bg-[#2294BD]", text: "text-white", label: "Medium" },
  };

  return (
    <div className="my-3 space-y-2">
      {features.map((f, i) => {
        const r = riskColors[f.risk];
        return (
          <div key={i} className="rounded-lg border border-[#E8DDD4] bg-white shadow-sm overflow-hidden flex items-stretch">
            <div className="w-1.5 flex-shrink-0" style={{ backgroundColor: f.risk === "critical" ? "#D9532B" : f.risk === "high" ? "#FAA51A" : "#2294BD" }} />
            <div className="flex-1 p-3">
              <div className="flex items-center gap-2 mb-1.5">
                <p className="text-[12px] font-bold text-[#1A1A1A]">{f.name}</p>
                <span className={`text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full ${r.bg} ${r.text}`}>{r.label}</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-wider text-[#9A918A] mb-0.5">What it governs</p>
                  <p className="text-[11px] text-[#404040] leading-snug">{f.governs}</p>
                </div>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-wider text-[#9A918A] mb-0.5">Why allocator should care</p>
                  <p className="text-[11px] text-[#1A1A1A] leading-snug">{f.care}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
