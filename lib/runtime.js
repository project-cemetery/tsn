const { readFileSync } = require('fs');
const { resolve, dirname } = require('path');
const tsConfigPaths = require('tsconfig-paths');

const { getTsConfigPath } = require('./utils');

const runtime = (args) => {
  const tsConfigPath = getTsConfigPath(args);
  const tsConfig = JSON.parse(readFileSync(tsConfigPath).toString());
  const { paths, baseUrl } = tsConfig.compilerOptions;

  tsConfigPaths.register({
    baseUrl: resolve(dirname(tsConfigPath), baseUrl),
    paths,
  });
};

module.exports = {
  runtime,
};
