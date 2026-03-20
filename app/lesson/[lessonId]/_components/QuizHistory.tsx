import { QuizAttempt } from "@/lib/types";

export function QuizHistory({ attempts }: { attempts: QuizAttempt[] }) {
  if (attempts.length <= 1) return null;
  return (
    <div className="mb-4">
      <p className="text-[10px] font-bold text-[#404040] uppercase tracking-widest mb-2">
        Previous attempts
      </p>
      <div className="flex gap-2 flex-wrap">
        {attempts.map((a) => (
          <div
            key={a.attemptNumber}
            className="text-xs bg-[#F0E6DD] text-[#404040] px-2.5 py-1.5 rounded-lg"
          >
            <span className="font-medium">#{a.attemptNumber}</span>{" "}
            {Math.round(a.score * 100)}% · {a.confidence}/5 conf ·{" "}
            {new Date(a.completedAt).toLocaleDateString()}
          </div>
        ))}
      </div>
    </div>
  );
}
