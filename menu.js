const menu = document.getElementById("menu-juegos");
const btn = document.querySelector(".dropdown-btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  menu.classList.toggle("open");
});
