const sequelize = require('../database/database')

const Sequelize = require('sequelize')
const DataType = Sequelize.DataTypes

const Tarea = require('./task')

const Proyecto = sequelize.define('projects', {
    id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataType.STRING
    },
    priority: {
        type: DataType.INTEGER
    },
    description: {
        type: DataType.STRING
    }
},{
    timestamps: false
});

Proyecto.hasMany(Tarea, {
    foreignKey: 'projectId',
    sourceKey: 'id',
    onDelete: 'CASCADE'
});

Tarea.belongsTo(Proyecto, {
    foreignKey: 'projectId',
    targetId: 'id'
})

module.exports = Proyecto