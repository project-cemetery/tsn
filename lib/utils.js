const { resolve } = require('path');

const getTsConfigPath = (args = []) => {
  let tsConfigPath = resolve(process.cwd(), 'tsconfig.json');

  const tsConfigArg = args.find((arg) => arg.endsWith('.json'));
  if (tsConfigArg) {
    tsConfigPath = resolve(process.cwd(), tsConfigArg);
  }

  return tsConfigArg;
};

module.exports = { gegTsConfigPath };
