    function abrirSeccion(id) {
      document.getElementById(id).style.display = 'flex';
    }
    function cerrarSeccion(id) {
      document.getElementById(id).style.display = 'none';
    }

    // 🔹 Cerrar con tecla ESC
    document.addEventListener('keydown', function(event) {
      if (event.key === "Escape") {
        document.querySelectorAll('.mini-pagina').forEach(seccion => {
          seccion.style.display = 'none';
        });
      }
    });