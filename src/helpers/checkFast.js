import fs from 'fs'
import path from 'path'

const checkIsFastProject = function() {
  const fastDirname = path.dirname()
  if (fs.existsSync(fastDirname)) return true
  return false
}

export default checkIsFastProject
