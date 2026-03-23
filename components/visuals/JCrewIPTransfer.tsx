/**
 * JCrewIPTransfer
 * Illustrates J.Crew's controversial IP transfer to an unrestricted subsidiary,
 * the documentation loopholes that enabled it, and the industry's response
 * with "J.Crew blocker" provisions.
 * Used in: Day 42 (J.Crew's IP transfer — the documentation loophole).
 */
export default function JCrewIPTransfer() {
  const documentationGaps = [
    {
      gap: "Unrestricted Subsidiary Permissions",
      detail: "Credit agreement allowed designation of subsidiaries as 'unrestricted,' removing them from covenant group",
    },
    {
      gap: "Investment Basket Flexibility",
      detail: "Permitted investments into unrestricted subsidiaries up to a material dollar threshold",
    },
    {
      gap: "Transfer Provisions",
      detail: "No explicit prohibition on transferring IP/brand assets to unrestricted subsidiaries",
    },
    {
      gap: "Lack of 'J.Crew Blocker'",
      detail: "No negative covenant specifically preventing IP or material asset transfers outside the credit group",
    },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
        Day 42 — J.Crew&apos;s IP Transfer: The Documentation Loophole
      </p>

      {/* Before / After diagram */}
      <div className="grid grid-cols-2 gap-3">
        {/* Before */}
        <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#2A9D60] mb-2">
            Before (2016)
          </p>
          <div className="space-y-1.5">
            <div className="rounded-md bg-[#2A9D60]/10 border border-[#2A9D60]/20 p-2 text-center">
              <p className="text-[10px] font-semibold text-[#2A9D60]">Original Lenders</p>
            </div>
            <p className="text-center text-[#9A918A] text-xs">secured by ↓</p>
            <div className="rounded-md bg-[#FBF7F3] border border-[#E8DDD4] p-2 text-center">
              <p className="text-[11px] font-semibold text-[#404040]">All Assets</p>
              <p className="text-[9px] text-[#9A918A]">Operating assets + IP / Brand</p>
            </div>
          </div>
        </div>

        {/* After */}
        <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#D9532B] mb-2">
            After (2017)
          </p>
          <div className="space-y-1.5">
            <div className="rounded-md bg-[#D9532B]/10 border border-[#D9532B]/20 p-2 text-center">
              <p className="text-[10px] font-semibold text-[#D9532B]">Original Lenders</p>
              <p className="text-[9px] text-[#9A918A]">Operating assets only</p>
            </div>
            <p className="text-center text-[#9A918A] text-xs">IP transferred →</p>
            <div className="rounded-md bg-[#2294BD]/10 border border-[#2294BD]/20 p-2 text-center">
              <p className="text-[10px] font-semibold text-[#2294BD]">Unrestricted Sub</p>
              <p className="text-[9px] text-[#9A918A]">IP / Brand → new lenders</p>
            </div>
          </div>
        </div>
      </div>

      {/* Value flow illustration */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Value Migration
        </p>
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <div className="relative h-5 rounded bg-[#FAF8F5] overflow-hidden">
              <div className="absolute inset-y-0 left-0 rounded bg-[#D9532B]/60" style={{ width: "35%" }} />
            </div>
            <p className="text-[9px] text-[#D9532B] mt-0.5 font-semibold">Original lenders: operating assets (~35% of value)</p>
          </div>
          <div className="flex-1">
            <div className="relative h-5 rounded bg-[#FAF8F5] overflow-hidden">
              <div className="absolute inset-y-0 left-0 rounded bg-[#2294BD]" style={{ width: "65%" }} />
            </div>
            <p className="text-[9px] text-[#2294BD] mt-0.5 font-semibold">New lenders: IP / Brand (~65% of value)</p>
          </div>
        </div>
      </div>

      {/* 4 Documentation gaps */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          4 Key Documentation Gaps
        </p>
        <div className="space-y-2">
          {documentationGaps.map((g, i) => (
            <div key={g.gap} className="flex items-start gap-2">
              <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-[#D9532B] text-[9px] font-bold text-white">
                {i + 1}
              </span>
              <div>
                <p className="text-[11px] font-semibold text-[#1A1A1A]">{g.gap}</p>
                <p className="text-[10px] text-[#9A918A]">{g.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Industry response */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Industry Response
        </p>
        <div className="rounded-md bg-[#2A9D60]/10 border border-[#2A9D60]/20 p-2">
          <p className="text-[11px] font-semibold text-[#2A9D60]">
            &ldquo;J.Crew Blocker&rdquo; Provisions
          </p>
          <p className="text-[10px] text-[#404040] mt-0.5">
            Now standard in leveraged loan documentation — explicitly prohibits transfers of
            material intellectual property or brand assets to unrestricted subsidiaries,
            closing the loophole that enabled J.Crew&apos;s maneuver.
          </p>
        </div>
      </div>

      {/* Key insight callout */}
      <div className="rounded-lg border-l-4 border-l-[#2294BD] bg-white border border-[#E8DDD4] px-3 py-2.5">
        <span className="text-[9px] font-bold uppercase tracking-wider text-[#2294BD] mr-1.5">
          Key insight
        </span>
        <span className="text-[11px] text-[#404040]">
          A lender can be correct on the company and still lose economic control if the
          agreement leaves too many value-leakage paths.
        </span>
      </div>
    </div>
  );
}
