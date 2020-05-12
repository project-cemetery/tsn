const { compile } = require('../lib/compile');
const { getTsConfigPath } = require('../lib/utils');

const tsConfigPath = getTsConfigPath(process.argv);

compile(tsConfigPath)();
