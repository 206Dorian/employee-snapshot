// Included packages needed for this application & all Const's
const inquirer = require('inquirer');
const mysql2 = require('mysql2');
require('console.table');

// Connect to database
const db = mysql2.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: 'FreshZ45',
    database: 'company_db'
  },
  console.log(`Connected to the company_db database.`)
);

start()
function start() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'selection',
        message: 'What would you like to do?',
        choices: ['View all departments', new inquirer.Separator(), 'View all roles', new inquirer.Separator(), 'View all employees', 'Add a department', new inquirer.Separator(), 'Add a role', new inquirer.Separator(), 'Add an employee', new inquirer.Separator(), 'Update an employee role']
      },
    ])
    .then((answers) => {
      switch (answers.selection) {
        case 'View all departments':
          viewDepartments();
          break;

        case 'View all roles':
          viewRoles()
          break;

        case 'View all employees':
          viewEmployees();
          break;

        case 'Add a department':
          addDepartment()
          break;


        case 'Add a role':
          addRole();
          break;

        case 'Add an employee':
          addEmployee()
          break;

        case 'Update an employee role':
          updateEmployee();
          break;

        default:
          renderTeam()
      }
    }
    )
}

//*BUILD ALL FUNCTIONS 7 TOTAL*
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

  })


function viewDepartments() {
  // Query database
db.query('SELECT * FROM department', function (err, results) {
  console.log(results);
});
    
}

function allRoles() {
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



