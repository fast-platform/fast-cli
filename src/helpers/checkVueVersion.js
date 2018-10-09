import execute from './execute'
import semver from 'semver'

export default async function() {
  try {
    const { stdout } = await execute('vue -V')
    const vueVersion = semver.clean(stdout)
    const { fastMinimalDependiencies } = require('../../package.json')
    if (!semver.gt(vueVersion, fastMinimalDependiencies.vue)) {
      console.log(
        'You are running an outdated version of vue-cli. Please upgrade by running\n'
      )
      console.log('\t yarn global upgrade @vue/cli')
      console.log('\t npm update -g @vue/cli')
      return
    }
  } catch (error) {
    console.log('You must have vue-cli installed, Please install by running\n')
    console.log('\t yarn global add @vue/cli')
    console.log('\t npm install -g @vue/cli\n')
  }
}
