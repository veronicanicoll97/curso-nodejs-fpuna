const {
    servicios, ubicaciones, vendedores
} = require("./data")
const express = require("express")

const app = express()
const puerto = 3000

// app.set('view engine', 'ejs')
app.set('view engine', 'pug')



app.get('/vendedores', (req, res) => {

    const datos = vendedores.map(
        vendedor => {
            return {
                nombre: vendedor.nombres.toUpperCase(),
                apellido: vendedor.apellidos.toUpperCase()
            }
        }
    )

    res.render('vendedores', {datos})
})


app.get('/vendedor_final', (req, res) => {

    const datos = vendedores.map(
        vendedor => {
            return {
                nombre: vendedor.nombres.toUpperCase(),
                apellido: vendedor.apellidos.toUpperCase()
            }
        }
    )
    res.render('vendedor_final', {datos})
})


app.get('/ubicaciones/:id_departamento', (req, res) => {

    const idDepartamento = req.params.id_departamento

    const departamentos = ubicaciones.departamentos

    const departamentoEncontrado = departamentos.find(
        departamento => departamento.id === idDepartamento
    )

    res.render('ubicaciones', {dato: departamentoEncontrado})

})


app.get('/servicios', (req, res) => {

    res.render('servicios', {servicios})
})


app.listen(puerto, () => console.log(`Servidor escuchando en el puerto ${puerto}`))