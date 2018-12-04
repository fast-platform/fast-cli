import android from './android'

// Here we just select the device we want to compile
export default async function({ devices }) {
  if (devices.includes('Android')) await android()
}
