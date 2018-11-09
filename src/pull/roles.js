import fs from 'fs'
import doRequest from '../helpers/doRequest'

export default async function (dir, res, bar) {
  // Get Roles file
  try {
    bar.tick({ name: 'roles' })
    const rolesRes = await doRequest(res.data.APP_URL + '/access')
    const roles = {...rolesRes.roles, fastUpdated: Math.round((new Date()).getTime() / 1000)}
    fs.writeFile(dir + '/Roles.json', JSON.stringify(roles), 'utf8', function(err) {
      if (err) throw err
    })
  } catch (err) {
    console.error(err)
  }
}
