const fechaBoda = new Date("2024-07-13T15:00:00");

function actualizarContador() {
  const ahora = new Date();
  const diffTiempo = fechaBoda.getTime() - ahora.getTime();

  if (diffTiempo <= 0) {
    document.getElementById("contador").innerText = "The big day has arrived!";
  } else {
    const months = Math.floor(diffTiempo / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor(
      (diffTiempo % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
    );
    const hours = Math.floor(
      (diffTiempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((diffTiempo % (1000 * 60 * 60)) / (1000 * 60));

    let timeRemaining = `${months} Months, ${days} Days, ${hours} Hours, ${minutes} Minutes remaining for the wedding`;

    if (document.documentElement.getAttribute("lang") === "es") {
      timeRemaining = `${months} Meses, ${days} Dias, ${hours} Horas, ${minutes} Minutos restantes para la Boda`;
    }

    document.getElementById("contador").innerText = timeRemaining;
  }
}

actualizarContador();
setInterval(actualizarContador, 1000);
