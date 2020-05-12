const { compile } = require('../lib/compile');
const { gegTsConfigPath } = require('../lib/utils');

let tsConfigPath = gegTsConfigPath(process.argv);

compile(tsConfigPath)();
