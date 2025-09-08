const tablero = document.querySelector(".tablero");
const mensaje = document.getElementById("mensaje");

let cartas = [
    "img/basura.png", "img/basura.png",
    "img/Banana2.png", "img/Banana2.png",
    "img/Desores.png", "img/Desores.png",
    "img/Fabrica.png", "img/Fabrica.png",
    "img/CO2.png", "img/CO2.png",
    "img/AS.png", "img/AS.png"
];

let primeraCarta = null;
let segundaCarta = null;
let bloqueo = false;

function mezclarCartas() {
    cartas.sort(() => 0.5 - Math.random());
}

function crearTablero() {
    mezclarCartas();
    cartas.forEach((rutaImg) => {
        const carta = document.createElement("div");
        carta.classList.add("carta");

        const imgFrente = document.createElement("img");
        imgFrente.src = rutaImg;
        imgFrente.classList.add("frente");

        const imgReverso = document.createElement("img");
        imgReverso.src = "img/reverso.png"; // Imagen reverso
        imgReverso.classList.add("reverso");

        carta.appendChild(imgFrente);
        carta.appendChild(imgReverso);

        carta.dataset.valor = rutaImg;
        carta.addEventListener("click", voltearCarta);
        tablero.appendChild(carta);
    });
}

function voltearCarta() {
    if (bloqueo || this.classList.contains("volteada")) return;

    this.classList.add("girada");

    if (!primeraCarta) {
        primeraCarta = this;
    } else {
        segundaCarta = this;
        verificarPareja();
    }
}

function verificarPareja() {
    bloqueo = true;
    if (primeraCarta.dataset.valor === segundaCarta.dataset.valor) {
        primeraCarta.classList.add("volteada");
        segundaCarta.classList.add("volteada");
        reiniciarSeleccion();
        if (document.querySelectorAll(".carta.volteada").length === cartas.length) {
            mensaje.textContent = "🎉 ¡Has ganado con FederEco!";
        }
    } else {
        setTimeout(() => {
            primeraCarta.classList.remove("girada");
            segundaCarta.classList.remove("girada");
            reiniciarSeleccion();
        }, 1000);
    }
}

function reiniciarSeleccion() {
    [primeraCarta, segundaCarta] = [null, null];
    bloqueo = false;
}

crearTablero();
