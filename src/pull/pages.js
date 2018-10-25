import fs from 'fs'
import doRequest from '../helpers/doRequest'

export default async function (dir, res) {
  // Get Pages
  try {
    const pages = JSON.parse(await doRequest(res.data.APP_URL + '/fast-app-pages/submission?limit=99999'))
    fs.writeFile(dir + '/Pages.json', JSON.stringify(pages), 'utf8', function(err) {
      if (err) throw err
    })
  } catch (err) {
    console.error(err)
  }
}
