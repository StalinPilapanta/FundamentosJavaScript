let autos = [
    { marca: 'Mustang', motor: 6 },
    { marca: 'Camaro', motor: 6.2 },
    { marca: 'Callenge', motor: 6.3 },
]


for (let i = 0; i <= autos.length; i++) {
    console.log(`${i}.- modelo: ${autos[i].marca} y motor: ${autos[i].motor}`);
}