/**
 * BenchmarkVsPlatform
 * Visual for Day 28: Side-by-side comparison of specialist (Benchmark) vs
 * large multi-stage platform models, with different underwriting questions.
 * Used in: Day 28 (venture firm model comparison case study).
 */
export default function BenchmarkVsPlatform() {
  const dimensions = [
    {
      dim: "Stage Identity",
      specialist: "Narrow — early-stage only, primarily Series A",
      platform: "Broad — seed through growth and sometimes secondaries",
    },
    {
      dim: "Fund Size",
      specialist: "Deliberately constrained (~$425M); refuses to grow",
      platform: "Large and expanding ($10B+); multiple fund families",
    },
    {
      dim: "Partnership Structure",
      specialist: "Equal partnership; no junior/senior hierarchy",
      platform: "Hierarchical; partners, principals, associates, scouts",
    },
    {
      dim: "Ownership at Entry",
      specialist: "High conviction, concentrated ownership per deal",
      platform: "Variable; can invest across rounds but dilution compounds",
    },
    {
      dim: "Competitive Edge",
      specialist: "Deep personal conviction; board-level engagement from day one",
      platform: "Multi-stage coverage; internal follow-on coordination; brand gravity",
    },
    {
      dim: "Follow-on Strategy",
      specialist: "Does not lead later rounds; preserves stage discipline",
      platform: "Internal follow-on from growth funds; captures more of the cap table",
    },
    {
      dim: "Key Risk",
      specialist: "Edge depends on specific partners; succession is existential",
      platform: "Stage creep dilutes edge; coordination costs can reduce returns per dollar",
    },
  ];

  const specialistQuestions = [
    "Can the firm sustain edge if founding partners rotate?",
    "Is the fund size genuinely constrained, or will it grow?",
    "Does the narrow stage focus create sourcing access others cannot match?",
    "How does the equal partnership model affect incentive alignment?",
  ];

  const platformQuestions = [
    "Does multi-stage coverage create real information advantage, or just AUM growth?",
    "Is internal follow-on driven by conviction or by fund deployment needs?",
    "How are conflicts managed when seed and growth funds price the same round?",
    "Does the platform brand attract the best founders, or just the most founders?",
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
        Benchmark vs Multi-Stage Platforms — Model Comparison
      </p>

      {/* Model headers */}
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg bg-[#2294BD] px-3 py-2.5 text-center">
          <p className="text-white text-[11px] font-bold uppercase tracking-wider">
            Specialist Model
          </p>
          <p className="text-white/80 text-[10px] mt-0.5">
            Benchmark Capital
          </p>
        </div>
        <div className="rounded-lg bg-[#7C5CBF] px-3 py-2.5 text-center">
          <p className="text-white text-[11px] font-bold uppercase tracking-wider">
            Platform Model
          </p>
          <p className="text-white/80 text-[10px] mt-0.5">
            Large Multi-Stage Firms
          </p>
        </div>
      </div>

      {/* Side-by-side comparison */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Dimension-by-Dimension Comparison
        </p>
        <div className="space-y-1.5">
          {dimensions.map((d, i) => (
            <div key={i} className="rounded-md border border-[#E8DDD4] overflow-hidden">
              <div className="bg-[#FAF8F5] px-3 py-1 border-b border-[#E8DDD4]">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#404040]">
                  {d.dim}
                </p>
              </div>
              <div className="grid grid-cols-2 divide-x divide-[#E8DDD4]">
                <div className="px-3 py-2">
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className="w-2 h-2 rounded-full bg-[#2294BD]" />
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#2294BD]">
                      Specialist
                    </span>
                  </div>
                  <p className="text-[11px] text-[#404040] leading-snug">{d.specialist}</p>
                </div>
                <div className="px-3 py-2">
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className="w-2 h-2 rounded-full bg-[#7C5CBF]" />
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#7C5CBF]">
                      Platform
                    </span>
                  </div>
                  <p className="text-[11px] text-[#404040] leading-snug">{d.platform}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Underwriting questions split */}
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-[#2294BD]/30 bg-[#2294BD]/5 p-3">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#2294BD] mb-2">
            Specialist Underwriting Questions
          </p>
          <div className="space-y-1.5">
            {specialistQuestions.map((q, i) => (
              <div key={i} className="rounded-md bg-white border border-[#E8DDD4] px-2.5 py-2">
                <p className="text-[11px] text-[#404040] leading-snug">{q}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-[#7C5CBF]/30 bg-[#7C5CBF]/5 p-3">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#7C5CBF] mb-2">
            Platform Underwriting Questions
          </p>
          <div className="space-y-1.5">
            {platformQuestions.map((q, i) => (
              <div key={i} className="rounded-md bg-white border border-[#E8DDD4] px-2.5 py-2">
                <p className="text-[11px] text-[#404040] leading-snug">{q}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key insight */}
      <div className="rounded-lg bg-[#D9532B]/10 border border-[#D9532B]/30 px-3 py-2.5">
        <span className="text-[9px] font-bold uppercase tracking-wider text-[#D9532B] mr-1.5">
          Key insight
        </span>
        <span className="text-[11px] text-[#404040]">
          Two celebrated firms can both be high quality and still require completely different
          underwriting because the stage map, incentive structure, and edge source differ —
          allocators must match their diligence framework to the model, not apply one template
          to both
        </span>
      </div>
    </div>
  );
}
