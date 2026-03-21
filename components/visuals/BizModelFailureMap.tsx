export default function BizModelFailureMap() {
  const rows = [
    { a: "Enterprise SaaS", b: "Retention, repeatable sales motion, software-like margins", c: "Go-to-market fit fails before durable scale", d: "Can the manager distinguish workflow value from temporary growth?" },
    { a: "AI infrastructure / tooling", b: "Defensibility, durable economics, real developer or enterprise adoption", c: "The company is a feature or margin structure is weaker than software optics imply", d: "Does the manager understand data, compute, and platform dependence?" },
    { a: "Marketplace / consumer platform", b: "Liquidity, repeat engagement, sustainable take rate", c: "Growth is subsidy-driven or network depth is fragile", d: "Can the manager separate usage growth from durable economics?" },
    { a: "Fintech", b: "Clean revenue quality, risk control, manageable compliance burden", c: "Underwriting, funding, or fraud risk overwhelms the software narrative", d: "Does the manager know when fintech is really balance-sheet risk?" },
    { a: "Biotech / life sciences", b: "Scientific validity, milestone progression, capital endurance", c: "Clinical, regulatory, or financing de-risking fails", d: "Does the manager have real domain and syndicate depth?" }
  ];
  return (
    <div className="my-3 space-y-2">
      {rows.map((r, i) => (
        <div key={i} className="rounded-lg border border-[#E8DDD4] bg-white shadow-sm overflow-hidden">
          <div className="bg-[#FAF8F5] px-4 py-1.5 border-b border-[#E8DDD4]">
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#404040]">{r.a}</p>
          </div>
          <div className="grid grid-cols-3 divide-x divide-[#E8DDD4]">
            <div className="px-3 py-2.5">
              <p className="text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: "#6366F1" }}>What success often requires</p>
              <p className="text-[10px] text-[#1A1A1A] leading-snug">{r.b}</p>
            </div>
            <div className="px-3 py-2.5">
              <p className="text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: "#2294BD" }}>Common failure mode</p>
              <p className="text-[10px] text-[#1A1A1A] leading-snug">{r.c}</p>
            </div>
            <div className="px-3 py-2.5">
              <p className="text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: "#2A9D60" }}>What allocator should test in the GP</p>
              <p className="text-[10px] text-[#1A1A1A] leading-snug">{r.d}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
