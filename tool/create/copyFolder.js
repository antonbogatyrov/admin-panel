/* eslint-disable no-console */
const fse = require('fs-extra');
const { join } = require('path');
const config = require('./config');

module.exports = async function copyFolder({ entity, name }) {
  const src = config.getUrlByEntity(entity);

  await fse.copy(join(src, 'Base'), join(src, name));
  console.log(`${entity} ${name} created.`);
};
