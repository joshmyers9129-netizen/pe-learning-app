/**
 * NewMexicoPERA
 * Shows the TVPI vs DPI gap problem using a progress-bar visual and confidence
 * spectrum, illustrating how much of reported value is unrealized.
 * Used in: Day 5 (multiples, DPI vs RVPI & the cash-on-cash gap).
 */
export default function NewMexicoPERA() {
  const tvpi = 1.45;
  const dpi = 0.25;
  const rvpi = 1.2;
  const dpiPct = (dpi / tvpi) * 100;
  const rvpiPct = (rvpi / tvpi) * 100;
  const unrealizedPct = Math.round((rvpi / tvpi) * 100);

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
        TVPI vs DPI Gap — New Mexico PERA Example
      </p>

      {/* Metrics row */}
      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-lg border border-[#E8DDD4] bg-white p-3 text-center">
          <p className="text-[9px] font-bold uppercase tracking-wider text-[#9A918A] mb-1">TVPI</p>
          <p className="text-xl font-bold text-[#1A1A1A]">{tvpi}x</p>
          <p className="text-[9px] text-[#9A918A]">Total value</p>
        </div>
        <div className="rounded-lg border border-[#2A9D60]/30 bg-[#2A9D60]/5 p-3 text-center">
          <p className="text-[9px] font-bold uppercase tracking-wider text-[#2A9D60] mb-1">DPI</p>
          <p className="text-xl font-bold text-[#2A9D60]">{dpi}x</p>
          <p className="text-[9px] text-[#9A918A]">Cash returned</p>
        </div>
        <div className="rounded-lg border border-[#FAA51A]/30 bg-[#FAA51A]/5 p-3 text-center">
          <p className="text-[9px] font-bold uppercase tracking-wider text-[#FAA51A] mb-1">RVPI</p>
          <p className="text-xl font-bold text-[#FAA51A]">{rvpi}x</p>
          <p className="text-[9px] text-[#9A918A]">Unrealized</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Value Composition — TVPI {tvpi}x
        </p>
        <div className="relative h-8 rounded-lg overflow-hidden bg-[#FAA51A]/20 border border-[#E8DDD4]">
          {/* DPI filled portion */}
          <div
            className="absolute inset-y-0 left-0 bg-[#2A9D60] flex items-center justify-center"
            style={{ width: `${dpiPct}%` }}
          >
            <span className="text-[9px] text-white font-bold">DPI {dpi}x</span>
          </div>
          {/* RVPI unfilled portion */}
          <div
            className="absolute inset-y-0 flex items-center justify-center"
            style={{ left: `${dpiPct}%`, width: `${rvpiPct}%` }}
          >
            <span className="text-[9px] text-[#FAA51A] font-bold">RVPI {rvpi}x</span>
          </div>
        </div>
        <div className="flex justify-between mt-1.5">
          <span className="text-[9px] text-[#2A9D60] font-semibold">Confirmed cash</span>
          <span className="text-[9px] text-[#FAA51A] font-semibold">Estimated / unrealized</span>
        </div>
      </div>

      {/* Confidence spectrum */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Confidence Spectrum
        </p>
        <div className="relative h-5 rounded-full overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 rounded-l-full"
            style={{
              width: "100%",
              background: "linear-gradient(to right, #2A9D60, #FAA51A, #D9532B)",
            }}
          />
        </div>
        <div className="flex justify-between mt-1.5">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-[#2A9D60]" />
            <span className="text-[9px] text-[#404040] font-semibold">Confirmed value (DPI)</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[9px] text-[#404040] font-semibold">Estimated value (RVPI)</span>
            <div className="w-2 h-2 rounded-full bg-[#D9532B]" />
          </div>
        </div>
      </div>

      {/* Callout */}
      <div className="rounded-lg bg-[#D9532B]/10 border border-[#D9532B]/30 px-3 py-2.5">
        <span className="text-[9px] font-bold uppercase tracking-wider text-[#D9532B] mr-1.5">
          Key insight
        </span>
        <span className="text-[11px] text-[#404040]">
          At TVPI {tvpi}x with DPI {dpi}x, {unrealizedPct}% of reported value is still unrealized
          — it&rsquo;s mostly hope, not cash
        </span>
      </div>
    </div>
  );
}
