require('dotenv').config();
const axios = require('axios');

const getCrypto = async () => {
  console.log('Real Crypto');
  return await axios.get(process.env.url);
};

exports.getCrypto = getCrypto;
