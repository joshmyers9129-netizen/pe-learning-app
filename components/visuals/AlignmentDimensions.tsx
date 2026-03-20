/**
 * AlignmentDimensions
 * Signal-strength indicator cards comparing strong vs. weak LP alignment signals.
 * Used in: Day 11 (fund terms and governance).
 */
export default function AlignmentDimensions() {
  const dimensions = [
    {
      name: "Fee Basis",
      strong: "Steps down to invested capital; 100% fee offset",
      weak: "Committed capital throughout; 80% or lower offset",
    },
    {
      name: "Carry Timing",
      strong: "European waterfall; deferred carry",
      weak: "American deal-by-deal; early carry recognition",
    },
    {
      name: "Clawback",
      strong: "Escrow held by third party; defined enforcement",
      weak: "Contractual only; no escrow; personal guarantee absent",
    },
    {
      name: "GP Commitment",
      strong: "3%+ of fund; at-risk alongside LPs",
      weak: "<1% of fund; token commitment relative to carry",
    },
    {
      name: "Recycling",
      strong: "Narrow authority; disclosed historical use",
      weak: "Broad discretion; vague historical disclosure",
    },
    {
      name: "Extension Rights",
      strong: "LPAC or LP majority approval required",
      weak: "GP sole discretion; no fee reduction during extension",
    },
  ];

  return (
    <div className="my-3 space-y-2">
      {dimensions.map((d, i) => (
        <div key={i} className="rounded-xl border border-[#E8DDD4] bg-white shadow-sm overflow-hidden">
          {/* Dimension header */}
          <div className="bg-gradient-to-r from-[#3B3B3B] to-[#4A4A4A] px-4 py-2">
            <p className="text-white text-[11px] font-bold tracking-wide">{d.name}</p>
          </div>

          <div className="grid grid-cols-2 divide-x divide-[#E8DDD4]">
            {/* Strong signal */}
            <div className="p-3">
              <div className="flex items-center gap-1.5 mb-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#2A9D60]" />
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#2A9D60]">Strong signal</span>
              </div>
              <p className="text-[11px] text-[#1A1A1A] leading-snug">{d.strong}</p>
            </div>

            {/* Weak signal */}
            <div className="p-3">
              <div className="flex items-center gap-1.5 mb-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#D9532B]" />
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#D9532B]">Weak signal</span>
              </div>
              <p className="text-[11px] text-[#404040] leading-snug">{d.weak}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
