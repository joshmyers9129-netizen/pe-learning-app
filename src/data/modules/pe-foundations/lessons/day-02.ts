import type { Lesson } from "@/types/content";

const lesson: Lesson = {
  lessonId: "day-02",
  dayNumber: 2,
  title: "Fund Terms: Fees, Carry, and the Waterfall",
  estimatedMinutes: 30,
  topics: ["fund-terms", "management-fee", "carried-interest", "waterfall"],
  difficulty: "foundational",
  prerequisites: ["day-01"],
  status: "available",
  learningObjectives: [
    "Explain the management fee and why it is charged on committed — not invested — capital",
    "Define carried interest and understand the mechanics of a hurdle rate",
    "Describe the difference between a European and American waterfall",
  ],
  blocks: [
    {
      type: "intro",
      title: "Why this matters",
      content:
        "GP compensation structures drive behavior. Understanding fees and carry lets you assess alignment, evaluate net vs. gross return differences, and ask sharper questions in manager meetings.",
    },
    {
      type: "teaching",
      title: "Management fee",
      content:
        "The management fee compensates the GP for running the fund — salaries, diligence costs, overhead. It is typically 1.5–2% per year, charged on committed capital during the investment period and stepping down to invested capital thereafter. On a $1B fund, a 2% fee generates $20M per year in the early years regardless of performance. This is not trivial — it affects the LPs' net return meaningfully over a 10-year fund life.",
    },
    {
      type: "teaching",
      title: "Carried interest",
      content:
        "Carried interest (carry) is the GP's share of profits — typically 20%. But LPs don't just give up 20% of every dollar. First, LPs must receive their capital back. Second, in most structures, LPs receive a preferred return (hurdle rate, typically 8% annualized) before the GP participates. Once the hurdle is cleared, the GP often receives a catch-up provision to bring their share to 20% of total profits, then profits split 80/20 going forward.",
    },
    {
      type: "teaching",
      title: "European vs. American waterfall",
      content:
        "In a European (whole-fund) waterfall, LPs receive 100% of distributions until they've recovered all committed capital plus the preferred return across the entire fund. Only then does carry flow to the GP. In an American (deal-by-deal) waterfall, carry can be paid after each successful exit. The American structure is more GP-friendly but creates clawback risk — the GP may need to return carry if later deals underperform.",
    },
    {
      type: "example",
      title: "Running the numbers",
      content:
        "Fund size: $500M. GP invests all capital. Final fund value: $900M — a $400M profit. With an 8% hurdle over the fund life, suppose LPs are owed $650M (return of capital + preferred return). Remaining profit: $250M. GP catch-up brings them to 20% of total, then 80/20 split applies to the rest. The GP's carry might approximate $80M. The exact figure depends on the catch-up percentage and timing.",
    },
    {
      type: "exercise",
      title: "Spot the alignment issue",
      content:
        "A GP charges a 2% management fee on committed capital with no fee offset and uses a deal-by-deal waterfall. What alignment concerns does this create for an LP?",
    },
  ],
  quiz: [
    {
      questionId: "d2q1",
      type: "multiple-choice",
      prompt: "Why is the management fee typically charged on committed capital during the investment period?",
      options: [
        "Because the GP incurs costs sourcing deals even before capital is deployed",
        "To reward the GP for early distributions",
        "Because committed capital equals invested capital in the early years",
        "LPs prefer to pay fees on a larger base",
      ],
      correctAnswer:
        "Because the GP incurs costs sourcing deals even before capital is deployed",
    },
    {
      questionId: "d2q2",
      type: "multiple-choice",
      prompt: "In a European waterfall, when does the GP first receive carried interest?",
      options: [
        "After each successful deal exit",
        "Quarterly based on portfolio appreciation",
        "After LPs have received their capital back plus the preferred return on the whole fund",
        "When the fund reaches its target return",
      ],
      correctAnswer:
        "After LPs have received their capital back plus the preferred return on the whole fund",
    },
    {
      questionId: "d2q3",
      type: "multiple-choice",
      prompt: "What is a clawback provision?",
      options: [
        "A fee reduction if the fund underperforms",
        "An LP right to reclaim previously paid carry if total fund returns fall short",
        "A GP right to charge additional fees in later years",
        "A provision that delays capital calls",
      ],
      correctAnswer:
        "An LP right to reclaim previously paid carry if total fund returns fall short",
    },
    {
      questionId: "d2q4",
      type: "short-response",
      prompt:
        "A manager pitches you a fund with a 2% management fee and 20% carry but no hurdle rate. What is your primary concern from an LP alignment perspective?",
      guidance:
        "Think about what the hurdle rate protects and what happens without it.",
    },
  ],
  sources: [
    "ILPA Principles 3.0 — Fee and Expense Transparency",
    "CFA Institute: Private Equity Fund Structures",
    "Preqin: Global Private Equity Report — Terms and Conditions",
  ],
};

export default lesson;
