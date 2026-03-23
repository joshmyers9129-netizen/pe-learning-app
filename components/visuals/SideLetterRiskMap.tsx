/**
 * SideLetterRiskMap
 * Shows how side-letter rights and fund-finance permissions create hidden LP risk asymmetry.
 * Used in: Day 21 (side letters and preferential treatment).
 */
export default function SideLetterRiskMap() {
  const dimensions = [
    {
      name: "Information Asymmetry",
      description: "Some LPs receive portfolio-level data, co-invest pipeline access, or early reporting — others see only quarterly letters",
      lpA: "Quarterly NAV report with narrative commentary",
      lpB: "Monthly portfolio data, deal-level financials, GP pipeline visibility",
      color: "#2294BD",
    },
    {
      name: "Liquidity Asymmetry",
      description: "Certain LPs negotiate early opt-out rights, secondary transfer pre-approval, or shortened lock-ups",
      lpA: "Standard 10-year fund life, no early exit provisions",
      lpB: "Opt-out after Year 5, pre-approved secondary transfer rights",
      color: "#D9532B",
    },
    {
      name: "Financing Flexibility",
      description: "Side letters can grant or restrict consent rights on NAV loans, subscription lines, or fund-level borrowing",
      lpA: "No consent rights on fund-level borrowing decisions",
      lpB: "Approval required before NAV facility exceeds 15% of GAV; borrowing-base exclusion rights",
      color: "#7C5CBF",
    },
  ];

  const riskProfiles = [
    { label: "Headline Terms", lpA: "2% mgmt fee / 20% carry", lpB: "2% mgmt fee / 20% carry" },
    { label: "Effective Information Access", lpA: "Limited", lpB: "Comprehensive" },
    { label: "Effective Liquidity", lpA: "Fully locked", lpB: "Conditional flexibility" },
    { label: "Financing Risk Exposure", lpA: "Full exposure, no consent", lpB: "Protected, with veto rights" },
    { label: "True Risk Profile", lpA: "Higher embedded risk", lpB: "Structurally de-risked" },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
        Side-Letter Risk Map — Hidden Asymmetry
      </p>

      {/* Three dimensions */}
      <div className="space-y-2.5">
        {dimensions.map((d, i) => (
          <div key={i} className="rounded-xl border border-[#E8DDD4] bg-white shadow-sm overflow-hidden">
            <div className="flex items-stretch">
              <div className="w-1.5 flex-shrink-0" style={{ backgroundColor: d.color }} />
              <div className="flex-1">
                <div className="px-4 py-2.5 border-b border-[#E8DDD4] bg-[#FAF8F5]">
                  <p className="text-[12px] font-bold text-[#1A1A1A]">{d.name}</p>
                  <p className="text-[10px] text-[#9A918A] mt-0.5">{d.description}</p>
                </div>
                <div className="grid grid-cols-2 divide-x divide-[#E8DDD4]">
                  <div className="px-3.5 py-2.5">
                    <div className="flex items-center gap-1.5 mb-1">
                      <div className="w-2 h-2 rounded-full bg-[#9A918A]" />
                      <span className="text-[9px] font-bold uppercase tracking-wider text-[#9A918A]">LP A — Standard Terms</span>
                    </div>
                    <p className="text-[11px] text-[#404040] leading-snug">{d.lpA}</p>
                  </div>
                  <div className="px-3.5 py-2.5">
                    <div className="flex items-center gap-1.5 mb-1">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: d.color }} />
                      <span className="text-[9px] font-bold uppercase tracking-wider" style={{ color: d.color }}>LP B — Side-Letter Terms</span>
                    </div>
                    <p className="text-[11px] text-[#1A1A1A] leading-snug">{d.lpB}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Risk profile comparison */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Identical Fees, Different Risk Profiles
        </p>
        <div className="space-y-1.5">
          {riskProfiles.map((r, i) => (
            <div key={i} className={`grid grid-cols-[160px_1fr_1fr] rounded-md ${i % 2 === 0 ? "bg-[#FAF8F5]" : "bg-white"}`}>
              <div className="px-3 py-2 border-r border-[#E8DDD4]">
                <p className="text-[10px] font-bold text-[#404040]">{r.label}</p>
              </div>
              <div className="px-3 py-2 border-r border-[#E8DDD4]">
                <p className={`text-[11px] leading-snug ${i === riskProfiles.length - 1 ? "font-bold text-[#D9532B]" : "text-[#404040]"}`}>{r.lpA}</p>
              </div>
              <div className="px-3 py-2">
                <p className={`text-[11px] leading-snug ${i === riskProfiles.length - 1 ? "font-bold text-[#2A9D60]" : "text-[#1A1A1A]"}`}>{r.lpB}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SEC focus */}
      <div className="rounded-lg border border-[#D9532B]/30 bg-[#D9532B]/5 px-3 py-2.5">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[10px] font-bold text-[#D9532B]">&#9888;</span>
          <span className="text-[11px] font-semibold text-[#D9532B]">SEC 2023 — Preferential Treatment Focus</span>
        </div>
        <p className="text-[11px] text-[#404040] leading-snug">
          The SEC&rsquo;s 2023 Private Fund Advisers Rule specifically targeted preferential treatment through side letters — requiring disclosure of material economic terms granted to any investor, confirming that regulators view these asymmetries as systemic risk, not just negotiation outcomes.
        </p>
      </div>

      {/* Key insight */}
      <div className="rounded-lg bg-[#2294BD]/10 border border-[#2294BD]/30 px-3 py-2.5">
        <span className="text-[9px] font-bold uppercase tracking-wider text-[#2294BD] mr-1.5">
          Key insight
        </span>
        <span className="text-[11px] text-[#404040]">
          Legal terms are part of underwriting — identical headline fees can hide materially different risk profiles. Side-letter rights on information, liquidity, and financing reshape the economic bargain without changing the fee schedule.
        </span>
      </div>
    </div>
  );
}
