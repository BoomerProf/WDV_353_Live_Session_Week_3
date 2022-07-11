// three things
const { dropDB, insertDB } = require('../db/db');
const service = require('../services/service');

const loadDB = async () => {
  // drop a db
  let dbArray = [];
  try {
    // drop
    const dropped = await dropDB();
    if (dropped) {
      console.log('DB dropped ' + dropped);
    } else {
      console.log('Nothing dropped');
    }
  } catch (err) {
    console.error('Error dropping database: ' + err.message);
  }

  // service call to get crypto
  try {
    const result = await service.getCrypto();
    if (result) {
      result.data.forEach((coin) => {
        dbArray.push(coin);
      });
    }
  } catch (err) {
    console.error('Error getting crypto: ' + err.message);
  }

  // insert into db with an array
  try {
    const inserted = await insertDB(dbArray);
    console.log(inserted);
    if (inserted) {
      console.log('coins inserted? ', inserted.acknowledged);
    }
  } catch (err) {
    console.error('Error inserting into the db: ' + err.message);
  }
};

exports.loadDB = loadDB;
