"use client";

import { useState, useEffect } from "react";

interface AiHelperProps {
  /** Short user-facing prompt sent to the API */
  prompt: string;
  /** Button label */
  label?: string;
}

export function AiHelper({ prompt, label = "Explain this more simply" }: AiHelperProps) {
  const [available, setAvailable] = useState(false);
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/ai-help")
      .then((r) => r.json())
      .then((d) => setAvailable(d.available === true))
      .catch(() => setAvailable(false));
  }, []);

  if (!available) return null;

  async function handleClick() {
    setState("loading");
    setError("");
    setText("");
    try {
      const res = await fetch("/api/ai-help", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      if (!res.ok || data.error) {
        setError(data.error ?? "Something went wrong. Try again.");
        setState("error");
      } else {
        setText(data.text);
        setState("done");
      }
    } catch {
      setError("Could not reach the AI helper. Check your connection.");
      setState("error");
    }
  }

  return (
    <div className="mt-3">
      {state === "idle" && (
        <button
          onClick={handleClick}
          className="text-xs font-medium text-[#404040] border border-[#E8DDD4] bg-white hover:border-[#2294BD]/50 hover:text-[#2294BD] px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5"
        >
          <span>✦</span>
          {label}
        </button>
      )}

      {state === "loading" && (
        <div className="flex items-center gap-2 text-xs text-[#404040] px-1">
          <span className="animate-pulse">✦</span>
          <span>Thinking…</span>
        </div>
      )}

      {state === "error" && (
        <div className="rounded-xl border border-[#D9532B]/20 bg-[#D9532B]/5 px-4 py-3 flex items-start gap-2">
          <span className="text-[#D9532B] text-xs mt-0.5">✗</span>
          <div>
            <p className="text-xs text-[#D9532B] font-medium">{error}</p>
            <button
              onClick={() => setState("idle")}
              className="text-xs text-[#404040] underline mt-1"
            >
              Try again
            </button>
          </div>
        </div>
      )}

      {state === "done" && (
        <div className="rounded-xl border border-[#E8DDD4] bg-[#FBF7F3] px-4 py-3">
          <div className="flex items-center gap-1.5 mb-2">
            <span className="text-[#2294BD] text-xs">✦</span>
            <p className="text-xs font-semibold text-[#2294BD] uppercase tracking-wide">
              AI explanation
            </p>
            <button
              onClick={() => setState("idle")}
              className="ml-auto text-[10px] text-[#404040] hover:text-[#D9532B] underline"
            >
              Dismiss
            </button>
          </div>
          <p className="text-sm text-[#000000] leading-relaxed whitespace-pre-wrap">
            {text}
          </p>
          <p className="text-[10px] text-[#9A918A] mt-2">
            AI-generated — verify key figures independently.
          </p>
        </div>
      )}
    </div>
  );
}
