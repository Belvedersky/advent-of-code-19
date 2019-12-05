/*eslint-env node*/
const marked = require("marked");
const TerminalRenderer = require("marked-terminal");
const fs = require("fs");
const inquirer = require("inquirer");

marked.setOptions({
  renderer: new TerminalRenderer({
    width: 50,
    reflowText: true,
    showSectionPrefix: true,
    unescape: false,
    emoji: true
  })
});

const files = fs
  .readdirSync("./", { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .filter(dirent => dirent != "node_modules");

inquirer
  .prompt({
    type: "list",
    name: "action",
    message: "What do you want to do?",
    choices: [...files, new inquirer.Separator(), "Close"]
  })
  .then(data => {
    if(data.action =="Close"){
      console.log("Goodbye!")
    }
    else{
    console.clear();
    fs.readFile(`${data.action}/README.md`, "utf8", (err, data) => {
      if (err) throw err;
      console.log(marked(data));
    });
  }
  });
  

// Show the parsed data
