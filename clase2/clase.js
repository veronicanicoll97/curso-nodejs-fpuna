class Producto {
    constructor(){}

    calcularPrecioTotal(cantidad, precio) {
        return cantidad*precio
    }
}


class Bebida extends Producto {
    constructor(){
        super()
    }

    listarBebidas() {
        return ['Jugo', 'Gaseosa', 'Licor']
    }

    obtenerPrecioPrecioBebida() {
        const precioJugo = 5000
        const cantidad = 5

        const costoTotal = this.calcularPrecioTotal(cantidad, precioJugo)

        return costoTotal
    }
}


function calcular ({monto, cantidad}) {
    return monto*cantidad
}

const objeto = {
    cantidad: 5, monto: 5000, nombre: 'Veronica'
}

console.log(calcular(objeto))

//******************************************* */

const objeto2 = {
    nombre: "Veronica",
    apellido: "Dominguez",
    edad: "24"
}

console.log(JSON.stringify(objeto2));

