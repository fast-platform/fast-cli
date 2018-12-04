import Ora from 'ora'

const spinner = new Ora({
  text: 'Starting build proccess for android',
  spinner: process.argv[2]
})

export default spinner
