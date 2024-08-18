const palabras = ["soledad", "trabajo", "paises bajos", "van en caravana", "contramano", "voz clara", "camino sinuoso", "no escucha", "reminiscencia", "limar", 
    "paradoja", "reparada", "inodoro", "cincuenta años", "endémico", "dar en el blanco", "golf", "tiro libre", "marcador", "eskcyfls", 
    "triciclo", "llamando", "bilardo", "cannigia", "piezas", "florencia", "emperador", "surf", "embajada", "viva la vida", 
    "mediocre", "fogata", "empatar", "deporte", "pienso, luego existo", "gente", "desespera", "máscara", "tirana", "casados", 
    "agrandada", "resorte", "imparable", "tercera caída", "heredado", "sordo", "aguardiente", "manómetro"];

let acertados = [];

function mostrarMensaje(mensaje, esError = false) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<span>${mensaje}</span> <button onclick="cerrarMensaje()">X</button>`;
    resultado.className = esError ? 'incorrecto' : 'correcto';
}

function cerrarMensaje() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    resultado.className = '';
}

document.getElementById('validarNumero').addEventListener('click', function() {
    const numTarjeta = parseInt(document.getElementById('numTarjeta').value);
    cerrarMensaje(); // Cierra cualquier mensaje previo

    if (numTarjeta >= 1 && numTarjeta <= 64) {
        if (acertados.includes(numTarjeta)) {
            mostrarMensaje('Este número de tarjeta ya fue acertado.', true);
        } else {
            document.getElementById('palabraSeccion').classList.remove('hidden');
            document.getElementById('resultado').innerHTML = ''; // Limpia el resultado anterior
            document.getElementById('intento').focus(); // Foco en el input de la palabra
        }
    } else {
        mostrarMensaje('Número inválido. Intenta de nuevo.', true);
    }
});

document.getElementById('validarPalabra').addEventListener('click', function() {
    const numTarjeta = parseInt(document.getElementById('numTarjeta').value);
    const intento = document.getElementById('intento').value.toLowerCase();

    if (intento === palabras[numTarjeta - 1]) {
        mostrarMensaje('¡CORRECTO!');
        acertados.push(numTarjeta);

        // Limpiar todos los inputs
        document.getElementById('numTarjeta').value = '';
        document.getElementById('intento').value = '';
        document.getElementById('palabraSeccion').classList.add('hidden');
    } else {
        mostrarMensaje('INCORRECTO, VUELVE A INTENTAR', true);
        document.getElementById('intento').focus(); // Mantiene el foco en el input
    }
});
