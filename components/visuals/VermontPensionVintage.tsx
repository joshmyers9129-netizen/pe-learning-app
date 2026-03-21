/**
 * VermontPensionVintage
 * Shows vintage year bias in performance reporting using three fund vintage
 * "cards" that illustrate how younger funds can appear stronger by TVPI
 * but have the least confirmed cash (DPI).
 * Used in: Day 5 (multiples, vintage year bias & DPI maturity).
 */
export default function VermontPensionVintage() {
  const vintages = [
    {
      year: 2019,
      age: 4,
      tvpi: 1.6,
      dpi: 0.1,
      color: "border-[#D9532B]/40",
      bg: "bg-[#D9532B]/5",
      accent: "text-[#D9532B]",
      barColor: "bg-[#D9532B]",
      dpiBarColor: "bg-[#2A9D60]",
    },
    {
      year: 2017,
      age: 6,
      tvpi: 1.5,
      dpi: 0.7,
      color: "border-[#FAA51A]/40",
      bg: "bg-[#FAA51A]/5",
      accent: "text-[#FAA51A]",
      barColor: "bg-[#FAA51A]",
      dpiBarColor: "bg-[#2A9D60]",
    },
    {
      year: 2015,
      age: 8,
      tvpi: 1.7,
      dpi: 1.4,
      color: "border-[#2A9D60]/40",
      bg: "bg-[#2A9D60]/5",
      accent: "text-[#2A9D60]",
      barColor: "bg-[#2A9D60]",
      dpiBarColor: "bg-[#2A9D60]",
    },
  ];

  const maxTvpi = 2.0;

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
        Vintage Year Bias — Vermont Pension Example
      </p>

      {/* Vintage cards */}
      <div className="grid grid-cols-3 gap-3">
        {vintages.map((v) => (
          <div key={v.year} className={`rounded-lg border ${v.color} ${v.bg} p-3`}>
            <p className={`text-[13px] font-bold ${v.accent}`}>{v.year} Fund</p>
            <p className="text-[9px] text-[#9A918A] mb-3">Year {v.age}</p>

            {/* TVPI */}
            <div className="mb-2">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#9A918A]">
                  TVPI
                </span>
                <span className="text-[12px] font-bold text-[#1A1A1A]">{v.tvpi}x</span>
              </div>
              <div className="h-2 rounded-full bg-[#E8DDD4] overflow-hidden">
                <div
                  className={`h-full rounded-full ${v.barColor}`}
                  style={{ width: `${(v.tvpi / maxTvpi) * 100}%` }}
                />
              </div>
            </div>

            {/* DPI */}
            <div className="mb-2">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#9A918A]">
                  DPI
                </span>
                <span className="text-[12px] font-bold text-[#2A9D60]">{v.dpi}x</span>
              </div>
              <div className="h-2 rounded-full bg-[#E8DDD4] overflow-hidden">
                <div
                  className={`h-full rounded-full ${v.dpiBarColor}`}
                  style={{ width: `${(v.dpi / maxTvpi) * 100}%` }}
                />
              </div>
            </div>

            {/* Cash confirmation */}
            <p className="text-[9px] text-[#9A918A] italic">
              {Math.round((v.dpi / v.tvpi) * 100)}% confirmed
            </p>
          </div>
        ))}
      </div>

      {/* Arrow callout */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3 flex items-center gap-3">
        <div className="w-1 h-8 rounded bg-[#7C5CBF] flex-shrink-0" />
        <div>
          <p className="text-[11px] font-semibold text-[#1A1A1A]">
            Youngest fund looks strongest by TVPI — but has lowest confirmed cash
          </p>
          <p className="text-[10px] text-[#9A918A]">
            2019 fund: TVPI 1.6x but only 0.1x DPI (6% confirmed) vs 2015 fund: 1.7x TVPI with
            1.4x DPI (82% confirmed)
          </p>
        </div>
      </div>

      {/* Callout */}
      <div className="rounded-lg bg-[#7C5CBF]/10 border border-[#7C5CBF]/30 px-3 py-2.5">
        <span className="text-[9px] font-bold uppercase tracking-wider text-[#7C5CBF] mr-1.5">
          Key insight
        </span>
        <span className="text-[11px] text-[#404040]">
          Vermont&rsquo;s vintage composite showed that the youngest fund appeared to be the best
          performer, but it was also the least proven
        </span>
      </div>
    </div>
  );
}
