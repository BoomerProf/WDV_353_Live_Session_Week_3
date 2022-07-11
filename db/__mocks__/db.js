const connect = async () => {
  console.log('Mocked Connection');
};

const dropDB = async () => {
  console.log('Mocked Dropped');
  return Promise.resolve(true);
};

const insertDB = async (array) => {
  console.log('Mocked Insert');
  return Promise.resolve({ acknowledged: true });
};

const disconnect = async () => {
  console.log('Mocked Disconnect');
};

module.exports = { connect, insertDB, dropDB, disconnect };
