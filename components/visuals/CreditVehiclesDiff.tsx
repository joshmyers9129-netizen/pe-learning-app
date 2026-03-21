export default function CreditVehiclesDiff() {
  const rows = [
    { a: "Closed-end drawdown fund", b: "Commitments, then capital calls", c: "Realizations over fund life", d: "Periodic manager marks, no routine redemption price", e: "Institutional programs and vintage pacing", f: "Liquidity lock-up and blind-pool timing risk" },
    { a: "Evergreen private credit fund", b: "Ongoing subscriptions", c: "Periodic repurchases, usually capped", d: "Manager NAV used for dealing", e: "Wealth channel, some institutions seeking smoother deployment", f: "Liquidity mismatch and flow pressure" },
    { a: "Publicly traded BDC", b: "Public equity capital markets", c: "Exchange trading by shareholders", d: "Daily market price plus disclosed NAV", e: "Liquid access and income-oriented investors", f: "Premium/discount volatility and market sentiment" },
    { a: "Non-traded BDC", b: "Continuous or periodic fundraising", c: "Manager-run repurchase programs, often limited", d: "Periodic NAV, no exchange quote", e: "Private wealth access to direct lending", f: "Redemption caps, NAV fairness, allocation conflicts" },
    { a: "SMA / strategic account", b: "Mandated capital from one investor", c: "Negotiated under mandate terms", d: "Bilateral reporting framework", e: "Large LPs with control needs", f: "Capacity concentration and governance burden" }
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
              <p className="text-[9px] font-bold uppercase tracking-wider mb-0.5" style={{ color: "#FAA51A" }}>Capital comes in</p>
              <p className="text-[10px] text-[#1A1A1A] leading-snug">{r.b}</p>
            </div>
            <div className="bg-white px-3 py-2">
              <p className="text-[9px] font-bold uppercase tracking-wider mb-0.5" style={{ color: "#6366F1" }}>Capital goes out</p>
              <p className="text-[10px] text-[#1A1A1A] leading-snug">{r.c}</p>
            </div>
            <div className="bg-white px-3 py-2">
              <p className="text-[9px] font-bold uppercase tracking-wider mb-0.5" style={{ color: "#2294BD" }}>Price discovery</p>
              <p className="text-[10px] text-[#1A1A1A] leading-snug">{r.d}</p>
            </div>
            <div className="bg-white px-3 py-2">
              <p className="text-[9px] font-bold uppercase tracking-wider mb-0.5" style={{ color: "#2A9D60" }}>Typical allocator use</p>
              <p className="text-[10px] text-[#1A1A1A] leading-snug">{r.e}</p>
            </div>
            <div className="bg-white px-3 py-2">
              <p className="text-[9px] font-bold uppercase tracking-wider mb-0.5" style={{ color: "#D9532B" }}>Main hidden risk</p>
              <p className="text-[10px] text-[#1A1A1A] leading-snug">{r.f}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
