/* Händlerbörse LIVE – persistenter Phase-6-Ausgangszustand und fachlich getrenntes Read Model. */
const DEALER_EXCHANGE_SCHEMA_VERSION = 7;

function createDealerExchangeDemoState(){
  return {
    schemaVersion: DEALER_EXCHANGE_SCHEMA_VERSION,
    simulationTick: 1842,
    ui: {tab:'overview', feedFilter:'all', vehicleSearch:'', segment:'all', sort:'opportunity', selectedDealerId:'dealer-nordstern', selectedVehicleId:'dxv-001'},
    watchedVehicleIds:['dxv-003','dxv-008'],
    interestVehicleIds:[],
    dealers:[
      {id:'dealer-nordstern',companyName:'Nordstern Automobile',short:'NA',kind:'Volumenhändler',region:'Hamburg',cashBalance:684000,inventoryCount:47,inventoryCapacity:62,reputation:91,growthRate:8.4,riskLevel:36,aggressiveness:72,creditRating:'A+',specialties:['BMW','Audi','Flotten'],status:'online',color:'#5ea7ff'},
      {id:'dealer-falkenstein',companyName:'Falkenstein Performance',short:'FP',kind:'Performance-Spezialist',region:'München',cashBalance:428000,inventoryCount:19,inventoryCapacity:28,reputation:94,growthRate:12.7,riskLevel:68,aggressiveness:88,creditRating:'A',specialties:['Porsche','AMG','M'],status:'active',color:'#d7af58'},
      {id:'dealer-citydrive',companyName:'CityDrive Mobility',short:'CM',kind:'Urban-Mobility',region:'Berlin',cashBalance:316000,inventoryCount:31,inventoryCapacity:45,reputation:86,growthRate:15.2,riskLevel:24,aggressiveness:48,creditRating:'A',specialties:['Elektro','Kompakt','Hybrid'],status:'online',color:'#52d5bc'},
      {id:'dealer-koenig',companyName:'König & Partner',short:'KP',kind:'Premiumhaus',region:'Düsseldorf',cashBalance:912000,inventoryCount:34,inventoryCapacity:40,reputation:97,growthRate:6.9,riskLevel:42,aggressiveness:61,creditRating:'AA',specialties:['Mercedes-Benz','Luxus','SUV'],status:'negotiating',color:'#b991ff'},
      {id:'dealer-werkraum',companyName:'Werkraum Klassiker',short:'WK',kind:'Klassik-Spezialist',region:'Stuttgart',cashBalance:271000,inventoryCount:14,inventoryCapacity:22,reputation:89,growthRate:4.3,riskLevel:74,aggressiveness:39,creditRating:'A-',specialties:['Klassiker','Youngtimer','Projekte'],status:'online',color:'#ef9568'},
      {id:'dealer-rheinland',companyName:'Rheinland Fleet',short:'RF',kind:'Flottenhandel',region:'Köln',cashBalance:1138000,inventoryCount:78,inventoryCapacity:110,reputation:83,growthRate:10.1,riskLevel:31,aggressiveness:79,creditRating:'AA',specialties:['Flotten','Transporter','Diesel'],status:'active',color:'#70b7db'},
    ],
    vehicles:[
      {id:'dxv-001',dealerId:'dealer-nordstern',brand:'BMW',model:'M3 Competition',year:2022,mileage:28400,segment:'Performance',condition:94,askingPrice:72800,marketValue:78100,demand:92,interest:4,expiresIn:'1 T 8 Std.',trend:6.8,opportunity:96,color:'#5ea7ff'},
      {id:'dxv-002',dealerId:'dealer-koenig',brand:'Mercedes-Benz',model:'S 580 4MATIC',year:2021,mileage:41200,segment:'Luxus',condition:91,askingPrice:89900,marketValue:93400,demand:74,interest:2,expiresIn:'2 T 4 Std.',trend:2.1,opportunity:82,color:'#b991ff'},
      {id:'dxv-003',dealerId:'dealer-falkenstein',brand:'Porsche',model:'911 Carrera GTS',year:2023,mileage:9600,segment:'Sammler',condition:98,askingPrice:164500,marketValue:171000,demand:98,interest:7,expiresIn:'6 Std. 42 Min.',trend:9.4,opportunity:94,color:'#d7af58'},
      {id:'dxv-004',dealerId:'dealer-citydrive',brand:'Volkswagen',model:'ID.3 Pro S',year:2022,mileage:33700,segment:'Elektro',condition:89,askingPrice:27800,marketValue:30100,demand:81,interest:3,expiresIn:'3 T 1 Std.',trend:7.2,opportunity:88,color:'#52d5bc'},
      {id:'dxv-005',dealerId:'dealer-werkraum',brand:'Mercedes-Benz',model:'190 E 2.5-16',year:1991,mileage:146000,segment:'Klassiker',condition:82,askingPrice:39900,marketValue:44800,demand:69,interest:5,expiresIn:'11 Std. 18 Min.',trend:4.7,opportunity:86,color:'#ef9568'},
      {id:'dxv-006',dealerId:'dealer-rheinland',brand:'Volkswagen',model:'Crafter 35',year:2021,mileage:68400,segment:'Nutzfahrzeug',condition:87,askingPrice:31900,marketValue:34200,demand:77,interest:1,expiresIn:'4 T 6 Std.',trend:3.9,opportunity:76,color:'#70b7db'},
      {id:'dxv-007',dealerId:'dealer-nordstern',brand:'Audi',model:'RS 6 Avant',year:2021,mileage:38900,segment:'Performance',condition:92,askingPrice:94800,marketValue:97500,demand:95,interest:6,expiresIn:'18 Std. 05 Min.',trend:8.1,opportunity:89,color:'#5ea7ff'},
      {id:'dxv-008',dealerId:'dealer-citydrive',brand:'Tesla',model:'Model Y Long Range',year:2023,mileage:22100,segment:'Elektro',condition:95,askingPrice:43800,marketValue:46700,demand:85,interest:4,expiresIn:'1 T 14 Std.',trend:5.6,opportunity:91,color:'#52d5bc'},
      {id:'dxv-009',dealerId:'dealer-koenig',brand:'Range Rover',model:'Sport P530',year:2022,mileage:26500,segment:'SUV',condition:96,askingPrice:118500,marketValue:121000,demand:72,interest:2,expiresIn:'2 T 9 Std.',trend:-1.2,opportunity:68,color:'#b991ff'},
      {id:'dxv-010',dealerId:'dealer-werkraum',brand:'BMW',model:'850 CSi',year:1995,mileage:118000,segment:'Klassiker',condition:88,askingPrice:109000,marketValue:116500,demand:83,interest:6,expiresIn:'8 Std. 24 Min.',trend:11.2,opportunity:93,color:'#ef9568'},
    ],
    feed:[],
    transactions:[],
    observations:[],
    scheduler:{cursor:0,nextRunAt:0,lastRunAt:0,totalDecisions:0,totalTrades:0,totalListings:0},
    debug:{enabled:false,decisions:[]},
    playerNotifications:[],
    relationships:{},
    directOffers:[],
    dealerHistories:{},
    vehiclePackages:[],
    businessOrders:[],
    orderHistory:[],
    packageReservations:[],
    auctions:[],
    auctionQueue:[],
    auctionHistory:[],
    playerAuctionDeliveries:[],
  };
}
