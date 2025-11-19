(function() {
  'use strict';
  
  // Variables del chatbot
  const ecoCanecaChat = document.getElementById('ecoCaneca');
  const chatbotModalEl = document.getElementById('chatbot-modal');
  const chatbotCloseBtn = document.querySelector('.chatbot-close');
  const chatbotMessagesEl = document.getElementById('chatbot-messages');
  const chatbotInputEl = document.getElementById('chatbot-input');
  const chatbotSendBtn = document.getElementById('chatbot-send');

  // Verificar que los elementos existan
  if (!ecoCanecaChat || !chatbotModalEl || !chatbotCloseBtn || !chatbotMessagesEl || !chatbotInputEl || !chatbotSendBtn) {
    console.error('Faltan elementos del chatbot en el DOM');
    return;
  }

  // Abrir modal al hacer clic en la caneca
  ecoCanecaChat.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    chatbotModalEl.classList.add('active');
    chatbotInputEl.focus();
  });

  // Cerrar modal con el botón X
  chatbotCloseBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    chatbotModalEl.classList.remove('active');
  });

  // Cerrar al hacer clic fuera del contenedor
  chatbotModalEl.addEventListener('click', function(e) {
    if (e.target === chatbotModalEl) {
      chatbotModalEl.classList.remove('active');
    }
  });

  // Consejos ambientales predefinidos
  const consejosAmbientales = {
    'reciclaje': '♻ Para reciclar correctamente: separa papel, plástico y vidrio en contenedores diferentes. Limpia los envases antes de reciclarlos.',
    'plastico': '🧴 Reduce el uso de plásticos de un solo uso. Prefiere botellas reutilizables y bolsas de tela.',
    'agua': '💧 Ahorra agua cerrando el grifo mientras te cepillas los dientes y reparando fugas.',
    'energia': '💡 Apaga las luces cuando no las uses y desconecta aparatos electrónicos. Usa bombillas LED.',
    'papel': '📄 Usa ambos lados del papel y recicla hojas usadas.',
    'organico': '🍌 Convierte residuos orgánicos en compost para plantas.',
    'contaminar': '🌍 Evita tirar basura en la calle o naturaleza.',
    'arbol': '🌳 Los árboles purifican el aire. Planta y cuida zonas verdes.',
    'transporte': '🚲 Usa bicicleta o camina para distancias cortas.',
    'bolsa': '🛍 Usa bolsas reutilizables. Una bolsa de tela puede durar años.',
    'basura': '🗑 Separa residuos: orgánicos, reciclables y no reciclables.',
    'ambiente': '🌿 Cuidar el ambiente es responsabilidad de todos.',
    'naturaleza': '🦋 Respeta flora y fauna.',
    'contaminacion': '☠ La contaminación daña el aire, agua y suelo.'
  };

  // Agregar mensaje al chat
  function agregarMensaje(texto, esUsuario) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message ' + (esUsuario ? 'user-message' : 'bot-message');
    messageDiv.textContent = texto;
    chatbotMessagesEl.appendChild(messageDiv);
    chatbotMessagesEl.scrollTop = chatbotMessagesEl.scrollHeight;
  }

  // Obtener respuesta del bot
  function obtenerRespuesta(pregunta) {
    const preguntaLower = pregunta.toLowerCase();
    
    // Buscar palabras clave
    for (let clave in consejosAmbientales) {
      if (preguntaLower.includes(clave)) {
        return consejosAmbientales[clave];
      }
    }

    // Saludos
    if (preguntaLower.includes('hola') || preguntaLower.includes('buenos') || preguntaLower.includes('buenas')) {
      return '¡Hola! 👋 ¿En qué puedo ayudarte con el cuidado del medio ambiente?';
    }

    // Gracias
    if (preguntaLower.includes('gracias') || preguntaLower.includes('muchas gracias')) {
      return '¡De nada! 💚 Recuerda que cada pequeña acción cuenta para cuidar nuestro planeta.';
    }

    // Despedida
    if (preguntaLower.includes('adios') || preguntaLower.includes('chao')) {
      return '¡Hasta pronto! 👋 Sigue cuidando el planeta 🌍💚';
    }

    // Respuesta por defecto
    return '🌱 Puedo darte consejos sobre reciclaje, agua, energía, plástico, papel, residuos orgánicos, árboles, transporte y más. ¿Sobre qué quieres aprender?';
  }

  // Enviar mensaje
  function enviarMensaje() {
    const mensaje = chatbotInputEl.value.trim();
    if (mensaje === '') return;

    agregarMensaje(mensaje, true);
    chatbotInputEl.value = '';

    setTimeout(() => {
      const respuesta = obtenerRespuesta(mensaje);
      agregarMensaje(respuesta, false);
    }, 500);
  }

  // Listeners
  chatbotSendBtn.addEventListener('click', enviarMensaje);

  chatbotInputEl.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      enviarMensaje();
    }
  });

})();