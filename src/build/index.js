import inquirer from 'inquirer'
import compiler from '../helpers/compiler'
export default async function() {
  inquirer
    .prompt([
      {
        type: 'checkbox',
        message: 'Select operative system you want to compile',
        name: 'devices',
        choices: [
          new inquirer.Separator('==== Mobile ===='),
          {
            name: 'Android'
          },
          {
            name: 'iOS'
          },
          new inquirer.Separator('==== Desktop ===='),
          {
            name: 'Windows'
          },
          {
            name: 'OSX'
          }
        ],
        validate: function(answer) {
          if (answer.length < 1) {
            return 'You must choose at least one topping.'
          }
          return true
        }
      }
    ])
    .then(async answers => {
      await compiler(answers)
    })
}
