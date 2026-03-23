/**
 * SpotifyDirectListing
 * Side-by-side comparison of Traditional IPO vs Direct Listing across key
 * dimensions, with Spotify's 2018 outcome and companies that followed.
 * Used in: Day 36 (Spotify's direct listing).
 */
export default function SpotifyDirectListing() {
  const dimensions = [
    { label: "New Shares Issued", ipo: "Yes", direct: "No" },
    { label: "Lock-up Period", ipo: "90–180 days", direct: "None" },
    { label: "Pricing Mechanism", ipo: "Underwriter-set", direct: "Market-set" },
    { label: "IPO Discount", ipo: "~15% typical", direct: "None" },
    { label: "Who Benefits Most", ipo: "New investors", direct: "Existing holders" },
  ];

  const followers = [
    { company: "Slack", year: 2019 },
    { company: "Palantir", year: 2020 },
    { company: "Coinbase", year: 2021 },
  ];

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
        Spotify&apos;s 2018 Direct Listing — IPO vs Direct Listing
      </p>

      {/* Comparison table */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <div className="grid grid-cols-3 gap-2 mb-2">
          <div />
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] text-center">
            Traditional IPO
          </p>
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#2294BD] text-center">
            Direct Listing
          </p>
        </div>
        <div className="space-y-1.5">
          {dimensions.map((d) => (
            <div key={d.label} className="grid grid-cols-3 gap-2 items-center">
              <p className="text-[11px] font-semibold text-[#404040]">{d.label}</p>
              <p className="text-[11px] text-[#9A918A] text-center">{d.ipo}</p>
              <p className="text-[11px] font-semibold text-[#2294BD] text-center">{d.direct}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Spotify outcome */}
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-[#E8DDD4] bg-white p-3 text-center">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-1">
            Opening Price
          </p>
          <p className="text-2xl font-bold text-[#2A9D60]">$165.90</p>
          <p className="text-[10px] text-[#9A918A] mt-0.5">April 3, 2018</p>
        </div>
        <div className="rounded-lg border border-[#E8DDD4] bg-white p-3 text-center">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-1">
            Market Cap
          </p>
          <p className="text-2xl font-bold text-[#2294BD]">~$29.5B</p>
          <p className="text-[10px] text-[#9A918A] mt-0.5">At open</p>
        </div>
      </div>

      {/* Companies that followed */}
      <div className="rounded-lg border border-[#E8DDD4] bg-white p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#9A918A] mb-2">
          Companies That Followed
        </p>
        <div className="flex gap-3 justify-center">
          {followers.map((f) => (
            <div
              key={f.company}
              className="rounded-md bg-[#2294BD]/10 px-3 py-1.5 text-center"
            >
              <p className="text-[11px] font-bold text-[#2294BD]">{f.company}</p>
              <p className="text-[10px] text-[#9A918A]">{f.year}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key insight callout */}
      <div className="rounded-lg bg-[#2294BD]/10 border border-[#2294BD]/30 px-3 py-2.5">
        <span className="text-[9px] font-bold uppercase tracking-wider text-[#2294BD] mr-1.5">
          Key insight
        </span>
        <span className="text-[11px] text-[#404040]">
          For companies that don&apos;t need new capital, the traditional IPO is not the only
          — or necessarily the best — path to public markets.
        </span>
      </div>
    </div>
  );
}
