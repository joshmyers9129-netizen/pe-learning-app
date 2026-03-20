/**
 * FundDocumentStack
 * Layered document visualization showing the fund document hierarchy.
 * Used in: Day 11 (fund terms and governance).
 */
export default function FundDocumentStack() {
  const docs = [
    {
      name: "LPA",
      full: "Limited Partnership Agreement",
      governs: "Economics, governance, leverage, recycling, key-person, removal, LPAC scope, reporting",
      importance: "primary",
      color: "from-[#2294BD] to-[#1A7A9E]",
    },
    {
      name: "PPM",
      full: "Private Placement Memorandum",
      governs: "Strategy explanation and risk factors — but not the controlling source if LPA differs",
      importance: "secondary",
      color: "from-[#FAA51A] to-[#E8940A]",
    },
    {
      name: "Sub Agreement",
      full: "Subscription Agreement",
      governs: "Investor representations, tax elections, agreement to be bound by LPA",
      importance: "secondary",
      color: "from-[#D9532B] to-[#B8421F]",
    },
    {
      name: "Side Letters",
      full: "Bilateral LP-Specific Terms",
      governs: "Fee breaks, enhanced reporting, co-invest rights, regulatory accommodations, excuse rights",
      importance: "negotiated",
      color: "from-[#7C5CBF] to-[#5E3FA3]",
    },
    {
      name: "MFN Package",
      full: "Most Favored Nation Election",
      governs: "Eligibility thresholds, carve-outs, election deadlines — practical access to side-letter terms",
      importance: "negotiated",
      color: "from-[#2A9D60] to-[#1E7B48]",
    },
    {
      name: "Amendments",
      full: "Post-Closing Modifications",
      governs: "Can materially change operating reality even when original documents looked acceptable",
      importance: "watch",
      color: "from-[#404040] to-[#2A2A2A]",
    },
  ];

  const badges: Record<string, { label: string; className: string }> = {
    primary: { label: "Controlling", className: "bg-[#2294BD]/15 text-[#2294BD]" },
    secondary: { label: "Supporting", className: "bg-[#FAA51A]/15 text-[#9B6A00]" },
    negotiated: { label: "Negotiated", className: "bg-[#7C5CBF]/15 text-[#7C5CBF]" },
    watch: { label: "Watch", className: "bg-[#D9532B]/15 text-[#D9532B]" },
  };

  return (
    <div className="my-3 space-y-0">
      {docs.map((d, i) => {
        const badge = badges[d.importance];
        return (
          <div
            key={i}
            className="relative"
            style={{ marginLeft: `${i * 6}px` }}
          >
            {/* Connector line */}
            {i < docs.length - 1 && (
              <div className="absolute left-4 top-full w-px h-1 bg-[#E8DDD4] z-0" />
            )}
            <div className="rounded-lg border border-[#E8DDD4] bg-white shadow-sm overflow-hidden mb-1.5">
              <div className="flex items-stretch">
                {/* Color band with doc abbreviation */}
                <div className={`w-16 flex-shrink-0 bg-gradient-to-b ${d.color} flex flex-col items-center justify-center px-1`}>
                  <span className="text-white text-[13px] font-bold">{d.name}</span>
                </div>

                <div className="flex-1 p-2.5">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-[12px] font-semibold text-[#1A1A1A]">{d.full}</p>
                    <span className={`text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full ${badge.className}`}>
                      {badge.label}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#404040] leading-snug">{d.governs}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
