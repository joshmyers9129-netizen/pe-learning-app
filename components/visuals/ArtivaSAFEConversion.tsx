/**
 * ArtivaSAFEConversion
 * Shows the economics of Artiva Biotherapeutics' SAFE conversion, the three
 * cap-table views, and why SAFEs defer pricing but don't remove economics.
 * Used in: Day 30 (Artiva SAFE conversion case study).
 */
export default function ArtivaSAFEConversion() {
  const safeEconomics = [
    { label: "SAFE Outstanding", value: "$24.4M", sub: "Total invested via SAFEs" },
    { label: "Conversion Price", value: "$12/share", sub: "After 15% discount applied" },
    { label: "Shares Issued", value: "2,391,418", sub: "Upon conversion" },
    { label: "Discount Rate", value: "15%", sub: "Below priced-round price" },
  ];

  const capTableViews = [
    {
      view: "Current Legal Ownership",
      color: "bg-[#2294BD]",
      accent: "#2294BD",
      desc: "What the cap table shows today before SAFEs convert",
      rows: [
        { holder: "Founders & Team", ownership: "Higher apparent share", note: "SAFEs not yet reflected" },
        { holder: "Existing Investors", ownership: "Larger apparent %", note: "Pre-dilution basis" },
        { holder: "SAFE Holders", ownership: "Not on cap table", note: "Right to future equity only" },
      ],
      warning: "This view overstates existing holder ownership — SAFEs are invisible but economically real",
    },
    {
      view: "Economic Ownership After Conversion",
      color: "bg-[#FAA51A]",
      accent: "#FAA51A",
      desc: "What ownership looks like when SAFEs convert to equity",
      rows: [
        { holder: "Founders & Team", ownership: "Diluted down", note: "New shares issued to SAFE holders" },
        { holder: "Existing Investors", ownership: "Diluted down", note: "Proportional reduction" },
        { holder: "SAFE Holders", ownership: "2,391,418 shares", note: "At $12/share (15% discount)" },
      ],
      warning: "Dilution happens all at once when conversion triggers — not gradually",
    },
    {
      view: "Ownership After Next Financing",
      color: "bg-[#7C5CBF]",
      accent: "#7C5CBF",
      desc: "What happens when the next priced round creates additional dilution",
      rows: [
        { holder: "Founders & Team", ownership: "Further diluted", note: "Two rounds of dilution stacked" },
        { holder: "Prior Investors + Converted SAFEs", ownership: "Further diluted", note: "Unless participating pro rata" },
        { holder: "New Round Investors", ownership: "New shares issued", note: "At new priced-round valuation" },
      ],
      warning: "SAFE conversion dilution and new-round dilution compound — total impact exceeds either alone",
    },
  ];

  const conversionMechanics = [
    {
      step: "SAFE invested",
      detail: "$24.4M committed across SAFE instruments",
      color: "bg-[#2294BD]",
    },
    {
      step: "Priced round triggers conversion",
      detail: "Qualified financing event activates SAFE conversion terms",
      color: "bg-[#FAA51A]",
    },
    {
      step: "Discount applied",
      detail: "15% discount to priced-round price determines conversion price of $12/share",
      color: "bg-[#2A9D60]",
    },
    {
      step: "Shares issued",
      detail: "$24.4M / $12 per share = 2,391,418 new shares created",
      color: "bg-[#7C5CBF]",
    },
    {
      step: "Dilution realized",
      detail: "All existing holders are diluted; cap table updated to reflect new shares",
      color: "bg-[#D9532B]",
    },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
        Artiva Biotherapeutics — SAFE Conversion Economics
      </p>

      {/* Key metrics */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          SAFE Economics at Conversion
        </p>
        <div className="flex gap-2">
          {safeEconomics.map((m) => (
            <div key={m.label} className="flex-1 rounded-lg bg-[#FAF8F5] p-2 text-center">
              <p className="text-[9px] font-bold uppercase tracking-wider text-[#9A918A]">
                {m.label}
              </p>
              <p className="text-[14px] font-bold text-[#1A1A1A]">{m.value}</p>
              <p className="text-[8px] text-[#9A918A]">{m.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Conversion mechanics timeline */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Conversion Mechanics — Step by Step
        </p>
        <div className="space-y-0">
          {conversionMechanics.map((item, i) => (
            <div key={item.step} className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className={`w-3 h-3 rounded-full ${item.color} flex-shrink-0`} />
                {i < conversionMechanics.length - 1 && (
                  <div className="w-px flex-1 bg-[#E8DDD4] min-h-[24px]" />
                )}
              </div>
              <div className="pb-3">
                <span className="text-[11px] font-bold text-[#1A1A1A]">{item.step}</span>
                <p className="text-[10px] text-[#9A918A]">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Three cap-table views */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Three Cap-Table Views — Same Company, Different Lenses
        </p>
        <div className="space-y-3">
          {capTableViews.map((v) => (
            <div
              key={v.view}
              className="rounded-lg border border-[#E8DDD4] bg-white shadow-sm overflow-hidden"
            >
              <div className="flex items-stretch">
                <div className={`w-1.5 flex-shrink-0 ${v.color}`} />
                <div className="flex-1">
                  <div className="px-3 py-2 border-b border-[#E8DDD4] bg-[#FAF8F5]">
                    <p className="text-[11px] font-bold text-[#1A1A1A]">{v.view}</p>
                    <p className="text-[9px] text-[#9A918A]">{v.desc}</p>
                  </div>
                  <div className="px-3 py-2">
                    <div className="space-y-1.5">
                      {v.rows.map((r) => (
                        <div key={r.holder} className="flex items-baseline justify-between gap-2">
                          <div>
                            <span className="text-[10px] font-semibold text-[#1A1A1A]">
                              {r.holder}
                            </span>
                          </div>
                          <div className="text-right">
                            <span className="text-[10px] font-semibold" style={{ color: v.accent }}>
                              {r.ownership}
                            </span>
                            <span className="text-[9px] text-[#9A918A] ml-1.5">{r.note}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-2 rounded bg-[#D9532B]/5 px-2 py-1.5">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-[#D9532B] mr-1">
                        Watch
                      </span>
                      <span className="text-[10px] text-[#404040]">{v.warning}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Governance point */}
      <div className="rounded-lg border border-[#2294BD]/30 bg-[#2294BD]/5 p-3">
        <div className="flex items-start gap-2">
          <div className="w-1 h-full min-h-[32px] rounded bg-[#2294BD] flex-shrink-0" />
          <div>
            <p className="text-[11px] font-semibold text-[#2294BD] mb-0.5">
              SAFEs Defer Pricing — They Don&rsquo;t Remove Economics
            </p>
            <p className="text-[11px] text-[#404040]">
              The discount, the conversion trigger, and the share count are all determined by the
              SAFE terms. The economics exist from the moment the SAFE is signed — they just become
              visible when conversion occurs.
            </p>
          </div>
        </div>
      </div>

      {/* Key insight callout */}
      <div className="rounded-lg bg-[#D9532B]/10 border border-[#D9532B]/30 px-3 py-2.5">
        <span className="text-[9px] font-bold uppercase tracking-wider text-[#D9532B] mr-1.5">
          Key insight
        </span>
        <span className="text-[11px] text-[#404040]">
          Never describe a SAFE as avoiding valuation or dilution &mdash; it merely postpones when
          those economics become visible. The dilution is real, the pricing is embedded in the
          discount terms, and the cap-table impact arrives all at once upon conversion.
        </span>
      </div>
    </div>
  );
}
