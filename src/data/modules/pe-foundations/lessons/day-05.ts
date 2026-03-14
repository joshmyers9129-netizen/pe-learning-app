import type { Lesson } from "@/types/content";

const lesson: Lesson = {
  lessonId: "day-05",
  dayNumber: 5,
  title: "LP Due Diligence: What to Assess Before Committing",
  estimatedMinutes: 30,
  topics: ["due-diligence", "manager-selection", "lp-process", "gp-assessment"],
  difficulty: "foundational",
  prerequisites: ["day-01", "day-02"],
  status: "available",
  learningObjectives: [
    "List the five core dimensions of PE manager due diligence",
    "Understand what 'team stability' signals and why it matters",
    "Identify red flags in a manager pitch",
  ],
  blocks: [
    {
      type: "intro",
      title: "Why this matters",
      content:
        "Committing to a PE fund is a 10-year illiquid relationship. You cannot exit easily. Due diligence is the primary risk management tool an LP has. Allocators who skip rigorous process end up in bad funds with no liquidity exit.",
    },
    {
      type: "teaching",
      title: "The five dimensions",
      content:
        "Strong LP due diligence covers: (1) People — who makes decisions, how long have they worked together, what happens if the key PM leaves? (2) Process — how does the GP source, underwrite, monitor, and exit investments? (3) Portfolio — what does current and historical deal quality look like? (4) Performance — is the track record attributable, persistent, and net of fees? (5) Terms — are fees, carry, and governance structures LP-friendly?",
    },
    {
      type: "teaching",
      title: "Track record attribution",
      content:
        "A GP's track record is only meaningful if the same team that generated it will manage your capital. When a GP team migrates from a prior firm, examine carefully which deals each person actually led. Marketing materials often attribute team-wide returns to individuals who had minor roles. Ask for deal-by-deal attribution showing who sourced, underwrote, and managed each investment.",
    },
    {
      type: "teaching",
      title: "Reference checks and sourcing",
      content:
        "Reference checks go beyond the names provided by the GP. Strong allocators call operating executives at portfolio companies, former GPs who competed for the same deals, and former employees who left the firm. The goal is to triangulate the GP's self-reported strengths against third-party experience.",
    },
    {
      type: "example",
      title: "A due diligence red flag in practice",
      content:
        "A mid-market buyout manager presents a 10-year track record showing 22% gross IRR. On closer inspection: three of the top five deals were done at a prior firm by a partner who left two years ago. The current team's own deals average 12% gross IRR. The fund being marketed is also 25% larger than any prior fund — a meaningful scale risk. These three factors together would prompt most sophisticated LPs to pass or reduce commitment size.",
    },
    {
      type: "exercise",
      title: "Design your diligence checklist",
      content:
        "You are evaluating a first-time fund from a spin-out team of three former MDs from a large buyout firm. List five specific questions you would prioritize in initial diligence meetings.",
    },
  ],
  quiz: [
    {
      questionId: "d5q1",
      type: "multiple-choice",
      prompt: "Which of the following is a key risk when a team spins out from a larger firm?",
      options: [
        "The team will have too much capital to deploy",
        "Track record may not be attributable to the individuals raising the new fund",
        "The team lacks relationships with institutional LPs",
        "The new fund's management fee will always be higher",
      ],
      correctAnswer:
        "Track record may not be attributable to the individuals raising the new fund",
    },
    {
      questionId: "d5q2",
      type: "multiple-choice",
      prompt: "What does 'key man risk' refer to in a PE fund?",
      options: [
        "The risk that the GP charges excessive fees",
        "Overconcentration in a single portfolio company",
        "The fund's dependence on one or two individuals whose departure could impair performance",
        "LP concentration in a single institutional investor",
      ],
      correctAnswer:
        "The fund's dependence on one or two individuals whose departure could impair performance",
    },
    {
      questionId: "d5q3",
      type: "multiple-choice",
      prompt: "An allocator learns that a GP's three best historical deals were led by a partner who left the firm. What should this prompt?",
      options: [
        "Immediate rejection of the fund",
        "Careful re-attribution of the track record and reduced weight on historical returns",
        "A larger commitment to reward the remaining partners",
        "A request for a lower management fee to compensate for the departure",
      ],
      correctAnswer:
        "Careful re-attribution of the track record and reduced weight on historical returns",
    },
    {
      questionId: "d5q4",
      type: "short-response",
      prompt:
        "A GP is raising a fund twice the size of their previous one. What specific risks does this 'fund size step-up' create, and how would you investigate them?",
      guidance:
        "Think about deal sizing, sourcing, team bandwidth, and return potential at larger scale.",
    },
  ],
  sources: [
    "CFA Institute: Manager Selection — Private Markets",
    "ILPA Due Diligence Questionnaire (DDQ) Framework",
    "Pension Consulting Alliance: PE Due Diligence Best Practices",
  ],
};

export default lesson;
