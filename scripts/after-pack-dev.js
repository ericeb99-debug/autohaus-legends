const fs = require('fs/promises');
const path = require('path');

exports.default = async function afterPackDev(context) {
  const updateConfigPath = path.join(context.appOutDir, 'resources', 'app-update.yml');
  await fs.rm(updateConfigPath, { force: true });
};
