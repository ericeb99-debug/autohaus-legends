const fs = require('fs/promises');
const path = require('path');

const appData = process.env.APPDATA;

if (!appData) {
  console.error('APPDATA ist nicht gesetzt.');
  process.exit(1);
}

const userDataDir = process.env.AUTOHAUS_LEGENDS_USER_DATA_DIR || path.join(appData, 'Autohaus Legends');
const savesDir = path.join(userDataDir, 'Saves');
const storageDirs = ['Local Storage', 'Session Storage'];
const saveFilePattern = /^(profiles(?:\.backup)?|save_[a-z0-9-]+(?:\.backup)?)\.json$/i;

async function resetGameData() {
  const removed = [];

  await fs.mkdir(savesDir, { recursive: true });
  const entries = await fs.readdir(savesDir, { withFileTypes: true }).catch(() => []);

  for (const entry of entries) {
    if (!entry.isFile() || !saveFilePattern.test(entry.name)) continue;
    const file = path.join(savesDir, entry.name);
    await fs.unlink(file).catch(() => {});
    removed.push(file);
  }

  for (const dir of storageDirs) {
    const fullPath = path.join(userDataDir, dir);
    await fs.rm(fullPath, { recursive: true, force: true }).catch(() => {});
    removed.push(fullPath);
  }

  console.log('Autohaus Legends Spieldaten zurueckgesetzt.');
  console.log(`UserData: ${userDataDir}`);
  for (const item of removed) console.log(`- ${item}`);
}

resetGameData().catch(error => {
  console.error(error);
  process.exit(1);
});
