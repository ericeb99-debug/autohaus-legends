# Graph Report - C:\Users\ericp\Desktop\AutoDealer  (2026-07-17)

## Corpus Check
- 25 files · ~109,095 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1258 nodes · 4718 edges · 56 communities (52 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 68 edges (avg confidence: 0.57)
- Token cost: 0 input · 0 output

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

## God Nodes (most connected - your core abstractions)
1. `t()` - 206 edges
2. `escapeHtml()` - 161 edges
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
- `vehicleIssueArea()` --indirect_call--> `t()`  [INFERRED]
  data/vehicles.js → js/app.js

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Dealer Exchange Transaction Integrity** — design_concepts_dealer_exchange_architecture_vehicleownershipregistry, design_concepts_dealer_exchange_architecture_reservationservice, design_concepts_dealer_exchange_architecture_fundshold, design_concepts_dealer_exchange_architecture_tradesettlementservice [EXTRACTED 1.00]
- **Dealer Exchange Architecture and Gameplay Alignment** — design_concepts_dealer_exchange_architecture_deterministic_decisions, design_concepts_dealer_exchange_architecture_player_market_parity, design_concepts_dealer_exchange_gameplay_design_economic_competition, design_concepts_dealer_exchange_gameplay_design_fair_risk [INFERRED 0.85]
- **Programme Menu Performance Remediation** — performance_analysis_performance_analysis_report_program_menu_bottlenecks, performance_analysis_performance_analysis_report_hero_image_optimization, performance_analysis_performance_analysis_report_forced_layout_optimization [EXTRACTED 1.00]

## Communities (56 total, 4 thin omitted)

### Community 0 - "Gameplay Actions and Transactions"
Cohesion: 0.05
Nodes (132): acceptDealerExchangeOrder(), acceptEarlyReturn(), acceptEcuRequest(), acceptPurchaseCounterOffer(), activeSearchOrders(), addMissedRateToClaim(), addMsg(), addTx() (+124 more)

### Community 1 - "Core Application State"
Cohesion: 0.03
Nodes (80): activeBranch(), activeBranchId(), activePurchaseRequests(), activeWorkshopJobs(), appBackgroundLoadState, applySearchOrderToMarket(), appRuntimeInfo, bodyShapeLabel() (+72 more)

### Community 2 - "Sales Financing Decisions"
Cohesion: 0.06
Nodes (83): acceptFinancingConditions(), analyzeBankableFinancing(), applyOptimalSaleFinancing(), applyRequiredDownForTarget(), applySaleFinancingOption(), bankApproveApplication(), bankApproveWithConditions(), bankPresentRevisedFinancing() (+75 more)

### Community 3 - "Business Intelligence Analytics"
Cohesion: 0.07
Nodes (60): activeContractCount(), allVehicleRows(), animateCelebrationNumber(), avg(), avgReviewStars(), barSvg(), biGroupStats(), biMiniHeatmap() (+52 more)

### Community 4 - "Profiles Themes and Persistence"
Cohesion: 0.08
Nodes (54): APP_BACKGROUNDS, applyAppBackground(), applyDesignSettings(), applyTheme(), clearBranchFields(), confirmLegacyStart(), cp1252ByteForChar(), createProfileFromLogin() (+46 more)

### Community 5 - "Dashboard Cards and Messages"
Cohesion: 0.10
Nodes (50): calcInput(), chatMessageHash(), chatVehicleHints(), chatVehicleStatus(), dashActivityPanel(), dashMessagesPanel(), dashOrdersPanel(), dashReviewsPanel() (+42 more)

### Community 6 - "Dealer Exchange Engine"
Cohesion: 0.13
Nodes (48): DEALER_EXCHANGE_AUCTION_SESSION, DEALER_EXCHANGE_SEED_INVENTORY, dealerExchangeAcceptBusinessOrder(), dealerExchangeAddEvent(), dealerExchangeAnnounceReserve(), dealerExchangeAssignPlayerOrderVehicle(), dealerExchangeAuctionBehavior(), dealerExchangeAuctionInventoryCar() (+40 more)

### Community 7 - "Vehicle and Employee Data"
Cohesion: 0.08
Nodes (42): BRANDS, COLORS, createVehicleFile(), createVehicleWearProfile(), CUSTOMER_AI_TYPES, EMP_PERSONALITIES, EMP_STRENGTHS, EMP_WEAKNESSES (+34 more)

### Community 8 - "Claims and Contract Archiving"
Cohesion: 0.12
Nodes (41): activeClaims(), addClaimFeeForLevel(), archiveContractPrompt(), canArchiveContract(), claimActionLabel(), claimChargeKey(), claimFeeBucket(), claimFeesByBucket() (+33 more)

### Community 9 - "Dealer Exchange Interface"
Cohesion: 0.17
Nodes (34): dealerExchangeAuctionStatus(), dealerExchangeAuctionTime(), dealerExchangeAuctionVehicle(), dealerExchangeDealer(), dealerExchangeDealerCard(), dealerExchangeEventAge(), dealerExchangeFeed(), dealerExchangeRelationshipDisplay() (+26 more)

### Community 10 - "Electron Main Process"
Cohesion: 0.09
Nodes (29): { app, BrowserWindow, protocol, net, shell, nativeTheme, ipcMain, screen }, { autoUpdater }, backgroundImageExtensions, checkForUpdates(), copyIfTargetMissing(), createWindow(), directoryHasEntries(), fs (+21 more)

### Community 11 - "Project Architecture Rules"
Cohesion: 0.07
Nodes (33): Automotive Empire Project Rules, Graphify Codebase Workflow, Project Structure Maintenance Policy, Ruflo Orchestration and Autonomous Agent Selection, Updates and News Policy, Application Runtime Script Chain, Automotive Empire HTML Shell, Dealer Exchange Runtime Script Chain (+25 more)

### Community 12 - "Vehicle Purchase Transactions"
Cohesion: 0.10
Nodes (33): completeBuyById(), contractListItem(), contractRows(), filteredContractRows(), findMarketCar(), makeOffer(), money(), openBuy() (+25 more)

### Community 14 - "Economy Reviews and Employees"
Cohesion: 0.11
Nodes (30): EMP_ROLES, annuity(), calcFinancing(), calculateFinancingRate(), candidateSalary(), clamp(), createReviewFromSale(), ecuTipShow() (+22 more)

### Community 15 - "Inventory Dashboard Metrics"
Cohesion: 0.11
Nodes (28): activeDeliveries(), activeInventory(), branchStats(), bulkListingEligibleCars(), bulkListingOpenIssues(), bulkListingPreview(), bulkListingRepairQuote(), dashBottomStatus() (+20 more)

### Community 16 - "Premium UI Navigation"
Cohesion: 0.08
Nodes (27): approveEcuCustomerDecision(), captureActiveChatScroll(), cycleDashRevenueRange(), enhancePremiumUi(), isChatNearBottom(), keepActiveChatAtBottom(), morphDomNode(), openContract() (+19 more)

### Community 17 - "Programs and Safe Exit"
Cohesion: 0.10
Nodes (26): activeListingIds(), activeOffers(), activeReviews(), APPS, closeProgramsWindow(), confirmSafeExit(), dashTasksPanel(), filterProgramsGrid() (+18 more)

### Community 18 - "Market Cards and Achievements"
Cohesion: 0.14
Nodes (25): achievementColor(), achievementRarityLabel(), achievementText(), activeMarket(), activeMarketSearchOrder(), bankDecisionLabel(), carCard(), deliveryStatusLabel() (+17 more)

### Community 19 - "Application Navigation System"
Cohesion: 0.14
Nodes (24): activeClaimActionCount(), appBadgeValue(), appDisplayName(), appMeta(), closeNavCustomize(), DEFAULT_BOTTOM_ITEMS, DEFAULT_DOCK_ITEMS, ensureNavTooltipLayer() (+16 more)

### Community 20 - "Customer Conversation AI"
Cohesion: 0.17
Nodes (23): adjustChatTrust(), buildCustomerReply(), buildPipelineCustomerReply(), chatStatusForIntent(), currentLanguage(), customerQuestionFollowUp(), dashDelta(), defaultChatMemory() (+15 more)

### Community 21 - "Customer Persona Generation"
Cohesion: 0.20
Nodes (21): PERSONAS, buildCustomerProfile(), choice(), createCustomer(), createMatchedCustomerLead(), customerAiTypeFor(), customerAiValue(), dealershipAudienceLevel() (+13 more)

### Community 22 - "ECU Tuning Analysis"
Cohesion: 0.19
Nodes (19): ecuCompatibility(), ecuCustomerChoiceFromReport(), ecuDefField(), ecuDynoFor(), ecuEngineCode(), ecuHistoryForVehicle(), ecuOptionReport(), ecuRequestMessage() (+11 more)

### Community 23 - "Purchase Negotiation AI"
Cohesion: 0.15
Nodes (17): analyzeCustomerIntent(), analyzePurchaseIntent(), buildPurchaseSellerReply(), defaultPurchaseChatMemory(), derivePurchaseConversationState(), detectCustomerQuestion(), detectSellerQuestion(), ensurePurchaseChat() (+9 more)

### Community 24 - "Application Lifecycle Updates"
Cohesion: 0.15
Nodes (17): applyAppRuntimeInfo(), cancelExitConfirmation(), checkForUpdatesManual(), dismissUpdateHint(), handleUpdaterStatus(), inGameSession(), init(), initAppLifecycleBridge() (+9 more)

### Community 25 - "Upgrades and Changelog"
Cohesion: 0.21
Nodes (13): CHANGELOG, UPGRADE_DEFS, buyUpgrade(), ensureUpgrades(), renderUpgrades(), roman(), sortedChangelog(), upgradeCost() (+5 more)

### Community 26 - "Lead Financing and Listings"
Cohesion: 0.14
Nodes (15): bulkListingPriceForCar(), cashLeadFit(), chooseMatchedLeadMethod(), completeBulkListingAfterRepair(), createListingForCar(), financeLeadFit(), leadOfferProbe(), leasingLeadFit() (+7 more)

### Community 27 - "Background Design Management"
Cohesion: 0.14
Nodes (14): backgroundIdFromName(), backgroundNameFromId(), backgroundNameFromPath(), backgroundUrlFromPath(), clearMarketSearchHighlight(), discoverAppBackgrounds(), fetchDirEntries(), listBackgroundsFromNativeBridge() (+6 more)

### Community 28 - "Dealer Exchange Architecture"
Cohesion: 0.17
Nodes (13): Atomic Trade and Reservation Flow, DealerDecisionEngine, DealerExchangeEngine, DealerIntent, Dealer Exchange Tick Flow, FundsHold, Dealer Exchange Domain Invariants, MatchingEngine (+5 more)

### Community 29 - "Game Calendar System"
Cohesion: 0.19
Nodes (13): calendarDayOfYear(), calendarDaysInMonth(), calendarFromGameDay(), calendarKey(), calendarOffsetFromGameDay(), currentCalendar(), formatCalendarDate(), formatCalendarNumeric() (+5 more)

### Community 30 - "Delivery and Vehicle Segments"
Cohesion: 0.23
Nodes (12): SUV_MODELS, chooseDeliveryType(), createDeliveryOrder(), deliveryCostBase(), deliveryCustomerAge(), deliveryDistanceFor(), ecuPriceFor(), initLoginBackground() (+4 more)

### Community 31 - "Application Package Metadata"
Cohesion: 0.17
Nodes (11): electron-updater, author, dependencies, electron-updater, description, license, main, name (+3 more)

### Community 32 - "Cross Platform Build"
Cohesion: 0.17
Nodes (12): build, appId, directories, linux, mac, portable, productName, publish (+4 more)

### Community 33 - "Ruflo MCP Configuration"
Cohesion: 0.25
Nodes (10): CLAUDE_FLOW_HOOKS_ENABLED, CLAUDE_FLOW_MAX_AGENTS, CLAUDE_FLOW_MEMORY_BACKEND, CLAUDE_FLOW_MODE, CLAUDE_FLOW_TOPOLOGY, npm_config_update_notifier, cmd, claude-flow (+2 more)

### Community 34 - "Updates and News UI"
Cohesion: 0.24
Nodes (11): fmtUpdateDate(), getLastSeenVersion(), localizedChangelogField(), maybeShowVersionWelcome(), renderChangelogSections(), renderUpdateCard(), renderUpdateColumns(), renderUpdates() (+3 more)

### Community 35 - "Windows Installer Configuration"
Cohesion: 0.18
Nodes (11): nsis, allowToChangeInstallationDirectory, artifactName, createDesktopShortcut, createStartMenuShortcut, installerHeaderIcon, installerIcon, oneClick (+3 more)

### Community 36 - "Market and Workshop Balancing"
Cohesion: 0.31
Nodes (10): MARKET_PRICE_BANDS, carTierOf(), clampWorkshopDays(), customerWishBatchSummary(), generateCar(), generateMarketCarForBand(), generateMarketCarForSegment(), marketPriceBand() (+2 more)

### Community 37 - "ECU Diagnostics Interface"
Cohesion: 0.31
Nodes (9): activeEcuRequests(), ecuStatusLabel(), ecuTipHide(), ensureEcuState(), renderEcuCenterDiagnostics(), renderEcuCenterVehicle(), renderEcuTuning(), selectEcuRequest() (+1 more)

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

### Community 45 - "Achievement State Data"
Cohesion: 0.50
Nodes (3): ACHIEVEMENTS, dropoutModalQueue, updateUiState

### Community 46 - "ECU Definition Data"
Cohesion: 0.50
Nodes (3): ECU_CUSTOMER_INTENTS, ECU_ENGINE_PREFIXES, ECU_TUNE_DEFS

### Community 47 - "Vehicle Sale Conditions"
Cohesion: 0.67
Nodes (4): carOpenSaleConditions(), conditionCustomerGone(), conditionIssueRepaired(), openCustomerWishConditionsForCar()

### Community 48 - "Purchase Requests and Reviews"
Cohesion: 0.67
Nodes (4): generatePurchaseRequest(), maybeGeneratePurchaseRequest(), reviewInfluence(), reviewMetrics()

## Knowledge Gaps
- **136 isolated node(s):** `CLAUDE_FLOW_MODE`, `CLAUDE_FLOW_HOOKS_ENABLED`, `CLAUDE_FLOW_TOPOLOGY`, `CLAUDE_FLOW_MAX_AGENTS`, `CLAUDE_FLOW_MEMORY_BACKEND` (+131 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `Market Cards and Achievements` to `Gameplay Actions and Transactions`, `Core Application State`, `Sales Financing Decisions`, `Business Intelligence Analytics`, `Profiles Themes and Persistence`, `Dashboard Cards and Messages`, `Vehicle and Employee Data`, `Claims and Contract Archiving`, `Vehicle Purchase Transactions`, `Economy Reviews and Employees`, `Inventory Dashboard Metrics`, `Premium UI Navigation`, `Programs and Safe Exit`, `Application Navigation System`, `Customer Conversation AI`, `ECU Tuning Analysis`, `Upgrades and Changelog`, `Lead Financing and Listings`, `Game Calendar System`, `Updates and News UI`, `ECU Diagnostics Interface`, `Customer Retention Management`?**
  _High betweenness centrality (0.029) - this node is a cross-community bridge._
- **Why does `escapeHtml()` connect `Dashboard Cards and Messages` to `Gameplay Actions and Transactions`, `Core Application State`, `Sales Financing Decisions`, `Business Intelligence Analytics`, `Profiles Themes and Persistence`, `Vehicle and Employee Data`, `Claims and Contract Archiving`, `Dealer Exchange Interface`, `Vehicle Purchase Transactions`, `Economy Reviews and Employees`, `Inventory Dashboard Metrics`, `Premium UI Navigation`, `Programs and Safe Exit`, `Market Cards and Achievements`, `Application Navigation System`, `Customer Conversation AI`, `ECU Tuning Analysis`, `Application Lifecycle Updates`, `Upgrades and Changelog`, `Updates and News UI`, `ECU Diagnostics Interface`, `Customer Retention Management`?**
  _High betweenness centrality (0.013) - this node is a cross-community bridge._
- **Why does `vehicleIssueArea()` connect `Vehicle and Employee Data` to `Market Cards and Achievements`?**
  _High betweenness centrality (0.012) - this node is a cross-community bridge._
- **Are the 6 inferred relationships involving `t()` (e.g. with `vehicleIssueArea()` and `customerIssueImpact()`) actually correct?**
  _`t()` has 6 INFERRED edges - model-reasoned connections that need verification._
- **What connects `CLAUDE_FLOW_MODE`, `CLAUDE_FLOW_HOOKS_ENABLED`, `CLAUDE_FLOW_TOPOLOGY` to the rest of the system?**
  _136 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Gameplay Actions and Transactions` be split into smaller, more focused modules?**
  _Cohesion score 0.05297247281980107 - nodes in this community are weakly interconnected._
- **Should `Core Application State` be split into smaller, more focused modules?**
  _Cohesion score 0.026617826617826617 - nodes in this community are weakly interconnected._