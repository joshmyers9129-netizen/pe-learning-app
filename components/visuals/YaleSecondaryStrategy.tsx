/**
 * YaleSecondaryStrategy
 * Illustrates multiple motivations behind Yale's 2025 exploration of secondary sales,
 * showing when secondary transactions solve real programme problems vs when they don't.
 * Used in: Day 15 case study.
 */
export default function YaleSecondaryStrategy() {
  const goodReasons = [
    { label: "Liquidity management", detail: "Free capital for near-term needs" },
    { label: "Vintage rebalancing", detail: "Reduce concentration in over-represented vintages" },
    { label: "Exposure reduction", detail: "Right-size PE weight within total portfolio" },
    { label: "Manager pruning", detail: "Exit low-conviction relationships efficiently" },
    { label: "Capital redeployment", detail: "Recycle into higher-conviction opportunities" },
  ];

  const weakReasons = [
    { label: "Reacting to mark volatility", detail: "Short-term NAV swings are not actionable signals" },
    { label: "Discount = cheap assumption", detail: "Discount to reported NAV may reflect fair adjusted value" },
    { label: "GP says it is good", detail: "Asset quality does not equal transaction fairness" },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
        Yale Endowment — Secondary Sales as Programme Management
      </p>

      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[11px] text-[#404040]">
          In 2025, Yale explored selling PE fund interests — not from distress, but as a
          portfolio-management tool used by sophisticated institutions when pacing, liquidity,
          or rebalancing priorities require action.
        </p>
      </div>

      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#2A9D60] mb-2">
          Programme problems secondaries can solve
        </p>
        <div className="space-y-1.5">
          {goodReasons.map((r) => (
            <div key={r.label} className="flex items-start gap-2">
              <span className="text-[10px] text-[#2A9D60] font-bold mt-0.5">{"\u2713"}</span>
              <div>
                <span className="text-[11px] font-semibold text-[#1A1A1A]">{r.label}</span>
                <span className="text-[10px] text-[#9A918A] ml-1.5">— {r.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#D9532B] mb-2">
          Weak reasons to transact
        </p>
        <div className="space-y-1.5">
          {weakReasons.map((r) => (
            <div key={r.label} className="flex items-start gap-2">
              <span className="text-[10px] text-[#D9532B] font-bold mt-0.5">{"\u2717"}</span>
              <div>
                <span className="text-[11px] font-semibold text-[#1A1A1A]">{r.label}</span>
                <span className="text-[10px] text-[#9A918A] ml-1.5">— {r.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Both sides must underwrite correctly
        </p>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <p className="text-[10px] font-semibold text-[#2294BD] mb-1">Seller risk</p>
            <p className="text-[10px] text-[#404040]">
              Treating secondaries as costless balance-sheet management ignores pricing, timing,
              and the quality of what is being sold.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-semibold text-[#2294BD] mb-1">Buyer risk</p>
            <p className="text-[10px] text-[#404040]">
              Interpreting every sale as informational alpha from the seller will misread the
              market — many sales are programme-driven, not conviction-driven.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-[#2294BD]/10 border border-[#2294BD]/30 px-3 py-2.5">
        <span className="text-[9px] font-bold uppercase tracking-wider text-[#2294BD] mr-1.5">
          Key insight
        </span>
        <span className="text-[11px] text-[#404040]">
          Secondary sales from elite institutions reflect programme management strategy, not
          distress — the price, discount, and underlying manager quality still matter
        </span>
      </div>
    </div>
  );
}
