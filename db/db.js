const MongoClient = require('mongodb').MongoClient;
let connection;
let db;
let coins;

const connect = async () => {
  connection = await MongoClient.connect(process.env.db_url, {
    useNewUrlParser: true,
  });
  db = await connection.db(process.env.db);
  coins = db.collection(process.env.collection);
};

const dropDB = async () => {
  await connect();
  const results = await coins.drop();
  await disconnect();
  return results;
};

const insertDB = async (array) => {
  await connect();
  console.log('coins', coins);
  const results = await coins.insertMany(array);
  await disconnect();
  return results;
};

const disconnect = async () => {
  await connection.close();
};

module.exports = { connect, insertDB, dropDB, disconnect };
