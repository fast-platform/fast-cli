import {exec} from 'child_process'

//** Execute safe a terminal command */
export default async function(command) {
  return new Promise(function(resolve, reject) {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(new Error(error))
      } else {
        resolve({stdout, stderr})
      }
    })
  })
}
