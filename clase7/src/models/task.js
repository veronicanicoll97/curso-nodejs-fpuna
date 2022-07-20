const sequelize = require('../database/database')

const Sequelize = require('sequelize')
const DataType = Sequelize.DataTypes

const Tarea = sequelize.define('tareas', {
    id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataType.STRING
    },
    done: {
        type: DataType.BOOLEAN,
        defaultValue: false
    }
});

module.exports = Tarea;