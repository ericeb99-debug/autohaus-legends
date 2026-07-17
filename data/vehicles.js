const BRANDS = {
  'Volkswagen': {glyph:'🚘', models:{ 'up!':[13500,17500], 'Polo':[19000,25000], 'Golf':[25000,35000], 'T-Roc':[28000,37000], 'Passat':[34000,46000], 'Tiguan':[36000,49000], 'Arteon':[43000,56000], 'ID.3':[36000,44000], 'ID.4':[42000,52000] }},
  'Opel':       {glyph:'🚗', models:{ 'Corsa':[18000,24000], 'Astra':[24000,32000], 'Crossland':[24000,30000], 'Insignia':[32000,42000], 'Grandland':[33000,44000] }},
  'Skoda':      {glyph:'🚙', models:{ 'Fabia':[18500,24000], 'Scala':[22000,28000], 'Octavia':[27000,37000], 'Karoq':[30000,40000], 'Superb':[38000,50000], 'Kodiaq':[38000,52000] }},
  'Ford':       {glyph:'🚗', models:{ 'Fiesta':[18000,24000], 'Focus':[24000,32000], 'Puma':[26000,34000], 'Kuga':[33000,45000], 'Mustang':[52000,68000], 'Explorer':[46000,58000] }},
  'Toyota':     {glyph:'🚙', models:{ 'Aygo X':[15500,19500], 'Yaris':[19000,25000], 'Corolla':[26000,34000], 'C-HR':[30000,38000], 'Camry':[38000,48000], 'RAV4':[38000,49000], 'Land Cruiser':[62000,80000] }},
  'BMW':        {glyph:'🚘', models:{ '1er':[32000,42000], '2er':[35000,45000], '3er':[46000,60000], '4er':[52000,66000], '5er':[62000,80000], 'X1':[42000,52000], 'X3':[54000,70000], 'X5':[78000,100000], 'i4':[58000,72000] }},
  'Mercedes-Benz': {glyph:'🚖', models:{ 'A-Klasse':[34000,44000], 'B-Klasse':[36000,46000], 'C-Klasse':[48000,62000], 'CLA':[42000,54000], 'E-Klasse':[65000,84000], 'GLA':[42000,54000], 'GLC':[58000,74000], 'GLE':[78000,98000], 'S-Klasse':[105000,140000] }},
  'Audi':       {glyph:'🚘', models:{ 'A1':[26000,33000], 'A3':[33000,43000], 'A4':[46000,58000], 'A6':[62000,80000], 'A8':[95000,125000], 'Q2':[33000,42000], 'Q3':[40000,52000], 'Q5':[56000,72000], 'Q7':[78000,98000], 'e-tron':[62000,78000] }},
  'Tesla':      {glyph:'⚡', models:{ 'Model 3':[44000,54000], 'Model Y':[48000,58000], 'Model S':[92000,115000], 'Model X':[98000,120000] }},
  'Porsche':    {glyph:'🏎️', models:{ 'Macan':[68000,88000], '718 Boxster':[72000,92000], '911':[125000,175000], 'Cayenne':[92000,120000], 'Panamera':[105000,145000], 'Taycan':[98000,130000] }},
  'Hyundai':    {glyph:'🚗', models:{ 'i10':[15000,19000], 'i20':[19500,25000], 'i30':[24000,31000], 'Kona':[27000,35000], 'Tucson':[33000,44000], 'Santa Fe':[45000,58000], 'IONIQ 5':[46000,56000] }},
  'Kia':        {glyph:'🚗', models:{ 'Picanto':[14500,18500], 'Rio':[19000,24000], 'Ceed':[23000,30000], 'Sportage':[32000,43000], 'Sorento':[46000,58000], 'EV6':[47000,58000] }},
  'Renault':    {glyph:'🚗', models:{ 'Twingo':[14000,17500], 'Clio':[18500,24000], 'Captur':[24000,31000], 'Megane':[25000,32000], 'Austral':[33000,42000], 'Espace':[42000,52000] }},
  'Peugeot':    {glyph:'🚗', models:{ '108':[15000,18500], '208':[19500,25500], '308':[25000,32000], '2008':[26000,33000], '3008':[33000,43000], '5008':[38000,48000] }},
  'Citroën':    {glyph:'🚗', models:{ 'C1':[14500,18000], 'C3':[18500,24000], 'C4':[25000,32000], 'C5 Aircross':[33000,42000], 'Berlingo':[26000,33000] }},
  'Fiat':       {glyph:'🚗', models:{ 'Panda':[13500,17000], '500':[17000,22000], 'Tipo':[20000,26000], '500X':[24000,31000] }},
  'Seat':       {glyph:'🚗', models:{ 'Ibiza':[19000,24500], 'Arona':[23000,29000], 'Leon':[25000,33000], 'Ateca':[30000,40000], 'Tarraco':[38000,48000] }},
  'Cupra':      {glyph:'🚗', models:{ 'Born':[38000,46000], 'Leon':[36000,45000], 'Formentor':[38000,50000], 'Ateca':[40000,50000] }},
  'Mazda':      {glyph:'🚙', models:{ '2':[19500,25000], '3':[26000,33000], 'CX-3':[26000,32000], 'CX-5':[33000,43000], 'MX-5':[32000,40000] }},
  'Honda':      {glyph:'🚗', models:{ 'Jazz':[21000,26000], 'Civic':[28000,36000], 'CR-V':[38000,48000], 'HR-V':[30000,38000] }},
  'Nissan':     {glyph:'🚗', models:{ 'Micra':[18000,23000], 'Juke':[24000,31000], 'Qashqai':[30000,40000], 'X-Trail':[38000,48000], 'Leaf':[32000,40000] }},
  'Volvo':      {glyph:'🚙', models:{ 'V40':[28000,36000], 'S60':[42000,54000], 'V60':[44000,56000], 'XC40':[42000,54000], 'XC60':[54000,68000], 'XC90':[70000,88000] }},
  'Land Rover': {glyph:'🚙', models:{ 'Evoque':[48000,60000], 'Discovery Sport':[52000,64000], 'Discovery':[68000,84000], 'Defender':[62000,82000], 'Range Rover':[110000,150000] }},
  'Jaguar':     {glyph:'🚘', models:{ 'XE':[42000,54000], 'XF':[48000,62000], 'F-Pace':[58000,74000], 'F-Type':[72000,94000] }},
  'Mini':       {glyph:'🚗', models:{ 'Cooper':[24000,31000], 'Clubman':[28000,36000], 'Countryman':[32000,42000] }},
  'Alfa Romeo': {glyph:'🏎️', models:{ 'Giulietta':[26000,33000], 'Giulia':[42000,56000], 'Stelvio':[46000,60000] }},
  'Jeep':       {glyph:'🚙', models:{ 'Renegade':[26000,33000], 'Compass':[30000,39000], 'Grand Cherokee':[58000,74000] }},
  'Dacia':      {glyph:'🚗', models:{ 'Sandero':[13500,17500], 'Duster':[19000,25000], 'Jogger':[20000,26000] }},
  'Suzuki':     {glyph:'🚗', models:{ 'Swift':[18000,23000], 'Vitara':[24000,31000], 'S-Cross':[26000,33000] }},
  'Lexus':      {glyph:'🚘', models:{ 'CT':[32000,40000], 'IS':[46000,58000], 'NX':[52000,66000], 'RX':[64000,80000] }},
  'Maserati':   {glyph:'🏎️', models:{ 'Ghibli':[92000,120000], 'Levante':[100000,135000], 'GranTurismo':[135000,175000] }},
  'Bentley':    {glyph:'🏎️', models:{ 'Continental GT':[210000,270000], 'Bentayga':[190000,250000] }},
  'Ferrari':    {glyph:'🏎️', models:{ 'Roma':[230000,280000], 'Portofino':[220000,270000], '296 GTB':[310000,380000] }},
  'Lamborghini':{glyph:'🏎️', models:{ 'Huracán':[240000,300000], 'Urus':[230000,290000] }},
};
Object.assign(BRANDS, {
  'Mitsubishi': {glyph:'🚙', models:{ 'Space Star':[14000,19000], 'ASX':[24000,32000], 'Eclipse Cross':[32000,42000], 'Outlander':[42000,56000], 'L200':[36000,48000] }},
  'Subaru':     {glyph:'🚙', models:{ 'Impreza':[28000,36000], 'Crosstrek':[32000,42000], 'Forester':[38000,52000], 'Outback':[44000,58000], 'BRZ':[36000,46000], 'WRX':[48000,62000] }},
  'Chevrolet':  {glyph:'🚘', models:{ 'Spark':[13000,17000], 'Cruze':[21000,28000], 'Malibu':[32000,42000], 'Camaro':[52000,72000], 'Corvette':[90000,125000], 'Tahoe':[70000,90000] }},
  'Cadillac':   {glyph:'🚘', models:{ 'CT4':[42000,56000], 'CT5':[52000,68000], 'XT4':[44000,58000], 'XT5':[56000,72000], 'Escalade':[105000,145000] }},
  'DS Automobiles': {glyph:'🚘', models:{ 'DS 3':[32000,43000], 'DS 4':[38000,52000], 'DS 7':[52000,70000], 'DS 9':[62000,78000] }},
  'Smart':      {glyph:'⚡', models:{ 'fortwo':[17000,24000], 'forfour':[19000,26000], '#1':[39000,48000], '#3':[44000,56000] }},
  'MG':         {glyph:'🚗', models:{ 'MG3':[17000,23000], 'MG4':[32000,42000], 'MG5':[35000,45000], 'ZS':[25000,34000], 'HS':[32000,43000], 'Marvel R':[46000,58000] }},
  'BYD':        {glyph:'⚡', models:{ 'Dolphin':[31000,39000], 'Atto 3':[39000,48000], 'Seal':[45000,58000], 'Han':[62000,76000], 'Tang':[69000,84000] }},
  'NIO':        {glyph:'⚡', models:{ 'ET5':[52000,66000], 'ET7':[70000,88000], 'EL6':[58000,72000], 'EL7':[76000,92000], 'EL8':[90000,115000] }},
  'Polestar':   {glyph:'⚡', models:{ '2':[48000,62000], '3':[88000,110000], '4':[62000,78000] }},
  'Genesis':    {glyph:'🚘', models:{ 'G70':[46000,60000], 'G80':[62000,78000], 'GV60':[58000,72000], 'GV70':[56000,74000], 'GV80':[78000,98000] }},
  'Abarth':     {glyph:'🏎️', models:{ '595':[28000,36000], '695':[34000,44000], '500e':[38000,46000] }},
  'Alpine':     {glyph:'🏎️', models:{ 'A110':[68000,88000], 'A110 S':[78000,98000], 'A290':[42000,54000] }},
  'Aston Martin': {glyph:'🏎️', models:{ 'Vantage':[155000,205000], 'DB12':[220000,280000], 'DBX':[195000,250000] }},
  'McLaren':    {glyph:'🏎️', models:{ '570S':[180000,230000], 'GT':[210000,260000], 'Artura':[240000,310000], '720S':[290000,380000] }},
  'Rolls-Royce':{glyph:'🏎️', models:{ 'Ghost':[310000,420000], 'Wraith':[330000,450000], 'Cullinan':[390000,520000] }},
  'Lotus':      {glyph:'🏎️', models:{ 'Elise':[52000,72000], 'Emira':[82000,110000], 'Eletre':[98000,135000], 'Evija':[1800000,2300000] }},
  'Lucid':      {glyph:'⚡', models:{ 'Air Pure':[85000,105000], 'Air Touring':[105000,130000], 'Air Grand Touring':[135000,175000] }},
  'Rimac':      {glyph:'?', models:{ 'Nevera':[1900000,2400000] }},
  'Bugatti':    {glyph:'???', models:{ 'Veyron':[1600000,2300000], 'Chiron':[2800000,4200000], 'Tourbillon':[3800000,5200000] }},
  'Koenigsegg': {glyph:'???', models:{ 'Agera':[1900000,2800000], 'Jesko':[3000000,4400000], 'Gemera':[1700000,2400000] }},
  'Pagani':     {glyph:'???', models:{ 'Huayra':[2200000,3400000], 'Utopia':[2600000,3900000] }},
});
const SUV_MODELS = ['Tiguan','T-Roc','Kodiaq','Karoq','Grandland','Crossland','Kuga','Explorer','C-HR','RAV4','Land Cruiser','X1','X3','X5','GLA','GLC','GLE','Q2','Q3','Q5','Q7','e-tron','Macan','Cayenne','Kona','Tucson','Santa Fe','IONIQ 5','Sportage','Sorento','EV6','Captur','Austral','2008','3008','5008','C5 Aircross','500X','Arona','Ateca','Tarraco','Formentor','CX-3','CX-5','HR-V','CR-V','Juke','Qashqai','X-Trail','XC40','XC60','XC90','Evoque','Discovery Sport','Discovery','Defender','Range Rover','F-Pace','Countryman','Stelvio','Renegade','Compass','Grand Cherokee','Duster','Vitara','S-Cross','NX','RX','Bentayga','Urus'];
// Fahrzeugbilder werden pro Modell in zwei konsistenten Lackvarianten gepflegt.
const COLORS = ['Schwarz','Silber'];
const ENGINES = [
  {label:'Benzin', mult:1.0}, {label:'Diesel', mult:1.05},
  {label:'Hybrid', mult:1.18}, {label:'Elektro', mult:1.35}
];
const TRANS = ['Manuell','Automatik'];
const MARKET_SEGMENT_MIN = {
  kleinwagen:30, kompakt:30, mittelklasse:30, suv:30, kombi:25,
  sportwagen:20, luxus:15, supersport:10, hypercar:5
};
const MARKET_PRICE_BANDS = [
  {id:'5k', min:0, max:10000, target:18},
  {id:'20k', min:10000, max:35000, target:40},
  {id:'60k', min:35000, max:90000, target:34},
  {id:'150k', min:90000, max:250000, target:18},
  {id:'500k', min:250000, max:900000, target:10},
  {id:'2m', min:900000, max:3000000, target:5},
  {id:'5m', min:3000000, max:7000000, target:2},
];
const MARKET_SEGMENT_POOLS = {
  kleinwagen:[['Volkswagen','up!'],['Volkswagen','Polo'],['Opel','Corsa'],['Skoda','Fabia'],['Ford','Fiesta'],['Toyota','Aygo X'],['Hyundai','i10'],['Fiat','Panda'],['Dacia','Sandero']],
  kompakt:[['Volkswagen','Golf'],['Opel','Astra'],['Skoda','Scala'],['Ford','Focus'],['Toyota','Corolla'],['Audi','A3'],['BMW','1er'],['Hyundai','i30'],['Kia','Ceed']],
  mittelklasse:[['BMW','3er'],['Mercedes-Benz','C-Klasse'],['Audi','A4'],['Skoda','Octavia'],['Volkswagen','Passat'],['Toyota','Camry'],['Volvo','S60'],['Genesis','G70']],
  suv:[['Volkswagen','Tiguan'],['BMW','X3'],['Mercedes-Benz','GLC'],['Audi','Q5'],['Porsche','Macan'],['Toyota','RAV4'],['Volvo','XC60'],['Land Rover','Defender'],['Lamborghini','Urus']],
  kombi:[['Volkswagen','Passat'],['Audi','A4'],['Audi','A6'],['BMW','3er'],['Mercedes-Benz','E-Klasse'],['Skoda','Octavia'],['Skoda','Superb'],['Volvo','V60'],['Subaru','Outback']],
  sportwagen:[['Ford','Mustang'],['Porsche','911'],['Porsche','718 Boxster'],['Chevrolet','Corvette'],['Alpine','A110'],['Maserati','GranTurismo'],['Ferrari','Roma'],['McLaren','Artura']],
  luxus:[['Mercedes-Benz','S-Klasse'],['Bentley','Continental GT'],['Rolls-Royce','Ghost'],['Rolls-Royce','Cullinan'],['Porsche','Panamera'],['Ferrari','296 GTB'],['Lamborghini','Huracán'],['McLaren','720S']],
  supersport:[['Lotus','Evija'],['Rimac','Nevera'],['Bugatti','Veyron'],['Koenigsegg','Agera'],['Koenigsegg','Gemera']],
  hypercar:[['Bugatti','Chiron'],['Bugatti','Tourbillon'],['Koenigsegg','Jesko'],['Pagani','Huayra'],['Pagani','Utopia'],['Rimac','Nevera']],
};
const PERSONAS = [
  {name:'Schnäppchenjäger', discount:[0.18,0.30], patience:2},
  {name:'Familienvater', discount:[0.05,0.12], patience:4},
  {name:'Sammler', discount:[0.02,0.08], patience:5},
  {name:'Pendler', discount:[0.08,0.16], patience:3},
  {name:'Exporthändler', discount:[0.15,0.25], patience:2},
  {name:'Luxuskäufer', discount:[0.01,0.06], patience:5},
  {name:'Student', discount:[0.10,0.20], patience:2},
  {name:'Rentner', discount:[0.04,0.10], patience:4},
];
const CUSTOMER_AI_TYPES = {
  'Direkter Kunde': {patience:[45,68], negotiation:[48,72], trust:[48,70], risk:[35,58], speed:[72,95], politeness:[48,70], detail:[18,40], price:[52,78], decision:[72,94], style:'kurz und sachlich'},
  'Vorsichtiger Kunde': {patience:[58,86], negotiation:[35,58], trust:[26,48], risk:[72,96], speed:[28,55], politeness:[62,88], detail:[72,96], price:[42,66], decision:[25,52], style:'gründlich und nachfragend'},
  'Schnäppchenjäger': {patience:[48,78], negotiation:[78,98], trust:[38,62], risk:[42,68], speed:[55,82], politeness:[36,65], detail:[32,58], price:[82,98], decision:[45,72], style:'preisfokussiert'},
  'Familienkunde': {patience:[62,90], negotiation:[35,62], trust:[46,72], risk:[66,92], speed:[38,66], politeness:[70,96], detail:[58,82], price:[45,70], decision:[42,68], style:'höflich und sicherheitsorientiert'},
  'Premiumkunde': {patience:[42,70], negotiation:[22,48], trust:[54,78], risk:[48,74], speed:[62,92], politeness:[62,86], detail:[58,84], price:[18,42], decision:[62,88], style:'professionell und anspruchsvoll'},
  'Unsicherer Kunde': {patience:[68,94], negotiation:[35,60], trust:[30,58], risk:[62,88], speed:[22,50], politeness:[58,88], detail:[52,80], price:[48,76], decision:[16,42], style:'zögerlich und rückversichernd'},
  'Ungeduldiger Kunde': {patience:[22,48], negotiation:[48,76], trust:[40,66], risk:[38,64], speed:[82,99], politeness:[32,60], detail:[20,46], price:[48,76], decision:[68,92], style:'schnell und knapp'},
  'Stammkunde': {patience:[56,84], negotiation:[22,50], trust:[68,92], risk:[38,66], speed:[52,78], politeness:[66,92], detail:[38,68], price:[32,58], decision:[58,84], style:'vertraut und serviceorientiert'},
};
const PERSONA_AI_MAP = {
  'Schnäppchenjäger':'Schnäppchenjäger',
  'Familienvater':'Familienkunde',
  'Sammler':'Premiumkunde',
  'Pendler':'Direkter Kunde',
  'Exporthändler':'Direkter Kunde',
  'Luxuskäufer':'Premiumkunde',
  'Student':'Schnäppchenjäger',
  'Rentner':'Vorsichtiger Kunde',
};
const FIRSTNAMES = ['Lena','Markus','Julia','Stefan','Anna','Thomas','Sophie','Jonas','Nina','Paul','Laura','Felix','Sabine','Michael','Katrin','David'];
const LASTNAMES = ['Müller','Schmidt','Fischer','Weber','Wagner','Becker','Schulz','Hoffmann','Koch','Bauer','Richter','Klein','Wolf','Neumann'];
const EMP_ROLES = [
  {role:'Verkäufer', icon:'🧑‍💼', spec:'Abschluss & Beratung', desc:'Bearbeitet Kundenanfragen, verbessert Abschlussquote, Rabatte und Kundenzufriedenheit.'},
  {role:'Einkäufer', icon:'🧐', spec:'Markt & Ankauf', desc:'Findet bessere Einkaufspreise, erkennt Ankaufsmöglichkeiten und reduziert Fehlkaufrisiken.'},
  {role:'Mechaniker', icon:'🔧', spec:'Werkstattqualität', desc:'Verkürzt Reparaturzeiten, verbessert Qualität und senkt Reparaturrisiken.'},
  {role:'Fahrzeugaufbereiter', icon:'🧽', spec:'Optik & Zustand', desc:'Verbessert Fahrzeugoptik, Verkaufschance und möglichen Verkaufspreis.'},
  {role:'Fotograf', icon:'📷', spec:'Inseratsqualität', desc:'Erstellt bessere Fahrzeugbilder und erhöht Anfragen pro Inserat.'},
  {role:'Finanzierungsberater', icon:'💳', spec:'Finanzierung', desc:'Verbessert Finanzierungsabschlüsse, Vorprüfung und Bankprozesse.'},
  {role:'Leasingberater', icon:'📄', spec:'Leasing', desc:'Verbessert Leasingangebote, Leasingquote und reduziert Rückgabeprobleme.'},
  {role:'Kundenservice', icon:'🎧', spec:'Bewertungen', desc:'Beantwortet Rückfragen, reduziert Beschwerden und erhöht Stammkundenbindung.'},
  {role:'Mahnwesen-Spezialist', icon:'⚖️', spec:'Forderungen', desc:'Überwacht offene Forderungen, Mahnfristen und Forderungsmanagement.'},
  {role:'Marketing-Manager', icon:'📣', spec:'Reichweite', desc:'Erhöht Reichweite, Anfragen und Kampagnenwirkung.'},
  {role:'Business-Analyst', icon:'📊', spec:'Analyse', desc:'Verbessert Business Insights, Prognosen und Schwachstellen-Erkennung.'},
  {role:'Fuhrpark-/Lieferkoordinator', icon:'🚚', spec:'Lieferungen', desc:'Organisiert Lieferungen, reduziert Verzögerungen und verbessert Übergaben.'},
];
const EMP_PERSONALITIES = ['Analytisch','Kommunikativ','Ruhig','Ehrgeizig','Pragmatisch','Kreativ','Sorgfältig','Direkt'];
const EMP_STRENGTHS = ['schnelle Entscheidungen','saubere Dokumentation','starke Kundenkommunikation','niedrige Fehlerquote','hohe Eigenmotivation','gute Marktkenntnis','präzise Planung'];
const EMP_WEAKNESSES = ['hoher Gehaltswunsch','braucht klare Prozesse','schwankt bei Stress','lernt langsam','macht unter Zeitdruck Fehler','geringe Routine','wenig Geduld'];
const REPAIR_JOBS = [
  {id:'mech', label:'Mechanik-Check', icon:'🔩', baseCost:380, baseDays:2, cond:22},
  {id:'clean', label:'Aufbereitung', icon:'🧽', baseCost:120, baseDays:1, cond:10},
  {id:'paint', label:'Lackierung', icon:'🎨', baseCost:650, baseDays:3, cond:18},
  {id:'tuv', label:'TÜV vorbereiten', icon:'📋', baseCost:220, baseDays:1, cond:8},
  {id:'tires', label:'Neue Reifen', icon:'🛞', baseCost:480, baseDays:1, cond:14},
];
const VEHICLE_ISSUE_CATALOG = [
  {id:'oil_leak', category:'Motor', label:'leichter Ölverlust', cost:420, days:2, severity:2, tags:['tech','service'], minWear:24},
  {id:'oil_service', category:'Service', label:'Ölwechsel fällig', cost:160, days:1, severity:1, tags:['service','family'], minWear:12},
  {id:'spark_plugs', category:'Motor', label:'Zündkerzen verschlissen', cost:220, days:1, severity:1, tags:['tech','service'], minWear:20},
  {id:'timing_chain', category:'Motor', label:'Steuerkette auffällig', cost:1150, days:4, severity:4, tags:['tech','family'], minWear:58},
  {id:'turbo_worn', category:'Motor', label:'Turbolader verschlissen', cost:1350, days:4, severity:4, tags:['tech','luxury'], minWear:62},
  {id:'engine_mounts', category:'Motor', label:'Motorlager verschlissen', cost:520, days:2, severity:2, tags:['tech'], minWear:42},
  {id:'brake_pads', category:'Bremsen', label:'Bremsbeläge verschlissen', cost:330, days:1, severity:3, tags:['safety','family'], minWear:28},
  {id:'brake_discs', category:'Bremsen', label:'Bremsscheiben verschlissen', cost:620, days:2, severity:3, tags:['safety','family'], minWear:45},
  {id:'brake_fluid', category:'Bremsen', label:'Bremsflüssigkeit wechseln', cost:130, days:1, severity:2, tags:['safety','service'], minWear:24},
  {id:'tires_worn', category:'Reifen', label:'Reifen abgefahren', cost:520, days:1, severity:3, tags:['safety','family'], minWear:30},
  {id:'tires_uneven', category:'Reifen', label:'Reifen ungleichmäßig abgefahren', cost:620, days:1, severity:2, tags:['safety','tech'], minWear:38},
  {id:'winter_tires', category:'Reifen', label:'Winterreifen nötig', cost:580, days:1, severity:1, tags:['safety','season'], minWear:18},
  {id:'summer_tires', category:'Reifen', label:'Sommerreifen nötig', cost:560, days:1, severity:1, tags:['safety','season'], minWear:18},
  {id:'shocks', category:'Fahrwerk', label:'Stoßdämpfer verschlissen', cost:760, days:2, severity:3, tags:['safety','comfort'], minWear:48},
  {id:'control_arm', category:'Fahrwerk', label:'Querlenker ausgeschlagen', cost:540, days:2, severity:3, tags:['safety','tech'], minWear:44},
  {id:'alignment', category:'Fahrwerk', label:'Spur verstellt', cost:140, days:1, severity:1, tags:['safety','tires'], minWear:24},
  {id:'battery', category:'Elektronik', label:'Batterie schwach', cost:210, days:1, severity:2, tags:['comfort','family'], minWear:22},
  {id:'light', category:'Elektronik', label:'Licht defekt', cost:90, days:1, severity:2, tags:['safety'], minWear:15},
  {id:'parking_sensor', category:'Elektronik', label:'Parksensor defekt', cost:260, days:1, severity:1, tags:['comfort','luxury'], minWear:20},
  {id:'ac', category:'Elektronik', label:'Klimaanlage ohne Funktion', cost:620, days:2, severity:2, tags:['comfort','luxury'], minWear:34},
  {id:'window_lift', category:'Elektronik', label:'Fensterheber defekt', cost:300, days:1, severity:1, tags:['comfort'], minWear:30},
  {id:'scratches', category:'Karosserie', label:'Kratzer', cost:260, days:1, severity:1, tags:['optics','collector'], minWear:8},
  {id:'stone_chips', category:'Karosserie', label:'Steinschläge', cost:190, days:1, severity:1, tags:['optics','collector'], minWear:10},
  {id:'dents', category:'Karosserie', label:'Dellen', cost:380, days:2, severity:2, tags:['optics','luxury'], minWear:20},
  {id:'rust', category:'Karosserie', label:'Rostansatz', cost:780, days:3, severity:3, tags:['optics','collector'], minWear:52},
  {id:'paint_damage', category:'Karosserie', label:'Lackschäden', cost:690, days:3, severity:2, tags:['optics','luxury'], minWear:32},
  {id:'upholstery', category:'Innenraum', label:'Polster beschädigt', cost:360, days:2, severity:2, tags:['interior','family'], minWear:28},
  {id:'steering_worn', category:'Innenraum', label:'Lenkrad abgegriffen', cost:240, days:1, severity:1, tags:['interior','luxury'], minWear:34},
  {id:'odor', category:'Innenraum', label:'Geruchsbelästigung', cost:180, days:1, severity:2, tags:['interior','family'], minWear:18},
  {id:'interior_wear', category:'Innenraum', label:'starke Gebrauchsspuren', cost:420, days:2, severity:2, tags:['interior','luxury'], minWear:40},
  {id:'tuv_soon', category:'Service', label:'TÜV läuft bald ab', cost:220, days:1, severity:2, tags:['service','family'], minWear:14},
  {id:'tuv_expired', category:'Service', label:'TÜV abgelaufen', cost:340, days:2, severity:4, tags:['service','safety','family'], minWear:24},
  {id:'inspection_due', category:'Service', label:'Inspektion fällig', cost:420, days:1, severity:2, tags:['service','tech'], minWear:20},
];
const EVENTS = [
  {text:'Zinsanstieg der Zentralbank – Finanzierungskosten steigen leicht.', fx:s=>{s.loanRate*=1.08;}},
  {text:'Kraftstoffpreise steigen – Nachfrage nach Elektroautos zieht an.', fx:s=>{s.marketTrend*=1.02; s.evDemand=(s.evDemand||1)*1.15;}},
  {text:'Neues Förderprogramm für E-Autos angekündigt.', fx:s=>{s.evDemand=(s.evDemand||1)*1.2;}},
  {text:'Konjunktur kühlt leicht ab – Käufer werden vorsichtiger.', fx:s=>{s.marketTrend*=0.96;}},
  {text:'SUV-Boom hält an – Preise für SUVs ziehen an.', fx:s=>{s.suvDemand=(s.suvDemand||1)*1.15;}},
  {text:'Rückrufaktion eines Herstellers sorgt für Verunsicherung.', fx:s=>{s.marketTrend*=0.97;}},
  {text:'Lokale Zeitung berichtet positiv über Ihr Autohaus.', fx:s=>{s.reputation=Math.min(100,s.reputation+3);}},
  {text:'Wirtschaftlich starker Monat – Kauflaune steigt.', fx:s=>{s.marketTrend*=1.04;}},
];

