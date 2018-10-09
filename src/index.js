#!/usr/bin/env node
import program from 'commander'
import init from './init'
// import build from './build'
import colors from 'colors/safe'
// import create from './create'
// import checkVersion from './helpers/checkVersion'
import './handleErrors'

const run = function(action) {
  return async function(...args) {
    try {
      await checkVersion()
      await action(...args)
    } catch (e) {
      console.error(colors.red('Error: ' + e.message))
    }
  }
}

program
  .command('init')
  .description('Creates a new Fast Client project')
  .option('--name [name]', 'Name of the project')
  .action(run(init))

// program
//   .command('build')
//   .description('Compiles an Orionjs app and exports it to a simple nodejs app')
//   .option('-o, --output [output]', 'Output directory')
//   .action(run(build))

// program
//   .command('create')
//   .description('Creates a new Orionjs project')
//   .option('--name [name]', 'Name of the project')
//   .option('--kit [kit]', 'Which starter kit to use')
//   .action(run(create))

program.version(require('../package.json').version, '-v --version')

program.parse(process.argv)

if (!process.argv.slice(2).length) {
  program.outputHelp()
}
