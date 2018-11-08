import fs from 'fs'

export default async function() {
  const fastDirname = '.fast'
  if (!(await fs.existsSync(fastDirname))) {
    console.log(
      'You are calling a fast function outside of fast project, Please install by running\n'
    )
    console.log('\t fast init <project-name>')
    return false
  }
}
