function autos(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;

}

let i = 4

for (let e = 0; i < i; e++) {
    let valor = prompt("Ingrese la cantidad")
    console.log()
}

function ingresocoche() {

    let cantidad = document.getElementById('cantidadCoches').value
    let marca = document.getElementById("marca").value
    let modelo = document.getElementById("modelo").value
    let annio = document.getElementById("annio").value

    for (let i = 0; i <= cantidad; i++) {


        let auto = new autos()
        auto.marca = marca
        auto.modelo = modelo
        auto.annio = annio

        let pintaMarca = document.getElementById("marcaCoche")
        pintaMarca.innerText = marca
        let pintaModelo = document.getElementById("modeloCoche")
        pintaMarca.innerText = modelo
        let pintaAnnio = document.getElementById("annioCoche")
        pintaAnnio.innerText = annio
    }

}