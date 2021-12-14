const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    HOST: process.env.REACT_APP_DB_HOST,
    USER: process.env.REACT_APP_DB_USER,
    PASSWORD: process.env.REACT_APP_DB_PASSWORD,
    DB: process.env.REACT_APP_DB_NAME,
    dialect: process.env.REACT_APP_DB_DIALECT,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };