import fs from 'fs'
import doRequest from '../helpers/doRequest'

export default async function (dir, res) {
  // Get Forms
  try {
    const forms = JSON.parse(await doRequest(res.data.APP_URL + '/form?limit=99999'))
    fs.writeFile(dir + '/Forms.json', JSON.stringify(forms), 'utf8', function(err) {
      if (err) throw err
    })
  } catch (err) {
    console.error(err)
  }
}
