/**
 * IRRvsMOIC
 * Teaches: IRR and MOIC can rank investments in opposite order.
 *          Small/fast capital generates high IRR; large/patient capital creates more LP wealth.
 * Used in: Day 4 (IRR mechanics).
 * Pure Tailwind — no charting library.
 */
export default function IRRvsMOIC() {
  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040] mb-1">
        IRR vs. MOIC: Opposite Rankings, Same Investments
      </p>
      <p className="text-[11px] text-[#9A918A] mb-4 italic">
        A is small and fast. B is large and patient. IRR ranks A first. LP wealth ranks B first.
      </p>

      <div className="grid grid-cols-2 gap-3 mb-4">
        {/* Investment A — small, fast */}
        <div className="rounded-lg border border-[#D9532B]/30 bg-white p-3">
          <p className="text-[10px] font-bold uppercase tracking-wide text-[#D9532B] mb-2">
            Investment A
          </p>
          {/* Hold period bar: 14 months ≈ narrow */}
          <div className="mb-2.5">
            <div className="h-2 w-6 bg-[#D9532B]/20 border border-[#D9532B]/40 rounded-sm mb-0.5" />
            <p className="text-[9px] text-[#9A918A]">Hold: 14 months</p>
          </div>
          <div className="space-y-1 mb-2">
            <div className="flex justify-between">
              <span className="text-[10px] text-[#9A918A]">Capital in</span>
              <span className="text-[10px] text-[#404040] font-medium">$10M</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[10px] text-[#9A918A]">Returned</span>
              <span className="text-[10px] text-[#404040] font-medium">$50M</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[10px] text-[#9A918A]">LP profit</span>
              <span className="text-[10px] text-[#404040] font-medium">$40M</span>
            </div>
          </div>
          <div className="border-t border-[#E8DDD4] pt-2 space-y-1">
            <div className="flex justify-between">
              <span className="text-[10px] text-[#9A918A]">MOIC</span>
              <span className="text-[10px] text-[#404040] font-bold">5.0×</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[10px] text-[#9A918A]">IRR</span>
              <span className="text-[10px] font-bold text-[#D9532B]">~320%</span>
            </div>
          </div>
        </div>

        {/* Investment B — large, patient */}
        <div className="rounded-lg border border-[#2294BD]/30 bg-white p-3">
          <p className="text-[10px] font-bold uppercase tracking-wide text-[#2294BD] mb-2">
            Investment B
          </p>
          {/* Hold period bar: 8 years ≈ full width */}
          <div className="mb-2.5">
            <div className="h-2 w-full bg-[#2294BD]/20 border border-[#2294BD]/40 rounded-sm mb-0.5" />
            <p className="text-[9px] text-[#9A918A]">Hold: 8 years</p>
          </div>
          <div className="space-y-1 mb-2">
            <div className="flex justify-between">
              <span className="text-[10px] text-[#9A918A]">Capital in</span>
              <span className="text-[10px] text-[#404040] font-medium">$200M</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[10px] text-[#9A918A]">Returned</span>
              <span className="text-[10px] text-[#404040] font-medium">$480M</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[10px] text-[#9A918A]">LP profit</span>
              <span className="text-[10px] text-[#404040] font-medium">$280M</span>
            </div>
          </div>
          <div className="border-t border-[#E8DDD4] pt-2 space-y-1">
            <div className="flex justify-between">
              <span className="text-[10px] text-[#9A918A]">MOIC</span>
              <span className="text-[10px] text-[#404040] font-bold">2.4×</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[10px] text-[#9A918A]">IRR</span>
              <span className="text-[10px] font-bold text-[#2294BD]">~11.5%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Winner callout row */}
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div className="rounded-lg bg-[#FAA51A]/10 border border-[#FAA51A]/30 px-3 py-2 text-center">
          <p className="text-[9px] uppercase tracking-wide text-[#9A918A] mb-0.5">IRR winner</p>
          <p className="text-[11px] font-bold text-[#D9532B]">A — ~320%</p>
          <p className="text-[9px] text-[#404040]">$40M LP wealth created</p>
        </div>
        <div className="rounded-lg bg-[#2294BD]/10 border border-[#2294BD]/30 px-3 py-2 text-center">
          <p className="text-[9px] uppercase tracking-wide text-[#9A918A] mb-0.5">LP wealth winner</p>
          <p className="text-[11px] font-bold text-[#2294BD]">B — 2.4×</p>
          <p className="text-[9px] text-[#404040]">$280M LP wealth created</p>
        </div>
      </div>

      <p className="text-[10px] text-[#404040] italic">
        A manager concentrating on small, fast exits can report top-decile IRR while creating less total LP wealth than a patient, large-capital manager. Always pair IRR with MOIC and absolute dollar profit.
      </p>
    </div>
  );
}
