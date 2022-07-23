const Sequelize = require('sequelize');
const environments = require('../environments/environments');


const sequelize = new Sequelize(
    environments.databaseName, environments.databaseUser, 
    environments.databasePassword, 
{
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;