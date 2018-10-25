import fs from 'fs'
import getEnv from '../helpers/getEnv'
import deleteFolder from './deleteFolder'
import configuration from './configuration'
import roles from './roles'
import translations from './translations'
import pages from './pages'
import forms from './forms'
import lastUpdate from './lastUpdate'

export default async function (params) {
  if (!await fs.existsSync('./.env')) {
    console.error('.env does not exist or is not readable.')

    return
  }

  const OFFLINE_START = getEnv('OFFLINE_START')
  const FAST_CONFIG_ID = getEnv('FAST_CONFIG_ID')
  const FAST_CONFIG_URL = getEnv('FAST_CONFIG_URL')

  const dir = './.fast/offline'

  await deleteFolder(dir)

  if (OFFLINE_START === 'true') {
    const url = FAST_CONFIG_URL + 'configuration/submission/' + FAST_CONFIG_ID

    let res

    res = await configuration(dir, url)
    await roles(dir, res)
    await translations(dir, res)
    await pages(dir, res)
    await forms(dir, res)
    await lastUpdate(dir)
  }

  console.log('Form.io config files set!')
}
