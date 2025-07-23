const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    database: 'jynx_dev',
    username: 'postgres',
    password: 'full$t4ck',
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    logging: console.log,
})

sequelize.authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });