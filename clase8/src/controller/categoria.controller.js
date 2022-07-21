const Categoria = require('../models/categoria');

const createCategoria = async (req, res) => {
  try {
    const {nombre} = req.body;
    const newCategory = await Categoria.create({nombre});
    return res.status(201).json(newCategory);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

const getCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.findAll();
    return res.status(200).json(categorias);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

module.exports = {
  createCategoria,
  getCategorias,
};
