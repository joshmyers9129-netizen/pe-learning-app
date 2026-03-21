/**
 * ILPASubscriptionLines
 * Visualizes the ILPA campaign on subscription line transparency, showing
 * how sub-lines inflate IRR and the timeline of regulatory/industry response.
 * Used in: Day 14 (subscription lines & IRR distortion).
 */
export default function ILPASubscriptionLines() {
  const timeline = [
    {
      year: "2017",
      event: "ILPA issues guidance on sub-line reporting",
      color: "bg-[#2294BD]",
    },
    {
      year: "2020",
      event: "Updated guidance requiring dual IRR disclosure",
      color: "bg-[#FAA51A]",
    },
    {
      year: "2022+",
      event: "Most LPs now request sub-line adjusted returns",
      color: "bg-[#2A9D60]",
    },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
        ILPA Subscription Line Transparency Campaign
      </p>

      {/* IRR Impact comparison */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-3">
          Same Fund, Same Investments — Different Reported IRR
        </p>
        <div className="grid grid-cols-2 gap-3">
          {/* Without sub line */}
          <div className="rounded-lg border border-[#E8DDD4] bg-[#FAF8F5] p-3 text-center">
            <p className="text-[9px] font-bold uppercase tracking-wider text-[#9A918A] mb-1">
              Without Sub Line
            </p>
            <p className="text-2xl font-bold text-[#2294BD]">12%</p>
            <p className="text-[10px] text-[#9A918A]">Net IRR</p>
            <div className="mt-2 h-2 rounded-full bg-[#E8DDD4] overflow-hidden">
              <div className="h-full rounded-full bg-[#2294BD]" style={{ width: "48%" }} />
            </div>
          </div>
          {/* With sub line */}
          <div className="rounded-lg border border-[#D9532B]/30 bg-[#D9532B]/5 p-3 text-center">
            <p className="text-[9px] font-bold uppercase tracking-wider text-[#D9532B] mb-1">
              With Sub Line
            </p>
            <p className="text-2xl font-bold text-[#D9532B]">15%</p>
            <p className="text-[10px] text-[#9A918A]">Net IRR</p>
            <div className="mt-2 h-2 rounded-full bg-[#E8DDD4] overflow-hidden">
              <div className="h-full rounded-full bg-[#D9532B]" style={{ width: "60%" }} />
            </div>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-center gap-1.5">
          <div className="h-px flex-1 bg-[#FAA51A]" />
          <span className="text-[10px] font-bold text-[#FAA51A]">+300bps artificial boost</span>
          <div className="h-px flex-1 bg-[#FAA51A]" />
        </div>
      </div>

      {/* Timeline */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Industry Response Timeline
        </p>
        <div className="space-y-0">
          {timeline.map((item, i) => (
            <div key={item.year} className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className={`w-3 h-3 rounded-full ${item.color} flex-shrink-0`} />
                {i < timeline.length - 1 && (
                  <div className="w-px flex-1 bg-[#E8DDD4] min-h-[16px]" />
                )}
              </div>
              <div className="pb-2.5">
                <span className="text-[11px] font-bold text-[#1A1A1A] mr-1.5">{item.year}</span>
                <span className="text-[11px] text-[#404040]">{item.event}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Callout */}
      <div className="rounded-lg bg-[#FAA51A]/10 border border-[#FAA51A]/30 px-3 py-2.5">
        <span className="text-[9px] font-bold uppercase tracking-wider text-[#FAA51A] mr-1.5">
          Key insight
        </span>
        <span className="text-[11px] text-[#404040]">
          Subscription lines can add 200-400bps to reported IRR without creating any additional value
        </span>
      </div>
    </div>
  );
}
