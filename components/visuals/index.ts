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
import CapitalStructureDesign from "./CapitalStructureDesign";
import SecondaryBuyouts from "./SecondaryBuyouts";
import RecommendationLanguage from "./RecommendationLanguage";
import DilutionMap from "./DilutionMap";
import SeedInstrumentMap from "./SeedInstrumentMap";
import SAFEInferenceMap from "./SAFEInferenceMap";
import CommonVsPreferred from "./CommonVsPreferred";
import TermSheetLayerTwo from "./TermSheetLayerTwo";
import EconVsControlRights from "./EconVsControlRights";
import VentureMarkFramework from "./VentureMarkFramework";
import VentureUnderwritingSequence from "./VentureUnderwritingSequence";
import BizModelFailureMap from "./BizModelFailureMap";
import VentureLiquidityMap from "./VentureLiquidityMap";
import ExitQualityVsHeadline from "./ExitQualityVsHeadline";
import GrowthEquityClassification from "./GrowthEquityClassification";
import LateStageEcosystem from "./LateStageEcosystem";
import VentureManagerScorecard from "./VentureManagerScorecard";
import PrivateCreditMap from "./PrivateCreditMap";
import CreditStressLadder from "./CreditStressLadder";
import DirectLendingUnderwriting from "./DirectLendingUnderwriting";
import DistressedPathway from "./DistressedPathway";
import ABFvsCashFlow from "./ABFvsCashFlow";
import CreditVehiclesDiff from "./CreditVehiclesDiff";
import RealEstateMap from "./RealEstateMap";
import PropertyUnderwritingStack from "./PropertyUnderwritingStack";
import LossWaterfallStack from "./LossWaterfallStack";
import CIORoleMap from "./CIORoleMap";
import NBPEDiscount from "./NBPEDiscount";
import DenominatorEffect from "./DenominatorEffect";
import CalPERSFeeTransparency from "./CalPERSFeeTransparency";
import ILPASubscriptionLines from "./ILPASubscriptionLines";
import CalPERSIRRvsMOIC from "./CalPERSIRRvsMOIC";
import NewMexicoPERA from "./NewMexicoPERA";
import VermontPensionVintage from "./VermontPensionVintage";
import HiltonBlackstone from "./HiltonBlackstone";
import SubStrategyComparison from "./SubStrategyComparison";
import KraftHeinzValueCreation from "./KraftHeinzValueCreation";
import HiltonExitSequence from "./HiltonExitSequence";
import ILPAWaterfallComparison from "./ILPAWaterfallComparison";
import PASERSBenchmarkDivergence from "./PASERSBenchmarkDivergence";
import KleinerPerkinsTeamSplit from "./KleinerPerkinsTeamSplit";
import PASERSPacingDecision from "./PASERSPacingDecision";
import YaleSecondaryStrategy from "./YaleSecondaryStrategy";
import QualtricsCoinvestAnatomy from "./QualtricsCoinvestAnatomy";
import NAVSignalNotVerdict from "./NAVSignalNotVerdict";
import SmoothMarksGovernance from "./SmoothMarksGovernance";
import VistaESGEvidence from "./VistaESGEvidence";
import RecommendationQuality from "./RecommendationQuality";

