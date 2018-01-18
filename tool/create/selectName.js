const inquirer = require('inquirer');
const util = require('util');
const { readdir } = require('fs');

const config = require('./config');

const read = util.promisify(readdir);

function enterName(entity, message) {
  return inquirer
    .prompt({
      message,
      type: 'input',
      name: 'name',
    })
    .then(result => ({ ...result, entity }));
}

function getMessage(entity, error) {
  if (error) return error;
  return `What's your ${entity} name`;
}

async function checkName({ name, entity }) {
  const url = config.getUrlByEntity(entity);
  const files = await read(url);
  const isEntityAlreadyExist = !!files.filter(file => (file === name)).length;
  if (isEntityAlreadyExist) throw new Error(`${name} already created, pls enter another name`);
  return { name, entity };
}

function selectName({ entity }, error) {
  const message = getMessage(entity, error);
  return enterName(entity, message)
    .then(checkName)
    .catch(e => selectName({ entity }, e));
}
module.exports = selectName;
