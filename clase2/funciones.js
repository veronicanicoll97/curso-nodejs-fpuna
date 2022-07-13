// Funciones flecha.

// let idVendedor
// let idvendedor

// Declaracion de una funcion tradicional en JS
function sumar(a, b) {
    return a + b
}

sumar(15, 20)

// Declaracion de una funcion flecha en JS

let suma = (a) => a + 2
let suma2 = a => a + 2

console.log(suma(2))

const sumar3 = (a, b, c) => {
    
    console.log('Suma: ' + a, b, c)

    return a+b+c
}

// Callbacks

function mensaje () {
    console.log('Esta función se va ejecutar a los 3 segundos.')
}


setTimeout(mensaje, 3000)

setTimeout( () => {
    console.log('Esta función se va ejecutar a los 3 segundos.')
}, 3000)

// En JavaScript hay 7 valores que son falsos: false, 0
// (cero), 0n: 0 como BigInt, ‘’ o “” o ``: cadena vacía, null,
// undifined, NaN.

let v = 'hola'

if(v) {
    console.log("v es verdadero", v);
}

const esVerdadero = new Boolean(false)

if(esVerdadero) {
    console.log("v es verdadero");
}

console.log(!!esVerdadero);