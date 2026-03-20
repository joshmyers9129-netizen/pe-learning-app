/**
 * CommonVsPreferred - Payout lens across security types.
 */
export default function CommonVsPreferred() {
  const types = [
    { name: "Common Stock", position: "Residual claimant after preference claims are satisfied", infer: "More exposed to weak or middling exits", color: "#404040" },
    { name: "Non-Participating Preferred", position: "Preference return or convert to common, whichever is higher", infer: "Better downside floor; capped in middling outcomes unless conversion makes sense", color: "#2294BD" },
    { name: "Participating Preferred", position: "Preference return and then also share in residual proceeds", infer: "Can outperform common in a wider range of exit outcomes", color: "#FAA51A" },
    { name: "Multiple-Liq-Pref Preferred", position: "Multiple of invested capital before common participates", infer: "Shifts a larger share of weak-to-moderate exits away from common holders", color: "#D9532B" },
  ];
  return (
    <div className="my-3 space-y-2">
      {types.map((t, i) => (
        <div key={i} className="rounded-lg border border-[#E8DDD4] bg-white shadow-sm overflow-hidden flex items-stretch">
          <div className="w-1.5 flex-shrink-0" style={{ backgroundColor: t.color }} />
          <div className="flex-1 p-3">
            <p className="text-[12px] font-bold text-[#1A1A1A] mb-1.5">{t.name}</p>
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded bg-[#FAF8F5] px-2.5 py-1.5">
                <p className="text-[9px] font-bold uppercase tracking-wider text-[#9A918A] mb-0.5">Economic position</p>
                <p className="text-[10px] text-[#404040] leading-snug">{t.position}</p>
              </div>
              <div className="rounded bg-[#2294BD]/6 border border-[#2294BD]/10 px-2.5 py-1.5">
                <p className="text-[9px] font-bold uppercase tracking-wider text-[#2294BD] mb-0.5">Allocator inference</p>
                <p className="text-[10px] text-[#1A1A1A] leading-snug">{t.infer}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
