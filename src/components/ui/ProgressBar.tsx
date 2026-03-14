interface Props {
  value: number; // 0–1
  className?: string;
}

export default function ProgressBar({ value, className = "" }: Props) {
  return (
    <div className={`h-1.5 bg-black/10 rounded-full overflow-hidden ${className}`}>
      <div
        className="h-full bg-access rounded-full transition-all duration-300"
        style={{ width: `${Math.min(100, Math.max(0, value * 100))}%` }}
      />
    </div>
  );
}
