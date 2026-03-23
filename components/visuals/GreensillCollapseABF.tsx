/**
 * GreensillCollapseABF
 * Illustrates the Greensill Capital collapse: what was marketed vs reality,
 * the four failure points, and the ~$10B Credit Suisse fund freeze.
 * Used in: Day 45 (Greensill Capital collapse).
 */
export default function GreensillCollapseABF() {
  const marketed = [
    { claim: "Short-duration", detail: "Self-liquidating receivables with predictable cash flows" },
    { claim: "Insured", detail: "Credit insurance from major carriers covering default risk" },
    { claim: "Blue-chip corporates", detail: "Receivables from investment-grade counterparties" },
    { claim: "Low correlation", detail: "Supply-chain finance uncorrelated to broader credit markets" },
  ];

  const reality = [
    { claim: "Concentrated exposure", detail: "Dominated by GFG Alliance, a single opaque conglomerate" },
    { claim: "Prospective receivables", detail: "Future/anticipated invoices, not actual goods-delivered receivables" },
    { claim: "Void insurance", detail: "Tokio Marine voided policies — coverage was illusory" },
    { claim: "Platform dependent", detail: "Greensill insolvency killed servicing and origination" },
  ];

  const failurePoints = [
    {
      point: "Concentration",
      detail: "GFG Alliance (Sanjeev Gupta) dominated the receivables pool — single-name risk disguised as diversified portfolio",
      color: "#D9532B",
    },
    {
      point: "Receivable Quality",
      detail: "Prospective (future) receivables, not actual invoices — credit risk was corporate default, not payment timing",
      color: "#D9532B",
    },
    {
      point: "Insurance",
      detail: "Tokio Marine voided credit insurance policies, removing the structural protection investors relied upon",
      color: "#D9532B",
    },
    {
      point: "Platform Dependence",
      detail: "Greensill's insolvency terminated servicing, origination, and collection infrastructure simultaneously",
      color: "#D9532B",
    },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
        Day 45 — Greensill Capital Collapse
      </p>

      {/* What was marketed vs What was real */}
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#2A9D60] mb-2">
            What Was Marketed
          </p>
          <div className="space-y-1.5">
            {marketed.map((m) => (
              <div key={m.claim} className="flex items-start gap-1.5">
                <span className="text-[10px] text-[#2A9D60] mt-0.5">&#10003;</span>
                <div>
                  <p className="text-[11px] font-semibold text-[#404040]">{m.claim}</p>
                  <p className="text-[9px] text-[#9A918A]">{m.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#D9532B] mb-2">
            What Was Real
          </p>
          <div className="space-y-1.5">
            {reality.map((r) => (
              <div key={r.claim} className="flex items-start gap-1.5">
                <span className="text-[10px] text-[#D9532B] mt-0.5">&#10007;</span>
                <div>
                  <p className="text-[11px] font-semibold text-[#404040]">{r.claim}</p>
                  <p className="text-[9px] text-[#9A918A]">{r.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4 Failure points */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          4 Failure Points
        </p>
        <div className="space-y-2">
          {failurePoints.map((f, i) => (
            <div key={f.point} className="flex items-start gap-2">
              <span
                className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-white"
                style={{ backgroundColor: f.color }}
              >
                {i + 1}
              </span>
              <div>
                <p className="text-[11px] font-semibold text-[#1A1A1A]">{f.point}</p>
                <p className="text-[10px] text-[#9A918A]">{f.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Credit Suisse fund freeze */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3 text-center">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-1">
          Credit Suisse Supply Chain Finance Funds
        </p>
        <p className="text-3xl font-bold text-[#D9532B]">~$10B</p>
        <p className="text-[11px] text-[#404040] font-semibold">Frozen</p>
        <p className="text-[10px] text-[#9A918A] mt-0.5">
          Investors in &ldquo;low-risk&rdquo; supply-chain finance funds lost access to capital
          as Greensill&apos;s collapse cascaded through Credit Suisse&apos;s distribution platform
        </p>
      </div>

      {/* Key insight callout */}
      <div className="rounded-lg border-l-4 border-l-[#2294BD] bg-white border border-[#E8DDD4] px-3 py-2.5">
        <span className="text-[9px] font-bold uppercase tracking-wider text-[#2294BD] mr-1.5">
          Key insight
        </span>
        <span className="text-[11px] text-[#404040]">
          Structural labels like &ldquo;short duration&rdquo; and &ldquo;insured&rdquo; create
          false comfort when origination quality, counterparty dependencies, and concentration
          are not independently underwritten.
        </span>
      </div>
    </div>
  );
}
