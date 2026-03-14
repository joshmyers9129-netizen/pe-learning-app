interface Props {
  children: React.ReactNode;
  variant?: "default" | "available" | "stub" | "complete";
}

const styles = {
  default: "bg-black/5 text-black/60",
  available: "bg-access/10 text-access",
  stub: "bg-black/5 text-black/35",
  complete: "bg-green-50 text-green-700",
};

export default function Badge({ children, variant = "default" }: Props) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${styles[variant]}`}
    >
      {children}
    </span>
  );
}
