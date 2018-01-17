/* eslint-disable no-console */

const prompt = require('prompt');
const { readdir, lstatSync } = require('fs');
const util = require('util');
const { join } = require('path');
const fse = require('fs-extra');

const read = util.promisify(readdir);
const isDirectory = source => lstatSync(source).isDirectory();

prompt.start();

const src = 'src/container/';

const link = 'container name';

async function readFolder() {
  const folder = await read(src);
  return folder
    .map(name => join(src, name))
    .filter(isDirectory);
}


prompt.get([link], async (err, result) => {
  const name = result[link];
  const data = await readFolder();
  const folders = data.map(fullPath => fullPath.replace(src, ''));
  if (folders.includes(name)) {
    console.log('\x1b[31m', `container ${name} already exist.`);
    return 0;
  }
  await fse.copy(join(src, 'Base'), join(src, name));
  console.log(`container ${name} created.`);
  return 1;
});
