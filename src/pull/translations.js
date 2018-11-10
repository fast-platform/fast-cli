import fs from 'fs'
import doRequest from '../helpers/doRequest'

export default async function (dir, res, bar) {
  // Get Translations
  try {
    bar.tick({ name: 'translations' })
    const trans = await doRequest(res.data.APP_URL + '/translations/submission?limit=99999')
    fs.writeFile(dir + '/Translations.json', JSON.stringify(trans), 'utf8', function(err) {
      if (err) throw err
    })
  } catch (err) {
    console.error(err)
  }
}
