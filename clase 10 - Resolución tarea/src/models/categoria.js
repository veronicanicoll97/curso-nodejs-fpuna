const sequelize = require('../database/database');
const Producto = require("./producto")
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

Categoria.hasMany(Producto, {
  foreignKey: 'id_categoria',
  sourceKey: 'id',
  onDelete: 'CASCADE'
})


Producto.belongsTo(Categoria, {
  foreignKey: 'id_categoria',
  targetId: 'id'
})


module.exports = Categoria;