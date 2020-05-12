const { readFileSync } = require('fs');
const tsConfigPaths = require('tsconfig-paths');

const { gegTsConfigPath } = require('./utils');

const runtime = (tsConfig) => {
  const tsConfig = JSON.parse(readFileSync(gegTsConfigPath).toString());
  const { paths } = tsConfig.compilerOptions;

  const baseUrl = resolve(__dirname, '.');
  tsConfigPaths.register({
    baseUrl,
    paths,
  });
};

module.exports = {
  runtime,
};
