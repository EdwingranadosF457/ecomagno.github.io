  const hojasContainer = document.querySelector('.hojas');
  for (let i = 0; i < 20; i++) {
    let hoja = document.createElement('span');
    hoja.className = 'hoja';
    hoja.style.left = Math.random() * 100 + 'vw';
    hoja.style.animationDuration = 5 + Math.random() * 5 + 's';
    hoja.style.animationDelay = Math.random() * 5 + 's';
    hojasContainer.appendChild(hoja);
  }