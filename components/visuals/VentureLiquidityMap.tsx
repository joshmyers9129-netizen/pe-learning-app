export default function VentureLiquidityMap() {
  const rows = [
    { a: "IPO", b: "Public listing with staged monetization over time", c: "How real and how near is true public liquidity?" },
    { a: "Strategic M&A", b: "Sale to an acquirer for cash, stock, or mixed consideration", c: "How clean is the payout, and what part of the value is actually realizable?" },
    { a: "Tender / secondary", b: "Partial private liquidity before full exit", c: "Is this a real monetization event or only a signal?" },
    { a: "Recapitalization", b: "Balance-sheet or ownership restructuring that creates some liquidity", c: "Is value being crystallized or merely re-levered?" },
    { a: "Long private hold", b: "No near-term exit, but ongoing rounds and partial secondary options", c: "How much of the mark should be treated as near-cash versus long-duration paper value?" }
  ];
  return (
    <div className="my-3 space-y-2">
      {rows.map((r, i) => (
        <div key={i} className="rounded-lg border border-[#E8DDD4] bg-white shadow-sm overflow-hidden">
          <div className="bg-[#FAF8F5] px-4 py-1.5 border-b border-[#E8DDD4]">
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#404040]">{r.a}</p>
          </div>
          <div className="grid grid-cols-2 divide-x divide-[#E8DDD4]">
            <div className="px-3.5 py-2.5">
              <p className="text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: "#2294BD" }}>What it is</p>
              <p className="text-[11px] text-[#1A1A1A] leading-snug">{r.b}</p>
            </div>
            <div className="px-3.5 py-2.5">
              <p className="text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: "#2A9D60" }}>Main allocator question</p>
              <p className="text-[11px] text-[#1A1A1A] leading-snug">{r.c}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
