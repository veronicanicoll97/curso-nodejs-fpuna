const Producto = require("../models/producto")
const Categoria = require("../models/categoria")

const createProducto = async (req, res) => {
    try {

        console.log(req.body);
      const {nombre, idCategoria} = req.body;
      const existeCategoria = await Categoria.findOne({
        where: {
            id: +idCategoria
        }
      })


      if(existeCategoria) {

        const newProducto = await Producto.create({nombre, id_categoria: +idCategoria});

        return res.status(201).json(newProducto);
      }
      else {
        return res.status(400).json({
            message: "La categoria ingresada no existe."
        })
      }

      
    } catch (error) {
      return res.status(500).json({message: error.message});
    }
  };
  

const getProductos = async (req, res) => {
    try {
        const productos = await Producto.findAll();
        return res.status(200).json(productos);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};


const getProductosById = async (req, res) => {
    try {
        const idProducto = req.params.id_producto
        
        const producto = await Producto.findOne({
            where: {
                id: +idProducto
            }
        })

        if(producto) {
            return res.status(200).send(producto)
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


const deleteProductos = async (req, res) => {
    try {
        const idProducto = req.params.id_producto
        
        await Producto.destroy({
            where: {
                id: +idProducto
            }
        })

        return res.status(200).json({
            message: `El producto ${idProducto} se ha eliminado.`
        })
    } 
    catch (error) {
        return res.status(500).json({message: error.message});
    }
}


const updateProducto = async (req, res) => {
    try {
        const {idProducto, newNombre} = req.body
        
        await Producto.update(
            {
                nombre: newNombre
            },
            {
                where: {
                    id: +idProducto
                }
            }
        )

        return res.status(200).json({
            message: `El producto ${idProducto} se ha actualizado.`
        })
    } 
    catch (error) {
        return res.status(500).json({message: error.message});
    }
}

module.exports = {
    createProducto,
    getProductos,
    getProductosById,
    deleteProductos,
    updateProducto
};
