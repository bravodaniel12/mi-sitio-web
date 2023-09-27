let boxSlider = document.getElementById("boxSlider");
let iconChevronLeft = document.getElementById("iconChevronLeft");
let iconChevronRight = document.getElementById("iconChevronRight");
let signal1 =  document.getElementById("signal1");
let signal2 =  document.getElementById("signal2");
let signal3 =  document.getElementById("signal3");
let signal4 =  document.getElementById("signal4");

iconChevronRight.addEventListener("click", function() {
    if (boxSlider.classList.contains("box-slider-1")) {
        boxSlider.classList.remove("box-slider-1");
        boxSlider.classList.add("box-slider-2");
      signal1.classList.remove("signal-select");
       signal2.classList.add("signal-select");  
    }
    else if(boxSlider.classList.contains("box-slider-2")) {
        boxSlider.classList.remove("box-slider-2");
        boxSlider.classList.add("box-slider-3");
        signal2.classList.remove("signal-select");  
   signal3.classList.add("signal-select"); 
    }
    else if(boxSlider.classList.contains("box-slider-3")) {
        boxSlider.classList.remove("box-slider-3");
        boxSlider.classList.add("box-slider-4");
        signal3.classList.remove("signal-select");  
   signal4.classList.add("signal-select"); 
    }

});

iconChevronLeft.addEventListener("click", function() {
    if (boxSlider.classList.contains("box-slider-2")) {
        boxSlider.classList.remove("box-slider-2");
        boxSlider.classList.add("box-slider-1");
        signal2.classList.remove("signal-select");
       signal1.classList.add("signal-select");  
    }
    else if(boxSlider.classList.contains("box-slider-3")) {
        boxSlider.classList.remove("box-slider-3");
        boxSlider.classList.add("box-slider-2");
        signal3.classList.remove("signal-select");
       signal2.classList.add("signal-select");  
    }
    else if(boxSlider.classList.contains("box-slider-4")) {
        boxSlider.classList.remove("box-slider-4");
        boxSlider.classList.add("box-slider-3");
        signal4.classList.remove("signal-select");
       signal3.classList.add("signal-select");  
    }
});
//
/* 
let boxslider = document.getElementById("boxSlider");
let currentSlide = 1;
let totalSlides = 3;
let autoSlideInterval;

function changeSlide(direction) {
    if (direction === "next") {
        currentSlide = (currentSlide % totalSlides) + 1;
    } else {
        currentSlide = (currentSlide - 2 + totalSlides) % totalSlides + 1;
    }

    let newClass = `box-slider-${currentSlide}`;
    boxslider.className = "box-slider";
    boxslider.classList.add(newClass);
}

function startAutoSlide() {
    autoSlideInterval = setInterval(function() {
        changeSlide("next");
    }, 2000); // Cambia automáticamente a la siguiente diapositiva cada 5 segundos
}

startAutoSlide();

// Detener la reproducción automática al pasar el mouse sobre el slider
boxslider.addEventListener("mouseenter", function() {
    clearInterval(autoSlideInterval);
});

// Reanudar la reproducción automática cuando el mouse se aleja del slider
boxslider.addEventListener("mouseleave", function() {
    startAutoSlide();
}); */
 
