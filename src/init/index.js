import execute from '../helpers/execute'
import checkVueVersion from '../helpers/checkVueVersion'
import checkQuasarVersion from '../helpers/checkQuasarVersion'

export default async function(params) {
  const name = params.dir
  if (!params.cmd) {
    throw new Error(
      'You must provide a project name, try with "fast init <project-name>"'
    )
  }

  await checkVueVersion()
  await checkQuasarVersion()
  const repo = `https://github.com/fast-platform/fast-client`

  await execute(`git clone ${repo} ${name}`)
  await execute(`cd ${name} && rm -rf .git`)
  console.log(
    '\nYour Fast project its ready!. To start using just use the following commands\n'
  )
  console.log(`\t cd ${name}`)
  console.log('\t npm install')
  console.log('\t fast dev\n')
  // await execute(`cd ${name} && rm -rf README.md`)
}
