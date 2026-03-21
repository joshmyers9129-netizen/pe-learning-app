export default function ExitQualityVsHeadline() {
  const rows = [
    { a: "IPO", b: "\'The company went public\'", c: "How much is actually monetizable, on what timeline, and with what remaining market risk?" },
    { a: "M&A sale", b: "\'The company was acquired at a strong value\'", c: "Was consideration cash, stock, or contingent, and how did the stack affect payout?" },
    { a: "Tender / secondary", b: "\'We generated liquidity before exit\'", c: "How much was actually sold, and how much risk remains?" },
    { a: "Recap", b: "\'The fund received cash\'", c: "Was value crystallized, or was leverage layered onto the remaining risk?" },
    { a: "Long private hold", b: "\'The company keeps compounding\'", c: "Is this durable value creation or just prolonged paper value with delayed realization?" }
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
              <p className="text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: "#2A9D60" }}>What sounds good</p>
              <p className="text-[11px] text-[#1A1A1A] leading-snug">{r.b}</p>
            </div>
            <div className="px-3.5 py-2.5">
              <p className="text-[9px] font-bold uppercase tracking-wider mb-1" style={{ color: "#D9532B" }}>What allocator still needs to ask</p>
              <p className="text-[11px] text-[#1A1A1A] leading-snug">{r.c}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
