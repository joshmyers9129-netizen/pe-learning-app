/**
 * NAVCredibilityTests
 * Five practical tests for evaluating NAV trustworthiness.
 * Used in: Day 12 (valuation).
 */
export default function NAVCredibilityTests() {
  const tests = [
    { name: "Public Comp Comparison", lookFor: "Are the selected multiples and peer set plausible under current market conditions?", icon: "1" },
    { name: "Exit-to-Mark History", lookFor: "Do realized exits validate or undermine prior carrying values?", icon: "2" },
    { name: "Quarterly Asymmetry", lookFor: "Does the GP respond symmetrically to market moves up and down?", icon: "3" },
    { name: "Methodology Transparency", lookFor: "Can the GP explain peer choice, metric choice, and adjustments clearly?", icon: "4" },
    { name: "Concentration Analysis", lookFor: "Are a few large marks dominating the fund-level NAV story?", icon: "5" },
  ];

  const colors = ["#2294BD", "#1A7A9E", "#FAA51A", "#D9532B", "#7C5CBF"];

  return (
    <div className="my-3">
      <div className="grid grid-cols-5 gap-2">
        {tests.map((t, i) => (
          <div key={i} className="rounded-xl border border-[#E8DDD4] bg-white shadow-sm overflow-hidden">
            <div className="h-12 flex items-center justify-center" style={{ backgroundColor: `${colors[i]}12` }}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: colors[i] }}>
                <span className="text-white text-sm font-bold">{t.icon}</span>
              </div>
            </div>
            <div className="p-2.5 text-center">
              <p className="text-[11px] font-bold text-[#1A1A1A] mb-1.5">{t.name}</p>
              <p className="text-[10px] text-[#404040] leading-snug">{t.lookFor}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
