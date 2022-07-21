const Sequelize = require('sequelize');

const sequelize = new Sequelize('apidb', 'postgres', '131070', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;