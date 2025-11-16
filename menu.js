document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.querySelector(".dropdown");
    const button = document.querySelector(".dropdown-btn");

    // abrir / cerrar con clic
    button.addEventListener("click", (e) => {
        e.stopPropagation(); // evita que el documento lo cierre inmediatamente
        dropdown.classList.toggle("open");
    });

    // cerrar al hacer clic fuera
    document.addEventListener("click", () => {
        dropdown.classList.remove("open");
    });
});
