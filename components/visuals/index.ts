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
import SubscriptionLineIRR from "./SubscriptionLineIRR";
import JCurveDPIOverlay from "./JCurveDPIOverlay";
import IRRvsMOIC from "./IRRvsMOIC";
import GPUnderwritingFramework from "./GPUnderwritingFramework";
import CommitmentPacingTimeline from "./CommitmentPacingTimeline";
import OvercommitmentRiskMap from "./OvercommitmentRiskMap";
import VintageDiversification from "./VintageDiversification";
import ComparisonFramework from "./ComparisonFramework";
import StrategyDrift from "./StrategyDrift";
import ValueCreationDecomposition from "./ValueCreationDecomposition";
import IRRManipulation from "./IRRManipulation";
import RedFlagsValueCreation from "./RedFlagsValueCreation";
import FundDocumentStack from "./FundDocumentStack";
import VentureStageMap from "./VentureStageMap";
import AlignmentDimensions from "./AlignmentDimensions";
import VentureVsBuyout from "./VentureVsBuyout";
import IRRMOICTradeoff from "./IRRMOICTradeoff";
import JCurveTroughFactors from "./JCurveTroughFactors";
import FundFinanceTaxonomy from "./FundFinanceTaxonomy";
import NarrativeVsDecisionReporting from "./NarrativeVsDecisionReporting";
import ValuationGovernance from "./ValuationGovernance";
import TopQuartileQuestions from "./TopQuartileQuestions";
import StrongVsWeakEvidence from "./StrongVsWeakEvidence";
import ConflictTaxonomy from "./ConflictTaxonomy";
import MeetingVocabulary from "./MeetingVocabulary";
import BenchmarkingToolkit from "./BenchmarkingToolkit";
import MultiSleeveCashFlow from "./MultiSleeveCashFlow";
import CreditRiskDashboard from "./CreditRiskDashboard";
import DocumentationRiskMap from "./DocumentationRiskMap";
import CoInvestRisk from "./CoInvestRisk";
import ESGEvidenceLadder from "./ESGEvidenceLadder";
import CapTableLens from "./CapTableLens";
import CompanyToFundRelevance from "./CompanyToFundRelevance";
import VentureMarkHierarchy from "./VentureMarkHierarchy";
import VenturePortfolioMgmt from "./VenturePortfolioMgmt";
import ReserveDecisionTree from "./ReserveDecisionTree";
import VentureEdgeChain from "./VentureEdgeChain";
import ManagementFees from "./ManagementFees";
import FeeOffsets from "./FeeOffsets";
import JCurveStrategyVariation from "./JCurveStrategyVariation";
import IRRSubStrategies from "./IRRSubStrategies";
import MultiplesLifecycle from "./MultiplesLifecycle";
import DenominatorProblem from "./DenominatorProblem";
import LifecyclePhaseMetrics from "./LifecyclePhaseMetrics";
import VintageYearEffects from "./VintageYearEffects";
import VintageYearComparison from "./VintageYearComparison";
import SecondaryPricing from "./SecondaryPricing";
import PEMarksSmoother from "./PEMarksSmoother";
import NAVCredibilityTests from "./NAVCredibilityTests";
import PESuitability from "./PESuitability";
import LargerPEAllocation from "./LargerPEAllocation";
import RecommendationStack from "./RecommendationStack";

export { FundLifecycleTimeline, JCurveVisual, MultiplesRelationship, FeeWaterfall, JCurveDepthFactors, SubscriptionLineIRR, JCurveDPIOverlay, IRRvsMOIC, GPUnderwritingFramework, CommitmentPacingTimeline, OvercommitmentRiskMap, VintageDiversification, ComparisonFramework, StrategyDrift, ValueCreationDecomposition, IRRManipulation, RedFlagsValueCreation, FundDocumentStack, VentureStageMap, AlignmentDimensions, VentureVsBuyout, IRRMOICTradeoff, JCurveTroughFactors, FundFinanceTaxonomy, NarrativeVsDecisionReporting, ValuationGovernance, TopQuartileQuestions, StrongVsWeakEvidence, ConflictTaxonomy, MeetingVocabulary, BenchmarkingToolkit, MultiSleeveCashFlow, CreditRiskDashboard, DocumentationRiskMap, CoInvestRisk, ESGEvidenceLadder, CapTableLens, CompanyToFundRelevance, VentureMarkHierarchy, VenturePortfolioMgmt, ReserveDecisionTree, VentureEdgeChain, ManagementFees, FeeOffsets, JCurveStrategyVariation, IRRSubStrategies, MultiplesLifecycle, DenominatorProblem, LifecyclePhaseMetrics, VintageYearEffects, VintageYearComparison, SecondaryPricing, PEMarksSmoother, NAVCredibilityTests, PESuitability, LargerPEAllocation, RecommendationStack };

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
  "comparison-framework": ComparisonFramework,
  "strategy-drift": StrategyDrift,
  "value-creation-decomposition": ValueCreationDecomposition,
  "irr-manipulation": IRRManipulation,
  "red-flags-value-creation": RedFlagsValueCreation,
  "fund-document-stack": FundDocumentStack,
  "venture-stage-map": VentureStageMap,
  "alignment-dimensions": AlignmentDimensions,
  "venture-vs-buyout": VentureVsBuyout,
  "irr-moic-tradeoff": IRRMOICTradeoff,
  "j-curve-trough-factors": JCurveTroughFactors,
  "fund-finance-taxonomy": FundFinanceTaxonomy,
  "narrative-vs-decision-reporting": NarrativeVsDecisionReporting,
  "valuation-governance": ValuationGovernance,
  "top-quartile-questions": TopQuartileQuestions,
  "strong-vs-weak-evidence": StrongVsWeakEvidence,
  "conflict-taxonomy": ConflictTaxonomy,
  "meeting-vocabulary": MeetingVocabulary,
  "benchmarking-toolkit": BenchmarkingToolkit,
  "multi-sleeve-cash-flow": MultiSleeveCashFlow,
  "credit-risk-dashboard": CreditRiskDashboard,
  "documentation-risk-map": DocumentationRiskMap,
  "co-invest-risk": CoInvestRisk,
  "esg-evidence-ladder": ESGEvidenceLadder,
  "cap-table-lens": CapTableLens,
  "company-to-fund-relevance": CompanyToFundRelevance,
  "venture-mark-hierarchy": VentureMarkHierarchy,
  "venture-portfolio-mgmt": VenturePortfolioMgmt,
  "reserve-decision-tree": ReserveDecisionTree,
  "venture-edge-chain": VentureEdgeChain,
  "management-fees": ManagementFees,
  "fee-offsets": FeeOffsets,
  "j-curve-strategy-variation": JCurveStrategyVariation,
  "irr-sub-strategies": IRRSubStrategies,
  "multiples-lifecycle": MultiplesLifecycle,
  "denominator-problem": DenominatorProblem,
  "lifecycle-phase-metrics": LifecyclePhaseMetrics,
  "vintage-year-effects": VintageYearEffects,
  "vintage-year-comparison": VintageYearComparison,
  "secondary-pricing": SecondaryPricing,
  "pe-marks-smoother": PEMarksSmoother,
  "nav-credibility-tests": NAVCredibilityTests,
  "pe-suitability": PESuitability,
  "larger-pe-allocation": LargerPEAllocation,
  "recommendation-stack": RecommendationStack,
};
