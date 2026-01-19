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
document.getElementById("btnRecuerdos").onclick = () => {
  document.getElementById("btnRecuerdos").style.display = "none";
  const video = document.getElementById("videoRecuerdos");
  video.classList.remove("oculto");
  video.classList.add("aparecer");
};

/* MENSAJE ESCRITO */
const texto =
"Luchis, contigo aprendí que el amor bonito si existe. \
Te quiero conmigo hoy, mañana y en todas mis vidas 💜";
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
document.getElementById("luchis").onclick = () => {
  document.getElementById("mensajeSecreto").style.display = "block";
};

/* TIMELINE */
const items = document.querySelectorAll(".timeline-item");
window.addEventListener("scroll", () => {
  items.forEach(item => {
    if (item.getBoundingClientRect().top < window.innerHeight - 80) {
      item.classList.add("show");
    }
  });
});

/* ❤️ CORAZONES FLOTANDO (VERSIÓN SEGURA CHROME) */
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

