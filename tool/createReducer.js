const prompt = require('prompt');
const { readdir, lstatSync } = require('fs');
const util = require('util');
const { join } = require('path');
const fse = require('fs-extra');

const read = util.promisify(readdir);
const isDirectory = source => lstatSync(source).isDirectory();

prompt.start();

const src = 'src/reducer/';

const link = 'reducer name';

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
    console.log('\x1b[31m', `reducer ${name} already exist.`);
    return 0;
  }
  await fse.copy(join(src, 'base'), join(src, name));
  console.log(`reducer ${name} created.`);
  return 1;
});
