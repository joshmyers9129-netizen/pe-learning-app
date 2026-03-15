/**
 * JCurveDPIOverlay
 * Teaches: why IRR can improve while DPI stays flat — the "marks vs. cash" gap.
 * Used in: Day 5 (TVPI, DPI, RVPI).
 * Dual-line SVG: blue J-curve (net IRR), gold dashed line (DPI accumulation).
 * Shaded warning zone Yr 5–7 where IRR rises but DPI is still low.
 */
export default function JCurveDPIOverlay() {
  // SVG viewport: 300 x 160
  // Left panel: IRR axis (left), DPI axis (right), shared x-axis (years 0–10)
  const svgW = 300;
  const svgH = 160;
  const leftPad = 38;  // for IRR % labels
  const rightPad = 36; // for DPI × labels
  const topPad = 12;
  const bottomPad = 28;
  const innerW = svgW - leftPad - rightPad;
  const innerH = svgH - topPad - bottomPad;

  // x: year 0–10
  const x = (yr: number) => leftPad + (yr / 10) * innerW;

  // IRR axis: −15% at bottom, +20% at top
  const irrMin = -15;
  const irrMax = 20;
  const yIRR = (pct: number) =>
    topPad + innerH - ((pct - irrMin) / (irrMax - irrMin)) * innerH;

  // DPI axis: 0× at bottom, 2.0× at top
  const dpiMin = 0;
  const dpiMax = 2.0;
  const yDPI = (val: number) =>
    topPad + innerH - ((val - dpiMin) / (dpiMax - dpiMin)) * innerH;

  // IRR J-curve control points (approximate net IRR trajectory)
  // Starts 0, dips to −12% at yr 2, crosses zero at yr 5, reaches +16% at yr 10
  const irrZeroY = yIRR(0);
  const irrPoints: [number, number][] = [
    [x(0), yIRR(0)],
    [x(1), yIRR(-7)],
    [x(2), yIRR(-12)],
    [x(3), yIRR(-8)],
    [x(4), yIRR(-2)],
    [x(5), yIRR(2)],
    [x(6), yIRR(7)],
    [x(7), yIRR(11)],
    [x(8), yIRR(14)],
    [x(9), yIRR(15.5)],
    [x(10), yIRR(16)],
  ];

  // Build smooth polyline path for IRR
  const irrPath = irrPoints
    .map(([px, py], i) => `${i === 0 ? "M" : "L"} ${px.toFixed(1)} ${py.toFixed(1)}`)
    .join(" ");

  // DPI accumulation: flat near 0 until yr 4, then builds as exits occur
  const dpiPoints: [number, number][] = [
    [x(0), yDPI(0)],
    [x(1), yDPI(0)],
    [x(2), yDPI(0)],
    [x(3), yDPI(0)],
    [x(4), yDPI(0.05)],
    [x(5), yDPI(0.15)],
    [x(6), yDPI(0.35)],
    [x(7), yDPI(0.60)],
    [x(8), yDPI(0.95)],
    [x(9), yDPI(1.30)],
    [x(10), yDPI(1.55)],
  ];

  const dpiPath = dpiPoints
    .map(([px, py], i) => `${i === 0 ? "M" : "L"} ${px.toFixed(1)} ${py.toFixed(1)}`)
    .join(" ");

  // Warning zone: Yr 5–7, where IRR is rising but DPI is still low
  const warnX1 = x(5);
  const warnX2 = x(7);
  const warnY1 = topPad;
  const warnH = innerH;

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040] mb-1">
        IRR vs. DPI Over Fund Life
      </p>
      <p className="text-[11px] text-[#9A918A] mb-3 italic">
        IRR can improve via rising GP marks while DPI stays flat — the key signal of unrealized risk.
      </p>

      {/* Legend */}
      <div className="flex gap-4 mb-2 ml-[38px]">
        <div className="flex items-center gap-1.5">
          <svg width="20" height="8">
            <line x1="0" y1="4" x2="20" y2="4" stroke="#2294BD" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          <span className="text-[10px] text-[#2294BD] font-semibold">Net IRR</span>
        </div>
        <div className="flex items-center gap-1.5">
          <svg width="20" height="8">
            <line x1="0" y1="4" x2="20" y2="4" stroke="#FAA51A" strokeWidth="2" strokeDasharray="4 2" strokeLinecap="round" />
          </svg>
          <span className="text-[10px] text-[#9B6A00] font-semibold">DPI (×)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <svg width="12" height="8">
            <rect x="0" y="0" width="12" height="8" fill="#D9532B" fillOpacity="0.12" />
          </svg>
          <span className="text-[10px] text-[#D9532B] font-semibold">IRR↑ / DPI flat</span>
        </div>
      </div>

      <svg
        viewBox={`0 0 ${svgW} ${svgH}`}
        className="w-full"
        aria-label="IRR J-curve overlaid with DPI accumulation line"
      >
        {/* Warning zone shading: yr 5–7 */}
        <rect
          x={warnX1}
          y={warnY1}
          width={warnX2 - warnX1}
          height={warnH}
          fill="#D9532B"
          fillOpacity="0.07"
        />

        {/* Zero IRR line */}
        <line
          x1={leftPad}
          y1={irrZeroY}
          x2={svgW - rightPad}
          y2={irrZeroY}
          stroke="#D0C8C0"
          strokeWidth="1"
          strokeDasharray="4 3"
        />

        {/* X axis */}
        <line
          x1={leftPad}
          y1={topPad + innerH}
          x2={svgW - rightPad}
          y2={topPad + innerH}
          stroke="#D0C8C0"
          strokeWidth="1"
        />

        {/* Left Y axis (IRR) */}
        <line
          x1={leftPad}
          y1={topPad}
          x2={leftPad}
          y2={topPad + innerH}
          stroke="#D0C8C0"
          strokeWidth="1"
        />

        {/* Right Y axis (DPI) */}
        <line
          x1={svgW - rightPad}
          y1={topPad}
          x2={svgW - rightPad}
          y2={topPad + innerH}
          stroke="#D0C8C0"
          strokeWidth="1"
        />

        {/* IRR Y-axis labels */}
        {[[-15, "#D9532B"], [0, "#404040"], [20, "#2294BD"]].map(([val, color]) => (
          <text
            key={val}
            x={leftPad - 4}
            y={yIRR(val as number)}
            fontSize="8"
            fill={color as string}
            textAnchor="end"
            dominantBaseline="middle"
          >
            {(val as number) > 0 ? `+${val}%` : `${val}%`}
          </text>
        ))}

        {/* DPI Y-axis labels */}
        {[0, 1.0, 2.0].map((val) => (
          <text
            key={val}
            x={svgW - rightPad + 4}
            y={yDPI(val)}
            fontSize="8"
            fill="#9B6A00"
            textAnchor="start"
            dominantBaseline="middle"
          >
            {val.toFixed(1)}×
          </text>
        ))}

        {/* Year ticks */}
        {[0, 2, 4, 6, 8, 10].map((yr) => (
          <g key={yr}>
            <line
              x1={x(yr)}
              y1={topPad + innerH}
              x2={x(yr)}
              y2={topPad + innerH + 4}
              stroke="#D0C8C0"
              strokeWidth="1"
            />
            <text
              x={x(yr)}
              y={topPad + innerH + 13}
              fontSize="8.5"
              fill="#404040"
              textAnchor="middle"
            >
              {yr === 0 ? "Yr 0" : yr === 10 ? "Yr 10" : yr}
            </text>
          </g>
        ))}

        {/* DPI line (gold dashed) */}
        <path
          d={dpiPath}
          fill="none"
          stroke="#FAA51A"
          strokeWidth="2"
          strokeDasharray="5 3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* IRR J-curve (blue) */}
        <path
          d={irrPath}
          fill="none"
          stroke="#2294BD"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Warning zone annotation */}
        <text
          x={(warnX1 + warnX2) / 2}
          y={topPad + 10}
          fontSize="7.5"
          fill="#D9532B"
          textAnchor="middle"
          fontStyle="italic"
        >
          IRR ↑ / DPI flat
        </text>
        <text
          x={(warnX1 + warnX2) / 2}
          y={topPad + 19}
          fontSize="7.5"
          fill="#D9532B"
          textAnchor="middle"
          fontStyle="italic"
        >
          = marks, not cash
        </text>
      </svg>

      <p className="text-[10px] text-[#404040] mt-2 italic">
        A fund reporting improving IRR with flat DPI is marking up unrealized positions — the gains exist only on paper until exits confirm them.
      </p>
    </div>
  );
}
