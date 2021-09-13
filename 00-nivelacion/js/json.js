//json destructuring

//Estructura normal de un json.
/*
const persona = {
    nombre : "daniel",
    edad : 20
}

document.write(`<p>${persona.nombre}</p>`)
document.write(`<p>${persona.edad}</p>`)

*/
//Con el destructuring.
const {nombre,edad} = {
    nombre : "daniel",
    edad : 20
}
document.write(`<p>${nombre}</p>`)
document.write(`<p>${edad}</p>`)