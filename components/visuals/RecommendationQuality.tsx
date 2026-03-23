/**
 * RecommendationQuality
 * Illustrates why recommendation quality matters most when facts are mixed.
 * Used in: Day 20 case study.
 */
export default function RecommendationQuality() {
  const failureModes = [
    { mode: "Headline capture", detail: "Anchor on IRR and brand, work backward to justify approval" },
    { mode: "Realization neglect", detail: "Discuss track record without stating how much is confirmed cash" },
    { mode: "Process-story mismatch", detail: "Repeat GP claims without checking if outcomes match" },
    { mode: "Programme-blind approval", detail: "Approve a strong fund without checking pacing or liquidity" },
    { mode: "Vague risk language", detail: "List generic risks instead of the one that most matters" },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
        Recommendation Quality — Where Skill Is Tested
      </p>

      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Where recommendation quality matters
        </p>
        <div className="relative h-8 rounded-full overflow-hidden flex">
          <div className="h-full bg-[#2A9D60]/30 flex items-center justify-center" style={{ width: "25%" }}>
            <span className="text-[9px] font-semibold text-[#2A9D60]">Clear approve</span>
          </div>
          <div className="h-full bg-[#D9532B]/20 flex items-center justify-center" style={{ width: "50%" }}>
            <span className="text-[9px] font-bold text-[#D9532B]">Mixed facts — skill tested here</span>
          </div>
          <div className="h-full bg-[#9A918A]/20 flex items-center justify-center" style={{ width: "25%" }}>
            <span className="text-[9px] font-semibold text-[#9A918A]">Clear decline</span>
          </div>
        </div>
        <p className="text-[10px] text-[#9A918A] mt-1.5 text-center">
          Easy cases write themselves. Borderline cases reveal whether the allocator has real judgment.
        </p>
      </div>

      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#D9532B] mb-2">
          Five common capstone failures
        </p>
        <div className="space-y-2">
          {failureModes.map((f, i) => (
            <div key={f.mode} className="flex items-start gap-2">
              <span className="text-[10px] font-bold text-[#D9532B] flex-shrink-0 w-4 mt-0.5">
                {i + 1}.
              </span>
              <div>
                <span className="text-[11px] font-semibold text-[#1A1A1A]">{f.mode}</span>
                <span className="text-[10px] text-[#9A918A] ml-1.5">— {f.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Strong vs weak recommendation patterns
        </p>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg bg-[#D9532B]/5 border border-[#D9532B]/20 p-2.5">
            <p className="text-[10px] font-bold text-[#D9532B] mb-1.5">Weak</p>
            <div className="space-y-1">
              {[
                "\"Appears attractive\"",
                "\"Worth further consideration\"",
                "\"Usual PE risks apply\"",
                "Hides behind balanced language",
              ].map((t) => (
                <p key={t} className="text-[10px] text-[#404040]">{"\u2022"} {t}</p>
              ))}
            </div>
          </div>
          <div className="rounded-lg bg-[#2A9D60]/5 border border-[#2A9D60]/20 p-2.5">
            <p className="text-[10px] font-bold text-[#2A9D60] mb-1.5">Strong</p>
            <div className="space-y-1">
              {[
                "Leads with the decision",
                "Names the strongest evidence",
                "Isolates the biggest open risk",
                "States what would change the view",
              ].map((t) => (
                <p key={t} className="text-[10px] text-[#404040]">{"\u2022"} {t}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          What the best recommendation notes do
        </p>
        <div className="space-y-1.5">
          {[
            { n: "1", text: "State the decision clearly — approve, conditional, monitor, or decline" },
            { n: "2", text: "Isolate the handful of facts that actually drive that decision" },
            { n: "3", text: "Define monitoring triggers that would change the call later" },
          ].map((row) => (
            <div key={row.n} className="flex items-start gap-2">
              <span className="text-[10px] font-bold text-[#2294BD] flex-shrink-0 w-4 mt-0.5">
                {row.n}.
              </span>
              <p className="text-[11px] text-[#404040]">{row.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg bg-[#2294BD]/10 border border-[#2294BD]/30 px-3 py-2.5">
        <span className="text-[9px] font-bold uppercase tracking-wider text-[#2294BD] mr-1.5">
          Key insight
        </span>
        <span className="text-[11px] text-[#404040]">
          Recommendation skill is tested by borderline cases, not easy ones — if the note does not
          say what would change the call, the judgment is still incomplete
        </span>
      </div>
    </div>
  );
}
