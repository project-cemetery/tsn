const { readFileSync } = require('fs');
const tsConfigPaths = require('tsconfig-paths');

const { getTsConfigPath } = require('./utils');

const runtime = (args) => {
  const tsConfig = JSON.parse(readFileSync(getTsConfigPath(args)).toString());
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
