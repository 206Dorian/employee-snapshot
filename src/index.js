// Included packages needed for this application & all Const's
const inquirer = require('inquirer');
const fs = require('fs');
const writefinalHtml = require('./src/writefile')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')

const dreamTeam = []

//ADD MANAGER CREDENTIALS
start()
function start() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'what is your name?'
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is your id?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
      },
      {
        type: 'input',
        name: 'office',
        message: 'What is your Office?',
      },
    ])
    .then((answers) => {
      const manager = new Manager(answers.name, answers.id, answers.email, answers.office)
      dreamTeam.push(manager)
      buildTeam()
    }
    )
}

//*THIS WILL BE ASKING WHAT TYPE OF EMPLOYEE*
function buildTeam() {
  inquirer
    .prompt([
      //Pick Engineer, Employee, Intern. 
      {
        type: 'list',
        name: 'selection',
        message: 'What employee type are you adding?',
        choices: ['Engineer', new inquirer.Separator(), 'Intern', new inquirer.Separator(), 'Finshed adding employees?']
      }
    ])
    .then((answers) => {
      switch (answers.selection) {
        case 'Engineer': engineerSelection();
          break;
        case 'Intern': internSelection()
        break;
        default:
          renderTeam()
      }
    })
}

function engineerSelection() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'what is their name?'
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is their id?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is their email?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is their Github?',
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
      dreamTeam.push(engineer)
      buildTeam()
    }
    )
}

function internSelection() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'what is their name?'
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is their id?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is their email?',
      },
      {
        type: 'input',
        name: 'school',
        message: 'What is their School?',
      },
    ])
    .then((answers) => {
      const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
      dreamTeam.push(intern)
      buildTeam()
    }
    )
}

function renderTeam() {
  fs.writeFile('./dist/index.html', writefinalHtml(dreamTeam), (err) =>
    err ? console.log(err) : console.log('Success!')
  );
}



