/**
 * MultiplesRelationship
 * Teaches: how TVPI, DPI, and RVPI relate to each other.
 * Used in: Day 5 (multiples), Day 4 (IRR context).
 * Pure Tailwind — no charting library.
 */
export default function MultiplesRelationship() {
  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040] mb-3">
        How the Multiples Relate
      </p>

      {/* TVPI = DPI + RVPI equation */}
      <div className="flex items-center gap-2 mb-4 flex-wrap">
        <MetricBox
          acronym="TVPI"
          name="Total Value to Paid-In"
          formula="(Distributions + NAV) ÷ Capital"
          color="bg-[#2294BD]/10"
          border="border-[#2294BD]/40"
          acronymColor="text-[#2294BD]"
        />
        <span className="text-lg font-bold text-[#404040] px-1">=</span>
        <MetricBox
          acronym="DPI"
          name="Distributions to Paid-In"
          formula="Cash returned ÷ Capital"
          color="bg-[#FAA51A]/10"
          border="border-[#FAA51A]/40"
          acronymColor="text-[#D9532B]"
        />
        <span className="text-lg font-bold text-[#404040] px-1">+</span>
        <MetricBox
          acronym="RVPI"
          name="Residual Value to Paid-In"
          formula="NAV (unrealised) ÷ Capital"
          color="bg-[#D0C8C0]/30"
          border="border-[#D0C8C0]"
          acronymColor="text-[#404040]"
        />
      </div>

      {/* What to watch */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px]">
        <div className="rounded-lg bg-white border border-[#2294BD]/20 p-2.5">
          <p className="font-semibold text-[#2294BD] mb-0.5">Use TVPI to…</p>
          <p className="text-[#404040] leading-snug">assess overall value created relative to capital invested</p>
        </div>
        <div className="rounded-lg bg-white border border-[#FAA51A]/20 p-2.5">
          <p className="font-semibold text-[#D9532B] mb-0.5">Use DPI to…</p>
          <p className="text-[#404040] leading-snug">measure actual cash in hand — the only certain return</p>
        </div>
        <div className="rounded-lg bg-white border border-[#D0C8C0] p-2.5">
          <p className="font-semibold text-[#404040] mb-0.5">Watch RVPI when…</p>
          <p className="text-[#404040] leading-snug">fund is mature: high RVPI late in life means marks, not cash</p>
        </div>
      </div>
    </div>
  );
}

function MetricBox({
  acronym,
  name,
  formula,
  color,
  border,
  acronymColor,
}: {
  acronym: string;
  name: string;
  formula: string;
  color: string;
  border: string;
  acronymColor: string;
}) {
  return (
    <div className={`rounded-lg border ${border} ${color} px-3 py-2 min-w-[90px] text-center`}>
      <p className={`text-base font-bold ${acronymColor}`}>{acronym}</p>
      <p className="text-[10px] font-medium text-[#000000] leading-tight">{name}</p>
      <p className="text-[9px] text-[#404040] mt-0.5 leading-snug">{formula}</p>
    </div>
  );
}
