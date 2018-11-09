import fs from 'fs'
import doRequest from '../helpers/doRequest'

export default async function (dir, res, bar) {
  // Get Forms
  try {
    bar.tick({ name: 'forms' })
    const forms = await doRequest(res.data.APP_URL + '/form?limit=99999')
    fs.writeFile(dir + '/Forms.json', JSON.stringify(forms), 'utf8', function(err) {
      if (err) throw err
    })
  } catch (err) {
    console.error(err)
  }
}
