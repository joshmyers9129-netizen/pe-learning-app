export default function CIORoleMap() {
  const rows = [
    { a: "Buyout", b: "Long-duration control equity", c: "Return enhancement and company-building exposure", d: "Leverage, exit dependence, valuation lag", e: "High" },
    { a: "Venture / Growth", b: "Innovation and asymmetric upside", c: "Potential high-return dispersion", d: "Power-law outcomes, duration, stale marks", e: "High" },
    { a: "Private credit", b: "Income and downside-priority relative to equity", c: "Contractual cash flows and illiquidity premium", d: "Refinance risk, documentation weakness, smoothing", e: "Moderate to high" },
    { a: "Private real estate", b: "Income, real-asset exposure, optional inflation linkage", c: "Cash yield plus asset appreciation", d: "Appraisal lag, leverage, sector cyclicality", e: "Moderate" },
    { a: "Secondaries / co-invest / SMAs", b: "Programme-shaping tools", c: "Pacing, fee control, targeted exposure", d: "Adverse selection, execution burden, governance creep", e: "High" }
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
              <p className="text-[9px] font-bold uppercase tracking-wider mb-0.5" style={{ color: "#D9532B" }}>Typical portfolio role</p>
              <p className="text-[10px] text-[#1A1A1A] leading-snug">{r.b}</p>
            </div>
            <div className="bg-white px-3 py-2">
              <p className="text-[9px] font-bold uppercase tracking-wider mb-0.5" style={{ color: "#7C5CBF" }}>Main portfolio contribution</p>
              <p className="text-[10px] text-[#1A1A1A] leading-snug">{r.c}</p>
            </div>
            <div className="bg-white px-3 py-2">
              <p className="text-[9px] font-bold uppercase tracking-wider mb-0.5" style={{ color: "#FAA51A" }}>Main hidden risk</p>
              <p className="text-[10px] text-[#1A1A1A] leading-snug">{r.d}</p>
            </div>
            <div className="bg-white px-3 py-2">
              <p className="text-[9px] font-bold uppercase tracking-wider mb-0.5" style={{ color: "#6366F1" }}>Governance burden</p>
              <p className="text-[10px] text-[#1A1A1A] leading-snug">{r.e}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
