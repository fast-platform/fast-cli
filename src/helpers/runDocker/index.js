import checkImage from './checkImage'
import checkDocker from '../checkDocker'
import loader from './loader'
import sleep from '../sleep'
export default async function({ image, src }) {
  loader.start()
  await sleep(1000)
  loader.start("Check Docker it's installed")
  await sleep(1000)
  await checkDocker()
  loader.succeed('Docker correctly installed')
  await sleep(1000)
  loader.start('Check if Android docker image is installed')
  await sleep(1000)
  await checkImage()
}
