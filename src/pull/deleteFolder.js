import fs from 'fs'
import path from 'path'

export default async function (dir) {
  // Delete all files in folder
  fs.readdir(dir, (err, files) => {
    if (err) throw err

    for (const file of files) {
      fs.unlink(path.join(dir, file), err => {
        if (err) throw err
      })
    }
  })
}
