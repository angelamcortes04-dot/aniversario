/* 🎶 MUSICA */
const botonMusica = document.getElementById("playMusic");
const musica = document.getElementById("music");

botonMusica.addEventListener("click", () => {
  musica.volume = 0.6;
  musica.play();
  botonMusica.style.display = "none";
});

/* CONTADOR */
function calcularDias() {
  const inicio = new Date("2025-01-25");
  const hoy = new Date();
  const dias = Math.floor((hoy - inicio) / 86400000);
  document.getElementById("dias").textContent = dias + " días";
}
calcularDias();

/* TITULO */
setTimeout(() => {
  document.querySelector(".fade-title").classList.add("show");
}, 500);

/* VIDEO */
document.getElementById("btnRecuerdos").addEventListener("click", () => {
  const boton = document.getElementById("btnRecuerdos");
  const contenedor = document.getElementById("videoRecuerdos");
  const video = contenedor.querySelector("video");

  boton.style.display = "none";
  contenedor.classList.remove("oculto");
  contenedor.classList.add("aparecer");

  musica.pause();
  video.currentTime = 0;
  video.play();
});

/* MENSAJE ESCRITO */
const texto = `No sabes la cantidad de amor que siento por ti,
espero que esta página creada por ti y para ti pueda demostrártelo un poquito.
Te quiero conmigo hoy, mañana y en todas mis vidas 💜`;

let i = 0;
function escribir() {
  if (i < texto.length) {
    document.getElementById("mensaje-escribiendo").textContent += texto.charAt(i);
    i++;
    setTimeout(escribir, 50);
  }
}
setTimeout(escribir, 1000);

/* MENSAJE SECRETO */
document.getElementById("luchis").addEventListener("click", () => {
  document.getElementById("mensajeSecreto").style.display = "block";
});

/* TIMELINE */
const items = document.querySelectorAll(".timeline-item");
window.addEventListener("scroll", () => {
  items.forEach(item => {
    if (item.getBoundingClientRect().top < window.innerHeight - 80) {
      item.classList.add("show");
    }
  });
});

/* ❤️ CORAZONES FLOTANDO */
const contenedorCorazones = document.getElementById("corazones");

setInterval(() => {
  const corazon = document.createElement("span");
  corazon.textContent = "💜";
  corazon.style.position = "absolute";
  corazon.style.left = Math.random() * 100 + "vw";
  corazon.style.bottom = "-30px";
  corazon.style.fontSize = "24px";
  corazon.style.animation = "flotar 8s linear forwards";

  contenedorCorazones.appendChild(corazon);

  setTimeout(() => corazon.remove(), 8000);
}, 600);
