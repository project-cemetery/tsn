const { tsToNode } = require('../lib')
const { resolve } = require('path')

let tsConfigPath = resolve(process.cwd(), 'tsconfig.json')

const arg = process.argv[process.argv.length - 1]
if (arg.includes('.json')) {
    tsConfigPath = resolve(process.cwd(), arg)
}

tsToNode(tsConfigPath)()
