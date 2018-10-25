import fs from 'fs'

export default async function (dir) {
  // Store last update
  const lastUpdate = JSON.stringify({date: Math.round((new Date()).getTime() / 1000)})

  fs.writeFile(dir + '/lastUpdate.json', lastUpdate, 'utf8', function(err) {
    if (err) throw err
  })
}
