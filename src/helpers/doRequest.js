import progress from 'request-progress'
import request from 'request'

export default function (url) {
  return new Promise(function (resolve, reject) {
    progress(
      request(url, function (error, res, body) {
        if (!error && res.statusCode === 200) {
          resolve(body)
        } else {
          reject(error)
        }
      })
    ).on('progress', state => {
      console.log(state)
    }).on('end', () => {})
  })
}
