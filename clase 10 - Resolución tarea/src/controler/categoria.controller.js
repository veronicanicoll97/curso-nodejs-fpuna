const Categoria = require('../models/categoria');
const Producto = require("../models/producto")


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


const getCategoriaById = async (req, res) => {
  try {
      const idCategoria = req.params.id_categoria
      
      const categoria = await Categoria.findOne({
          where: {
              id: +idCategoria
          }
      })

      if(producto) {
          return res.status(200).send(categoria)
      }
      else {
          return res.status(400).json({
              message: "Not found"
          })
      }
  } 
  catch (error) {
      return res.status(500).json({message: error.message});
  }
}


const deleteCategoria = async (req, res) => {
  try {

    console.log(req.params);
      const idCategoria = req.params.id_categoria
      
      const categoriaEnProducto = await Producto.findOne({
        where: {
          id_categoria: +idCategoria
        }
      })

      if(categoriaEnProducto) {
        return res.status(304).json({message: "La categoria no puede ser eliminada."});
      }

      await Categoria.destroy({
          where: {
              id: +idCategoria
          }
      })

      return res.status(200).json({
          message: `La categoria ${idCategoria} se ha eliminado.`
      })
  } 
  catch (error) {
      return res.status(500).json({message: error.message});
  }
}


const updateCategoria = async (req, res) => {
  try {
      const {idCategoria, newNombre} = req.body
      
      await Categoria.update(
          {
              nombre: newNombre
          },
          {
              where: {
                  id: +idCategoria
              }
          }
      )

      return res.status(200).json({
          message: `La categoria ${idCategoria} se ha actualizado.`
      })
  } 
  catch (error) {
      return res.status(500).json({message: error.message});
  }
}



module.exports = {
  createCategoria,
  getCategorias,
  getCategoriaById,
  deleteCategoria,
  updateCategoria
};
