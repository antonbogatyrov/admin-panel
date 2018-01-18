const selectEntity = require('./selectEntity');
const selectName = require('./selectName');
const copyFolder = require('./copyFolder');

selectEntity()
  .then(selectName)
  .then(copyFolder);
