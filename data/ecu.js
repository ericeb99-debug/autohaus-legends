const ECU_TUNE_DEFS = [
  {id:'stage1', label:'Stage 1 Softwareoptimierung', short:'Stage 1', category:'leistung', minPower:90, maxPower:900, price:[899,1899], hours:[2,4], powerGain:[0.12,0.22], torqueGain:[0.14,0.26], fuels:['Benzin','Diesel','Hybrid'], risk:.025, requirement:null, customerText:'spürbar mehr Durchzug im Alltag', en:{label:'Stage 1 Software Optimization',short:'Stage 1',customerText:'noticeably stronger everyday performance'}},
  {id:'stage2', label:'Stage 2 Performance Mapping', short:'Stage 2', category:'leistung', minPower:140, maxPower:1000, price:[1699,3499], hours:[4,7], powerGain:[0.22,0.34], torqueGain:[0.24,0.38], fuels:['Benzin','Diesel'], risk:.045, requirement:'stage1', hardware:['Downpipe','Sportluftfilter','Ladeluftkühler'], customerText:'mehr Leistung mit passender Hardware', en:{label:'Stage 2 Performance Mapping',short:'Stage 2',customerText:'more power with the supporting hardware'}},
  {id:'stage3', label:'Stage 3 Motorsport-Abstimmung', short:'Stage 3', category:'leistung', minPower:220, maxPower:1300, price:[3999,8999], hours:[8,16], powerGain:[0.36,0.62], torqueGain:[0.34,0.55], fuels:['Benzin','Diesel'], risk:.075, requirement:'stage2', hardware:['Upgrade-Turbolader','Kraftstoffsystem','Kupplung/Verstärkung'], customerText:'maximale Performance für ein stark umgebautes Fahrzeug', en:{label:'Stage 3 Motorsport Calibration',short:'Stage 3',customerText:'maximum performance for a heavily modified vehicle'}},
  {id:'eco', label:'ECO-Optimierung', short:'ECO', category:'effizienz', minPower:60, maxPower:450, price:[499,1199], hours:[1,3], powerGain:[-0.03,0.02], torqueGain:[0.03,0.08], fuels:['Benzin','Diesel','Hybrid'], risk:.015, requirement:null, customerText:'ruhigeres Fahren und weniger Verbrauch', en:{label:'ECO Optimization',short:'ECO',customerText:'smoother driving and lower fuel consumption'}},
  {id:'pops', label:'Pops & Bangs Abstimmung', short:'Pops & Bangs', category:'sound', minPower:150, maxPower:900, price:[399,899], hours:[1,2], powerGain:[0,0.01], torqueGain:[0,0.01], fuels:['Benzin'], risk:.035, requirement:null, customerText:'dezent sportlicheren Klang', en:{label:'Pops & Bangs Calibration',short:'Pops & Bangs',customerText:'a subtly sportier exhaust note'}},
  {id:'overrun', label:'Schubabschaltung optimieren', short:'Schubabschaltung', category:'sound', minPower:130, maxPower:900, price:[349,799], hours:[1,2], powerGain:[0,0.01], torqueGain:[0,0.01], fuels:['Benzin','Diesel'], risk:.025, requirement:null, customerText:'sportlicheres Ansprechverhalten beim Gaswegnehmen', en:{label:'Overrun Optimization',short:'Overrun',customerText:'a sportier response when lifting off the throttle'}},
  {id:'vmax', label:'Vmax-Aufhebung', short:'Vmax', category:'performance', minPower:180, maxPower:1300, price:[599,1499], hours:[1,3], powerGain:[0,0.02], torqueGain:[0,0.02], fuels:['Benzin','Diesel','Hybrid','Elektro'], risk:.025, requirement:null, customerText:'die elektronische Begrenzung entfernen', en:{label:'Top-Speed Limiter Removal',short:'Vmax',customerText:'the electronic speed limiter removed'}},
  {id:'launch', label:'Launch Control Setup', short:'Launch Control', category:'performance', minPower:220, maxPower:1300, price:[899,1999], hours:[2,5], powerGain:[0.01,0.03], torqueGain:[0.03,0.06], fuels:['Benzin','Diesel','Hybrid','Elektro'], risk:.045, requirement:null, customerText:'bessere Starts aus dem Stand', en:{label:'Launch Control Setup',short:'Launch Control',customerText:'better standing starts'}},
  {id:'gearbox', label:'Getriebeoptimierung', short:'Getriebe', category:'komfort', minPower:100, maxPower:1000, price:[699,1699], hours:[2,4], powerGain:[0,0.02], torqueGain:[0.03,0.09], fuels:['Benzin','Diesel','Hybrid','Elektro'], risk:.025, requirement:null, transmission:['Automatik','Doppelkupplung'], customerText:'schnellere, sauberere Schaltvorgänge', en:{label:'Transmission Optimization',short:'Transmission',customerText:'faster and smoother gear changes'}},
  {id:'throttle', label:'Gaspedalkennlinie', short:'Gaspedal', category:'komfort', minPower:60, maxPower:1000, price:[299,699], hours:[1,2], powerGain:[0,0], torqueGain:[0,0.03], fuels:['Benzin','Diesel','Hybrid','Elektro'], risk:.01, requirement:null, customerText:'direkteres Ansprechen im Alltag', en:{label:'Throttle Mapping',short:'Throttle',customerText:'more direct throttle response in everyday driving'}}
];

const ECU_CUSTOMER_INTENTS = [
  {tune:'stage1', weight:24},
  {tune:'stage2', weight:12},
  {tune:'stage3', weight:4},
  {tune:'eco', weight:14},
  {tune:'pops', weight:8},
  {tune:'overrun', weight:7},
  {tune:'vmax', weight:8},
  {tune:'launch', weight:8},
  {tune:'gearbox', weight:9},
  {tune:'throttle', weight:10}
];

const ECU_ENGINE_PREFIXES = {
  'BMW':['B48','B58','N57','S58'],
  'Mercedes-Benz':['M264','M276','OM654','M177'],
  'Audi':['EA888','EA839','EA897','DL382'],
  'Volkswagen':['EA211','EA288','EA888','DQ381'],
  'Porsche':['9A2','EA825','MA2','PDK'],
  'Tesla':['DU-Raven','DU-Plaid','DU-3D'],
  'Toyota':['A25A','2ZR','8AR','GR-FE'],
  'Ford':['EcoBoost','Duratorq','Coyote'],
  'Opel':['B16','D20','PureTech'],
  'Hyundai':['Smartstream','Theta','U2'],
  'Kia':['Smartstream','Theta','U2'],
  'Volvo':['Drive-E','B4204','D4204'],
  'default':['MEVD','MED17','EDC17','MG1','MD1']
};
