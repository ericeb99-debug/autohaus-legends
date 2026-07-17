const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const context = vm.createContext({console});
const sources = [
  fs.readFileSync(path.join(root, 'data', 'vehicles.js'), 'utf8'),
  fs.readFileSync(path.join(root, 'data', 'vehicle-images.js'), 'utf8'),
].join('\n');
vm.runInContext(`${sources}\nthis.__vehicleImageData={BRANDS,VEHICLE_IMAGE_EXTRAS,VEHICLE_IMAGE_CLASS_META,vehicleImageKey};`, context);

const {BRANDS, VEHICLE_IMAGE_EXTRAS, VEHICLE_IMAGE_CLASS_META, vehicleImageKey} = context.__vehicleImageData;
const regular = Object.entries(BRANDS).flatMap(([brand, definition])=>
  Object.keys(definition.models).map(model=>({brand, model}))
);
const catalog = [...regular, ...Array.from(VEHICLE_IMAGE_EXTRAS)];

if(process.argv.includes('--json')){
  process.stdout.write(JSON.stringify(catalog));
  process.exit(0);
}

const missing=[];
for(const meta of Object.values(VEHICLE_IMAGE_CLASS_META)){
  const file=path.join(root,'assets','vehicles','backgrounds',`${meta.slug}.webp`);
  if(!fs.existsSync(file)) missing.push(path.relative(root,file));
}
for(const vehicle of catalog){
  const key=vehicleImageKey(vehicle.brand,vehicle.model);
  for(const paint of ['schwarz','silber']){
    const file=path.join(root,'assets','vehicles','colors',`${key}--${paint}.webp`);
    if(!fs.existsSync(file)) missing.push(path.relative(root,file));
  }
}

console.log(`Fahrzeugmodelle: ${catalog.length}`);
console.log(`Erwartete Lackbilder: ${catalog.length*2}`);
console.log(`Fehlende Dateien: ${missing.length}`);
if(missing.length){
  console.log(missing.slice(0,30).join('\n'));
  if(missing.length>30) console.log(`... und ${missing.length-30} weitere`);
  process.exitCode=1;
}

