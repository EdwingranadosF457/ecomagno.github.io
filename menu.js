<script>
document.querySelector('.dropdown-btn').addEventListener('click', function(e) {
  e.preventDefault();

  const menu = document.getElementById('menu-juegos');
  
  // Alternar abrir/cerrar
  menu.classList.toggle('open');
});
</script>
