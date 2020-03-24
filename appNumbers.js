obtenerDatos();

try {
    datos()
} catch (error) {
    console.log(error);
}

function obtenerDatos() {
    console.log('Descargando...');
    setTimeout(function() {
        console.log('Completado.');
    }, 3000);
}