
// Mostrar la sección del juego
document.getElementById("jugar-btn").addEventListener("click", function () {
  document.getElementById("juego-magnobot").style.display = "block";
  this.style.display = "none";
});

// Lógica del juego
let puntos = 0;

document.querySelectorAll('.objeto-basura').forEach(item => {
  item.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/plain', e.target.id);
  });
});

const caneca = document.getElementById('caneca');

caneca.addEventListener('dragover', e => e.preventDefault());

caneca.addEventListener('drop', e => {
  e.preventDefault();
  const id = e.dataTransfer.getData('text');
  const basura = document.getElementById(id);
  if (basura) {
    basura.remove();
    puntos++;
    document.getElementById('puntos').textContent = puntos;

    // Mostrar mensaje de felicitación al llegar a 3 puntos
    if (puntos === 3) {
      mostrarFelicitacion();
    }
  }
});

function mostrarFelicitacion() {
  const mensaje = document.createElement("div");
  mensaje.classList.add("felicitacion");
  mensaje.innerHTML = "🎉 <strong>¡Felicitaciones!</strong> Ferdereco está muy feliz porque lo ayudaste a limpiar. 🌱";

  document.getElementById("juego-magnobot").appendChild(mensaje);
}







