export default function LossWaterfallStack() {
  const rows = [
    { a: "Senior mortgage", b: "Direct mortgage on property; strongest foreclosure rights", c: "Nobody senior at property level", d: "NOI decline, refinance shortfall, value collapse severe enough to threaten principal", e: "Is the attachment point conservative enough for this asset and market?" },
    { a: "Mezzanine debt", b: "Pledge of equity interests; rights shaped by intercreditor agreement", c: "Senior mortgage debt", d: "Senior default, blocked remedies, thinner collateral cushion", e: "What can you really do if the property misses plan?" },
    { a: "Preferred equity", b: "Equity-level economics with negotiated control or payment preferences", c: "Senior and mezzanine debt, often current property cash needs", d: "Missed distributions, sponsor conflict, weak exit value", e: "Are the protections real or mostly cosmetic?" },
    { a: "Common equity", b: "Residual ownership", c: "Everyone else", d: "Any shortfall in value or cash flow", e: "Is there enough upside to justify being last in line?" }
  ];
  return (
    <div className="my-3 space-y-2.5">
      {rows.map((r, i) => (
        <div key={i} className="rounded-lg border border-[#E8DDD4] bg-white shadow-sm overflow-hidden">
          <div className="bg-[#FAF8F5] px-4 py-1.5 border-b border-[#E8DDD4]">
            <p className="text-[11px] font-bold text-[#1A1A1A]">{r.a}</p>
          </div>
          <div className="grid grid-cols-3 gap-px bg-[#E8DDD4]">
            <div className="bg-white px-3 py-2">
              <p className="text-[9px] font-bold uppercase tracking-wider mb-0.5" style={{ color: "#2A9D60" }}>Typical security / control</p>
              <p className="text-[10px] text-[#1A1A1A] leading-snug">{r.b}</p>
            </div>
            <div className="bg-white px-3 py-2">
              <p className="text-[9px] font-bold uppercase tracking-wider mb-0.5" style={{ color: "#D9532B" }}>What gets paid before you</p>
              <p className="text-[10px] text-[#1A1A1A] leading-snug">{r.c}</p>
            </div>
            <div className="bg-white px-3 py-2">
              <p className="text-[9px] font-bold uppercase tracking-wider mb-0.5" style={{ color: "#7C5CBF" }}>What usually hurts you first</p>
              <p className="text-[10px] text-[#1A1A1A] leading-snug">{r.d}</p>
            </div>
            <div className="bg-white px-3 py-2">
              <p className="text-[9px] font-bold uppercase tracking-wider mb-0.5" style={{ color: "#FAA51A" }}>Main allocator question</p>
              <p className="text-[10px] text-[#1A1A1A] leading-snug">{r.e}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
