// Array.map()
const personas = [
    {
        nombre: "Veronica",
        edad: "24"
    },
    {
        nombre: "Alejandro",
        edad: "26"
    },
    {
        nombre: "Noemi",
        edad: "15"
    }
]

console.log(
    personas.map(persona => +persona.edad)
)

// Array reduce

const vendedores = [
    {
        id: 1,
        idCiudad: 1,
        nombre: "Veronica"
    },
    {
        id: 2,
        idCiudad: 2,
        nombre: "Alejandro"
    },
    {
        id: 3,
        idCiudad: 3,
        nombre: "Gabriel"
    }
]

const ciudades = [
    {
        id: 1,
        ciudad: "Aregua"
    },
    {
        id: 2,
        ciudad: "San Lorenzo"
    },
    {
        id: 3,
        ciudad: "Capiata"
    }
]

const vendedorPorCiudad = vendedores.reduce(
    (resultados, vendedor) => {
   
    const {idCiudad, nombre} = vendedor

    const buscarCoincidencia = ciudades.find(ciudad => ciudad.id === idCiudad)

    resultados.push({
        nombre, ciudad: buscarCoincidencia.ciudad
    })

    return resultados
}, [])

console.log(vendedorPorCiudad);

// Array forEach

for(let i in ciudades) {
    console.log(ciudades[i].ciudad);
}

ciudades.forEach(c => console.log(c.ciudad))

// Array filter

const numeros = [10, 15, 2, 1, 0, 98]

console.log(numeros.filter(num => num > 2));

