import { ReviewCard, Priority, ModuleProgress } from "./types";
import { allReviewCards } from "./reviewCards";

export interface QueueCard extends ReviewCard {
  priority: Priority;
}

/** Score recency: older completion = higher priority. In-progress = high. */
function computePriority(lessonId: string, progress: ModuleProgress): Priority | null {
  const p = progress[lessonId];
  if (!p || p.status === "not-started") return null; // not surfaced yet
  if (p.status === "in-progress") return "high";

  if (!p.completedAt) return "medium";
  const daysSince =
    (Date.now() - new Date(p.completedAt).getTime()) / 86_400_000;
  if (daysSince > 7) return "high";
  if (daysSince > 2) return "medium";
  return "low";
}

export function buildReviewQueue(progress: ModuleProgress): QueueCard[] {
  const cards: QueueCard[] = [];
  for (const card of allReviewCards) {
    const priority = computePriority(card.lessonId, progress);
    if (priority === null) continue;
    cards.push({ ...card, priority });
  }
  // Sort: high → medium → low, then by dayNumber
  const order: Priority[] = ["high", "medium", "low"];
  cards.sort(
    (a, b) =>
      order.indexOf(a.priority) - order.indexOf(b.priority) ||
      a.dayNumber - b.dayNumber
  );
  return cards;
}

export function groupByPriority(
  cards: QueueCard[]
): Record<Priority, QueueCard[]> {
  return {
    high: cards.filter((c) => c.priority === "high"),
    medium: cards.filter((c) => c.priority === "medium"),
    low: cards.filter((c) => c.priority === "low"),
  };
}

export function groupByTopic(cards: QueueCard[]): Record<string, QueueCard[]> {
  const map: Record<string, QueueCard[]> = {};
  for (const card of cards) {
    (map[card.topic] ??= []).push(card);
  }
  return map;
}
