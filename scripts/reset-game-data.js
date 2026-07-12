const fs = require('fs/promises');
const path = require('path');

const appData = process.env.APPDATA || (
  process.platform === 'darwin' && process.env.HOME
    ? path.join(process.env.HOME, 'Library', 'Application Support')
    : null
);

if (!appData) {
  console.error('Der native App-Datenordner konnte nicht bestimmt werden.');
  process.exit(1);
}

const userDataDir = process.env.AUTOMOTIVE_EMPIRE_USER_DATA_DIR || path.join(appData, 'Automotive Empire');
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

  console.log('Automotive Empire Spieldaten zurueckgesetzt.');
  console.log(`UserData: ${userDataDir}`);
  for (const item of removed) console.log(`- ${item}`);
}

resetGameData().catch(error => {
  console.error(error);
  process.exit(1);
});
