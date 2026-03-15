/**
 * CommitmentPacingTimeline
 * Teaches: Why maintaining a PE target allocation requires committing every year —
 *          multiple vintages are always in different lifecycle phases simultaneously,
 *          so calls from one cohort overlap with distributions from another.
 * Used in: Day 14 (Portfolio Construction and Commitment Pacing).
 * Pure Tailwind — no charting library.
 */
export default function CommitmentPacingTimeline() {
  // Each row is one vintage year. Cells describe the phase of that fund in years 1–10.
  // Phase key: "commit" = commitment period / call draw-down, "harvest" = active portfolio / early distributions,
  // "dist" = mature / accelerated distributions, "done" = wound down, "pre" = not yet started
  const years = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const vintages: { year: string; phases: string[] }[] = [
    { year: "2019", phases: ["commit", "commit", "commit", "harvest", "harvest", "harvest", "dist", "dist", "dist", "done"] },
    { year: "2020", phases: ["pre", "commit", "commit", "commit", "harvest", "harvest", "harvest", "dist", "dist", "dist"] },
    { year: "2021", phases: ["pre", "pre", "commit", "commit", "commit", "harvest", "harvest", "harvest", "dist", "dist"] },
    { year: "2022", phases: ["pre", "pre", "pre", "commit", "commit", "commit", "harvest", "harvest", "harvest", "dist"] },
    { year: "2023", phases: ["pre", "pre", "pre", "pre", "commit", "commit", "commit", "harvest", "harvest", "harvest"] },
  ];

  type Phase = "commit" | "harvest" | "dist" | "done" | "pre";

  const phaseStyle: Record<Phase, { bg: string; text: string; label: string }> = {
    commit: { bg: "bg-[#2294BD]/80", text: "text-white", label: "Calls" },
    harvest: { bg: "bg-[#FAA51A]/80", text: "text-white", label: "Harvest" },
    dist:    { bg: "bg-[#2A9D60]/80", text: "text-white", label: "Dist." },
    done:    { bg: "bg-[#E8DDD4]",    text: "text-[#9A918A]", label: "Done" },
    pre:     { bg: "bg-[#F2EDE8]",    text: "text-[#C0B8B0]", label: "" },
  };

  // Column header labels: calendar years from 2020 to 2029 (roughly)
  const calYears = [2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040] mb-1">
        Multi-Vintage Overlap: Why Commitments Must Continue Every Year
      </p>
      <p className="text-[11px] text-[#9A918A] mb-4 italic">
        At any point in time, a PE programme has vintages in all three lifecycle phases simultaneously — calls from recent vintages, distributions from older ones. Stopping commitments for even one year creates a gap in future funded exposure.
      </p>

      {/* Grid */}
      <div className="overflow-x-auto">
        <div className="min-w-[540px]">
          {/* Year header row */}
          <div className="grid grid-cols-[52px_repeat(10,1fr)] gap-0.5 mb-1">
            <div className="text-[9px] uppercase tracking-wide text-[#9A918A] flex items-end pb-0.5 pl-1">Vintage</div>
            {calYears.map((y) => (
              <div key={y} className="text-[9px] text-center text-[#9A918A] font-medium">
                {y}
              </div>
            ))}
          </div>

          {/* Vintage rows */}
          <div className="space-y-0.5">
            {vintages.map((v) => (
              <div key={v.year} className="grid grid-cols-[52px_repeat(10,1fr)] gap-0.5">
                <div className="text-[10px] font-semibold text-[#404040] flex items-center pl-1">
                  {v.year}
                </div>
                {v.phases.map((phase, i) => {
                  const s = phaseStyle[phase as Phase];
                  return (
                    <div
                      key={i}
                      className={`rounded-sm ${s.bg} flex items-center justify-center`}
                      style={{ height: "22px" }}
                    >
                      <span className={`text-[8px] font-medium ${s.text} leading-none`}>
                        {s.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* "Now" marker — column 2025 is index 5 (0-based) */}
          <div className="grid grid-cols-[52px_repeat(10,1fr)] gap-0.5 mt-1">
            <div />
            {calYears.map((y) => (
              <div key={y} className="flex justify-center">
                {y === 2024 && (
                  <div className="text-[8px] font-bold text-[#D9532B] uppercase tracking-wide">
                    ▲ Now
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 mt-3">
        {(["commit", "harvest", "dist"] as Phase[]).map((phase) => {
          const s = phaseStyle[phase];
          const labels: Record<string, string> = {
            commit: "Capital calls active",
            harvest: "Portfolio management / early distributions",
            dist: "Accelerated distributions",
          };
          return (
            <div key={phase} className="flex items-center gap-1.5">
              <div className={`w-3 h-3 rounded-sm ${s.bg} flex-shrink-0`} />
              <span className="text-[9px] text-[#6B6360]">{labels[phase]}</span>
            </div>
          );
        })}
      </div>

      {/* Insight box */}
      <div className="mt-3 rounded-lg bg-[#2294BD]/10 border border-[#2294BD]/30 px-3 py-2">
        <p className="text-[10px] text-[#404040]">
          <span className="font-semibold">What to notice:</span> In 2024, three vintages (2021–2023) are simultaneously in the capital-call phase. A programme that committed nothing in 2022–2023 would have fewer active draws — and lower funded NAV — than a pacing model would predict. Gaps in commitment create gaps in future exposure.
        </p>
      </div>
    </div>
  );
}
