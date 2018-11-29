#!/usr/bin/env node
import program from 'commander'
import init from './init'
import pull from './pull'
import runServer from './run'
import migrate from './migrate'
// import build from './build'
import colors from 'colors/safe'
import './helpers/fastLogo'
// import create from './create'
// import checkVersion from './helpers/checkVersion'
import './handleErrors'

const run = function(action) {
  return async function(dir, cmd) {
    // console.log(dir, cmd)
    try {
      // await checkVersion()
      await action({ dir, cmd })
    } catch (e) {
      console.error(colors.red('Error: ' + e.message))
    }
  }
};

program
  .command('init')
  .description('Creates a new Fast Client project')
  .option('--name [name]', 'Name of the project')
  .action(run(init))

// program
//   .command('generate:component')
//   .description('Creates a new Vue Component')

// program
//   .command('generate:page')
//   .description('Creates a new Page with custom route')

// program
//   .command('generate:translations')
//   .description('Creates a new translation group')

// program.command('shell').description('Interact with Fast project')

program
  .command('pull')
  .description('Gets Form.io config with .env information')
  .action(run(pull))

program
  .command('run')
  .description('Runs dev build for the current FAST project.')
  .action(run(runServer))

program
  .command('migrate <file>')
  .option('-u, --url [URL]', 'Existing project url')
  .option('-p, --path [Path to form]', 'Path where data should be imported')
  .option('-k, --dst-key [API key]', 'Form.io API key')
  .description('Migrate data from a JSON file to an existing FAST project')
  // eslint-disable-next-line
  .action((file, cmd) => {
    migrate(file, cmd)
  })

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
