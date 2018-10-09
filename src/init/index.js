import execute from '../helpers/execute'

export default async function({ name }) {
  if (!name) {
    throw new Error('Please set the name of the app')
  }
  const repo = `https://github.com/fast-platform/`
  await execute(`git clone ${repo} ${name}`)
  await execute(`cd ${name} && rm -rf .git`)
  console.log('Your starter kit is ready')
  await execute(`cd ${name} && rm -rf README.md`)
}
