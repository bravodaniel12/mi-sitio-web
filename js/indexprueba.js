function rateStar(event) {
    const stars = document.querySelectorAll('.star');
    const mouseX = event.clientX;
    const starRect = stars[0].getBoundingClientRect();
    const starWidth = starRect.width;

    const starIndex = Math.floor((mouseX - starRect.left) / starWidth);

    if (!stars[starIndex].classList.contains('full')) {
        // Si la estrella clicada no está llena, la llenamos a la mitad
        stars[starIndex].classList.toggle('half');
    } else {
        // Si la estrella clicada ya está llena, la llenamos completamente
        stars[starIndex].classList.toggle('full');
    }

    // Restablecer estrellas no seleccionadas
    for (let i = 0; i < stars.length; i++) {
        if (i !== starIndex) {
            stars[i].classList.remove('half', 'full');
        }
    }
}
