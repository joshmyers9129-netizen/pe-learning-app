/**
 * JCurveVisual
 * Teaches: the J-curve shape and why PE looks bad early.
 * Used in: Day 3 (J-curve), Day 14 (pacing).
 * Pure SVG — no charting library.
 */
export default function JCurveVisual() {
  // SVG viewport: 280 x 140
  // X axis: years 0–10, Y axis: cumulative return (negative zone below midline)
  // Midline Y = 80 (zero return line)
  // J-curve path: dips down to ~Y=115 around yr 2, crosses zero at ~yr 5,
  //               rises to ~Y=30 by yr 9.

  const midY = 85;
  const leftPad = 32;
  const rightPad = 8;
  const width = 280;
  const innerW = width - leftPad - rightPad;

  // Map year 0–10 to x coordinate
  const x = (yr: number) => leftPad + (yr / 10) * innerW;

  // J-curve control points (cubic bezier segments)
  const curvePath = [
    `M ${x(0)} ${midY}`,
    `C ${x(0.5)} ${midY + 5}, ${x(1.5)} ${midY + 35}, ${x(2)} ${midY + 32}`,
    `C ${x(2.8)} ${midY + 28}, ${x(3.5)} ${midY + 15}, ${x(5)} ${midY}`,
    `C ${x(6.5)} ${midY - 15}, ${x(7.5)} ${midY - 42}, ${x(10)} ${midY - 55}`,
  ].join(" ");

  // Area fill path (closed below the curve)
  const areaPath = [
    `M ${x(0)} ${midY}`,
    `C ${x(0.5)} ${midY + 5}, ${x(1.5)} ${midY + 35}, ${x(2)} ${midY + 32}`,
    `C ${x(2.8)} ${midY + 28}, ${x(3.5)} ${midY + 15}, ${x(5)} ${midY}`,
    `L ${x(0)} ${midY}`,
    "Z",
  ].join(" ");

  const gainPath = [
    `M ${x(5)} ${midY}`,
    `C ${x(6.5)} ${midY - 15}, ${x(7.5)} ${midY - 42}, ${x(10)} ${midY - 55}`,
    `L ${x(10)} ${midY}`,
    `L ${x(5)} ${midY}`,
    "Z",
  ].join(" ");

  return (
    <div className="my-3 rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] p-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#404040] mb-2">
        The J-Curve
      </p>

      <svg
        viewBox={`0 0 ${width} 140`}
        className="w-full max-w-sm"
        aria-label="J-curve diagram showing PE fund returns over time"
      >
        {/* Zero line */}
        <line
          x1={leftPad}
          y1={midY}
          x2={width - rightPad}
          y2={midY}
          stroke="#D0C8C0"
          strokeWidth="1"
          strokeDasharray="4 3"
        />

        {/* Negative area (loss zone) */}
        <path d={areaPath} fill="#D9532B" fillOpacity="0.08" />

        {/* Positive area (gain zone) */}
        <path d={gainPath} fill="#2294BD" fillOpacity="0.10" />

        {/* J-curve line */}
        <path
          d={curvePath}
          fill="none"
          stroke="#2294BD"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* X axis */}
        <line
          x1={leftPad}
          y1={midY + 38}
          x2={width - rightPad}
          y2={midY + 38}
          stroke="#D0C8C0"
          strokeWidth="1"
        />

        {/* Y axis */}
        <line
          x1={leftPad}
          y1={10}
          x2={leftPad}
          y2={midY + 38}
          stroke="#D0C8C0"
          strokeWidth="1"
        />

        {/* Year ticks: 0, 2, 4, 6, 8, 10 */}
        {[0, 2, 4, 6, 8, 10].map((yr) => (
          <g key={yr}>
            <line
              x1={x(yr)}
              y1={midY + 36}
              x2={x(yr)}
              y2={midY + 40}
              stroke="#D0C8C0"
              strokeWidth="1"
            />
            <text
              x={x(yr)}
              y={midY + 50}
              fontSize="9"
              fill="#404040"
              textAnchor="middle"
            >
              {yr === 0 ? "Yr 0" : yr === 10 ? "Yr 10" : yr}
            </text>
          </g>
        ))}

        {/* Y axis label */}
        <text
          x={leftPad - 4}
          y={midY}
          fontSize="8"
          fill="#404040"
          textAnchor="end"
          dominantBaseline="middle"
        >
          0
        </text>
        <text
          x={leftPad - 4}
          y={midY - 45}
          fontSize="8"
          fill="#2294BD"
          textAnchor="end"
          dominantBaseline="middle"
        >
          +
        </text>
        <text
          x={leftPad - 4}
          y={midY + 30}
          fontSize="8"
          fill="#D9532B"
          textAnchor="end"
          dominantBaseline="middle"
        >
          −
        </text>

        {/* Zone labels */}
        <text x={x(1.5)} y={midY + 22} fontSize="8.5" fill="#D9532B" textAnchor="middle" fontStyle="italic">
          Fees &amp; writedowns
        </text>
        <text x={x(7.5)} y={midY - 28} fontSize="8.5" fill="#2294BD" textAnchor="middle" fontStyle="italic">
          Exits &amp; distributions
        </text>

        {/* Inflection annotation */}
        <circle cx={x(5)} cy={midY} r="3" fill="#FAA51A" />
        <text x={x(5)} y={midY - 7} fontSize="8" fill="#D9532B" textAnchor="middle">
          Inflection ~Yr 5
        </text>
      </svg>

      <p className="text-[10px] text-[#404040] mt-1 italic">
        Interim IRR is unreliable until ~60–70% of fund life has elapsed.
      </p>
    </div>
  );
}
