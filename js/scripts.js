const fechaBoda = new Date("2024-07-13T15:00:00");

        function actualizarContador() {
            const ahora = new Date();
            const diffTiempo = fechaBoda.getTime() - ahora.getTime();

            if (diffTiempo <= 0) {
                document.getElementById('contador').innerText = "¡Llegó el gran día!";
            } else {
                const meses = Math.floor(diffTiempo / (1000 * 60 * 60 * 24 * 30));
                const dias = Math.floor((diffTiempo % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
                const horas = Math.floor((diffTiempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutos = Math.floor((diffTiempo % (1000 * 60 * 60)) / (1000 * 60));

                document.getElementById('contador').innerText = `${meses} Meses, ${dias} Días, ${horas} Horas, ${minutos} Minutos restantes para la boda`;
            }
        }

        actualizarContador();
        setInterval(actualizarContador, 1000);