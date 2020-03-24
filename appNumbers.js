// function saludar(name = 'Visitante') {

//     let nombre = `Hola ${name}`

//     document.getElementById('app').innerHTML = nombre
//         //console.log('Hola')
// }

// saludar('Stalin');


function sumar(a = 5, b = 4) {
    return a + b;
}


console.log(sumar(3, 4));
console.log(sumar(5));