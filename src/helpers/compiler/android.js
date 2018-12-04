import runDocker from '../runDocker'

export default async function() {
  await runDocker({
    image: 'fastjs/android-compiler',
    src: '/app'
  })
}
