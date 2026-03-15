/**
 * SubscriptionLineIRR
 * Teaches: how subscription line credit facilities mechanically inflate reported IRR
 *          without improving LP economics (same MOIC, higher IRR).
 * Used in: Day 4 (IRR limitations).
 * Side-by-side comparison table: same fund, no sub line vs. 6-month sub line.
 */
export default function SubscriptionLineIRR() {
  const rows = [
    {
      label: "LP capital call date",
      noLine: "Day 0 (fund close)",
      withLine: "Month 6 (delayed)",
      highlight: false,
    },
    {
      label: "Measured investment period (LP perspective)",
      noLine: "10 years",
      withLine: "9.5 years",
      highlight: false,
    },
    {
      label: "Gross MOIC",
      noLine: "2.1×",
      withLine: "2.1×",
      highlight: false,
    },
    {
      label: "Net MOIC",
      noLine: "1.65×",
      withLine: "1.65×",
      highlight: false,
    },
    {
      label: "Reported net IRR",
      noLine: "11.2%",
      withLine: "13.8%",
      highlight: true,
    },
    {
      label: "IRR inflation from sub line",
      noLine: "—",
      withLine: "+2.6 pts (mechanical)",
      highlight: true,
    },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040] mb-1">
        Subscription Line Effect on IRR
      </p>
      <p className="text-[11px] text-[#9A918A] mb-3 italic">
        Same fund, same investments, same exit proceeds — only the LP capital call timing differs.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-[11px]">
          <thead>
            <tr className="border-b border-[#E8DDD4]">
              <th className="text-left text-[10px] font-bold uppercase tracking-wide text-[#9A918A] py-1.5 pr-3 w-[44%]">
                Metric
              </th>
              <th className="text-center text-[10px] font-bold uppercase tracking-wide text-[#2294BD] py-1.5 px-2 w-[28%]">
                No Sub Line
              </th>
              <th className="text-center text-[10px] font-bold uppercase tracking-wide text-[#D9532B] py-1.5 px-2 w-[28%]">
                6-Month Sub Line
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.label}
                className={`border-b border-[#E8DDD4]/60 ${
                  row.highlight ? "bg-[#FAA51A]/8" : ""
                }`}
              >
                <td className="py-2 pr-3 text-[#404040] leading-snug">{row.label}</td>
                <td
                  className={`py-2 px-2 text-center font-medium ${
                    row.highlight ? "text-[#2294BD]" : "text-[#404040]"
                  }`}
                >
                  {row.noLine}
                </td>
                <td
                  className={`py-2 px-2 text-center font-medium ${
                    row.highlight ? "text-[#D9532B] font-bold" : "text-[#404040]"
                  }`}
                >
                  {row.withLine}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-[10px] text-[#404040] mt-3 italic">
        Detection: ask the GP for both adjusted and unadjusted IRR per ILPA 2017 subscription line disclosure guidance. If a GP reports only one figure, ask which it is.
      </p>
    </div>
  );
}
