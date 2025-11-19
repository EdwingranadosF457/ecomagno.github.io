<script>
(function() {
  // Encapsular todo en una función para evitar conflictos
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
    'agua': '💧 Ahorra agua cerrando el grifo mientras te cepillas los dientes y reparando fugas. Una gota por segundo desperdicia 30 litros al mes.',
    'energia': '💡 Apaga las luces cuando no las uses y desconecta aparatos electrónicos. Usa bombillas LED que consumen menos energía.',
    'papel': '📄 Usa ambos lados del papel y recicla hojas usadas. Reduce impresiones innecesarias.',
    'organico': '🍌 Los residuos orgánicos pueden convertirse en compost para plantas. Separa cáscaras y restos de comida.',
    'contaminar': '🌍 Evita tirar basura en la calle o naturaleza. Usa los contenedores adecuados.',
    'arbol': '🌳 Los árboles purifican el aire y dan oxígeno. Planta árboles y cuida las zonas verdes.',
    'transporte': '🚲 Usa bicicleta o camina para distancias cortas. Reduce las emisiones de CO2.',
    'bolsa': '🛍 Lleva siempre bolsas reutilizables al hacer compras. Una bolsa de tela puede usarse cientos de veces.',
    'basura': '🗑 Separa correctamente tus residuos: orgánicos, reciclables y no reciclables. Esto facilita su tratamiento.',
    'ambiente': '🌿 Cuidar el ambiente es responsabilidad de todos. Pequeñas acciones diarias hacen gran diferencia.',
    'naturaleza': '🦋 Respeta la flora y fauna. No maltrates plantas ni animales, ellos son parte del ecosistema.',
    'contaminacion': '☠ La contaminación daña el aire, agua y suelo. Evita usar productos químicos innecesarios.'
  };

  // Función para agregar mensaje al chat
  function agregarMensaje(texto, esUsuario) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message ' + (esUsuario ? 'user-message' : 'bot-message');
    messageDiv.textContent = texto;
    chatbotMessagesEl.appendChild(messageDiv);
    chatbotMessagesEl.scrollTop = chatbotMessagesEl.scrollHeight;
  }

  // Función para obtener respuesta del bot
  function obtenerRespuesta(pregunta) {
    const preguntaLower = pregunta.toLowerCase();
    
    // Buscar palabras clave en la pregunta
    for (let clave in consejosAmbientales) {
      if (preguntaLower.includes(clave)) {
        return consejosAmbientales[clave];
      }
    }
    
    // Respuestas para saludos
    if (preguntaLower.includes('hola') || preguntaLower.includes('buenos') || preguntaLower.includes('buenas')) {
      return '¡Hola! 👋 ¿En qué puedo ayudarte con el cuidado del medio ambiente?';
    }
    
    if (preguntaLower.includes('gracias') || preguntaLower.includes('gracias')) {
      return '¡De nada! 💚 Recuerda que cada pequeña acción cuenta para cuidar nuestro planeta.';
    }

    if (preguntaLower.includes('adios') || preguntaLower.includes('chao')) {
      return '¡Hasta pronto! 👋 Sigue cuidando el planeta 🌍💚';
    }
    
    // Respuesta por defecto
    return '🌱 Puedo darte consejos sobre: reciclaje, agua, energía, plástico, papel, residuos orgánicos, árboles, transporte, bolsas y más. ¿Sobre qué quieres aprender?';
  }

  // Enviar mensaje
  function enviarMensaje() {
    const mensaje = chatbotInputEl.value.trim();
    
    if (mensaje === '') return;
    
    // Agregar mensaje del usuario
    agregarMensaje(mensaje, true);
    chatbotInputEl.value = '';
    
    // Simular tiempo de respuesta del bot
    setTimeout(function() {
      const respuesta = obtenerRespuesta(mensaje);
      agregarMensaje(respuesta, false);
    }, 500);
  }

  // Event listeners para enviar mensaje
  chatbotSendBtn.addEventListener('click', enviarMensaje);

  chatbotInputEl.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      enviarMensaje();
    }
  });

})();