// Arreglos

const numeros = [10, 20, 30, 40, 50];

//console.log(numeros[4])

const mezclado = ['Hola', 20, true, null, false, undefined]

//console.log(mezclado)


//Arreglos de string metodo distinto

const meses = new Array('Enero', 'Febreo', 'Marzo', 'Abril')

//console.log(Array.isArray(meses))

//Anadir en un arreglo

meses.push('Mayo');

//anadir al inicio del arreglo

meses.unshift('Meses 0')

//console.log(meses.indexOf('Abril'))

meses.pop()

//Eliminar un elemento del inicio

meses.shift();

//Quitar de un rango

meses.splice(2, 1)


meses.reverse();


//console.log(meses)

//Unir arreaglos



let arreglo1 = [1, 2, 3];
let arreglo2 = [5, 6, 7]

console.log(arreglo1.concat(arreglo2));