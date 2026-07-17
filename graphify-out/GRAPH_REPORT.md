# Graph Report - AutoDealer  (2026-07-17)

## Corpus Check
- 20 files · ~107,713 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1233 nodes · 4670 edges · 58 communities (54 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 67 edges (avg confidence: 0.57)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `05d67657`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Gameplay Actions and Transactions
- Core Application State
- Sales Financing Decisions
- Business Intelligence Analytics
- Profiles Themes and Persistence
- Dashboard Cards and Messages
- Dealer Exchange Engine
- Vehicle and Employee Data
- Claims and Contract Archiving
- Dealer Exchange Interface
- Electron Main Process
- Project Architecture Rules
- Vehicle Purchase Transactions
- Performance Management Runtime
- Economy Reviews and Employees
- Inventory Dashboard Metrics
- Premium UI Navigation
- Programs and Safe Exit
- Market Cards and Achievements
- Application Navigation System
- Customer Conversation AI
- Customer Persona Generation
- ECU Tuning Analysis
- Purchase Negotiation AI
- Application Lifecycle Updates
- Upgrades and Changelog
- Lead Financing and Listings
- Background Design Management
- Dealer Exchange Architecture
- Game Calendar System
- Delivery and Vehicle Segments
- Application Package Metadata
- Cross Platform Build
- Ruflo MCP Configuration
- Updates and News UI
- Windows Installer Configuration
- Market and Workshop Balancing
- ECU Diagnostics Interface
- Packaged Application Files
- Programme Menu Performance
- Development Build Scripts
- Game Data Reset
- Electron Development Dependencies
- Customer Retention Management
- Windows Signing Configuration
- Achievement State Data
- ECU Definition Data
- Vehicle Sale Conditions
- Purchase Requests and Reviews
- Development Packaging Hook
- Electron Preload Bridge
- Dealer Exchange Persistence
- startAllCustomerWishRepairs
- normalizeEmployee

## God Nodes (most connected - your core abstractions)
1. `t()` - 206 edges
2. `escapeHtml()` - 160 edges
3. `money()` - 153 edges
4. `scheduleSave()` - 123 edges
5. `clamp()` - 112 edges
6. `notify()` - 102 edges
7. `renderAllOpen()` - 86 edges
8. `findCar()` - 84 edges
9. `nextDay()` - 70 edges
10. `renderPageContent()` - 68 edges

## Surprising Connections (you probably didn't know these)
- `Ruflo Orchestration and Autonomous Agent Selection` --semantically_similar_to--> `Hierarchical-Mesh Swarm Routing`  [INFERRED] [semantically similar]
  AGENTS.md → CLAUDE.md
- `Project Maintenance Workflow` --semantically_similar_to--> `Updates and News Policy`  [INFERRED] [semantically similar]
  PROJECT_STRUCTURE.md → AGENTS.md
- `Dealer Exchange Runtime Script Chain` --semantically_similar_to--> `Dealer Exchange LIVE System Map`  [INFERRED] [semantically similar]
  autodealer-simulator.html → PROJECT_STRUCTURE.md
- `generateCar()` --references--> `ENGINES`  [EXTRACTED]
  js/app.js → data/vehicles.js
- `roleMeta()` --references--> `EMP_ROLES`  [EXTRACTED]
  js/app.js → data/vehicles.js

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Dealer Exchange Transaction Integrity** — design_concepts_dealer_exchange_architecture_vehicleownershipregistry, design_concepts_dealer_exchange_architecture_reservationservice, design_concepts_dealer_exchange_architecture_fundshold, design_concepts_dealer_exchange_architecture_tradesettlementservice [EXTRACTED 1.00]
- **Dealer Exchange Architecture and Gameplay Alignment** — design_concepts_dealer_exchange_architecture_deterministic_decisions, design_concepts_dealer_exchange_architecture_player_market_parity, design_concepts_dealer_exchange_gameplay_design_economic_competition, design_concepts_dealer_exchange_gameplay_design_fair_risk [INFERRED 0.85]
- **Programme Menu Performance Remediation** — performance_analysis_performance_analysis_report_program_menu_bottlenecks, performance_analysis_performance_analysis_report_hero_image_optimization, performance_analysis_performance_analysis_report_forced_layout_optimization [EXTRACTED 1.00]

## Communities (58 total, 4 thin omitted)

### Community 0 - "Gameplay Actions and Transactions"
Cohesion: 0.11
Nodes (48): acceptDealerExchangeOrder(), acceptEarlyReturn(), acceptEcuRequest(), addTx(), cancelReservation(), closeLeaseWithReturn(), completeLeaseContract(), confirmBulkListing() (+40 more)

### Community 1 - "Core Application State"
Cohesion: 0.03
Nodes (64): activeBranch(), activeBranchId(), activePurchaseRequests(), appBackgroundLoadState, appRuntimeInfo, BUILTIN_APP_BACKGROUNDS, buyBranch(), CALENDAR_MONTHS (+56 more)

### Community 2 - "Sales Financing Decisions"
Cohesion: 0.11
Nodes (38): applyOptimalSaleFinancing(), applyRequiredDownForTarget(), applySaleFinancingOption(), bankApproveWithConditions(), bankPresentRevisedFinancing(), bestFinancingOptions(), calculateFinanceOffer(), confirmSaleFinancing() (+30 more)

### Community 3 - "Business Intelligence Analytics"
Cohesion: 0.05
Nodes (75): CHANGELOG, UPGRADE_DEFS, activeContractCount(), allVehicleRows(), animateCelebrationNumber(), avg(), avgReviewStars(), barSvg() (+67 more)

### Community 4 - "Profiles Themes and Persistence"
Cohesion: 0.10
Nodes (45): APP_BACKGROUNDS, clearBranchFields(), confirmLegacyStart(), cp1252ByteForChar(), createProfileFromLogin(), defaultAppBackground(), defaultState(), deleteProfileFromLogin() (+37 more)

### Community 5 - "Dashboard Cards and Messages"
Cohesion: 0.12
Nodes (33): activeOffers(), chatMessageHash(), chatVehicleHints(), chatVehicleStatus(), contractListItem(), dashMessagesPanel(), dashOrdersPanel(), formatStoredDayText() (+25 more)

### Community 6 - "Dealer Exchange Engine"
Cohesion: 0.13
Nodes (48): DEALER_EXCHANGE_AUCTION_SESSION, DEALER_EXCHANGE_SEED_INVENTORY, dealerExchangeAcceptBusinessOrder(), dealerExchangeAddEvent(), dealerExchangeAnnounceReserve(), dealerExchangeAssignPlayerOrderVehicle(), dealerExchangeAuctionBehavior(), dealerExchangeAuctionInventoryCar() (+40 more)

### Community 7 - "Vehicle and Employee Data"
Cohesion: 0.08
Nodes (42): BRANDS, COLORS, createVehicleFile(), createVehicleWearProfile(), CUSTOMER_AI_TYPES, EMP_PERSONALITIES, EMP_ROLES, EMP_STRENGTHS (+34 more)

### Community 8 - "Claims and Contract Archiving"
Cohesion: 0.09
Nodes (52): activeClaimActionCount(), activeClaims(), activeListingIds(), activeReviews(), activeWorkshopJobs(), addClaimFeeForLevel(), archiveContractPrompt(), canArchiveContract() (+44 more)

### Community 9 - "Dealer Exchange Interface"
Cohesion: 0.15
Nodes (42): dealerExchangeAuctionStatus(), dealerExchangeAuctionTime(), dealerExchangeAuctionVehicle(), dealerExchangeDealer(), dealerExchangeDealerCard(), dealerExchangeEventAge(), dealerExchangeFeed(), dealerExchangeFlushPlayerNotifications() (+34 more)

### Community 10 - "Electron Main Process"
Cohesion: 0.10
Nodes (23): { app, BrowserWindow, protocol, net, shell, nativeTheme, ipcMain, screen }, backgroundImageExtensions, copyIfTargetMissing(), createWindow(), directoryHasEntries(), fs, gotLock, legacyUserDataDir (+15 more)

### Community 11 - "Project Architecture Rules"
Cohesion: 0.07
Nodes (33): Automotive Empire Project Rules, Graphify Codebase Workflow, Project Structure Maintenance Policy, Ruflo Orchestration and Autonomous Agent Selection, Updates and News Policy, Application Runtime Script Chain, Automotive Empire HTML Shell, Dealer Exchange Runtime Script Chain (+25 more)

### Community 12 - "Vehicle Purchase Transactions"
Cohesion: 0.10
Nodes (33): completeBuyById(), financingAcceptanceReply(), financingPriorityLabel(), financingRequirementStatusIcon(), findMarketCar(), money(), openBuy(), openDealerExchangeListModal() (+25 more)

### Community 14 - "Economy Reviews and Employees"
Cohesion: 0.13
Nodes (30): clamp(), createReviewFromSale(), dealershipAudienceLevel(), ecuTipShow(), employeeBonus(), finalizeDelivery(), financingApproval(), financingNetworkBonus() (+22 more)

### Community 15 - "Inventory Dashboard Metrics"
Cohesion: 0.31
Nodes (10): activeInventory(), bulkListingEligibleCars(), bulkListingPreview(), listingPriceStats(), openBulkListingModal(), openListModal(), paymentMethodSelectorHtml(), renderBulkListingPreview() (+2 more)

### Community 16 - "Premium UI Navigation"
Cohesion: 0.07
Nodes (29): approveEcuCustomerDecision(), APPS, captureActiveChatDraft(), captureActiveChatScroll(), captureActiveDrafts(), captureActivePurchaseDraft(), cycleDashRevenueRange(), enhancePremiumUi() (+21 more)

### Community 17 - "Programs and Safe Exit"
Cohesion: 0.15
Nodes (22): appBadgeValue(), appMeta(), closeProgramsWindow(), ensureNavTooltipLayer(), filterProgramsGrid(), installProgramHeroLazyLoading(), navAccent(), navEditIcon() (+14 more)

### Community 18 - "Market Cards and Achievements"
Cohesion: 0.09
Nodes (56): achievementColor(), achievementRarityLabel(), achievementText(), activeDeliveries(), activeMarket(), activeMarketSearchOrder(), bankDecisionLabel(), calcInput() (+48 more)

### Community 19 - "Application Navigation System"
Cohesion: 0.20
Nodes (14): appDisplayName(), closeNavCustomize(), DEFAULT_BOTTOM_ITEMS, DEFAULT_DOCK_ITEMS, getActiveNavItems(), getBottomItems(), getDockItems(), navAddItem() (+6 more)

### Community 20 - "Customer Conversation AI"
Cohesion: 0.08
Nodes (41): adjustChatTrust(), buildCustomerReply(), buildPipelineCustomerReply(), calendarDayOfYear(), calendarDaysInMonth(), calendarFromGameDay(), calendarKey(), calendarOffsetFromGameDay() (+33 more)

### Community 21 - "Customer Persona Generation"
Cohesion: 0.19
Nodes (22): PERSONAS, buildCustomerProfile(), choice(), createCustomer(), createLeaseContract(), createMatchedCustomerLead(), customerAiTypeFor(), customerAiValue() (+14 more)

### Community 22 - "ECU Tuning Analysis"
Cohesion: 0.14
Nodes (27): activeEcuRequests(), ecuCompatibility(), ecuCustomerChoiceFromReport(), ecuDefField(), ecuDynoFor(), ecuHistoryForVehicle(), ecuOptionReport(), ecuRequestMessage() (+19 more)

### Community 23 - "Purchase Negotiation AI"
Cohesion: 0.15
Nodes (17): analyzeCustomerIntent(), analyzePurchaseIntent(), buildPurchaseSellerReply(), defaultPurchaseChatMemory(), derivePurchaseConversationState(), detectCustomerQuestion(), detectSellerQuestion(), ensurePurchaseChat() (+9 more)

### Community 24 - "Application Lifecycle Updates"
Cohesion: 0.25
Nodes (8): applyAppRuntimeInfo(), cancelExitConfirmation(), init(), initAppLifecycleBridge(), installDragSelectionGuard(), installProgramLauncherShortcuts(), loadAppRuntimeInfo(), showExitConfirmation()

### Community 25 - "Upgrades and Changelog"
Cohesion: 0.15
Nodes (35): acceptFinancingConditions(), addMsg(), assignCarToDealerExchangeOrder(), bankApproveApplication(), bankRejectApplication(), calcLeasing(), cancelDealAfterRejection(), chooseSaleMethod() (+27 more)

### Community 26 - "Lead Financing and Listings"
Cohesion: 0.12
Nodes (17): bulkListingPriceForCar(), cashLeadFit(), chooseMatchedLeadMethod(), completeBulkListingAfterRepair(), createListingForCar(), financeLeadFit(), leadOfferProbe(), leasingLeadFit() (+9 more)

### Community 27 - "Background Design Management"
Cohesion: 0.10
Nodes (22): applyAppBackground(), applyDesignSettings(), backgroundIdFromName(), backgroundNameFromId(), backgroundNameFromPath(), backgroundUrlFromPath(), clearMarketSearchHighlight(), dealerExchangeSetUi() (+14 more)

### Community 28 - "Dealer Exchange Architecture"
Cohesion: 0.17
Nodes (13): Atomic Trade and Reservation Flow, DealerDecisionEngine, DealerExchangeEngine, DealerIntent, Dealer Exchange Tick Flow, FundsHold, Dealer Exchange Domain Invariants, MatchingEngine (+5 more)

### Community 29 - "Game Calendar System"
Cohesion: 0.17
Nodes (23): acceptPurchaseCounterOffer(), addXp(), archiveContract(), archivePurchaseRequest(), checkAchievements(), closeModal(), completeBuy(), completePickupDelivery() (+15 more)

### Community 30 - "Delivery and Vehicle Segments"
Cohesion: 0.23
Nodes (12): SUV_MODELS, chooseDeliveryType(), createDeliveryOrder(), deliveryCostBase(), deliveryCustomerAge(), deliveryDistanceFor(), ecuPriceFor(), initLoginBackground() (+4 more)

### Community 31 - "Application Package Metadata"
Cohesion: 0.22
Nodes (8): author, description, license, main, name, private, productName, version

### Community 32 - "Cross Platform Build"
Cohesion: 0.18
Nodes (11): build, appId, directories, linux, mac, portable, productName, output (+3 more)

### Community 33 - "Ruflo MCP Configuration"
Cohesion: 0.25
Nodes (10): CLAUDE_FLOW_HOOKS_ENABLED, CLAUDE_FLOW_MAX_AGENTS, CLAUDE_FLOW_MEMORY_BACKEND, CLAUDE_FLOW_MODE, CLAUDE_FLOW_TOPOLOGY, npm_config_update_notifier, cmd, claude-flow (+2 more)

### Community 34 - "Updates and News UI"
Cohesion: 0.24
Nodes (11): fmtUpdateDate(), getLastSeenVersion(), localizedChangelogField(), maybeShowVersionWelcome(), renderChangelogSections(), renderUpdateCard(), renderUpdateColumns(), setLastSeenVersion() (+3 more)

### Community 35 - "Windows Installer Configuration"
Cohesion: 0.18
Nodes (11): nsis, allowToChangeInstallationDirectory, artifactName, createDesktopShortcut, createStartMenuShortcut, installerHeaderIcon, installerIcon, oneClick (+3 more)

### Community 36 - "Market and Workshop Balancing"
Cohesion: 0.29
Nodes (11): MARKET_PRICE_BANDS, carTierOf(), clampWorkshopDays(), customerWishBatchSummary(), generateCar(), generateMarketCarForBand(), generateMarketCarForSegment(), marketPriceBand() (+3 more)

### Community 37 - "ECU Diagnostics Interface"
Cohesion: 0.14
Nodes (22): activeSearchOrders(), addMissedRateToClaim(), applySearchOrderToMarket(), checkSearchOrderMatches(), createOpenClaim(), globalDayProgressPercent(), initialCustomerMessage(), itemBranchId() (+14 more)

### Community 38 - "Packaged Application Files"
Cohesion: 0.22
Nodes (9): files, assets/**/*, autodealer-simulator.html, css/**/*, data/**/*, js/**/*, locales/**/*, main.js (+1 more)

### Community 39 - "Programme Menu Performance"
Cohesion: 0.29
Nodes (8): Alternating Animation Names Without Geometry Read, Three-Way Decode Queue, Forced Layout Optimization, Hero Image Optimization, JPEG Chosen for Lower Chromium Decode Time, Performance Measurement Integrity, Programme Menu Runtime Bottlenecks, Programme Menu Performance Analysis

### Community 40 - "Development Build Scripts"
Cohesion: 0.33
Nodes (6): scripts, build, build:dev, reset:game-data, start, start:dev

### Community 41 - "Game Data Reset"
Cohesion: 0.33
Nodes (4): fs, path, savesDir, storageDirs

### Community 42 - "Electron Development Dependencies"
Cohesion: 0.40
Nodes (5): electron, electron-builder, devDependencies, electron, electron-builder

### Community 43 - "Customer Retention Management"
Cohesion: 0.50
Nodes (5): cleanupTransientCustomers(), customerStatus(), hasActiveCustomerLead(), isRetainedCustomer(), renderCustomers()

### Community 44 - "Windows Signing Configuration"
Cohesion: 0.40
Nodes (5): win, publisherName, icon, signtoolOptions, target

### Community 46 - "ECU Definition Data"
Cohesion: 0.50
Nodes (3): ECU_CUSTOMER_INTENTS, ECU_ENGINE_PREFIXES, ECU_TUNE_DEFS

### Community 47 - "Vehicle Sale Conditions"
Cohesion: 0.13
Nodes (18): applyTheme(), bodyShapeLabel(), carRendererProfile(), dealerExchangeDeliverAuctionWins(), dealerExchangePlayerCarFromListing(), ecuEngineCode(), ensureVehiclePhoto(), mixHexColor() (+10 more)

### Community 48 - "Purchase Requests and Reviews"
Cohesion: 0.20
Nodes (16): analyzeBankableFinancing(), annuity(), bankRequiredDownForMonthlyLimit(), calcFinancing(), calculateFinancingRate(), createFinancingContract(), ensureFinancingPriorities(), estimateMonthlyIncome() (+8 more)

### Community 49 - "Development Packaging Hook"
Cohesion: 0.27
Nodes (11): conditionWheelDisplayedResult(), conditionWheelResultText(), conditionWheelTargetRotation(), createConditionWheelDecision(), customerConditionAcceptChance(), debugConditionWheel(), finishConditionWheelSpin(), isConditionWheelModalOpen() (+3 more)

### Community 56 - "startAllCustomerWishRepairs"
Cohesion: 0.31
Nodes (9): conditionById(), fulfillSaleCondition(), fulfillSaleConditionsForRepairedIssues(), offerRepairCostShare(), saleConditionDiscountChance(), startAllCustomerWishRepairs(), startRepair(), submitSaleConditionDiscount() (+1 more)

### Community 57 - "normalizeEmployee"
Cohesion: 0.38
Nodes (7): candidateSalary(), employeeEffectValue(), ensureCandidates(), generateCandidate(), hireEmployee(), normalizeEmployee(), roleMeta()

## Knowledge Gaps
- **129 isolated node(s):** `CLAUDE_FLOW_MODE`, `CLAUDE_FLOW_HOOKS_ENABLED`, `CLAUDE_FLOW_TOPOLOGY`, `CLAUDE_FLOW_MAX_AGENTS`, `CLAUDE_FLOW_MEMORY_BACKEND` (+124 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `Market Cards and Achievements` to `Gameplay Actions and Transactions`, `Core Application State`, `Sales Financing Decisions`, `Business Intelligence Analytics`, `Profiles Themes and Persistence`, `Dashboard Cards and Messages`, `Vehicle and Employee Data`, `Claims and Contract Archiving`, `Vehicle Purchase Transactions`, `Economy Reviews and Employees`, `Inventory Dashboard Metrics`, `Premium UI Navigation`, `Programs and Safe Exit`, `Application Navigation System`, `Customer Conversation AI`, `ECU Tuning Analysis`, `Upgrades and Changelog`, `Lead Financing and Listings`, `Game Calendar System`, `Updates and News UI`, `Market and Workshop Balancing`, `ECU Diagnostics Interface`, `Customer Retention Management`, `Development Packaging Hook`, `startAllCustomerWishRepairs`, `normalizeEmployee`?**
  _High betweenness centrality (0.032) - this node is a cross-community bridge._
- **Why does `vehicleIssueArea()` connect `Vehicle and Employee Data` to `Market Cards and Achievements`?**
  _High betweenness centrality (0.021) - this node is a cross-community bridge._
- **Why does `ACHIEVEMENTS` connect `Achievement State Data` to `Market Cards and Achievements`, `Game Calendar System`?**
  _High betweenness centrality (0.009) - this node is a cross-community bridge._
- **Are the 6 inferred relationships involving `t()` (e.g. with `vehicleIssueArea()` and `customerIssueImpact()`) actually correct?**
  _`t()` has 6 INFERRED edges - model-reasoned connections that need verification._
- **What connects `CLAUDE_FLOW_MODE`, `CLAUDE_FLOW_HOOKS_ENABLED`, `CLAUDE_FLOW_TOPOLOGY` to the rest of the system?**
  _129 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Gameplay Actions and Transactions` be split into smaller, more focused modules?**
  _Cohesion score 0.10904255319148937 - nodes in this community are weakly interconnected._
- **Should `Core Application State` be split into smaller, more focused modules?**
  _Cohesion score 0.03221029248426509 - nodes in this community are weakly interconnected._