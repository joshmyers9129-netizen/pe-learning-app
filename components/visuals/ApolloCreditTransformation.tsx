/**
 * ApolloCreditTransformation
 * Timeline of Apollo's evolution from distressed debt to the dominant private
 * credit platform, including the Athene insurance engine and industry context.
 * Used in: Day 40 (Apollo and private credit).
 */
export default function ApolloCreditTransformation() {
  const timeline = [
    { year: "1990", event: "Founded", detail: "Distressed debt & LBO focus", color: "#9A918A" },
    { year: "2009", event: "Acquired Athene", detail: "Insurance capital engine", color: "#2294BD" },
    { year: "2024", event: "Credit colossus", detail: "Athene ~$300B, total credit AUM >$500B", color: "#2A9D60" },
  ];

  const structuralShift = [
    { from: "Bank balance sheets", to: "Alternative managers + insurance capital" },
    { from: "Syndicated lending", to: "Direct origination at scale" },
    { from: "Fragmented providers", to: "Platform-scale solutions" },
  ];

  const advantages = [
    { label: "Permanent Capital", detail: "Athene insurance liabilities = long-duration funding" },
    { label: "Scale", detail: "$5–10B single commitments possible" },
    { label: "Speed & Certainty", detail: "One-stop vs. syndicated market uncertainty" },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
        Apollo — Private Credit Transformation
      </p>

      {/* Timeline */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-3">
          Evolution Timeline
        </p>
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-[39px] top-2 bottom-2 w-0.5 bg-[#E8DDD4]" />
          <div className="space-y-4">
            {timeline.map((t) => (
              <div key={t.year} className="flex items-start gap-3 relative">
                <div className="w-[50px] flex-shrink-0 text-right">
                  <p className="text-[11px] font-bold" style={{ color: t.color }}>
                    {t.year}
                  </p>
                </div>
                <div
                  className="h-3 w-3 rounded-full flex-shrink-0 mt-0.5 relative z-10 border-2 border-white"
                  style={{ backgroundColor: t.color }}
                />
                <div>
                  <p className="text-[11px] font-semibold text-[#404040]">{t.event}</p>
                  <p className="text-[10px] text-[#9A918A]">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Structural shift */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Structural Shift in Credit Markets
        </p>
        <div className="space-y-2">
          {structuralShift.map((s) => (
            <div key={s.from} className="flex items-center gap-2">
              <p className="text-[11px] text-[#D9532B] w-[130px] flex-shrink-0 text-right">
                {s.from}
              </p>
              <span className="text-[10px] text-[#9A918A]">→</span>
              <p className="text-[11px] font-semibold text-[#2A9D60]">{s.to}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Competitive advantages */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Apollo&apos;s Competitive Advantages
        </p>
        <div className="space-y-2">
          {advantages.map((a) => (
            <div key={a.label} className="flex items-start gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#2294BD] mt-1.5 flex-shrink-0" />
              <div>
                <p className="text-[11px] font-semibold text-[#2294BD]">{a.label}</p>
                <p className="text-[10px] text-[#404040]">{a.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Industry growth + tension */}
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-[#E8DDD4] bg-white p-3 text-center">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-1">
            Global Private Credit AUM
          </p>
          <p className="text-2xl font-bold text-[#2A9D60]">$1.7T+</p>
          <p className="text-[10px] text-[#9A918A] mt-0.5">By 2024, from niche origins</p>
        </div>
        <div className="rounded-lg border border-[#E8DDD4] bg-white p-3 text-center">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-1">
            Key Tension
          </p>
          <p className="text-[11px] font-bold text-[#D9532B] mt-1">Conflict Complexity</p>
          <p className="text-[10px] text-[#404040] mt-0.5">
            Origination + equity ownership + insurance = layered conflicts
          </p>
        </div>
      </div>

      {/* Key insight callout */}
      <div className="rounded-lg bg-[#2294BD]/10 border border-[#2294BD]/30 px-3 py-2.5">
        <span className="text-[9px] font-bold uppercase tracking-wider text-[#2294BD] mr-1.5">
          Key insight
        </span>
        <span className="text-[11px] text-[#404040]">
          The growth of private credit is structural, not cyclical — the combination of bank
          regulatory retreat, insurance demand for yield, and borrower preference for execution
          certainty created a durable market shift.
        </span>
      </div>
    </div>
  );
}
