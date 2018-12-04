import { exec } from 'child-process-promise'
import loader from './loader'

export default function() {
  exec(`docker image inspect fast/android-compiler:latest`)
    .then(function(result) {
      const stdout = JSON.parse(result.stdout)
      loader.succeed(`Image installed: ${stdout[0].Id}`)
    })
    .catch(function(err) {
      console.error('ERROR: ', err)
    })
}
