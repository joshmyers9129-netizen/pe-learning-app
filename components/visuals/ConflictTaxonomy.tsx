/**
 * ConflictTaxonomy
 * Five conflict categories with governance quality indicators.
 * Used in: Day 11 (governance).
 */
export default function ConflictTaxonomy() {
  const conflicts = [
    {
      type: "GP-Led Transactions",
      trigger: "Continuation vehicle, strip sale, tender offer",
      strong: "Early LPAC engagement; broad buyer outreach; adequate LP election timeline",
      weak: "Compressed process; single anchor buyer; materials arrive days before decision",
    },
    {
      type: "Cross-Fund Conflicts",
      trigger: "Allocation of deals, cost-sharing, inter-fund sales",
      strong: "Written allocation policy; disclosed rationale; consistent historical pattern",
      weak: "Vague policy; GP discretion without documentation; ad hoc exceptions",
    },
    {
      type: "Valuation Conflicts",
      trigger: "Marks near fundraising, financing, or GP-led events",
      strong: "Independent committee challenge; third-party support; methodology consistency",
      weak: "Deal team controls final mark; selective use of external support",
    },
    {
      type: "Affiliate / Related-Party",
      trigger: "GP-connected service providers, operating partners",
      strong: "LPAC approval required; full fee offset; transparent disclosure",
      weak: "LPAC notification only; partial or unclear offset; minimal disclosure",
    },
    {
      type: "Fund-Finance Conflicts",
      trigger: "NAV facilities used for distributions or leverage",
      strong: "Clear use-of-proceeds disclosure; LPA contemplated the facility",
      weak: "Vague rationale; facility adopted without LP engagement or awareness",
    },
  ];

  const colors = ["#2294BD", "#FAA51A", "#D9532B", "#7C5CBF", "#2A9D60"];

  return (
    <div className="my-3 space-y-2.5">
      {conflicts.map((c, i) => (
        <div key={i} className="rounded-xl border border-[#E8DDD4] bg-white shadow-sm overflow-hidden">
          <div className="flex items-stretch">
            <div className="w-1.5 flex-shrink-0" style={{ backgroundColor: colors[i] }} />
            <div className="flex-1">
              <div className="px-4 py-2.5 border-b border-[#E8DDD4] bg-[#FAF8F5]">
                <div className="flex items-center justify-between">
                  <p className="text-[12px] font-bold text-[#1A1A1A]">{c.type}</p>
                  <p className="text-[10px] text-[#9A918A] italic">{c.trigger}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 divide-x divide-[#E8DDD4]">
                <div className="px-3.5 py-2.5">
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className="w-2 h-2 rounded-full bg-[#2A9D60]" />
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#2A9D60]">Strong governance</span>
                  </div>
                  <p className="text-[11px] text-[#1A1A1A] leading-snug">{c.strong}</p>
                </div>
                <div className="px-3.5 py-2.5">
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className="w-2 h-2 rounded-full bg-[#D9532B]" />
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#D9532B]">Weak governance</span>
                  </div>
                  <p className="text-[11px] text-[#404040] leading-snug">{c.weak}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
