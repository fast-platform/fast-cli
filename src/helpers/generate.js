import { runner } from 'hygen'
import Logger from 'hygen/lib/logger'
import path from 'path'

export default async function(args) {
  const defaultTemplates = path.join(__dirname, '_templates')
  try {
    await runner(args, {
      templates: defaultTemplates,
      cwd: process.cwd(),
      logger: new Logger(console.log.bind(console)),
      debug: true
    })
  } catch (e) {
    throw new Error(e.message)
  }
}
