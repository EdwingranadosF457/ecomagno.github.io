document.getElementById("jugar-btn").addEventListener("click", function () {
  document.getElementById("juego-magnobot").style.display = "block";
  this.style.display = "none";
});

// Juego variables
let puntos = 0;
let vidas = 3;
let recolectados = [];
let rondasCompletadas = 0;
const rondasMeta = 3;

const desechos = [
  { id: 'papel', tipo: 'papel', src: 'img/papel.png', alt: 'Papel' },
  { id: 'botella', tipo: 'plastico', src: 'img/botella.png', alt: 'Botella de plástico' },
  { id: 'banana', tipo: 'no-reciclable', src: 'img/banana.png', alt: 'Cáscara de banana' }
];

const zonaBasura = document.getElementById('zona-basura');

// Función para mezclar array
function mezclar(array) {
  return array.sort(() => Math.random() - 0.5);
}

function mostrarDesechos() {
  zonaBasura.innerHTML = '';
  const desechosAleatorios = mezclar([...desechos]);

  desechosAleatorios.forEach(d => {
    const img = document.createElement('img');
    img.src = d.src;
    img.id = d.id;
    img.className = 'objeto-basura';
    img.alt = d.alt;
    img.setAttribute('data-tipo', d.tipo);
    img.setAttribute('draggable', true);
    zonaBasura.appendChild(img);

    img.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text/plain', img.id);
    });
  });
}

// Área de las canecas
document.querySelectorAll('.caneca').forEach(caneca => {
  caneca.addEventListener('dragover', e => e.preventDefault());

  caneca.addEventListener('drop', e => {
    e.preventDefault();
    const id = e.dataTransfer.getData('text');
    const basura = document.getElementById(id);
    if (!basura) return;

    const tipoBasura = basura.getAttribute('data-tipo');
    const tipoCaneca = caneca.getAttribute('data-tipo');

    basura.remove();

    if (tipoBasura === tipoCaneca) {
      puntos++;
      recolectados.push(id);
    } else {
      vidas--;
      document.getElementById('vidas').textContent = vidas;

      if (vidas === 0) {
        mostrarGameOver();
        return;
      }
    }

    document.getElementById('puntos').textContent = puntos;

    // Si recolectó los 3 objetos correctamente o no, siempre repoblar
    if (document.querySelectorAll('.objeto-basura').length === 0) {
      recolectados = [];
      rondasCompletadas++;

      if (rondasCompletadas === rondasMeta) {
        mostrarFelicitacion();
        return;
      }

      setTimeout(mostrarDesechos, 1000);
    }
  });
});

// Mensajes
function mostrarFelicitacion() {
  const mensaje = document.createElement("div");
  mensaje.classList.add("felicitacion");
  mensaje.innerHTML = "🎉 <strong>¡Felicitaciones!</strong> FedeMagno está muy feliz porque lo ayudaste a limpiar todas las rondas. 🌱";
  document.getElementById("juego-magnobot").appendChild(mensaje);
}

function mostrarGameOver() {
  const mensaje = document.createElement("div");
  mensaje.classList.add("felicitacion");
  mensaje.innerHTML = "💔 <strong>¡Oh no!</strong> Te quedaste sin vidas. Inténtalo de nuevo.";
  document.getElementById("juego-magnobot").appendChild(mensaje);
}

// Iniciar juego
