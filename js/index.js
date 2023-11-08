function createRaindrop() {
    const raindrop = document.createElement('div');
    raindrop.className = 'rain';
    raindrop.innerHTML = generateRandomChar(); // Genera un carácter aleatorio
    raindrop.style.left = `${Math.random() * 100}%`;
    raindrop.style.animationDuration = `${Math.random() * 2 + 1}s`; // Duración aleatoria
  
    document.body.appendChild(raindrop);
  
    raindrop.addEventListener('animationiteration', () => {
      raindrop.innerHTML = generateRandomChar(); // Cambia el carácter al reiniciar la animación
      raindrop.style.left = `${Math.random() * 100}%`; // Posición aleatoria en el eje horizontal
      raindrop.style.animationDuration = `${Math.random() * 2 + 1}s`; // Duración aleatoria
    });
  
    raindrop.addEventListener('animationend', () => {
      document.body.removeChild(raindrop); // Elimina el elemento cuando termina la animación
    });
  
    return raindrop;
  }
  
  function generateRandomChar() {
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    return characters.charAt(Math.floor(Math.random() * characters.length));
  }
  
  function createRainWords(wordCount) {
    for (let i = 0; i < wordCount; i++) {
      setTimeout(() => {
        const raindrop = createRaindrop();
        raindrop.style.color = i % 2 === 0 ? '#00ff00' : '#808080'; // Color verde o gris intercalado
      }, i * 1000); // Añade una nueva palabra cada segundo
    }
  }
  
  const wordCount = 10; // Cambia este número al número de palabras que desees mostrar
  createRainWords(wordCount);
  