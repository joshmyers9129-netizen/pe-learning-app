/**
 * SequoiaGoogleOutlier
 * Visual for Day 27: Sequoia's Google investment and the mechanics of outlier capture.
 * Shows power-law pipeline, what differentiates outlier capture from market presence,
 * and allocator underwriting questions.
 * Used in: Day 27 (venture outlier case study).
 */
export default function SequoiaGoogleOutlier() {
  const pipeline = [
    {
      stage: "Sourcing",
      desc: "Seeing the deal before consensus forms",
      detail: "Sequoia met Google when it was two Stanford PhD students with no revenue — access came through deep network positioning, not inbound deal flow",
      color: "#2294BD",
    },
    {
      stage: "Conviction",
      desc: "Underwriting without conventional evidence",
      detail: "No revenue, no business model, search market considered commoditised — conviction required pattern recognition beyond spreadsheet metrics",
      color: "#2A9D60",
    },
    {
      stage: "Ownership Discipline",
      desc: "Securing meaningful economic exposure",
      detail: "Entry ownership must be large enough that even after dilution through multiple rounds, the retained stake drives fund-level returns",
      color: "#FAA51A",
    },
    {
      stage: "Organisational Support",
      desc: "Holding through volatility and scaling",
      detail: "Board participation, operational guidance, and willingness to let the position compound rather than distributing early for DPI optics",
      color: "#7C5CBF",
    },
  ];

  const presenceVsCapture = [
    {
      dimension: "Deal access",
      presence: "Sees many deals; invests broadly",
      capture: "Sees the specific deal before it becomes obvious",
    },
    {
      dimension: "Conviction source",
      presence: "Market momentum and social proof",
      capture: "Independent thesis before consensus",
    },
    {
      dimension: "Ownership outcome",
      presence: "Small stakes across many names",
      capture: "Concentrated ownership in the right company",
    },
    {
      dimension: "Fund economics",
      presence: "Diversified but capped upside",
      capture: "Single position can return the fund",
    },
  ];

  const allocatorQuestions = [
    "Is the firm positioned to consistently earn access to the best companies, or was this timing?",
    "Does the partnership structure retain the individuals who drove outlier identification?",
    "Is the fund size disciplined enough that one outlier still matters at the fund level?",
    "Can the firm hold through multiple rounds without selling down for liquidity management?",
    "Is there a repeatable sourcing edge, or was this a one-time network advantage?",
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
        Sequoia / Google — Anatomy of Outlier Capture
      </p>

      {/* Power-law pipeline */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Power-Law Pipeline: Sourcing to Fund Impact
        </p>
        <div className="space-y-0">
          {pipeline.map((s, i) => (
            <div key={s.stage} className="flex gap-3">
              <div className="flex flex-col items-center">
                <div
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: s.color }}
                />
                {i < pipeline.length - 1 && (
                  <div className="w-px flex-1 bg-[#E8DDD4] min-h-[24px]" />
                )}
              </div>
              <div className="pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-[#1A1A1A]">{s.stage}</span>
                  <span className="text-[11px] font-semibold text-[#404040]">{s.desc}</span>
                </div>
                <p className="text-[10px] text-[#9A918A]">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Presence vs capture comparison */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          &ldquo;Being in the Ecosystem&rdquo; vs Outlier Capture
        </p>
        <div className="space-y-1.5">
          {presenceVsCapture.map((row, i) => (
            <div key={i} className="rounded-md border border-[#E8DDD4] overflow-hidden">
              <div className="bg-[#FAF8F5] px-3 py-1 border-b border-[#E8DDD4]">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#404040]">
                  {row.dimension}
                </p>
              </div>
              <div className="grid grid-cols-2 divide-x divide-[#E8DDD4]">
                <div className="px-3 py-2">
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className="w-2 h-2 rounded-full bg-[#9A918A]" />
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#9A918A]">
                      Market presence
                    </span>
                  </div>
                  <p className="text-[11px] text-[#404040] leading-snug">{row.presence}</p>
                </div>
                <div className="px-3 py-2">
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className="w-2 h-2 rounded-full bg-[#2A9D60]" />
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#2A9D60]">
                      Outlier capture
                    </span>
                  </div>
                  <p className="text-[11px] text-[#1A1A1A] leading-snug">{row.capture}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Allocator questions */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Allocator Underwriting Questions
        </p>
        <div className="space-y-1.5">
          {allocatorQuestions.map((q, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-[10px] font-bold text-[#2294BD] mt-0.5 flex-shrink-0">
                {i + 1}.
              </span>
              <p className="text-[11px] text-[#404040] leading-snug">{q}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key insight */}
      <div className="rounded-lg bg-[#2294BD]/10 border border-[#2294BD]/30 px-3 py-2.5">
        <span className="text-[9px] font-bold uppercase tracking-wider text-[#2294BD] mr-1.5">
          Key insight
        </span>
        <span className="text-[11px] text-[#404040]">
          Identifying, winning access to, and holding meaningful exposure to outliers requires a
          specific combination of skills — not just market presence. The allocator question is
          whether the firm can repeat this, not whether it happened once
        </span>
      </div>
    </div>
  );
}
