document.getElementById("jugar-btn").addEventListener("click", function () {
  document.getElementById("juego-magnobot").style.display = "block";
  this.style.display = "none";
});

// Juego variables
let puntos = 0;
let vidas = 3;
let recolectados = [];

const desechos = [
  { id: 'papel', tipo: 'papel', src: 'Img/contaminacion/papel.png', alt: 'Papel' },
  { id: 'botella', tipo: 'plastico', src: 'Img/contaminacion/botella.png', alt: 'Botella de plástico' },
  { id: 'banana', tipo: 'no-reciclable', src: 'Img/contaminacion/banana.png', alt: 'Cáscara de banana' }
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

      if (puntos >= 10) {
        mostrarFelicitacion();
        return;
      }
    } else {
      vidas--;
      document.getElementById('vidas').textContent = vidas;

      if (vidas === 0) {
        mostrarGameOver();
        return;
      }
    }

    document.getElementById('puntos').textContent = puntos;

    // Si no quedan objetos, generar nuevos
    if (document.querySelectorAll('.objeto-basura').length === 0) {
      recolectados = [];
      setTimeout(mostrarDesechos, 1000);
    }
  });
});

// Mensajes
function mostrarFelicitacion() {
  const mensaje = document.createElement("div");
  mensaje.classList.add("felicitacion");
  mensaje.innerHTML = "🎉 <strong>¡Felicitaciones!</strong> FedeMagno está muy feliz porque lo ayudaste a recolectar 10 objetos correctamente. 🌱";
  document.getElementById("juego-magnobot").appendChild(mensaje);
}

function mostrarGameOver() {
  zonaBasura.innerHTML = '';
  const mensaje = document.createElement("div");
  mensaje.classList.add("perdida");
  mensaje.innerHTML = `
    💔 <strong>¡Oh no!</strong> Te quedaste sin vidas. Inténtalo de nuevo.
    <br><br>
    <button id="reiniciar-btn" class="boton-jugar">Reintentar</button>
  `;
  document.getElementById("juego-magnobot").appendChild(mensaje);

  document.getElementById("reiniciar-btn").addEventListener("click", reiniciarJuego);
}

function reiniciarJuego() {
  puntos = 0;
  vidas = 3;
  recolectados = [];

  zonaBasura.innerHTML = '';
  document.querySelectorAll('.felicitacion, .perdida').forEach(el => el.remove());

  document.getElementById('puntos').textContent = puntos;
  document.getElementById('vidas').textContent = vidas;

  mostrarDesechos();
}
// Iniciar juego
mostrarDesechos();
