/**
 * TritonContinuationFund
 * Triton continuation fund process, economics, conflict map, and allocator analysis.
 * Used in: Day 24 (continuation funds and GP-led secondaries).
 */
export default function TritonContinuationFund() {
  const economics = [
    { label: "Acquisition Cost", value: "~€210M", detail: "Original entry price for portfolio assets", color: "#2294BD" },
    { label: "Gross Proceeds", value: "~€550M", detail: "Total value generated from the continuation vehicle", color: "#2A9D60" },
    { label: "Gross Multiple", value: "~2.6x", detail: "Return on assets transferred into continuation fund", color: "#2A9D60" },
  ];

  const conflictRoles = [
    { role: "Seller", detail: "GP decides which assets leave the original fund and at what price", color: "#D9532B" },
    { role: "Buyer", detail: "GP (via new vehicle) acquires the same assets it is selling", color: "#D9532B" },
    { role: "Valuation Narrator", detail: "GP controls the information used to justify the transfer price", color: "#7C5CBF" },
    { role: "Relationship Manager", detail: "GP manages LP relationships on both sides of the transaction", color: "#FAA51A" },
  ];

  const allocatorAnalysis = [
    {
      step: "Process Fairness ≠ Outcome Certainty",
      detail: "A fair process with independent pricing does not guarantee that selling LPs received the best available outcome — process quality reduces but does not eliminate asymmetry",
      color: "#2294BD",
    },
    {
      step: "Information Asymmetry Persists",
      detail: "The GP knows more about the assets than any LP or third-party evaluator — this information gap cannot be fully closed by fairness opinions or independent committees",
      color: "#FAA51A",
    },
    {
      step: "Governance Culture Matters",
      detail: "Whether LPs feel they had a genuine choice — with adequate time, information, and alternatives — shapes whether the process is viewed as legitimate or performative",
      color: "#2A9D60",
    },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
        Triton Continuation Fund — Process, Price &amp; Conflict
      </p>

      {/* Economics */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Transaction Economics
        </p>
        <div className="grid grid-cols-3 gap-3">
          {economics.map((e, i) => (
            <div key={i} className="text-center">
              <p className="text-[20px] font-bold" style={{ color: e.color }}>{e.value}</p>
              <p className="text-[10px] font-bold text-[#1A1A1A] mt-0.5">{e.label}</p>
              <p className="text-[9px] text-[#9A918A] mt-0.5">{e.detail}</p>
            </div>
          ))}
        </div>
        {/* Bar showing value creation */}
        <div className="mt-3 flex h-5 rounded overflow-hidden">
          <div className="bg-[#2294BD] flex items-center justify-center" style={{ width: "38%" }}>
            <span className="text-[8px] text-white font-bold">€210M cost</span>
          </div>
          <div className="bg-[#2A9D60] flex items-center justify-center" style={{ width: "62%" }}>
            <span className="text-[8px] text-white font-bold">€340M value created</span>
          </div>
        </div>
      </div>

      {/* Conflict map */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-3">
          Conflict Map — GP Wears Four Hats Simultaneously
        </p>
        <div className="grid grid-cols-2 gap-2">
          {conflictRoles.map((c, i) => (
            <div key={i} className="rounded-lg border border-[#E8DDD4] bg-[#FAF8F5] p-2.5">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: c.color }} />
                <p className="text-[11px] font-bold text-[#1A1A1A]">{c.role}</p>
              </div>
              <p className="text-[10px] text-[#404040] leading-snug">{c.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Three-step allocator analysis */}
      <div className="space-y-2">
        {allocatorAnalysis.map((a, i) => (
          <div key={i} className="rounded-xl border border-[#E8DDD4] bg-white shadow-sm overflow-hidden">
            <div className="flex items-stretch">
              <div className="w-1.5 flex-shrink-0" style={{ backgroundColor: a.color }} />
              <div className="flex-1 px-3.5 py-2.5">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full text-white" style={{ backgroundColor: a.color }}>
                    {i + 1}
                  </span>
                  <p className="text-[11px] font-bold text-[#1A1A1A]">{a.step}</p>
                </div>
                <p className="text-[11px] text-[#404040] leading-snug">{a.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Key insight */}
      <div className="rounded-lg bg-[#2294BD]/10 border border-[#2294BD]/30 px-3 py-2.5">
        <span className="text-[9px] font-bold uppercase tracking-wider text-[#2294BD] mr-1.5">
          Key insight
        </span>
        <span className="text-[11px] text-[#404040]">
          A transaction can have independent pricing support and still leave selling LPs with an economically unattractive exit. The question is not whether the process was fair on paper, but whether LPs had the information, time, and alternatives to make a genuine choice.
        </span>
      </div>
    </div>
  );
}
