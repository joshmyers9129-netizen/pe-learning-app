import type { Module } from "@/types/content";
import day01 from "./lessons/day-01";
import day02 from "./lessons/day-02";
import day03 from "./lessons/day-03";
import day04 from "./lessons/day-04";
import day05 from "./lessons/day-05";
import day06 from "./lessons/day-06";
import day07 from "./lessons/day-07";
import day08 from "./lessons/day-08";
import day09 from "./lessons/day-09";
import day10 from "./lessons/day-10";
import day11 from "./lessons/day-11";
import day12 from "./lessons/day-12";
import day13 from "./lessons/day-13";
import day14 from "./lessons/day-14";
import day15 from "./lessons/day-15";
import day16 from "./lessons/day-16";
import day17 from "./lessons/day-17";
import day18 from "./lessons/day-18";
import day19 from "./lessons/day-19";
import day20 from "./lessons/day-20";

const peFoundations: Module = {
  moduleId: "pe-foundations",
  title: "Private Equity Foundations",
  description:
    "A 20-lesson curriculum that builds practical PE fluency from the ground up — fund structure, performance metrics, deal mechanics, and allocator thinking.",
  totalLessons: 20,
  estimatedHours: 9,
  topics: [
    "pe-basics",
    "fund-structure",
    "performance-measurement",
    "deal-mechanics",
    "manager-selection",
    "portfolio-construction",
  ],
  lessons: [
    day01, day02, day03, day04, day05,
    day06, day07, day08, day09, day10,
    day11, day12, day13, day14, day15,
    day16, day17, day18, day19, day20,
  ],
};

export default peFoundations;
