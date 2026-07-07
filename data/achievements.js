const ACHIEVEMENTS = [
  {id:'first_purchase', label:'Erster Einkauf', desc:'Das erste Fahrzeug erfolgreich angekauft.', icon:'🚗', rarity:'common', xp:10, check:s=>(s.purchaseCount||0)>=1},
  {id:'fleet_5', label:'Kleine Ausstellungsfläche', desc:'5 Fahrzeuge gleichzeitig im Bestand.', icon:'🏢', rarity:'common', xp:15, check:s=>(s.inventory||[]).length>=5},
  {id:'big_fleet', label:'Großer Fuhrpark', desc:'10 Fahrzeuge gleichzeitig im Bestand.', icon:'🏬', rarity:'rare', xp:30, check:s=>(s.inventory||[]).length>=10},
  {id:'first_sale', label:'Erster Verkauf', desc:'Ihr erstes Fahrzeug verkauft.', icon:'🎉', rarity:'common', xp:20, check:s=>(s.salesCount||0)>=1},
  {id:'sales_10', label:'Verkaufsprofi', desc:'10 Fahrzeuge verkauft.', icon:'🏅', rarity:'rare', xp:45, check:s=>(s.salesCount||0)>=10},
  {id:'sales_25', label:'Regionaler Platzhirsch', desc:'25 Fahrzeuge verkauft.', icon:'🏆', rarity:'epic', xp:80, check:s=>(s.salesCount||0)>=25},
  {id:'sales_50', label:'Empire-Legende', desc:'50 Fahrzeuge verkauft.', icon:'👑', rarity:'legendary', xp:140, check:s=>(s.salesCount||0)>=50},
  {id:'cash_deal', label:'Barzahler gefunden', desc:'Ein Fahrzeug per Barzahlung verkauft.', icon:'💶', rarity:'common', xp:15, check:s=>(s.cashSales||0)>=1},
  {id:'finance_deal', label:'Finanzierungsprofi', desc:'Den ersten Finanzierungsvertrag abgeschlossen.', icon:'💳', rarity:'rare', xp:25, check:s=>(s.financingSales||0)>=1},
  {id:'lease_deal', label:'Leasing läuft', desc:'Den ersten Leasingvertrag abgeschlossen.', icon:'📄', rarity:'rare', xp:25, check:s=>(s.leasingSales||0)>=1},
  {id:'contract_portfolio', label:'Vertragsportfolio', desc:'5 laufende Finanzierungs- oder Leasingverträge aktiv.', icon:'📚', rarity:'epic', xp:65, check:s=>((s.receivables||[]).filter(r=>!r.closed).length + (s.leaseContracts||[]).filter(l=>l.status==='active').length)>=5},
  {id:'recurring_5000', label:'Planbare Einnahmen', desc:'5.000 € wiederkehrende Monatsraten erreicht.', icon:'📈', rarity:'epic', xp:75, check:s=>((s.receivables||[]).filter(r=>!r.closed).reduce((a,r)=>a+(r.monthlyPayment||0),0) + (s.leaseContracts||[]).filter(l=>l.status==='active').reduce((a,l)=>a+(l.monthlyPayment||0),0))>=5000},
  {id:'big_margin', label:'Verhandlungskünstler', desc:'Über 3.000 € Marge in einem Verkauf erzielt.', icon:'💎', rarity:'rare', xp:40, check:s=>(s.lastProfit||0)>=3000},
  {id:'monster_margin', label:'Goldene Unterschrift', desc:'Über 10.000 € Marge in einem Verkauf erzielt.', icon:'✨', rarity:'legendary', xp:120, check:s=>(s.bestProfit||0)>=10000},
  {id:'profit_25000', label:'Schwarze Zahlen', desc:'25.000 € Gesamtgewinn aus Verkäufen erzielt.', icon:'📊', rarity:'epic', xp:90, check:s=>(s.totalProfit||0)>=25000},
  {id:'fast_sale', label:'Schnelldreher', desc:'Ein Fahrzeug innerhalb von 3 Standtagen verkauft.', icon:'⚡', rarity:'rare', xp:35, check:s=>(s.fastSales||0)>=1},
  {id:'luxury_sale', label:'Luxusliga', desc:'Ein Fahrzeug der Kategorie Luxus/Exotisch verkauft.', icon:'🏎️', rarity:'epic', xp:70, check:s=>!!s.lastTierLuxury},
  {id:'reputation_80', label:'Vertrauenswürdig', desc:'Rufwert von 80 oder höher erreicht.', icon:'⭐', rarity:'rare', xp:40, check:s=>s.reputation>=80},
  {id:'reputation_95', label:'Makelloser Ruf', desc:'Rufwert von 95 oder höher erreicht.', icon:'🌟', rarity:'legendary', xp:130, check:s=>s.reputation>=95},
  {id:'first_workshop', label:'Werkstatt angelaufen', desc:'Den ersten Werkstattauftrag abgeschlossen.', icon:'🔧', rarity:'common', xp:15, check:s=>(s.workshopCompleted||0)>=1},
  {id:'workshop_10', label:'Meisterbetrieb', desc:'10 Werkstattaufträge abgeschlossen.', icon:'🛠️', rarity:'rare', xp:50, check:s=>(s.workshopCompleted||0)>=10},
  {id:'first_dunning', label:'Konsequent geblieben', desc:'Die erste Mahnung selbst verschickt.', icon:'📬', rarity:'common', xp:15, check:s=>(s.dunningsSent||0)>=1},
  {id:'claim_recovered', label:'Forderung gerettet', desc:'Eine überfällige Zahlung nach Mahnung eingezogen.', icon:'✅', rarity:'rare', xp:45, check:s=>(s.claimsRecovered||0)>=1},
  {id:'claim_recovered_5', label:'Mahnwesen im Griff', desc:'5 offene Forderungen erfolgreich eingezogen.', icon:'⚖️', rarity:'epic', xp:90, check:s=>(s.claimsRecovered||0)>=5},
];

/* =============================== STATE =============================== */
let state = null;
let saveTimer = null;
let activeProfileId = null;
let activeProfileName = '';
let gameClockStarted = false;
let dropoutModalQueue = [];
let dropoutModalShowing = false;
let updateUiState = {status:'idle', label:'Noch nicht geprüft', progress:null};
