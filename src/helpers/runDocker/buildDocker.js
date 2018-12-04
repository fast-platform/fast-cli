// check if image exist
// if doesnt exist build docker
// run docker
import { spawn, exec } from 'child-process-promise'

export default async function() {
  const repo = 'https://github.com/fast-platform/fast-compilers.git#master'
  const compiler = 'Android'

  const build = spawn('docker', ['build', `${repo}:${compiler}`])
  const { childProcess } = build

  childProcess.stdout.on('data', function(data) {
    console.log(data.toString())
  })
  childProcess.stderr.on('data', function(data) {
    console.log('[spawn] stderr: ', data.toString())
  })

  build
    .then(function() {
      console.log('[spawn] done!')
    })
    .catch(function(err) {
      console.error('[spawn] ERROR: ', err)
    })
  // console.log('spawn')
  // spawn('docker', ['build', `${repo}:${compiler}`], {
  //   capture: ['stdout', 'stderr']
  // })
  //   .then(function(result) {
  //     console.log('[spawn] stdout: ', result.stdout.toString())
  //   })
  //   .catch(function(err) {
  //     console.error('[spawn] stderr: ', err.stderr)
  //   })
  // console.log('exec')
  // exec(`docker build ${repo}:${compiler}`)
  //   .then(function(result) {
  //     var stdout = result.stdout
  //     var stderr = result.stderr
  //     console.log('stdout: ', stdout)
  //     console.log('stderr: ', stderr)
  //   })
  //   .catch(function(err) {
  //     console.error('ERROR: ', err)
  //   })
}
