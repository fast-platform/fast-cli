import execute from './execute'
import semver from 'semver'

export default async function() {
  try {
    const { stdout } = await execute('quasar -v')
    const quasarVersion = semver.clean(stdout)
    const { fastMinimalDependiencies } = require('../../package.json')
    if (!semver.gt(quasarVersion, fastMinimalDependiencies.quasar)) {
      console.log(
        'You are running an outdated version of quasar-cli. Please upgrade by running\n'
      )
      console.log('\t yarn global upgrade quasar-cli')
      console.log('\t npm update -g quasar-cli')
      return
    }
  } catch (error) {
    console.log('You must have vue-cli installed, Please install by running\n')
    console.log('\t yarn global add quasar-cli')
    console.log('\t npm install -g quasar-cli\n')
  }
}
