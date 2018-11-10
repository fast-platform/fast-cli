import { spawn } from 'child_process'

export default async function (params) {
  const command = 'quasar'
  const commandParams = ['dev']

  await new Promise(async function(resolve, reject) {
    spawn(command, commandParams, { stdio: 'inherit', shell: true })
      .on('exit', (code, signal) => {
        if (!signal) {
          resolve()
        } else {
          reject(new Error(`Process ended with code ${code} and signal ${signal}`))
        }
      })
      .on('error', err => {
        reject(new Error(err))
      })
  })
}
