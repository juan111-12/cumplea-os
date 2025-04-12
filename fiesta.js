const fechaFiesta = new Date(2025, 10, 8, 21, 45, 0).getTime();
const contador = document.getElementById("contador");

const formatearNumero = (n) => new Intl.NumberFormat("es-ES").format(n);

function actualizarContador() {
    const ahora = Date.now();
    const tiempoRestante = fechaFiesta - ahora;

    if (tiempoRestante <= 0) {
        contador.innerHTML = "🎉 ¡La fiesta ya comenzó! ¡A disfrutar! 🤘";
        contador.classList.add("fiesta-iniciada");
        clearInterval(intervalo);
        return;
    }

    const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

    let mensaje = "";

    if (dias >= 1) {
        mensaje = `⏳ Faltan ${formatearNumero(dias)} ${dias === 1 ? "día" : "días"}, ${horas}h ${minutos}m ${segundos}s`;
        contador.classList.remove("menos-de-un-dia");
    } else {
        mensaje = `🚨 ¡Menos de 24 horas! ${horas}h ${minutos}m ${segundos}s`;
        contador.classList.add("menos-de-un-dia");
    }

    contador.innerHTML = mensaje;
}

// Ejecutar una vez al principio
actualizarContador();
const intervalo = setInterval(actualizarContador, 1000);
