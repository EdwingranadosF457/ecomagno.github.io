const tablero = document.querySelector(".tablero");
const mensaje = document.getElementById("mensaje");

let cartas = [
    "img/contaminacion/basura.png", "img/contaminacion/basura.png",
    "img/contaminacion/Banana2.png", "img/contaminacion/Banana2.png",
    "img/contaminacion/Desores.png", "img/contaminacion/Desores.png",
    "img/contaminacion/Fabrica.png", "img/contaminacion/Fabrica.png",
    "img/contaminacion/CO2.png", "img/contaminacion/CO2.png",
    "img/contaminacion/AS.png", "img/contaminacion/AS.png"
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
