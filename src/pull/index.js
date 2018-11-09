import fs from 'fs'
import ProgressBar from 'progress'
import getEnv from '../helpers/getEnv'
import deleteFolder from './deleteFolder'
import configuration from './configuration'
import roles from './roles'
import translations from './translations'
import pages from './pages'
import forms from './forms'
import lastUpdate from './lastUpdate'

export default async function(params) {
  if (!(await fs.existsSync('./.env'))) {
    console.error('.env does not exist or is not readable.')

    return
  }

  // eslint-disable-next-line
  const FLUENT_FORMIO_BASEURL = getEnv('FLUENT_FORMIO_BASEURL')
  const FAST_CONFIG_URL = getEnv('FAST_CONFIG_URL')

  const dir = './.fast/offline'

  await deleteFolder(dir)

  // const url = FAST_CONFIG_URL + 'configuration/submission/' + FAST_CONFIG_ID

  const bar = new ProgressBar('    downloading [:bar] :percent :elapseds :name', {
    total: 6,
    complete: '=',
    incomplete: ' ',
    width: 30
  })

  let res = await configuration(dir, FAST_CONFIG_URL, bar)
  await roles(dir, res, bar)
  await translations(dir, res, bar)
  await pages(dir, res, bar)
  await forms(dir, res, bar)
  await lastUpdate(dir, bar)

  if (bar.complete) {
    console.log('Form.io config files set!')
  }
}
