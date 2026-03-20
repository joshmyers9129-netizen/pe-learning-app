/**
 * IRRManipulation
 * Six numbered risk cards showing IRR inflation mechanisms.
 * Used in: Day 6 (performance metrics).
 */
export default function IRRManipulation() {
  const mechanisms = [
    {
      num: 1,
      name: "Subscription Line Facilities",
      how: "Delaying LP cash outflows 60–180 days compresses measured investment period. A 90-day delay on $200M at 20% IRR creates ~$9.9M of mechanical benefit.",
      ask: "Request unadjusted IRR alongside reported figure (ILPA 2017 guidance)",
    },
    {
      num: 2,
      name: "Early Exit Concentration",
      how: "Small investments exited fast at high MOICs generate outsized per-dollar IRR while large, slow positions remain unrealized.",
      ask: "Compare top-3 IRR investments as % of total committed capital",
    },
    {
      num: 3,
      name: "Capital Recycling",
      how: "Early distributions reinvested without a new call. Paid-in stays at $100M while invested grows to $200M — inflating multiples.",
      ask: "Check LPA for recycling provisions and their scope",
    },
    {
      num: 4,
      name: "Selective Benchmark",
      how: "Presenting IRR against a median that includes fully-realized older vintages while the current fund benefits from J-curve inflection.",
      ask: "Confirm benchmark universe: same vintage year and same lifecycle stage",
    },
    {
      num: 5,
      name: "PIK / Accruing Preferred",
      how: "Pay-in-kind interest or accruing preferred equity accumulates marks without cash — building apparent TVPI and IRR on non-cash income.",
      ask: "Identify PIK structures in portfolio company capital stacks",
    },
    {
      num: 6,
      name: "Expense Allocation",
      how: "Allocating portfolio company costs to fund-level accounts reduces apparent fund expenses at LP capital's expense.",
      ask: "Review fund-level expense schedule against portfolio company P&Ls",
    },
  ];

  return (
    <div className="my-3 grid grid-cols-2 gap-2.5">
      {mechanisms.map((m) => (
        <div key={m.num} className="rounded-xl border border-[#E8DDD4] bg-white overflow-hidden shadow-sm">
          <div className="flex items-stretch">
            {/* Number badge */}
            <div className="w-10 flex-shrink-0 bg-gradient-to-b from-[#3B3B3B] to-[#4A4A4A] flex items-center justify-center">
              <span className="text-white text-lg font-bold">{m.num}</span>
            </div>
            <div className="flex-1 p-3">
              <p className="text-[12px] font-bold text-[#1A1A1A] mb-1">{m.name}</p>
              <p className="text-[11px] text-[#404040] leading-snug mb-2">{m.how}</p>
              <div className="rounded bg-[#D9532B]/8 border border-[#D9532B]/15 px-2.5 py-1.5">
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#D9532B] mr-1">Ask</span>
                <span className="text-[10px] text-[#404040] leading-snug">{m.ask}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
