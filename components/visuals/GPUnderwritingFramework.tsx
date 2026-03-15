/**
 * GPUnderwritingFramework
 * Teaches: The four-lens framework for underwriting a PE manager.
 *          People → Process → Portfolio Construction → Evidence Quality
 * Used in: Day 13 (Manager Selection and GP Underwriting).
 * Pure Tailwind — no charting library.
 */
export default function GPUnderwritingFramework() {
  const lenses = [
    {
      label: "People",
      color: "#2294BD",
      borderColor: "border-[#2294BD]/30",
      bgColor: "bg-[#2294BD]/10",
      labelColor: "text-[#2294BD]",
      questions: [
        "Who makes decisions — and who can veto them?",
        "How is carry distributed across the team?",
        "What is the succession plan if a senior partner leaves?",
        "Is junior partner attribution real or nominal?",
      ],
      risk: "Key-person dependence",
    },
    {
      label: "Process",
      color: "#2A9D60",
      borderColor: "border-[#2A9D60]/30",
      bgColor: "bg-[#2A9D60]/10",
      labelColor: "text-[#2A9D60]",
      questions: [
        "What percentage of deals are proprietary vs. auction?",
        "How often does IC kill a deal the team wants to do?",
        "Can the GP describe a deal it walked away from — and why?",
        "Is discipline embedded in process or in one person's judgment?",
      ],
      risk: "Personality-driven process",
    },
    {
      label: "Portfolio Construction",
      color: "#FAA51A",
      borderColor: "border-[#FAA51A]/30",
      bgColor: "bg-[#FAA51A]/10",
      labelColor: "text-[#C07800]",
      questions: [
        "Is concentration by deal and sector intentional and sized correctly?",
        "What is the reserve policy for follow-on investments?",
        "Does fund size match the investable universe described?",
        "Has fund-size growth changed the competitive market the GP operates in?",
      ],
      risk: "Fund-size creep / sizing mismatch",
    },
    {
      label: "Evidence Quality",
      color: "#7C5CBF",
      borderColor: "border-[#7C5CBF]/30",
      bgColor: "bg-[#7C5CBF]/10",
      labelColor: "text-[#7C5CBF]",
      questions: [
        "What share of the track record is DPI vs. interim marks?",
        "Are returns broad-based or driven by 1–2 outlier deals?",
        "Does the claimed edge appear in realized outcome data?",
        "Is the evidence built at the same fund size and market segment?",
      ],
      risk: "Concentrated or unrealized evidence",
    },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040] mb-1">
        GP Underwriting: Four-Lens Evaluation Framework
      </p>
      <p className="text-[11px] text-[#9A918A] mb-4 italic">
        Strength on one lens does not substitute for weakness on another. Each lens catches a different failure mode.
      </p>

      <div className="grid grid-cols-2 gap-3 mb-4">
        {lenses.map((lens) => (
          <div
            key={lens.label}
            className={`rounded-lg border ${lens.borderColor} bg-white p-3`}
          >
            <p
              className={`text-[10px] font-bold uppercase tracking-wide ${lens.labelColor} mb-2`}
            >
              {lens.label}
            </p>
            <ul className="space-y-1 mb-2.5">
              {lens.questions.map((q) => (
                <li key={q} className="flex gap-1.5 items-start">
                  <span className={`text-[9px] mt-0.5 ${lens.labelColor} flex-shrink-0`}>
                    ▸
                  </span>
                  <span className="text-[10px] text-[#404040] leading-tight">{q}</span>
                </li>
              ))}
            </ul>
            <div className={`rounded px-2 py-1 ${lens.bgColor} border ${lens.borderColor}`}>
              <p className="text-[9px] uppercase tracking-wide text-[#9A918A]">
                Primary failure mode
              </p>
              <p className={`text-[10px] font-semibold ${lens.labelColor}`}>
                {lens.risk}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Summary row */}
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg bg-[#2A9D60]/10 border border-[#2A9D60]/30 px-3 py-2">
          <p className="text-[9px] uppercase tracking-wide text-[#9A918A] mb-0.5">
            Fundable GP
          </p>
          <p className="text-[10px] text-[#404040]">
            Strong across all four lenses — not perfect on each, but no disqualifying weakness
          </p>
        </div>
        <div className="rounded-lg bg-[#D9532B]/10 border border-[#D9532B]/30 px-3 py-2">
          <p className="text-[9px] uppercase tracking-wide text-[#9A918A] mb-0.5">
            Dig deeper
          </p>
          <p className="text-[10px] text-[#404040]">
            Weak on any one lens — identify whether it is a disqualifier or a manageable risk before proceeding
          </p>
        </div>
      </div>
    </div>
  );
}
