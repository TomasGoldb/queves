const palabras = ["soledad", "trabajo", "paises bajos", "van en caravana", "contramano", "voz clara", "camino sinuoso", "no escucha", "reminiscencia", "limar", 
    "paradoja", "reparada", "inodoro", "cincuenta años", "endémico", "dar en el blanco", "golf", "tiro libre", "marcador", "eskcyfls", 
    "triciclo", "llamando", "bilardo", "cannigia", "piezas", "florencia", "emperador", "surf", "embajada", "viva la vida", 
    "mediocre", "fogata", "empatar", "deporte", "pienso, luego existo", "gente", "desespera", "máscara", "tirana", "casados", 
    "agrandada", "resorte", "imparable", "tercera caída", "heredado", "sordo", "aguardiente", "manómetro"];

document.getElementById('validarNumero').addEventListener('click', function() {
    const numTarjeta = parseInt(document.getElementById('numTarjeta').value);
    if (numTarjeta >= 1 && numTarjeta <= 64) {
        document.getElementById('palabraSeccion').classList.remove('hidden');
        document.getElementById('resultado').innerHTML = ''; // Limpia el resultado anterior
    } else {
        document.getElementById('resultado').innerHTML = 'Número inválido. Intenta de nuevo.';
        document.getElementById('resultado').className = 'incorrecto';
    }
});

document.getElementById('validarPalabra').addEventListener('click', function() {
    const numTarjeta = parseInt(document.getElementById('numTarjeta').value);
    const intento = document.getElementById('intento').value.toLowerCase();
    const resultado = document.getElementById('resultado');

    if (intento === palabras[numTarjeta - 1]) {
        resultado.innerHTML = '¡CORRECTO!';
        resultado.className = 'correcto';
    } else {
        resultado.innerHTML = 'INCORRECTO, VUELVE A INTENTAR';
        resultado.className = 'incorrecto';
    }
});
