////////////////////////////////////////
// Constant Variables and Base Arrays //
////////////////////////////////////////
const inquirer = require("inquirer");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const fs = require("fs");


/////////
// Run //
/////////

init();

async function init() {
  try {
    let empSpecificData;
    let { name } = await promptName();
    name = capWords(name);
    let { id } = await promptId();
    let { email } = await promptEmail();
    let { role } = await promptRole();
    switch (role) {
      case "Manager":
        empSpecificData = await promptOfficeNum();
        let manager = new Manager(name, id, email, empSpecificData);
        return manager;
      case "Engineer":
        empSpecificData = await promptGithub();
        let engineer = new Engineer(name, id, email, empSpecificData);
        return engineer;
      case "Intern":
        empSpecificData = await promptSchool();
        let intern = new Intern(name, id, email, empSpecificData);
        return intern;
    }

    //   let { username } = await promptName();
    //   let htmlGen = generateHTML(profile.data);
    //   writeFileAsync(`${username}.html`, htmlGen).then(function() {
    //     console.log("File Created.");
    //     pdfGen(htmlGen, username)
    //   });
    console.log(manager, engineer, intern);
  } catch (err) {
    console.log(err);
  }
}

//////////////////////
// Inquirer prompts //
//////////////////////

function promptName() {
  const name = inquirer.prompt({
    type: "input",
    message: "What is the new Employee's first and last name?",
    name: "name"
  });
  return name;
}

function promptId() {
  const id = inquirer.prompt({
    type: "input",
    message: "What is the new Employee's designated ID number?",
    name: "id"
  });
  return id;
}

function promptEmail() {
  const email = inquirer.prompt({
    type: "input",
    message: "What is the new Employee's company email?",
    name: "email"
  });
  return email;
}

function promptRole() {
  const role = inquirer.prompt({
    type: "list",
    message: "What is the new Employee's company email?",
    name: "role",
    choices: ["Manager", "Engineer", "Intern"]
  });
  return role;
}

//Manager Prompt

function promptOfficeNum() {
  const officeNum = inquirer.prompt({
    type: "input",
    message: "What is the Manager's office number?",
    name: "officeNumber"
  });
  return officeNum;
}

//Engineer Prompt

function promptGithub() {
    const username = inquirer.prompt({
        type: "input",
        message: "What is the Engineer's GitHub username?",
        name: "username"
      });
      return username;
    }

function promptSchool() {
    const school = inquirer.prompt({
        type: "input",
        message: "What is the Intern's school?",
        name: "school"
      });
      return school;
}
//////////////////////////////////
// Validate or format functions //
//////////////////////////////////

//Capitalize each word in a string
function capWords(str) {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(" ");
}
