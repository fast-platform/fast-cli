import fs from 'fs'

export default function (env) {
  const lines = fs.readFileSync('./.env').toString().trim().replace(/\r?\r/g, '').split(/\r|=|\n/)

  for (let i = 0; i < lines.length; i++) {
    if (lines[i] === env && i !== (lines.length - 1)) {
      return lines[i + 1]
    }
  }

  return ''
}
