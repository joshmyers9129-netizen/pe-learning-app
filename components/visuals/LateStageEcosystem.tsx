export default function LateStageEcosystem() {
  const rows = [
    { a: "Early VC (insider follow-on)", b: "Protect and grow existing ownership", c: "Deep operational knowledge", d: "IPO or M&A, long runway" },
    { a: "Crossover fund", b: "Pre-IPO access to known brands", c: "Public-market-style financial analysis", d: "IPO and public market monetization" },
    { a: "Growth equity fund", b: "Minority ownership in proven growers", c: "Fundamental business underwriting", d: "Strategic sale or IPO" },
    { a: "Sovereign wealth / large LP", b: "Direct exposure to private growth leaders", c: "Variable, often light", d: "IPO or long hold" },
    { a: "Corporate strategic", b: "Strategic optionality or ecosystem access", c: "Varies significantly", d: "Partnership or acquisition" }
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
              <p className="text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: "#7C5CBF" }}>Primary motivation</p>
              <p className="text-[10px] text-[#1A1A1A] leading-snug">{r.b}</p>
            </div>
            <div className="px-3 py-2.5">
              <p className="text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: "#FAA51A" }}>Diligence depth</p>
              <p className="text-[10px] text-[#1A1A1A] leading-snug">{r.c}</p>
            </div>
            <div className="px-3 py-2.5">
              <p className="text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: "#6366F1" }}>Typical exit path</p>
              <p className="text-[10px] text-[#1A1A1A] leading-snug">{r.d}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
