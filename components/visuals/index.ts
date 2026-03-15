/**
 * Visual component registry.
 * Keys match `visualId` values in LessonBlock entries in lib/lessonContent.ts.
 * Usage in a lesson renderer:
 *   import { LESSON_VISUALS } from "@/components/visuals";
 *   const Visual = LESSON_VISUALS[block.visualId];
 *   if (Visual) return <Visual />;
 */
import type React from "react";
import FundLifecycleTimeline from "./FundLifecycleTimeline";
import JCurveVisual from "./JCurveVisual";
import MultiplesRelationship from "./MultiplesRelationship";
import FeeWaterfall from "./FeeWaterfall";
import JCurveDepthFactors from "./JCurveDepthFactors";

export { FundLifecycleTimeline, JCurveVisual, MultiplesRelationship, FeeWaterfall, JCurveDepthFactors };

export const LESSON_VISUALS: Record<string, React.ComponentType> = {
  "fund-lifecycle-timeline": FundLifecycleTimeline,
  "j-curve": JCurveVisual,
  "multiples-relationship": MultiplesRelationship,
  "fee-waterfall": FeeWaterfall,
  "j-curve-depth-factors": JCurveDepthFactors,
};
