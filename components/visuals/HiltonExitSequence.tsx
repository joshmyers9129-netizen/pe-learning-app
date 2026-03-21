/**
 * HiltonExitSequence
 * Shows Blackstone's multi-year exit sequence for Hilton, illustrating how
 * patient, sequenced exits maximize LP value versus a single-day liquidation.
 * Used in: Day 9 (exit strategy & sequencing).
 */
export default function HiltonExitSequence() {
  const exits = [
    {
      year: "Dec 2013",
      event: "IPO at $20/share",
      detail: "Largest hotel IPO; initial public float establishes market price",
      color: "bg-[#2294BD]",
      pctExited: 15,
    },
    {
      year: "2014",
      event: "Secondary offering",
      detail: "Blackstone sells additional shares into public market strength",
      color: "bg-[#2A9D60]",
      pctExited: 30,
    },
    {
      year: "2015",
      event: "HNA Group stake sale",
      detail: "Strategic sale of a major block to Chinese conglomerate HNA",
      color: "bg-[#FAA51A]",
      pctExited: 55,
    },
    {
      year: "2016",
      event: "Remaining stake sales",
      detail: "Continued orderly sell-down through multiple transactions",
      color: "bg-[#7C5CBF]",
      pctExited: 85,
    },
    {
      year: "2018",
      event: "Final exit complete",
      detail: "Last shares sold; total hold period ~11 years from acquisition",
      color: "bg-[#1A1A1A]",
      pctExited: 100,
    },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
        Hilton Exit Sequence — 5+ Years of Patient Execution
      </p>

      {/* Exit timeline with progress */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Exit Timeline & Cumulative Sell-Down
        </p>
        <div className="space-y-0">
          {exits.map((item, i) => (
            <div key={item.year} className="flex gap-3">
              {/* Vertical line + dot */}
              <div className="flex flex-col items-center">
                <div className={`w-3 h-3 rounded-full ${item.color} flex-shrink-0`} />
                {i < exits.length - 1 && (
                  <div className="w-px flex-1 bg-[#E8DDD4] min-h-[32px]" />
                )}
              </div>
              {/* Content */}
              <div className="pb-3 flex-1">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-[11px] font-bold text-[#1A1A1A]">{item.year}</span>
                  <span className="text-[11px] font-semibold text-[#404040]">{item.event}</span>
                </div>
                <p className="text-[10px] text-[#9A918A] mb-1.5">{item.detail}</p>
                {/* Progress bar */}
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 rounded-full bg-[#E8DDD4] overflow-hidden">
                    <div
                      className={`h-full rounded-full ${item.color}`}
                      style={{ width: `${item.pctExited}%` }}
                    />
                  </div>
                  <span className="text-[9px] font-bold text-[#404040] w-[32px] text-right">
                    {item.pctExited}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Single-day vs sequenced comparison */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-3">
          Sequenced Exit vs Single-Day Liquidation
        </p>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg border border-[#2A9D60]/30 bg-[#2A9D60]/5 p-3 text-center">
            <p className="text-[9px] font-bold uppercase tracking-wider text-[#2A9D60] mb-1">
              Sequenced Exit (Actual)
            </p>
            <p className="text-xl font-bold text-[#2A9D60]">~$14B</p>
            <p className="text-[9px] text-[#9A918A]">Total proceeds over 5+ years</p>
            <p className="text-[9px] text-[#2A9D60] font-semibold mt-1">~2.7x gross MOIC</p>
          </div>
          <div className="rounded-lg border border-[#D9532B]/30 bg-[#D9532B]/5 p-3 text-center">
            <p className="text-[9px] font-bold uppercase tracking-wider text-[#D9532B] mb-1">
              Single-Day Exit (Hypothetical)
            </p>
            <p className="text-xl font-bold text-[#D9532B]">~$10–11B</p>
            <p className="text-[9px] text-[#9A918A]">Estimated with market impact discount</p>
            <p className="text-[9px] text-[#D9532B] font-semibold mt-1">~1.9–2.0x gross MOIC</p>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-center gap-1.5">
          <div className="h-px flex-1 bg-[#2A9D60]" />
          <span className="text-[10px] font-bold text-[#2A9D60]">
            +$3–4B from patient sequencing
          </span>
          <div className="h-px flex-1 bg-[#2A9D60]" />
        </div>
      </div>

      {/* Key principle */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3 flex items-center gap-3">
        <div className="w-1 h-8 rounded bg-[#7C5CBF] flex-shrink-0" />
        <div>
          <p className="text-[11px] font-semibold text-[#1A1A1A]">
            Exit route is a sequence, not a single event
          </p>
          <p className="text-[10px] text-[#9A918A]">
            IPO → secondaries → strategic block sales → final sell-down, each timed for market
            conditions
          </p>
        </div>
      </div>

      {/* Callout */}
      <div className="rounded-lg bg-[#2294BD]/10 border border-[#2294BD]/30 px-3 py-2.5">
        <span className="text-[9px] font-bold uppercase tracking-wider text-[#2294BD] mr-1.5">
          Key insight
        </span>
        <span className="text-[11px] text-[#404040]">
          Exit route is a sequence, not a single event — Blackstone&rsquo;s patience in exit
          execution added hundreds of millions in LP value
        </span>
      </div>
    </div>
  );
}
