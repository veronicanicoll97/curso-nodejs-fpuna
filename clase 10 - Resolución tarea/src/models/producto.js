const sequelize = require('../database/database');
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;


const Producto = sequelize.define('producto', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    }
});


module.exports = Producto
