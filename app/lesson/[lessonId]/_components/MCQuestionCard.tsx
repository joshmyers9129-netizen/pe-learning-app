import { MCQuestion } from "@/lib/types";

export function MCQuestionCard({
  q,
  index,
  submitted,
  selected,
  onSelect,
}: {
  q: MCQuestion;
  index: number;
  submitted: boolean;
  selected: string | null;
  onSelect: (v: string) => void;
}) {
  const isCorrect = selected === q.correctAnswer;

  return (
    <div className="mb-7">
      <p className="text-[10px] font-bold text-[#404040] uppercase tracking-widest mb-2">
        Q{index + 1} · Multiple choice
      </p>
      <p className="text-[15px] font-medium text-[#000000] leading-snug mb-3">
        {q.prompt}
      </p>

      <div className="space-y-2" role="radiogroup" aria-label={`Question ${index + 1}: ${q.prompt}`}>
        {q.options.map((opt) => {
          const isSelected = selected === opt;
          const isRight = opt === q.correctAnswer;

          let style =
            "border border-[#E8DDD4] bg-white text-[#000000] hover:border-[#2294BD]/50 hover:bg-[#2294BD]/5";
          let icon: string | null = null;

          if (submitted) {
            if (isRight) {
              style = "border-2 border-[#2294BD] bg-[#2294BD]/10 text-[#000000]";
              icon = "\u2713";
            } else if (isSelected && !isRight) {
              style =
                "border-2 border-[#D9532B] bg-[#D9532B]/8 text-[#D9532B] line-through";
              icon = "\u2717";
            } else {
              style =
                "border border-[#E8DDD4] bg-[#F9F6F3] text-[#9A918A] cursor-default";
            }
          } else if (isSelected) {
            style = "border-2 border-[#2294BD] bg-[#2294BD]/8 text-[#000000]";
          }

          return (
            <button
              key={opt}
              disabled={submitted}
              onClick={() => onSelect(opt)}
              role="radio"
              aria-checked={isSelected}
              aria-label={`${opt}${submitted && isRight ? " (correct answer)" : ""}${submitted && isSelected && !isRight ? " (your incorrect answer)" : ""}`}
              className={`w-full text-left rounded-xl px-4 py-3 text-sm transition-colors flex items-start gap-2 ${style}`}
            >
              {icon && (
                <span
                  aria-hidden="true"
                  className={`flex-shrink-0 font-bold text-sm leading-snug ${
                    isRight ? "text-[#2294BD]" : "text-[#D9532B]"
                  }`}
                >
                  {icon}
                </span>
              )}
              <span className="leading-snug">{opt}</span>
            </button>
          );
        })}
      </div>

      {submitted && (
        <div
          role="status"
          className={`mt-3 rounded-xl px-4 py-2.5 text-sm font-medium flex items-center gap-2 ${
            isCorrect
              ? "bg-[#2294BD]/10 text-[#2294BD] border border-[#2294BD]/20"
              : "bg-[#D9532B]/8 text-[#D9532B] border border-[#D9532B]/20"
          }`}
        >
          <span aria-hidden="true">{isCorrect ? "\u2713" : "\u2717"}</span>
          <span>{isCorrect ? "Correct" : "Incorrect"}</span>
          {!isCorrect && (
            <span className="text-[#404040] font-normal">
              — correct answer highlighted above
            </span>
          )}
        </div>
      )}
    </div>
  );
}
