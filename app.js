const { loadDB } = require('./controller/controller');

const execute = async () => {
  await loadDB();
  process.exit(0);
};

execute();
