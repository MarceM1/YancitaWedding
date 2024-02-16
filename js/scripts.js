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
      timeRemaining = `${months} Meses, ${days} Dias, ${hours} Horas, ${minutes} Minutos restantes para la boda`;
    }

    document.getElementById("contador").innerText = timeRemaining;
  }
}

actualizarContador();
setInterval(actualizarContador, 1000);

// Scroll Reveal

window.sr = ScrollReveal();

sr.reveal(".toright", {
  duration: 7500,
  origin: "right",
  distance: "-250px",
});
sr.reveal(".toleft", {
  duration: 7500,
  origin: "left",
  distance: "-250px",
});
sr.reveal(".todown", {
  duration: 5000,
  origin: "bottom",
  distance: "-200px",
});
sr.reveal(".toup", {
  duration: 5000,
  origin: "top",
  distance: "-250px",
});
sr.reveal(".todown2", {
  duration: 2500,
  origin: "bottom",
  distance: "-250px",
});

sr.reveal(".revealFast", {
  duration: 1500,
});

sr.reveal(".reveal", {
  duration: 4500,
});

sr.reveal(".revealSlow", {
  duration: 9000,
});

sr.reveal(".revealExtraSlow", {
  duration: 12000,
});
