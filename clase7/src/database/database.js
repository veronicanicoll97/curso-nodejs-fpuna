const Sequelize = require('sequelize')

const sequelize = new Sequelize('proyectotest', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize