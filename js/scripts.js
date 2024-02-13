const fechaBoda = moment("2024-06-13 15:00:00");

function actualizarContador() {
    const ahora = moment();
    const tiempoRestante = moment.duration(fechaBoda.diff(ahora));

    document.getElementById('contador').innerText = tiempoRestante.days() + " Días  -  " + tiempoRestante.hours() + " Horas  -  " + tiempoRestante.minutes() + " Minutos restantes";
}

setInterval(function() {
    actualizarContador();
}, 1000);