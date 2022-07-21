const sequelize = require('../database/database');

const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

const Categoria = sequelize.define('categoria', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
});

module.exports = Categoria;
