/**
 * Visual component registry.
 * Keys match `visualId` values in LessonBlock entries in lib/lessonContent.ts.
 * Usage in a lesson renderer:
 *   import { LESSON_VISUALS } from "@/components/visuals";
 *   const Visual = LESSON_VISUALS[block.visualId];
 *   if (Visual) return <Visual />;
 *
 * All visual components are lazy-loaded via next/dynamic to avoid pulling
 * every chart into the initial bundle.
 */
import type React from "react";
import dynamic from "next/dynamic";

const FundLifecycleTimeline = dynamic(() => import("./FundLifecycleTimeline"), { ssr: false });
const JCurveVisual = dynamic(() => import("./JCurveVisual"), { ssr: false });
const MultiplesRelationship = dynamic(() => import("./MultiplesRelationship"), { ssr: false });
const FeeWaterfall = dynamic(() => import("./FeeWaterfall"), { ssr: false });
const JCurveDepthFactors = dynamic(() => import("./JCurveDepthFactors"), { ssr: false });
const SubscriptionLineIRR = dynamic(() => import("./SubscriptionLineIRR"), { ssr: false });
const JCurveDPIOverlay = dynamic(() => import("./JCurveDPIOverlay"), { ssr: false });
const IRRvsMOIC = dynamic(() => import("./IRRvsMOIC"), { ssr: false });
const GPUnderwritingFramework = dynamic(() => import("./GPUnderwritingFramework"), { ssr: false });
const CommitmentPacingTimeline = dynamic(() => import("./CommitmentPacingTimeline"), { ssr: false });
const OvercommitmentRiskMap = dynamic(() => import("./OvercommitmentRiskMap"), { ssr: false });
const VintageDiversification = dynamic(() => import("./VintageDiversification"), { ssr: false });

export { FundLifecycleTimeline, JCurveVisual, MultiplesRelationship, FeeWaterfall, JCurveDepthFactors, SubscriptionLineIRR, JCurveDPIOverlay, IRRvsMOIC, GPUnderwritingFramework, CommitmentPacingTimeline, OvercommitmentRiskMap, VintageDiversification };

export const LESSON_VISUALS: Record<string, React.ComponentType> = {
  "fund-lifecycle-timeline": FundLifecycleTimeline,
  "j-curve": JCurveVisual,
  "multiples-relationship": MultiplesRelationship,
  "fee-waterfall": FeeWaterfall,
  "j-curve-depth-factors": JCurveDepthFactors,
  "irr-subscription-line": SubscriptionLineIRR,
  "j-curve-dpi-overlay": JCurveDPIOverlay,
  "irr-vs-moic": IRRvsMOIC,
  "gp-underwriting-framework": GPUnderwritingFramework,
  "commitment-pacing-timeline": CommitmentPacingTimeline,
  "overcommitment-risk-map": OvercommitmentRiskMap,
  "vintage-diversification": VintageDiversification,
};
