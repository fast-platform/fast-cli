import 'babel-polyfill'
import fs from 'fs'
import { Fluent } from 'fast-fluent'
import formio from 'fluent-formio'
import to from 'await-to-js'

export default async function(file, options) {
  console.log(file, options.url, options.path, options.dstKey)

  if (!options.url) {
    console.error('No url specified.')
    return
  }

  if (!options.path) {
    console.error('No form or resource path specified.')
    return
  }

  if (!options.dstKey) {
    console.error('No API key provided.')
    return
  }

  const data = JSON.parse(fs.readFileSync(file, 'utf-8'))

  await Fluent.config({
    REMOTE_CONNECTORS: [{
      name: 'formio',
      baseUrl: options.url,
      connector: formio
    }]
  })

  const model = Fluent.model({
    properties: {
      name: 'submission',
      config: {
        remote: {
          path: options.path,
          token: options.dstKey
        }
      }
    }
  })()

  const collection = Fluent.collect(data)
  const errors = []

  try {
    console.time('saveChunk')
    await collection.chunkApply(200, async (d) => {
      const [error, result] = await to(model.remote().insert(d))

      if (error) {
        errors.push({ original: d, error })
      }
    })
    const time = console.timeEnd('saveChunk')

    console.log(`Took ${time} seconds, with ${errors.length} errors.`)
  } catch (e) {
    console.error(e)
  }
}
