import fs from 'fs'
import doRequest from '../helpers/doRequest'

export default async function (dir, url) {
  // Get Configuration file from Form.io
  let res

  try {
    res = JSON.parse(await doRequest(url))
    fs.writeFile(dir + '/Configuration.json', JSON.stringify(res), 'utf8', function(err) {
      if (err) throw err
    })
  } catch (err) {
    console.error(err)
  }

  return res
}
