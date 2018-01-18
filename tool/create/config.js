module.exports = {
  entity: [
    { id: 1, name: 'reducer', url: './src/reducer/' },
    { id: 2, name: 'container', url: './src/container/' },
    { id: 3, name: 'component', url: './src/component/' },
  ],
  getUrlByEntity(entity) {
    return `./src/${entity}/`;
  },
};

