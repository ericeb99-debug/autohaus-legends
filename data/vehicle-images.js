const VEHICLE_IMAGE_CLASS_META = Object.freeze({
  Budget: Object.freeze({slug:'budget', color:'#2fb87c'}),
  Mittelklasse: Object.freeze({slug:'mittelklasse', color:'#d4af6a'}),
  Premium: Object.freeze({slug:'premium', color:'#8b7ff0'}),
  Luxus: Object.freeze({slug:'luxus', color:'#ff8a5c'}),
  Exotisch: Object.freeze({slug:'exotisch', color:'#ef5da8'}),
});

const VEHICLE_IMAGE_PAINT_META = Object.freeze({
  Schwarz: Object.freeze({slug:'schwarz', color:'#111111'}),
  Silber: Object.freeze({slug:'silber', color:'#aeb8c7'}),
});

// Fahrzeuge der Händlerbörse, die nicht im regulären BRANDS-Katalog stehen.
const VEHICLE_IMAGE_EXTRAS = Object.freeze([
  {brand:'BMW', model:'M3 Competition', marketValue:78100, imageClass:'Luxus'},
  {brand:'Mercedes-Benz', model:'S 580 4MATIC', marketValue:93400, imageClass:'Luxus'},
  {brand:'Porsche', model:'911 Carrera GTS', marketValue:171000, imageClass:'Exotisch'},
  {brand:'Volkswagen', model:'ID.3 Pro S', marketValue:30100, imageClass:'Mittelklasse'},
  {brand:'Mercedes-Benz', model:'190 E 2.5-16', marketValue:44800, imageClass:'Premium'},
  {brand:'Volkswagen', model:'Crafter 35', marketValue:34200, imageClass:'Mittelklasse'},
  {brand:'Audi', model:'RS 6 Avant', marketValue:97500, imageClass:'Luxus'},
  {brand:'Tesla', model:'Model Y Long Range', marketValue:46700, imageClass:'Premium'},
  {brand:'Range Rover', model:'Sport P530', marketValue:121000, imageClass:'Exotisch'},
  {brand:'BMW', model:'850 CSi', marketValue:116500, imageClass:'Exotisch'},
  {brand:'Audi', model:'A6 Avant 50 TDI', marketValue:43800, imageClass:'Premium'},
  {brand:'BMW', model:'530e Touring', marketValue:48900, imageClass:'Premium'},
  {brand:'Mercedes-AMG', model:'GT 63 S', marketValue:126000, imageClass:'Exotisch'},
  {brand:'BMW', model:'M2 Competition', marketValue:56800, imageClass:'Luxus'},
  {brand:'Renault', model:'Megane E-Tech', marketValue:33700, imageClass:'Mittelklasse'},
  {brand:'Toyota', model:'Corolla Hybrid', marketValue:27600, imageClass:'Mittelklasse'},
  {brand:'Mercedes-Benz', model:'GLE 450', marketValue:79600, imageClass:'Luxus'},
  {brand:'Mercedes-Benz', model:'E 450 Cabriolet', marketValue:71400, imageClass:'Luxus'},
  {brand:'Porsche', model:'944 S2', marketValue:32900, imageClass:'Mittelklasse'},
  {brand:'BMW', model:'M5 E39', marketValue:55700, imageClass:'Premium'},
  {brand:'Ford', model:'Transit Custom', marketValue:35400, imageClass:'Mittelklasse'},
  {brand:'Skoda', model:'Octavia Combi', marketValue:26400, imageClass:'Mittelklasse'},
]);

function vehicleImageSlug(value){
  return String(value||'')
    .replace(/ß/g,'ss')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g,'')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g,'-')
    .replace(/^-+|-+$/g,'');
}

function vehicleImageKey(brand, model){
  return `${vehicleImageSlug(brand)}--${vehicleImageSlug(model)}`;
}

function vehicleImageExtra(brand, model){
  return VEHICLE_IMAGE_EXTRAS.find(entry=>entry.brand===brand && entry.model===model) || null;
}

function vehicleImageStableHash(value){
  let hash=0;
  const text=String(value||'');
  for(let index=0;index<text.length;index++) hash=((hash<<5)-hash)+text.charCodeAt(index)|0;
  return Math.abs(hash);
}

function vehicleImagePaintName(vehicle){
  const raw=String(vehicle?.paintColor||vehicle?.color||'');
  if(/silber|weiß|weiss|grau/i.test(raw)) return 'Silber';
  if(/schwarz|anthrazit/i.test(raw)) return 'Schwarz';
  return vehicleImageStableHash([vehicle?.id,vehicle?.brand,vehicle?.model,vehicle?.year].join('|'))%2 ? 'Silber' : 'Schwarz';
}
