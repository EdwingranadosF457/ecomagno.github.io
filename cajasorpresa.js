const Ecoconsejo = [
  "Evita las botellas y bolsas de plástico de un solo uso. Opta por materiales reutilizables como bolsas de tela y botellas de acero inoxidable.",
  "Cierra el grifo mientras te cepillas los dientes y repara fugas. Usa la lavadora y lavavajillas solo cuando estén llenos.",
  "Camina, usa la bicicleta o el transporte público para reducir la emisión de gases contaminantes y mejorar la calidad del aire.",
  "Separa los residuos en orgánicos, plásticos, vidrio y papel. Aprende qué materiales pueden reciclarse en tu comunidad.",
  "Los árboles ayudan a limpiar el aire y proporcionan hábitats para la fauna.",
  "Apaga las luces y aparatos electrónicos cuando no los uses. Prefiere bombillas LED y electrodomésticos eficientes."
];

function tiempoaleatorio() {
  return Math.floor(Math.random() * (300000 - 180000 + 1)) + 180000;
}

function frasealeatoria() {
  return Ecoconsejo[Math.floor(Math.random() * Ecoconsejo.length)];
}

function crearcaja() {
  // Elimina cualquier caja existente
  const oldBox = document.getElementById("reveal-box");
  if (oldBox) oldBox.remove();

  const box = document.createElement("div");
  box.id = "reveal-box";
  box.style.position = "fixed";
  box.style.background = "#fff";
  box.style.border = "2px solid #333";
  box.style.padding = "20px";
  box.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
  box.style.cursor = "pointer";
  box.style.zIndex = 10000;
  box.style.width = "300px";
  box.style.textAlign = "center";
  box.style.borderRadius = "12px";

  // Posición aleatoria dentro del viewport
  const maxX = window.innerWidth - 320;
  const maxY = window.innerHeight - 250;
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  box.style.left = `${randomX}px`;
  box.style.top = `${randomY}px`;

  // Crea la imagen (inicialmente oculta)
  const imagen = document.createElement("img");
  imagen.src = "https://cdn-icons-png.flaticon.com/512/2909/2909764.png"; // Cambia esta URL por la imagen que desees
  imagen.style.width = "80px";
  imagen.style.height = "80px";
  imagen.style.marginBottom = "10px";
  imagen.style.display = "none";

  // Crea el texto
  const texto = document.createElement("div");
  texto.innerText = "Click para ver un Ecoconsejo";

  box.appendChild(imagen);
  box.appendChild(texto);

  // Evento al hacer clic
  box.onclick = function () {
    texto.innerText = frasealeatoria();
    imagen.style.display = "block";
    box.style.cursor = "default";
    box.onclick = null;
    setTimeout(() => box.remove(), 10000);
  };

  document.body.appendChild(box);
}


function Loop() {
  setTimeout(() => {
    crearcaja();
    Loop();
  }, tiempoaleatorio());
}


window.addEventListener("DOMContentLoaded", () => {
  crearcaja();
  Loop();
});