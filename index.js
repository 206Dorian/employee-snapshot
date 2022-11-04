// Included packages needed for this application & all Const's
const inquirer = require('inquirer');
const mysql2 = require('mysql2');
const { exit } = require('process');
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
        choices: ['View all departments', new inquirer.Separator(), 'View all roles', new inquirer.Separator(), 'View all employees', new inquirer.Separator(),'Add a department', new inquirer.Separator(), 'Add a role', new inquirer.Separator(), 'Add an employee', new inquirer.Separator(), 'Update an employee role', new inquirer.Separator(), 'Exit?']

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
          updateEmployeeRole();
          break;

          case 'Exit?':
            default:
          return
          console.log('Bye Bye')
        // **NEED TO ADD QUIT OPTION**
      }
    }
    )
}

// *FUNCTIONS FOR ALL QUERY OPTIONS*
function viewDepartments() {
  // Query database
  db.query('SELECT * FROM department', function (err, results) {
    console.table(results);
  });
  start()
}

function viewRoles() {
  // Query database
  db.query('SELECT * FROM roles', function (err, results) {
    console.table(results);
  });
  start()
}

function viewEmployees() {
  // Query database
  db.query('SELECT * FROM employees', function (err, results) {
    console.table(results);
  });
  start()
}

function addDepartment() {
  // // **ADD PROMPT QUESTIONS LIKE BEFORE  Query database
  db.query('SELECT * FROM department', function (err, results) {
    console.table(results);
  });
  start()
}

function addRole() {
  // **ADD PROMPT QUESTIONS LIKE BEFORE Query database
  db.query('SELECT * FROM role', function (err, results) {
    console.table(results);
  });
  start()
}

function addEmployee() {
  // // **ADD PROMPT QUESTIONS LIKE BEFORE  Query database
  db.query('SELECT * FROM employee', function (err, results) {
    console.table(results);
  });
  start()
}

function updateEmployeeRole() {
  // ???
  db.query('SELECT * FROM employee', function (err, results) {
    console.table(results);
  });
  start()
}
