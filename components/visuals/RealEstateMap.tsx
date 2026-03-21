export default function RealEstateMap() {
  const rows = [
    { a: "Core", b: "Stabilized assets, strong occupancy, lower business-plan risk", c: "Lower", d: "Income-dominant", e: "Open-end commingled fund", f: "Often ODCE-type peer set; NPI as property-level context" },
    { a: "Core-plus", b: "Mostly stabilized with selective improvement or lease-up work", c: "Low to moderate", d: "Income plus moderate appreciation", e: "Open-end or closed-end", f: "Custom peer set; sometimes ODCE-adjacent but not identical" },
    { a: "Value-add", b: "Repositioning, lease-up, capex, moderate redevelopment", c: "Moderate", d: "Mixed, with more appreciation reliance", e: "Closed-end", f: "Strategy-specific peer set; not ODCE" },
    { a: "Opportunistic", b: "Development, distress, major repositioning, thematic or high-leverage plans", c: "Higher", d: "Appreciation-heavy", e: "Closed-end", f: "Opportunistic peers, not core indices" }
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
              <p className="text-[9px] font-bold uppercase tracking-wider mb-0.5" style={{ color: "#6366F1" }}>Typical assets and plan</p>
              <p className="text-[10px] text-[#1A1A1A] leading-snug">{r.b}</p>
            </div>
            <div className="bg-white px-3 py-2">
              <p className="text-[9px] font-bold uppercase tracking-wider mb-0.5" style={{ color: "#2294BD" }}>Usual leverage</p>
              <p className="text-[10px] text-[#1A1A1A] leading-snug">{r.c}</p>
            </div>
            <div className="bg-white px-3 py-2">
              <p className="text-[9px] font-bold uppercase tracking-wider mb-0.5" style={{ color: "#2A9D60" }}>Return mix</p>
              <p className="text-[10px] text-[#1A1A1A] leading-snug">{r.d}</p>
            </div>
            <div className="bg-white px-3 py-2">
              <p className="text-[9px] font-bold uppercase tracking-wider mb-0.5" style={{ color: "#D9532B" }}>Common vehicle</p>
              <p className="text-[10px] text-[#1A1A1A] leading-snug">{r.e}</p>
            </div>
            <div className="bg-white px-3 py-2">
              <p className="text-[9px] font-bold uppercase tracking-wider mb-0.5" style={{ color: "#7C5CBF" }}>Benchmark tendency</p>
              <p className="text-[10px] text-[#1A1A1A] leading-snug">{r.f}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
