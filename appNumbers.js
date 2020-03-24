    const musica = {
        reproducir: function(id) {
            console.log(`Reproduciendo musica con id: ${id}`)
        },
        pause: function(id) {
            console.log(`Pausando la musica con id: ${id}`)
        }
    }


    musica.reproducir(2);

    musica.pause(3);

    musica.borrar = function(id) {
        console.log(`Borrando la musica con id: ${id}`)
    }

    musica.borrar(2);