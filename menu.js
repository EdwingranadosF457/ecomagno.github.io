const dropdown = document.querySelector('.dropdown');
const btn = document.querySelector('.dropdown-btn');

btn.addEventListener('click', (e) => {
  e.stopPropagation(); // evita que se cierre inmediatamente
  dropdown.classList.toggle('open');
});

// cerrar si se hace clic fuera
document.addEventListener('click', (e) => {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove('open');
  }
});
