/**
 * DilutionMap - How venture ownership gets diluted.
 */
export default function DilutionMap() {
  const sources = [
    { name: "New Priced Round", how: "New preferred shares issued to incoming investors", care: "Ownership falls if the fund does not participate proportionally", color: "#2294BD" },
    { name: "Option-Pool Expansion", how: "Additional employee equity created, often pre-financing", care: "Existing holders may absorb more dilution than expected", color: "#FAA51A" },
    { name: "SAFE / Note Conversion", how: "Previously unpriced instruments turn into equity", care: "Fully diluted share count jumps at the priced round", color: "#D9532B" },
    { name: "Stock-Based M&A", how: "Equity issued to acquire another company", care: "Ownership falls even if no financing round occurs", color: "#7C5CBF" },
    { name: "Warrants / Special Issuance", how: "Additional rights create future share claims", care: "Can complicate both current and exit economics", color: "#2A9D60" },
  ];
  return (
    <div className="my-3 space-y-1.5">
      {sources.map((s, i) => (
        <div key={i} className="rounded-lg border border-[#E8DDD4] bg-white shadow-sm overflow-hidden flex items-stretch">
          <div className="w-1.5 flex-shrink-0" style={{ backgroundColor: s.color }} />
          <div className="flex-1 p-2.5 flex items-center gap-3">
            <div className="w-36 flex-shrink-0">
              <p className="text-[12px] font-bold text-[#1A1A1A]">{s.name}</p>
              <p className="text-[10px] text-[#9A918A] leading-snug">{s.how}</p>
            </div>
            <div className="flex-1 rounded bg-[#FAF8F5] px-2.5 py-1.5">
              <span className="text-[9px] font-bold uppercase tracking-wider text-[#D9532B] mr-1">Allocator concern</span>
              <span className="text-[10px] text-[#404040]">{s.care}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