export { FundLifecycleTimeline, JCurveVisual, MultiplesRelationship, FeeWaterfall, JCurveDepthFactors, SubscriptionLineIRR, JCurveDPIOverlay, IRRvsMOIC, GPUnderwritingFramework, CommitmentPacingTimeline, OvercommitmentRiskMap, VintageDiversification, ComparisonFramework, StrategyDrift, ValueCreationDecomposition, IRRManipulation, RedFlagsValueCreation, FundDocumentStack, VentureStageMap, AlignmentDimensions, VentureVsBuyout, IRRMOICTradeoff, JCurveTroughFactors, FundFinanceTaxonomy, NarrativeVsDecisionReporting, ValuationGovernance, TopQuartileQuestions, StrongVsWeakEvidence, ConflictTaxonomy, MeetingVocabulary, BenchmarkingToolkit, MultiSleeveCashFlow, CreditRiskDashboard, DocumentationRiskMap, CoInvestRisk, ESGEvidenceLadder, CapTableLens, CompanyToFundRelevance, VentureMarkHierarchy, VenturePortfolioMgmt, ReserveDecisionTree, VentureEdgeChain, ManagementFees, FeeOffsets, JCurveStrategyVariation, IRRSubStrategies, MultiplesLifecycle, DenominatorProblem, LifecyclePhaseMetrics, VintageYearEffects, VintageYearComparison, SecondaryPricing, PEMarksSmoother, NAVCredibilityTests, PESuitability, LargerPEAllocation, RecommendationStack, CapitalStructureDesign, SecondaryBuyouts, RecommendationLanguage, DilutionMap, SeedInstrumentMap, SAFEInferenceMap, CommonVsPreferred, TermSheetLayerTwo, EconVsControlRights, VentureMarkFramework, VentureUnderwritingSequence, BizModelFailureMap, VentureLiquidityMap, ExitQualityVsHeadline, GrowthEquityClassification, LateStageEcosystem, VentureManagerScorecard, PrivateCreditMap, CreditStressLadder, DirectLendingUnderwriting, DistressedPathway, ABFvsCashFlow, CreditVehiclesDiff, RealEstateMap, PropertyUnderwritingStack, LossWaterfallStack, CIORoleMap, NBPEDiscount, DenominatorEffect, CalPERSFeeTransparency, ILPASubscriptionLines, CalPERSIRRvsMOIC, NewMexicoPERA, VermontPensionVintage, HiltonBlackstone, HiltonExitSequence, SubStrategyComparison, KraftHeinzValueCreation, ILPAWaterfallComparison, PASERSBenchmarkDivergence, KleinerPerkinsTeamSplit, PASERSPacingDecision, YaleSecondaryStrategy, QualtricsCoinvestAnatomy, NAVSignalNotVerdict, SmoothMarksGovernance, VistaESGEvidence, RecommendationQuality };

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
  "capital-structure-design": CapitalStructureDesign,
  "secondary-buyouts": SecondaryBuyouts,
  "recommendation-language": RecommendationLanguage,
  "dilution-map": DilutionMap,
  "seed-instrument-map": SeedInstrumentMap,
  "safe-inference-map": SAFEInferenceMap,
  "common-vs-preferred": CommonVsPreferred,
  "term-sheet-layer-two": TermSheetLayerTwo,
  "econ-vs-control-rights": EconVsControlRights,
  "venture-mark-framework": VentureMarkFramework,
  "venture-underwriting-sequence": VentureUnderwritingSequence,
  "biz-model-failure-map": BizModelFailureMap,
  "venture-liquidity-map": VentureLiquidityMap,
  "exit-quality-vs-headline": ExitQualityVsHeadline,
  "growth-equity-classification": GrowthEquityClassification,
  "late-stage-ecosystem": LateStageEcosystem,
  "venture-manager-scorecard": VentureManagerScorecard,
  "private-credit-map": PrivateCreditMap,
  "credit-stress-ladder": CreditStressLadder,
  "direct-lending-underwriting": DirectLendingUnderwriting,
  "distressed-pathway": DistressedPathway,
  "abf-vs-cashflow": ABFvsCashFlow,
  "credit-vehicles-diff": CreditVehiclesDiff,
  "real-estate-map": RealEstateMap,
  "property-underwriting-stack": PropertyUnderwritingStack,
  "loss-waterfall-stack": LossWaterfallStack,
  "cio-role-map": CIORoleMap,
  "nbpe-discount": NBPEDiscount,
  "denominator-effect-case": DenominatorEffect,
  "calpers-fee-transparency": CalPERSFeeTransparency,
  "ilpa-subscription-lines": ILPASubscriptionLines,
  "calpers-irr-vs-moic": CalPERSIRRvsMOIC,
  "new-mexico-pera": NewMexicoPERA,
  "vermont-pension-vintage": VermontPensionVintage,
  "hilton-blackstone": HiltonBlackstone,
  "hilton-exit-sequence": HiltonExitSequence,
  "sub-strategy-comparison": SubStrategyComparison,
  "kraft-heinz-value-creation": KraftHeinzValueCreation,
  "ilpa-waterfall-comparison": ILPAWaterfallComparison,
  "pa-sers-benchmark-divergence": PASERSBenchmarkDivergence,
  "kleiner-perkins-team-split": KleinerPerkinsTeamSplit,
  "pa-sers-pacing-decision": PASERSPacingDecision,
  "yale-secondary-strategy": YaleSecondaryStrategy,
  "qualtrics-coinvest-anatomy": QualtricsCoinvestAnatomy,
  "nav-signal-not-verdict": NAVSignalNotVerdict,
  "smooth-marks-governance": SmoothMarksGovernance,
  "vista-esg-evidence": VistaESGEvidence,
  "recommendation-quality": RecommendationQuality,
};
