import generate from '../helpers/generate'
import checkFast from '../helpers/checkFast'

export default async function(params) {
  if (!params.cmd) {
    throw new Error(
      '\n You must provide a page name, try with "fast generate:page <page-name>"'
    )
  }

  if (await checkFast()) return

  await generate(['route', 'generate'])
  // await execute(`cd ${name} && rm -rf README.md`)
}
