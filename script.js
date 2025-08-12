document.addEventListener("DOMContentLoaded", () => {
    const btnComenzar = document.getElementById("btnComenzar");
    const presentacion = document.getElementById("presentacion");
    const juego = document.getElementById("juego");
    const tablero = document.getElementById("tablero");
    const contador = document.getElementById("contador");

    let cartas = ["🍎", "🍌", "🍇", "🍒", "🍎", "🍌", "🍇", "🍒"];
    let cartasVolteadas = [];
    let movimientos = 0;

    btnComenzar.addEventListener("click", () => {
        presentacion.classList.add("oculto");
        juego.classList.remove("oculto");
        iniciarJuego();
    });

    function iniciarJuego() {
        movimientos = 0;
        contador.textContent = "Movimientos: 0";
        tablero.innerHTML = "";

        // Mezclar cartas
        cartas.sort(() => Math.random() - 0.5);

        // Crear cartas
        cartas.forEach((emoji, index) => {
            const carta = document.createElement("div");
            carta.classList.add("carta");
            carta.dataset.valor = emoji;
            carta.dataset.index = index;
            carta.addEventListener("click", voltearCarta);
            tablero.appendChild(carta);
        });
    }

    function voltearCarta() {
        if (this.classList.contains("volteada") || cartasVolteadas.length === 2) return;

        this.textContent = this.dataset.valor;
        this.classList.add("volteada");
        cartasVolteadas.push(this);

        if (cartasVolteadas.length === 2) {
            movimientos++;
            contador.textContent = Movimientos: ${movimientos};
            setTimeout(compararCartas, 800);
        }
    }

    function compararCartas() {
        const [carta1, carta2] = cartasVolteadas;
        if (carta1.dataset.valor !== carta2.dataset.valor) {
            carta1.textContent = "";
            carta2.textContent = "";
            carta1.classList.remove("volteada");
            carta2.classList.remove("volteada");
        }
        cartasVolteadas = [];
    }
});
