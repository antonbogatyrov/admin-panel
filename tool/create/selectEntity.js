const inquirer = require('inquirer');
const config = require('./config');

module.exports = () => inquirer
  .prompt([{
    type: 'list',
    message: 'Select what u need to create',
    name: 'entity',
    choices: config.entity,
  }]);
