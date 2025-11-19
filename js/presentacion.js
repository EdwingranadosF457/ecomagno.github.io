const info = {
    justificacion: `
      <h2>Justificación del Proyecto</h2>
      <p>EcoMagno busca generar conciencia ambiental en la comunidad educativa mediante acciones sostenibles, talleres ecológicos y proyectos de reciclaje. Este proyecto promueve el trabajo en equipo y la reflexión sobre el impacto ambiental en nuestro entorno.</p>
    `,
    actividades: `
      <h2>Actividades Promovidas</h2>
      <ul>
        <li>Campañas de reciclaje y reforestación.</li>
        <li>Talleres ecológicos y educativos.</li>
        <li>Concursos ambientales escolares.</li>
        <li>Creación de ecoafiches y murales informativos.</li>
      </ul>
    `,
    integrantes: `
      <h2>Nuestro equipo</h2>
      <p>Conformado por estudiantes y docentes comprometidos con el medio ambiente, dedicados a promover prácticas sostenibles en el colegio San Alberto Magno.</p>
      <div class="members-grid">
        <div class="member-card">
          <div class="member-avatar"><img src="Img/Jose.webp"></div>
          <h4>Jose Luis Bertel </h4>
          <p><strong>Rol:</strong> </p>
          <p>.</p>
        </div>
        <div class="member-card">
          <div class="member-avatar"><img src="Img/Tanya.webp"></div>
          <h4>Tanya Canoles</h4>
          <p><strong>Rol:</strong> </p>
          <p>.</p>
        </div>
        <div class="member-card">
          <div class="member-avatar"><img src="Img/Valeria.webp"></div>
          <h4>Valeria Cantillo</h4>
          <p><strong>Rol:</strong> </p>
          <p>.</p>
        </div>
        <div class="member-card">
          <div class="member-avatar"><img src="Img/Freiman.webp"></div>
          <h4>Freiman Cantillo</h4>
          <p><strong>Rol:</strong> </p>
          <p>.</p>
        </div>
        <div class="member-card">
          <div class="member-avatar"><img src="Img/Edwin.webp"></div>
          <h4>Edwin Granados</h4>
          <p><strong>Rol:</strong> </p>
          <p>.</p>
        </div>
       <div class="member-card">
          <div class="member-avatar"><img src="Img/Medina.webp"></div>
          <h4>Angel Medina</h4>
          <p><strong>Rol:</strong> </p>
          <p>.</p>
        </div> 
        <div class="member-card">
          <div class="member-avatar"><img src="Img/Angeles.webp"></div>
          <h4>Angeles Zambrano</h4>
          <p><strong>Rol:</strong> </p>
          <p>.</p>
        </div>
        <div class="member-card">
          <div class="member-avatar"><img src="Img/EcoPrae.webp"></div>
          <h4>EcoPrae</h4>
          <p><strong>Rol:</strong> </p>
          <p>.</p>
        </div>
      </div>

    `,
    tecnologias: `
      <h2>Tecnologías Empleadas</h2>
      <p>Se utilizaron tecnologías web como HTML, CSS y JavaScript, junto con recursos educativos digitales para promover el aprendizaje ecológico y la difusión de mensajes ambientales.</p>
      <iframe src="tecnologias empleadas (2).pdf" width="800" height="600"></iframe>
    `,
    recursos: `
      <h2>Recursos Usados y Creados</h2>
      <ul>
        <li>Material reciclable y reutilizable.</li>
        <li>Carteles informativos.</li>
        <li>Videos y presentaciones creadas por los estudiantes.</li>
        <li>Documentos digitales para difusión educativa.</li>
      </ul>
    `,
    limitaciones: `
      <h2>Limitaciones</h2>
      <ul>
        <li>costos están determinados por los componentes electrónicos y mecánicos que requiere, como Arduino, sensores, motores y batería, además de los materiales de fabricación y las pruebas. La calidad de los elementos y el nivel de complejidad pueden aumentar o reducir el presupuesto.</li>
        <li>Poca experiencia en la construcción de robots con Arduino, lo que dificultó el manejo correcto de los componentes, la programación y el ensamblaje. Esto generó errores y retrasos en el desarrollo.</li>
        <li>Dificultades técnicas en la creación y difusión digital.</li>
      </ul>
    `,
    prospectivas: `
      <h2>Prospectivas</h2>
      <p>EcoMagno busca fortalecer su alcance hacia toda la comunidad escolar, crear nuevas alianzas ambientales y desarrollar proyectos ecológicos a largo plazo.</p>
      <h3>Objetivos a Corto Plazo</h3>
      <ul>
        <li>Ampliar las campañas de reciclaje.</li>
        <li>Realizar jornadas de educación ambiental mensuales.</li>
      </ul>
      <h3>Objetivos a Largo Plazo</h3>
      <ul>
        <li>Consolidar un programa ambiental institucional.</li>
        <li>Integrar tecnología sostenible en proyectos estudiantiles.</li>
      </ul>
    `
  };

  function mostrarInfo(seccion) {
    document.getElementById('popup-text').innerHTML = info[seccion];
    document.getElementById('popup').style.display = 'flex';
  }

  function cerrarInfo() {
    document.getElementById('popup').style.display = 'none';
  }