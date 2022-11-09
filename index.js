// Included packages needed for this application & all Const's
const inquirer = require('inquirer');
const mysql2 = require('mysql2');
const { exit } = require('process');
// require('console.table');


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
        choices: ['View all departments', new inquirer.Separator(), 'View all roles', new inquirer.Separator(), 'View all employees', new inquirer.Separator(), 'Add a department', new inquirer.Separator(), 'Add a role', new inquirer.Separator(), 'Add an employee', new inquirer.Separator(), 'Update an employee role', new inquirer.Separator(), 'Exit?', new inquirer.Separator(), new inquirer.Separator(), new inquirer.Separator()]

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
          console.log('Bye Bye')
          break;
        default:
          console.log(ERROR)
          return;

      }
    }
    )
}

// *FUNCTIONS FOR ALL QUERY OPTIONS*
function viewDepartments() {
  // Query database
  db.query('SELECT * FROM department;', function (err, results) {
    console.log('\n');

    console.table(results);
  });
  start()
}

// roleChoices()
// function roleChoices() {
//   let choices=[]
//     let roles = db.query('SELECT department.id, department.name, FROM department')
//     choices.push(roles)
//     console.log(choices)
// }

function viewRoles() {
  // Query database
  db.query('SELECT * FROM role;', function (err, results) {

    console.table(results);
  });
  start()
}

function viewEmployees() {
  // Query database
  db.query('SELECT * FROM employee;', function (err, results) {
    console.log('\n');

    console.table(results);
  });
  start()
}

function addDepartment() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'department',
        message: 'what department?'
      },

    ])
    .then((answers) => {
      (answers.department)
      db.query(`INSERT INTO department (name) VALUES ('${answers.department}');`);
      console.log(answers.department)
      start()
    })
}

function addRole() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'role',
        message: 'what is the new role?'
      },
      {
        type: 'input',
        name: 'salary',
        message: 'What is their salary?',
      },
      {
        type: 'list',
        name: 'department',
        message: 'What is their department?',
        choices: ['Analysis', new inquirer.Separator(), 'Accounting', new inquirer.Separator(), 'I.T.', new inquirer.Separator(), 'Maintenance', new inquirer.Separator(),]

        //  *Need to do a function and add query?? 
        //  choices: db.query('SELECT department.id, department.name FROM department')
      },
    ])
    .then((answers) => {
      (answers.name, answers.salary, answers.department)
      db.query(`INSERT INTO role (name, salary, department) VALUES ('${answers.role}, ${answers.salary}, ${answers.department}');`)
      console.log(role)

    });
  start()
};


function addEmployee() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'first name',
        message: 'what is their first name?'
      },
      {
        type: 'input',
        name: 'last name',
        message: 'What is their last name?',
      },
      {
        type: 'input',
        name: 'role',
        message: 'What is their role?',
      },
      {
        type: 'input',
        name: 'manager',
        message: 'Who is their manager?',
      },
    ])
    .then((answers) => {
      (answers.firstname, answers.lastname, answers.role, answers.manager)
      db.query(`INSERT INTO employee VALUE ${answers.first} ${answers.last} ${answers.role}, ${answers.manager};`,
        function (err, results) {
          console.log(employee)
          console.table(results);
        });
      start()
    });
}


// function (err, results) {
//   console.table(results);
// };
// start()

// function updateEmployeeRole() {
//   // ???
//   db.query('SELECT * FROM employee', function (err, results) {
//     console.table(results);
//   });
//   start()
// }
