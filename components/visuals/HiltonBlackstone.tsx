/**
 * HiltonBlackstone
 * Comprehensive LBO case decomposition of Blackstone's Hilton Hotels acquisition,
 * showing timeline, value creation breakdown, and key metrics from entry to exit.
 * Used in: Day 9 (value creation & LBO case studies).
 */
export default function HiltonBlackstone() {
  const timeline = [
    {
      year: "Oct 2007",
      event: "$26B acquisition",
      detail: "Largest hotel LBO in history; 13x EBITDA entry multiple",
      color: "bg-[#2294BD]",
    },
    {
      year: "2008–2009",
      event: "GFC hits — hotel RevPAR drops 20%+",
      detail: "Hilton's value falls below debt level; near-bankruptcy scenario",
      color: "bg-[#D9532B]",
    },
    {
      year: "2010–2012",
      event: "Operational turnaround + refinancing",
      detail: "Restructured $20B+ in debt; added 1,000+ hotels via franchising",
      color: "bg-[#FAA51A]",
    },
    {
      year: "Dec 2013",
      event: "IPO at $20/share",
      detail: "Largest hotel IPO ever; initial public market exit begins",
      color: "bg-[#2A9D60]",
    },
    {
      year: "2018",
      event: "Full exit",
      detail: "Blackstone completes exit after sequencing sales over 5+ years",
      color: "bg-[#7C5CBF]",
    },
  ];

  const valueDrivers = [
    { label: "Revenue Growth", pct: 30, color: "bg-[#2294BD]", desc: "Global expansion & franchising" },
    { label: "Margin Expansion", pct: 25, color: "bg-[#2A9D60]", desc: "Fee-based model shift" },
    { label: "Multiple Expansion", pct: 25, color: "bg-[#FAA51A]", desc: "13x entry → higher exit" },
    { label: "Deleveraging", pct: 20, color: "bg-[#7C5CBF]", desc: "Debt paydown from cash flow" },
  ];

  const metrics = [
    { label: "Entry EV", value: "$26B", sub: "Oct 2007" },
    { label: "Entry Multiple", value: "13x", sub: "EV/EBITDA" },
    { label: "Peak Debt", value: "$20.5B", sub: "At acquisition" },
    { label: "Exit EV", value: "~$58B", sub: "Full exit basis" },
    { label: "Gross MOIC", value: "~2.7x", sub: "On equity invested" },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
        Hilton / Blackstone — LBO Case Decomposition
      </p>

      {/* Timeline */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Deal Timeline
        </p>
        <div className="space-y-0">
          {timeline.map((item, i) => (
            <div key={item.year} className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className={`w-3 h-3 rounded-full ${item.color} flex-shrink-0`} />
                {i < timeline.length - 1 && (
                  <div className="w-px flex-1 bg-[#E8DDD4] min-h-[24px]" />
                )}
              </div>
              <div className="pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-[#1A1A1A]">{item.year}</span>
                  <span className="text-[11px] font-semibold text-[#404040]">{item.event}</span>
                </div>
                <p className="text-[10px] text-[#9A918A]">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Value creation decomposition */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Value Creation Decomposition — Entry $26B → Exit ~$58B
        </p>
        <div className="flex h-7 rounded overflow-hidden mb-2">
          {valueDrivers.map((d) => (
            <div
              key={d.label}
              className={`${d.color} flex items-center justify-center`}
              style={{ width: `${d.pct}%` }}
            >
              <span className="text-[8px] text-white font-bold">{d.pct}%</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          {valueDrivers.map((d) => (
            <div key={d.label} className="flex items-start gap-1.5">
              <div className={`w-2 h-2 rounded-sm ${d.color} mt-0.5 flex-shrink-0`} />
              <div>
                <p className="text-[10px] font-semibold text-[#1A1A1A]">{d.label}</p>
                <p className="text-[9px] text-[#9A918A]">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key metrics */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Key Metrics
        </p>
        <div className="flex gap-2">
          {metrics.map((m) => (
            <div key={m.label} className="flex-1 rounded-lg bg-[#FAF8F5] p-2 text-center">
              <p className="text-[9px] font-bold uppercase tracking-wider text-[#9A918A]">
                {m.label}
              </p>
              <p className="text-[14px] font-bold text-[#1A1A1A]">{m.value}</p>
              <p className="text-[8px] text-[#9A918A]">{m.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Callout */}
      <div className="rounded-lg bg-[#D9532B]/10 border border-[#D9532B]/30 px-3 py-2.5">
        <span className="text-[9px] font-bold uppercase tracking-wider text-[#D9532B] mr-1.5">
          Key insight
        </span>
        <span className="text-[11px] text-[#404040]">
          Nearly went to zero in 2009. Blackstone&rsquo;s ability to restructure $20B+ in debt saved
          the investment.
        </span>
      </div>
    </div>
  );
}
