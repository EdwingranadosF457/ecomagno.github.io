const knowledgeBase = {
      reciclaje: {
        plastico: "El plástico va en la caneca BLANCA. Recuerda lavar los envases antes de depositarlos. Incluye: botellas, envases, bolsas limpias y empaques plásticos.",
        papel: "El papel y cartón van en la caneca GRIS. Incluye: periódicos, revistas, cajas de cartón, cuadernos sin espiral. ¡Recuerda que el papel sucio no se recicla!",
        organico: "Los residuos orgánicos van en la caneca VERDE. Incluye: restos de comida, cáscaras de frutas, verduras, café, té. Estos se convierten en abono o compost.",
        vidrio: "El vidrio va en la caneca BLANCA junto con plásticos y metales. Incluye: botellas, frascos, envases de vidrio. ¡Cuidado con vidrios rotos, envuélvelos primero!",
        metal: "Los metales van en la caneca BLANCA. Incluye: latas de aluminio, conservas, aerosoles vacíos, tapas metálicas.",
        peligrosos: "Los residuos peligrosos necesitan tratamiento especial: pilas, baterías, medicamentos vencidos, aceites, electrónicos. Llévalos a puntos de recolección especiales."
      },
      canecas: {
        blanca: "CANECA BLANCA: Para plástico, vidrio y metales. Todo lo que sea reciclable de estos materiales.",
        gris: "CANECA GRIS: Para papel y cartón. Periódicos, cajas, documentos, revistas.",
        verde: "CANECA VERDE: Para residuos orgánicos. Comida, restos vegetales, cáscaras.",
        negra: "CANECA NEGRA: Para residuos no aprovechables. Todo lo que no se puede reciclar ni compostar."
      },
      consejos: [
        "🌊 Reduce el uso de plásticos de un solo uso. Lleva tu propia botella reutilizable.",
        "💡 Apaga las luces cuando no las uses. Ahorra energía y dinero.",
        "🚰 Cierra el grifo mientras te cepillas los dientes. Ahorras hasta 12 litros de agua.",
        "🛍️ Usa bolsas reutilizables para hacer compras. Evita las bolsas plásticas.",
        "🌳 Planta árboles o cuida las plantas. Producen oxígeno y limpian el aire.",
        "🚲 Usa bicicleta o camina para distancias cortas. Reduces emisiones de CO2.",
        "📦 Reutiliza cajas y envases. Dale una segunda vida a los materiales.",
        "🍴 Evita desperdiciar comida. Compra solo lo necesario y aprovecha sobras.",
        "♻️ Separa correctamente tus residuos. Facilita el proceso de reciclaje.",
        "🌞 Aprovecha la luz natural. Abre cortinas antes de encender luces."
      ],
      datos: [
        "📊 Cada colombiano genera aproximadamente 0.5 kg de basura al día.",
        "🌍 El 90% de los residuos que producimos se pueden reciclar o reutilizar.",
        "⏰ Una botella de plástico tarda 450 años en degradarse naturalmente.",
        "🌊 El 80% de la contaminación marina proviene de actividades terrestres.",
        "🌳 Un árbol puede absorber hasta 22 kg de CO2 al año.",
        "♻️ Reciclar una tonelada de papel salva 17 árboles.",
        "💡 Una bombilla LED consume 80% menos energía que una incandescente.",
        "🚰 El 70% del agua dulce del planeta está congelada en glaciares."
      ]
    };

    function addMessage(text, isUser = false) {
      const messagesContainer = document.getElementById('chatMessages');
      const messageDiv = document.createElement('div');
      messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;
     
      const bubbleDiv = document.createElement('div');
      bubbleDiv.className = 'message-bubble';
      bubbleDiv.textContent = text;
     
      messageDiv.appendChild(bubbleDiv);
      messagesContainer.appendChild(messageDiv);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function showTyping() {
      document.getElementById('typingIndicator').classList.add('show');
      const messagesContainer = document.getElementById('chatMessages');
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function hideTyping() {
      document.getElementById('typingIndicator').classList.remove('show');
    }

    function getBotResponse(userMessage) {
      const msg = userMessage.toLowerCase();
     
      if (msg.match(/hola|buenos días|buenas tardes|buenas noches|hey|qué tal/)) {
        return "¡Hola! 👋 Estoy aquí para ayudarte con temas de reciclaje y medio ambiente. ¿Qué te gustaría saber?";
      }
     
      if (msg.includes('plástico') || msg.includes('plastico')) {
        return knowledgeBase.reciclaje.plastico;
      }
      if (msg.includes('papel') || msg.includes('cartón') || msg.includes('carton')) {
        return knowledgeBase.reciclaje.papel;
      }
      if (msg.includes('orgánico') || msg.includes('organico') || msg.includes('comida') || msg.includes('cáscara')) {
        return knowledgeBase.reciclaje.organico;
      }
      if (msg.includes('vidrio')) {
        return knowledgeBase.reciclaje.vidrio;
      }
      if (msg.includes('metal') || msg.includes('lata')) {
        return knowledgeBase.reciclaje.metal;
      }
      if (msg.includes('pila') || msg.includes('batería') || msg.includes('peligroso') || msg.includes('medicamento')) {
        return knowledgeBase.reciclaje.peligrosos;
      }
     
      if (msg.includes('caneca blanca') || msg.includes('blanca')) {
        return knowledgeBase.canecas.blanca;
      }
      if (msg.includes('caneca gris') || msg.includes('gris')) {
        return knowledgeBase.canecas.gris;
      }
      if (msg.includes('caneca verde') || msg.includes('verde')) {
        return knowledgeBase.canecas.verde;
      }
      if (msg.includes('caneca negra') || msg.includes('negra')) {
        return knowledgeBase.canecas.negra;
      }
      if (msg.includes('caneca') || msg.includes('color')) {
        return "🗑️ Sistema de canecas:\n\n" +
               "🤍 BLANCA: Plástico, vidrio, metales\n" +
               "⚪ GRIS: Papel y cartón\n" +
               "💚 VERDE: Residuos orgánicos\n" +
               "🖤 NEGRA: No aprovechables\n\n" +
               "¿Sobre cuál quieres saber más?";
      }
     
      if (msg.includes('consejo') || msg.includes('tip') || msg.includes('ayuda')) {
        const randomConsejo = knowledgeBase.consejos[Math.floor(Math.random() * knowledgeBase.consejos.length)];
        return randomConsejo;
      }
     
      if (msg.includes('dato') || msg.includes('información') || msg.includes('sabías')) {
        const randomDato = knowledgeBase.datos[Math.floor(Math.random() * knowledgeBase.datos.length)];
        return randomDato;
      }
     
      if (msg.includes('recicl') || msg.includes('cómo') || msg.includes('como')) {
        return "Para reciclar correctamente:\n\n1. Separa tus residuos por tipo\n2. Limpia los envases antes de depositarlos\n3. No mezcles diferentes tipos de residuos\n4. Usa las canecas de colores correctamente\n\n¿Qué material específico quieres reciclar?";
      }
     
      if (msg.includes('medio ambiente') || msg.includes('ecología') || msg.includes('sostenible')) {
        return "🌍 Cuidar el medio ambiente es responsabilidad de todos. Pequeñas acciones como reciclar, ahorrar agua y energía, usar menos plástico y plantar árboles hacen una gran diferencia. ¿Quieres consejos específicos?";
      }
     
      if (msg.match(/gracias|chao|adiós|adios|bye|hasta luego/)) {
        return "¡De nada! 🌱 Recuerda: pequeñas acciones, grandes cambios. ¡Hasta pronto!";
      }
     
      return "Puedo ayudarte con:\n\n♻️ Cómo reciclar diferentes materiales\n🗑️ Qué va en cada caneca de colores\n🌱 Consejos para cuidar el medio ambiente\n📊 Datos interesantes sobre ecología\n\n¿Sobre qué te gustaría saber?";
    }

    function sendMessage() {
      const input = document.getElementById('chatInput');
      const message = input.value.trim();
     
      if (message === '') return;
     
      addMessage(message, true);
      input.value = '';
     
      showTyping();
     
      setTimeout(() => {
        hideTyping();
        const response = getBotResponse(message);
        addMessage(response);
      }, 1000 + Math.random() * 1000);
    }

    function sendQuickMessage(message) {
      addMessage(message, true);
     
      showTyping();
     
      setTimeout(() => {
        hideTyping();
        const response = getBotResponse(message);
        addMessage(response);
      }, 1000 + Math.random() * 1000);
    }

    function handleKeyPress(event) {
      if (event.key === 'Enter') {
        sendMessage();
      }
    }