import execute from './execute'
import semver from 'semver'

export default async function() {
  try {
    const { stdout } = await execute('docker -v')
    const version = stdout.split(' ')[2].replace(',', '')
    const dockerVersion = semver.valid(version, true)
    const { fastMinimalDependiencies } = require('../../package.json')

    if (
      !semver.gt(semver.clean(dockerVersion), fastMinimalDependiencies.docker)
    ) {
      console.log(
        '\nYou are running an outdated version of Docker. Please upgrade by running:\n'
      )
      console.log('\t sudo apt-get remove docker docker-engine docker.io')
      console.log('\t sudo apt-get update')
      console.log('\t sudo apt-get install docker-ce')
      console.log('\t apt-cache madison docker-ce')
      console.log('\t sudo apt-get install docker-ce=<VERSION>')
      return
    }
  } catch (error) {
    console.log(error)
    console.log('\nYou must have docker installed, Please install by running\n')
    console.log('\t sudo apt-get update')
    console.log(
      '\t sudo apt-get install apt-transport-https ca-certificates curl software-properties-common'
    )
    console.log(
      '\t curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -'
    )
    console.log('\t sudo apt-key fingerprint <FINGERPRINT>')
    console.log(
      '\t sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" \n'
    )
  }
}