function vehicleIssueText(issue){
  return issue ? `${issue.label || issue.name || issue}` : '';
}
function issueUniqueKey(issue){
  return String(issue?.label || issue?.name || issue?.id || issue || '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g,' ');
}
function uniqueBy(arr, keyFn){
  const seen = new Set();
  return (arr||[]).filter(item=>{
    const key = keyFn(item);
    if(!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
function compactRepeatedCommaText(text){
  const str = String(text||'');
  const commaCount = (str.match(/,/g)||[]).length;
  if(commaCount<6) return str;
  const colon = str.lastIndexOf(':');
  const head = colon>=0 ? str.slice(0, colon+1) : '';
  const body = colon>=0 ? str.slice(colon+1) : str;
  const rawParts = body.split(',').map(x=>x.trim()).filter(Boolean);
  if(rawParts.length<6) return str;
  const seen = new Set();
  const unique = [];
  rawParts.forEach(part=>{
    const suffix = /[.!?]$/.test(part) ? part.slice(-1) : '';
    const clean = part.replace(/[.!?]+$/,'').trim();
    const key = clean.toLowerCase();
    if(!key || seen.has(key)) return;
    seen.add(key);
    unique.push(clean + suffix);
  });
  if(unique.length>=rawParts.length-2) return str;
  const end = /[.!?]$/.test(str.trim()) && !/[.!?]$/.test(unique[unique.length-1]||'') ? '.' : '';
  return `${head}${head?' ':''}${unique.join(', ')}${end}`.trim();
}
const VEHICLE_FILE_TECHNICAL = ['Motor','Getriebe','Turbolader','Kupplung','Bremsen','Fahrwerk','Lenkung','Elektronik','Batterie','Klimaanlage','Reifen','Auspuff','Kühlung','Ölverlust','TÜV','Wartungszustand'];
const VEHICLE_FILE_OPTICAL = ['Lack','Kratzer','Dellen','Felgen','Scheiben','Innenraum','Sitze','Lenkrad','Kunststoffteile','Verschmutzung'];
const TECHNICAL_ISSUE_CATEGORIES = ['Motor','Bremsen','Reifen','Fahrwerk','Elektronik','Service','Sonstiges'];
function vehicleIssueArea(issue){
  if(!issue) return 'technical';
  if(['Karosserie','Innenraum'].includes(issue.category)) return 'optical';
  if((issue.tags||[]).some(t=>['optics','interior'].includes(t))) return 'optical';
  return 'technical';
}
function issueVehicleFileComponent(issue){
  const label = String(issue?.label||'');
  if(issue.category==='Karosserie'){
    if(/kratzer/i.test(label)) return 'Kratzer';
    if(/delle/i.test(label)) return 'Dellen';
    if(/lack|stein/i.test(label)) return 'Lack';
    return 'Lack';
  }
  if(issue.category==='Innenraum'){
    if(/polster|sitz/i.test(label)) return 'Sitze';
    if(/lenkrad/i.test(label)) return 'Lenkrad';
    if(/geruch|verschmut/i.test(label)) return 'Verschmutzung';
    return 'Innenraum';
  }
  if(issue.category==='Service'){
    if(/tüv|tuv/i.test(label)) return 'TÜV';
    return 'Wartungszustand';
  }
  if(issue.category==='Elektronik'){
    if(/batterie/i.test(label)) return 'Batterie';
    if(/klima/i.test(label)) return 'Klimaanlage';
    return 'Elektronik';
  }
  if(/turbo/i.test(label)) return 'Turbolader';
  if(/öl/i.test(label)) return 'Ölverlust';
  return issue.category || 'Motor';
}
function vehicleConditionLabelFromIssues(c){
  const issues = (c?.issues||[]).filter(i=>!i.repaired);
  const tech = issues.filter(i=>vehicleIssueArea(i)==='technical');
  const opt = issues.filter(i=>vehicleIssueArea(i)==='optical');
  const techWeight = tech.reduce((s,i)=>s+(i.severity||1),0);
  const optWeight = opt.reduce((s,i)=>s+(i.severity||1)*0.65,0);
  if(techWeight===0 && optWeight<=1) return 'Einwandfrei';
  const score = techWeight + optWeight;
  if(score<=2) return 'Sehr gut';
  if(score<=5) return 'Gut';
  if(score<=9) return 'Gebraucht';
  if(score<=14) return 'Schlecht';
  return 'Sehr schlecht';
}
function createVehicleFile(c, issues){
  issues = Array.isArray(issues) ? issues : [];
  const age = Math.max(0, 2026-(c.year||2026));
  const tier = (typeof carTierOf==='function' && c.brand && c.model) ? carTierOf(c.brand,c.model) : 1;
  const owners = c.wearProfile?.owners ?? clamp(Math.round(1 + age/4 + randInt(-1,2)), 1, 7);
  const maintenanceScore = c.wearProfile?.maintenanceScore ?? clamp(Math.round(78 - age*2.2 - (c.mileage||0)/9000 + randInt(-12,18) + (tier>1.8?8:0)), 10, 98);
  const baseTechScore = clamp(Math.round((c.condition||75) - age*1.2 - (c.mileage||0)/12000 + maintenanceScore*.18), 8, 100);
  const baseOptScore = clamp(Math.round((c.condition||75) - age*.8 - (c.mileage||0)/18000 + randInt(-8,8)), 8, 100);
  const makeComponents = (names, base)=>Object.fromEntries(names.map(name=>[name, {score:clamp(base+randInt(-9,9),0,100), status:'ok', issueIds:[]}]));
  const file = {
    version:1,
    createdDay: state?.day || c.dayAdded || 1,
    technical: makeComponents(VEHICLE_FILE_TECHNICAL, baseTechScore),
    optical: makeComponents(VEHICLE_FILE_OPTICAL, baseOptScore),
    other:{
      vorbesitzer: owners,
      unfallhistorie: Math.random()<clamp(age*.025 + Math.max(0,100-(c.condition||80))*.004, .02, .28) ? 'Vorschaden dokumentiert' : 'unfallfrei',
      serviceheft: maintenanceScore>=72 ? 'vollständig' : maintenanceScore>=48 ? 'teilweise' : 'lückenhaft',
      schluesselanzahl: Math.random()<0.12 ? 1 : 2,
      tuvMonate: c.tuvMonths ?? 0,
      tuvDatum: `in ${Math.max(0,c.tuvMonths||0)} Monat(en)`,
    },
    issueIds: issues.map(i=>i.id),
    repairedIssueIds: issues.filter(i=>i.repaired).map(i=>i.id),
    customerWishes: [],
    baseCondition: c.condition || 75,
    conditionLabel:'Gut',
    technicalLabel:'Gut',
    opticalLabel:'Gut',
  };
  issues.forEach(issue=>{
    const area = vehicleIssueArea(issue);
    const componentName = issueVehicleFileComponent(issue);
    const bucket = area==='optical' ? file.optical : file.technical;
    if(!bucket[componentName]) bucket[componentName] = {score:area==='optical'?baseOptScore:baseTechScore, status:'ok', issueIds:[]};
    bucket[componentName].issueIds.push(issue.id);
    bucket[componentName].status = issue.repaired ? 'behoben' : 'mangel';
    bucket[componentName].score = clamp(bucket[componentName].score - (issue.severity||1)*12, 0, 100);
    issue.vehicleFileComponent = componentName;
    issue.area = area;
  });
  file.conditionLabel = vehicleConditionLabelFromIssues({issues});
  file.technicalLabel = techOptLabel(issues, 'technical');
  file.opticalLabel = techOptLabel(issues, 'optical');
  return file;
}
function techOptLabel(issues, area){
  const weight = (issues||[]).filter(i=>!i.repaired && vehicleIssueArea(i)===area).reduce((s,i)=>s+(i.severity||1),0);
  if(weight===0) return 'Einwandfrei';
  if(weight<=2) return 'Sehr gut';
  if(weight<=5) return 'Gut';
  if(weight<=9) return 'Gebraucht';
  if(weight<=14) return 'Schlecht';
  return 'Sehr schlecht';
}
function updateVehicleFileState(c){
  if(!c) return null;
  if(!c.vehicleFile) c.vehicleFile = createVehicleFile(c, c.issues||[]);
  const active = (c.issues||[]).filter(i=>!i.repaired);
  const repaired = (c.issues||[]).filter(i=>i.repaired).map(i=>i.id);
  c.vehicleFile.issueIds = (c.issues||[]).map(i=>i.id);
  c.vehicleFile.repairedIssueIds = uniqueBy(repaired, x=>x);
  [...Object.values(c.vehicleFile.technical||{}), ...Object.values(c.vehicleFile.optical||{})].forEach(comp=>{
    const ids = comp.issueIds||[];
    comp.status = ids.length && ids.every(id=>repaired.includes(id)) ? 'behoben' : ids.some(id=>active.some(i=>i.id===id)) ? 'mangel' : 'ok';
  });
  c.vehicleFile.conditionLabel = vehicleConditionLabelFromIssues(c);
  c.vehicleFile.technicalLabel = techOptLabel(c.issues, 'technical');
  c.vehicleFile.opticalLabel = techOptLabel(c.issues, 'optical');
  const techWeight = active.filter(i=>vehicleIssueArea(i)==='technical').reduce((s,i)=>s+(i.severity||1),0);
  const optWeight = active.filter(i=>vehicleIssueArea(i)==='optical').reduce((s,i)=>s+(i.severity||1),0);
  const age = Math.max(0, 2026-(c.year||2026));
  c.condition = clamp(Math.round((c.vehicleFile.baseCondition||c.condition||75) - techWeight*6 - optWeight*3 - age*.25 + Math.max(0,(c.vehicleFile.repairedIssueIds||[]).length)*1.5), 20, 100);
  c.conditionLabel = c.vehicleFile.conditionLabel;
  c.hiddenIssues = active.map(vehicleIssueText);
  return c.vehicleFile;
}
function vehicleFileDebugHtml(c){
  if(!state?.chatDebug) return '';
  normalizeVehicleIssues(c);
  const file = updateVehicleFileState(c);
  const open = (c.issues||[]).filter(i=>!i.repaired);
  const repaired = (c.issues||[]).filter(i=>i.repaired);
  const wishes = (c.saleConditions||[]).map(cond=>`${saleConditionText(cond)} (${cond.status})`);
  const compRows = obj=>Object.entries(obj||{}).filter(([,v])=>(v.issueIds||[]).length || v.status!=='ok').map(([k,v])=>`${k}: ${v.status} ${v.issueIds?.length?`(${v.issueIds.length})`:''}`).join('<br>') || 'keine Auffälligkeiten';
  return `<details class="notice" style="display:block;margin-top:10px;"><summary><b>Fahrzeugakte Debug</b></summary>
    <div class="subtle" style="margin-top:8px;line-height:1.55;">
      Zustand: ${escapeHtml(file.conditionLabel)} · Technik: ${escapeHtml(file.technicalLabel)} · Optik: ${escapeHtml(file.opticalLabel)}<br>
      Vorbesitzer: ${file.other.vorbesitzer} · Serviceheft: ${escapeHtml(file.other.serviceheft)} · Unfallhistorie: ${escapeHtml(file.other.unfallhistorie)} · Schlüssel: ${file.other.schluesselanzahl} · TÜV: ${file.other.tuvMonate} Mon.<br>
      <b>Technik</b><br>${compRows(file.technical)}<br>
      <b>Optik</b><br>${compRows(file.optical)}<br>
      <b>Offene Mängel</b>: ${open.length?open.map(i=>escapeHtml(i.label)).join(', '):'keine'}<br>
      <b>Repariert</b>: ${repaired.length?repaired.map(i=>escapeHtml(i.label)).join(', '):'keine'}<br>
      <b>Kundenwünsche</b>: ${wishes.length?wishes.map(escapeHtml).join(', '):'keine'}
    </div>
  </details>`;
}
function normalizeVehicleIssues(c){
  if(!c) return [];
  c.issues = Array.isArray(c.issues) ? c.issues : [];
  c.issues = uniqueBy(c.issues, issueUniqueKey);
  const existing = new Set();
  c.issues.forEach(i=>{ if(i.id) existing.add(i.id); if(i.label) existing.add(i.label); existing.add(issueUniqueKey(i)); });
  (c.hiddenIssues||[]).forEach((txt,idx)=>{
    if(existing.has(txt) || existing.has(issueUniqueKey(txt))) return;
    c.issues.push({
      id:'legacy_'+idx+'_'+stableHash(String(txt)).toString(36),
      category:'Sonstiges',
      label:String(txt),
      severity:2,
      cost:360,
      days:1,
      tags:['tech'],
      discovered:!!c.inspected,
      customerMentioned:false,
      repaired:false,
      source:'legacy',
    });
    existing.add(issueUniqueKey(txt));
  });
  c.issues.forEach(i=>{
    if(!i.area) i.area = vehicleIssueArea(i);
    if(!i.vehicleFileComponent) i.vehicleFileComponent = issueVehicleFileComponent(i);
  });
  updateVehicleFileState(c);
  return c.issues;
}
function vehicleWearScore({age, mileage, condition, tier, owners, maintenanceScore}){
  return clamp(
    age*4.2 +
    mileage/4200 +
    (100-condition)*0.72 +
    Math.max(0,tier-1)*8 +
    (owners-1)*5 -
    maintenanceScore*0.28 +
    randInt(-14,18),
    0,
    100
  );
}
function createVehicleWearProfile(carBase){
  const age = Math.max(0, 2026-carBase.year);
  const tier = carTierOf(carBase.brand, carBase.model);
  const owners = clamp(Math.round(1 + age/4 + randInt(-1,2)), 1, 7);
  const maintenanceScore = clamp(Math.round(76 - age*2.4 - carBase.mileage/8500 + randInt(-18,22) + (tier>1.8?8:0)), 8, 98);
  const wear = vehicleWearScore({age, mileage:carBase.mileage, condition:carBase.condition, tier, owners, maintenanceScore});
  let target = wear<18 ? (Math.random()<0.18?1:0) : wear<38 ? randInt(0,2) : wear<62 ? randInt(1,4) : randInt(3,7);
  if(age<=2 && carBase.mileage<30000 && Math.random()<0.65) target = 0;
  const technicallyPristine = (carBase.condition||0)>=94 && age<=3 && (carBase.mileage||0)<45000 && maintenanceScore>=70;
  const pool = VEHICLE_ISSUE_CATALOG
    .filter(i=>{
      if(technicallyPristine && vehicleIssueArea(i)==='technical') return false;
      return wear >= i.minWear || Math.random()<0.07;
    })
    .map(i=>{
      let weight = 1 + Math.max(0, wear-i.minWear)/25 + i.severity*0.22;
      if(i.category==='Karosserie' || i.category==='Innenraum') weight += carBase.condition<72 ? 1.1 : 0;
      if(i.category==='Service') weight += maintenanceScore<55 ? 1.4 : 0;
      if(i.tags.includes('luxury') && tier>1.7) weight += 0.9;
      return {issue:i, weight};
    });
  const issues = [];
  while(issues.length<target && pool.length){
    const total = pool.reduce((s,p)=>s+p.weight,0);
    let r = Math.random()*total;
    const idx = pool.findIndex(p=>((r-=p.weight)<=0));
    const pick = pool.splice(Math.max(0,idx),1)[0].issue;
    issues.push({
      ...pick,
      id: pick.id+'_'+stableHash([carBase.id, pick.id, issues.length].join('|')).toString(36),
      discovered:false,
      customerMentioned:false,
      repaired:false,
    });
  }
  if(technicallyPristine && issues.some(i=>vehicleIssueArea(i)==='technical')){
    for(let i=issues.length-1;i>=0;i--){ if(vehicleIssueArea(issues[i])==='technical') issues.splice(i,1); }
  }
  return {
    wearScore: Math.round(wear),
    owners,
    maintenanceScore,
    issues,
    individuality: stableHash([carBase.id, carBase.brand, carBase.model, carBase.mileage, owners, maintenanceScore, issues.map(i=>i.id).join(',')].join('|')).toString(36),
  };
}
function issueRepairJob(issue){
  const base = REPAIR_JOBS.find(j=>
    issue.category==='Karosserie' ? j.id==='paint' :
    issue.category==='Innenraum' ? j.id==='clean' :
    issue.category==='Reifen' ? j.id==='tires' :
    issue.category==='Service' && /TÜV/i.test(issue.label) ? j.id==='tuv' : j.id==='mech'
  ) || REPAIR_JOBS[0];
  return {
    id:'issue:'+issue.id,
    baseId:base.id,
    label:issue.label+' beheben',
    icon:base.icon,
    baseCost:issue.cost||base.baseCost,
    baseDays:issue.days||base.baseDays,
    cond:Math.max(3, (issue.severity||1)*4),
    issueId:issue.id,
  };
}

// Berufsgruppen als Grundlage für die vereinfachte Bonitätsprüfung bei Finanzierung/Leasing.
const JOBS = [
  {label:'Student/in', score:[25,50]},
  {label:'Angestellte/r', score:[45,72]},
  {label:'Facharbeiter/in', score:[50,76]},
  {label:'Beamte/r', score:[70,93]},
  {label:'Selbstständig', score:[35,82]},
  {label:'Rentner/in', score:[55,86]},
  {label:'Geschäftsführer/in', score:[75,97]},
];
