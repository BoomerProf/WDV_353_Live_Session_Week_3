const { connect, dropDB, insertDB, disconnect } = require('./db');
require('dotenv').config();

jest.mock('./db');

describe('Test DB Fucntions', () => {
  test('As a user I want to drop the database', async () => {
    await connect();
    const result = await dropDB();
    console.log('drop result:', result);
    expect(result).toEqual(true);
    await disconnect();
  });

  test('As a user I want to insert into the database', async () => {
    await connect();
    let dbArray = [{ currency: 'XRP', price: '.32' }];
    const result = await insertDB(dbArray);
    console.log('insert result:', result.acknowledged);
    expect(result.acknowledged).toEqual(true);
    await disconnect();
  });
});
