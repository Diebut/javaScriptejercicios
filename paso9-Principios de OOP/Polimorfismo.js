
//SOBRECARGAS DE CANTIDAD DE PARAMETROS Q PODEMOS PASAR

function cantidadItems(x) {
    return x.toString().length
}


console.log(cantidadItems('Hola mundo'))
console.log(cantidadItems(1000))

function Sumar(x=0, y=0, z=0) {
    return x + y+ z
}

console.log(Sumar(10, 20))
console.log(Sumar(10, 20, 30))