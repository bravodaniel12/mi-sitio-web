// Selecciona el principal-box-main-img-modal, el icono de cierre y el contenido de box-modal
var principalBoxMainImgModal = document.querySelector(".principal-box-main-img-modal");
var btnClose = document.querySelector(".style-btn2.fa-solid.fa-x");
var boxModal = document.querySelector(".box-modal");

// Obtiene el estado de visibilidad de box-modal del almacenamiento local
var isVisible = localStorage.getItem("isVisible") === "true";

// Establece la propiedad "display" de box-modal según el estado de visibilidad
boxModal.style.display = isVisible ? "flex" : "none";

// Agrega un evento "onclick" al principal-box-main-img-modal
principalBoxMainImgModal.onclick = function() {
  // Cambia la propiedad "display" de box-modal para mostrarlo u ocultarlo
  if (boxModal.style.display === "none") {
    boxModal.style.display = "flex";
    isVisible = true;
  } else {
    boxModal.style.display = "none";
    isVisible = false;
  }

  // Almacena el estado de visibilidad en el almacenamiento local
  localStorage.setItem("isVisible", isVisible);
}

// Agrega un evento "onclick" al icono de cierre
btnClose.onclick = function() {
  // Cambia la propiedad "display" de box-modal para ocultarlo
  boxModal.style.display = "none";
  isVisible = false;

  // Almacena el estado de visibilidad en el almacenamiento local
  localStorage.setItem("isVisible", isVisible);
}

///////// 
 // Selecciona todos los elementos "box" dentro del contenedor
var boxes = document.querySelectorAll(".box.dia, .box.inicio");

// Itera sobre cada elemento "box"
for (var i = 0; i < boxes.length; i++) {
  // Agrega un evento "onclick" a cada elemento "box"
  boxes[i].onclick = function() {
      // Obtiene la imagen dentro del elemento "box" en el que se hizo clic
      var img = this.querySelector("img");

      // Obtiene el elemento "main-img-modal"
      var mainImgModal = document.querySelector(".main-img-modal");

      // Cambia el atributo "src" del elemento "main-img-modal" para que coincida con el atributo "src" de la imagen en el elemento "box" en el que se hizo clic
      mainImgModal.setAttribute("src", img.getAttribute("src"));

      // Cambia la clase de todos los elementos "box" a su clase original
      for (var j = 0; j < boxes.length; j++) {
          boxes[j].classList.remove("selected");
      }

      // Cambia la clase del elemento "box" en el que se hizo clic a la clase que cambia el color del borde a verde
      this.classList.add("selected");
  }
} 

//principal cuadritos y todo

//principal
let mainImgModal111 = document.getElementById("mainImgModal111");

let mainImgModal11 = document.getElementById("mainImgModal11");
let mainImgModal22 = document.getElementById("mainImgModal22");
let mainImgModal33 = document.getElementById("mainImgModal33");
let mainImgModal44 = document.getElementById("mainImgModal44");
let mainImgModal55 = document.getElementById("mainImgModal55");

let boxMainImgModal11 = document.getElementById("boxMainImgModal11");
let boxMainImgModal22 = document.getElementById("boxMainImgModal22");
let boxMainImgModal33 = document.getElementById("boxMainImgModal33");
let boxMainImgModal44 = document.getElementById("boxMainImgModal44");
let boxMainImgModal55 = document.getElementById("boxMainImgModal55");

// Evento click en la imagen principal
mainImgModal111.addEventListener("click", function() {
  // Muestra u oculta el elemento con id "mainContent"
  if (mainContent.style.display === "none") {
    mainContent.style.display = "block";
  }
});

// Selección de elementos
const containerImg = document.querySelector('.principal-container-img');
const imagenPrincipal = document.getElementById('mainImgModal111');
const miniaturas = document.querySelectorAll('.principal-article');

// Evento mouseover en el contenedor de imágenes
containerImg.addEventListener('mouseover', (event) => {
  if (event.target && event.target.classList.contains('principal-article')) {
    // Cambia la fuente de la imagen principal al pasar el cursor sobre una miniatura
    const src = event.target.querySelector('.img-mini-principal').getAttribute('src');
    imagenPrincipal.setAttribute('src', src);

    // Restablece el borde de todas las miniaturas
    miniaturas.forEach((miniatura) => {
      miniatura.style.border = '2px double rgb(214, 211, 211)';
    });

    // Cambia el borde de la miniatura al pasar el cursor
    event.target.style.border = '3px solid lightblue';
  }
  magnifier.setAttribute("url('')")
});

// Configuración del cursor
containerImg.style.cursor = 'pointer';

// Eventos mouseover y mouseout para cada miniatura
miniaturas.forEach((miniatura) => {
  miniatura.addEventListener('mouseover', () => {
    // Cambia el borde al pasar el cursor por la miniatura
    miniatura.style.border = '3px solid lightblue';
  });

  miniatura.addEventListener('mouseout', () => {
    // Restablece el borde al salir del cursor
    miniatura.style.border = '2px double rgb(214, 211, 211)';
  });
});


let isCursorOverImage = false;

// Evento de entrada para activar el temporizador al pasar el cursor
document.getElementById('producto').addEventListener('mouseenter', () => {
  isCursorOverImage = true;
});

// Evento de salida para limpiar el temporizador al salir del área de la imagen
document.getElementById('producto').addEventListener('mouseleave', () => {
  isCursorOverImage = false;
  desactivarZoom();
});



/*  */


// Evento de movimiento para el zoom
document.getElementById('producto').addEventListener('mousemove', (e) => {
  if (isCursorOverImage) {
    const containerRect = document.getElementById('producto').getBoundingClientRect();
    const offsetX = e.clientX - containerRect.left;
    const offsetY = e.clientY - containerRect.top;

    const mainImg = document.getElementById('mainImgModal111');
    const magnifier = document.getElementById('magnifier');
    const cordenadas = document.getElementById('cordenadas');

    const backgroundX = (offsetX / containerRect.width) * 100;
    const backgroundY = (offsetY / containerRect.height) * 100;

    magnifier.style.backgroundImage = `url('${mainImg.src}')`;
    magnifier.style.backgroundPosition = `${backgroundX}% ${backgroundY}%`;
    magnifier.style.display = 'block';

    // Ajustar las coordenadas para que el cursor quede dentro del cuadro
    cordenadas.style.left = Math.max(0, Math.min(e.clientX - cordenadas.offsetWidth / 2, containerRect.width - cordenadas.offsetWidth)) + 'px';
    cordenadas.style.top = Math.max(0, Math.min(e.clientY - cordenadas.offsetHeight / 2, containerRect.height - cordenadas.offsetHeight)) + 'px';
    cordenadas.style.display = 'block';
  }
});

function desactivarZoom() {
  // Oculta el zoom y las coordenadas
  document.getElementById('magnifier').style.display = 'none';
  document.getElementById('cordenadas').style.display = 'none';
}

/* estrellas */
// Para visualizar el contenedor de la información de la calificación global
let star = document.getElementById("star");
let calificacionGlobal = document.getElementById("calificacionGlobal");

star.addEventListener("mousemove", function() {
    calificacionGlobal.style.display = "flex";
});
calificacionGlobal.addEventListener("mousemove", function() {
    calificacionGlobal.style.display = "flex";
});
star.addEventListener("mouseleave", function () {
    calificacionGlobal.style.display = "none";
});
calificacionGlobal.addEventListener("mouseleave", function () {
    calificacionGlobal.style.display = "none";
});

// Obtener la puntuación del elemento con id "puntuacion"
let puntuacion = parseFloat(document.getElementById("puntuacion").innerText);

// Código para caja de estrellas
let start1 = document.getElementById("start1");
let start2 = document.getElementById("start2");
let start3 = document.getElementById("start3");
let start4 = document.getElementById("start4");
let start5 = document.getElementById("start5");

// Lógica para cambiar las clases de las estrellas basada en la puntuación
if (puntuacion >= 0 && puntuacion <= 0.2) {
  start1.setAttribute("class", "fa-regular fa-star");
  start2.setAttribute("class", "fa-regular fa-star");
  start3.setAttribute("class", "fa-regular fa-star");
  start4.setAttribute("class", "fa-regular fa-star");
  start5.setAttribute("class", "fa-regular fa-star");
} else if (puntuacion > 0.2 && puntuacion <= 0.7) {
  start1.setAttribute("class", "fa-solid fa-star-half-stroke");
  start2.setAttribute("class", "fa-regular fa-star");
  start3.setAttribute("class", "fa-regular fa-star");
  start4.setAttribute("class", "fa-regular fa-star");
  start5.setAttribute("class", "fa-regular fa-star");
} else if (puntuacion > 0.7 && puntuacion <= 1.2) {
  start1.setAttribute("class", " fa-solid fa-star");
  start2.setAttribute("class", " fa-regular fa-star");
  start3.setAttribute("class", " fa-regular fa-star");
  start4.setAttribute("class", " fa-regular fa-star");
  start5.setAttribute("class", " fa-regular fa-star");
} else if (puntuacion > 1.2 && puntuacion <= 1.7) {
  start1.setAttribute("class", "fa-solid fa-star");
  start2.setAttribute("class", "fa-solid fa-star-half-stroke");
  start3.setAttribute("class", "fa-regular fa-star");
  start4.setAttribute("class", "fa-regular fa-star");
  start5.setAttribute("class", "fa-regular fa-star");
}else if (puntuacion > 1.7 && puntuacion <= 2.2) {
  start1.setAttribute("class", "fa-solid fa-star");
  start2.setAttribute("class", "fa-solid fa-star");
  start3.setAttribute("class", "fa-regular fa-star");
  start4.setAttribute("class", "fa-regular fa-star");
  start5.setAttribute("class", "fa-regular fa-star");
}else if (puntuacion > 2.2 && puntuacion <= 2.7) {
  start1.setAttribute("class", "fa-solid fa-star");
  start2.setAttribute("class", "fa-solid fa-star");
  start3.setAttribute("class", "fa-solid fa-star-half-stroke");
  start4.setAttribute("class", "fa-regular fa-star");
  start5.setAttribute("class", "fa-regular fa-star");
}else if (puntuacion > 2.7 && puntuacion <= 3.2) {
  start1.setAttribute("class", "fa-solid fa-star");
  start2.setAttribute("class", "fa-solid fa-star");
  start3.setAttribute("class", "fa-solid fa-star");
  start4.setAttribute("class", "fa-regular fa-star");
  start5.setAttribute("class", "fa-regular fa-star");
}else if (puntuacion > 3.2 && puntuacion <= 3.7) {
  start1.setAttribute("class", "fa-solid fa-star");
  start2.setAttribute("class", "fa-solid fa-star");
  start3.setAttribute("class", "fa-solid fa-star");
  start4.setAttribute("class", "fa-solid fa-star-half-stroke");
  start5.setAttribute("class", "fa-regular fa-star");
}else if (puntuacion > 3.7 && puntuacion <= 4.2) {
  start1.setAttribute("class", "fa-solid fa-star");
  start2.setAttribute("class", "fa-solid fa-star");
  start3.setAttribute("class", "fa-solid fa-star");
  start4.setAttribute("class", "fa-solid fa-star");
  start5.setAttribute("class", "fa-regular fa-star");
}else if (puntuacion > 4.2 && puntuacion <= 4.7) {
  start1.setAttribute("class", "fa-solid fa-star");
  start2.setAttribute("class", "fa-solid fa-star");
  start3.setAttribute("class", "fa-solid fa-star");
  start4.setAttribute("class", "fa-solid fa-star");
  start5.setAttribute("class", "fa-solid fa-star-half-stroke");
}else if (puntuacion > 4.7 && puntuacion <= 5) {
  start1.setAttribute("class", "fa-solid fa-star");
  start2.setAttribute("class", "fa-solid fa-star");
  start3.setAttribute("class", "fa-solid fa-star");
  start4.setAttribute("class", "fa-solid fa-star");
  start5.setAttribute("class", "fa-solid fa-star");
};


// Código para calificación global
let etrellaUnoDivs = document.getElementById("etrellaUnoDivs");
let etrellaDosDivs = document.getElementById("etrellaDosDivs");
let etrellaTresDivs = document.getElementById("etrellaTresDivs");
let etrellaCuatroDivs = document.getElementById("etrellaCuatroDivs");
let etrellaCincoDivs = document.getElementById("etrellaCincoDivs");

// Lógica para cambiar las clases de las estrellas basada en la puntuación
if (puntuacion >= 0 && puntuacion <= 0.2) {
    etrellaUnoDivs.setAttribute("class", "fa-regular fa-star");
    etrellaDosDivs.setAttribute("class", "fa-regular fa-star");
    etrellaTresDivs.setAttribute("class", "fa-regular fa-star");
    etrellaCuatroDivs.setAttribute("class", "fa-regular fa-star");
    etrellaCincoDivs.setAttribute("class", "fa-regular fa-star");
} else if (puntuacion > 0.2 && puntuacion <= 0.7) {
    etrellaUnoDivs.setAttribute("class", "fa-solid fa-star-half-stroke");
    etrellaDosDivs.setAttribute("class", "fa-regular fa-star");
    etrellaTresDivs.setAttribute("class", "fa-regular fa-star");
    etrellaCuatroDivs.setAttribute("class", "fa-regular fa-star");
    etrellaCincoDivs.setAttribute("class", "fa-regular fa-star");
} else if (puntuacion > 0.7 && puntuacion <= 1.2) {
    etrellaUnoDivs.setAttribute("class", "fa-solid fa-star");
    etrellaDosDivs.setAttribute("class", "fa-regular fa-star");
    etrellaTresDivs.setAttribute("class", "fa-regular fa-star");
    etrellaCuatroDivs.setAttribute("class", "fa-regular fa-star");
    etrellaCincoDivs.setAttribute("class", "ffa-regular fa-star");
} else if (puntuacion > 1.2 && puntuacion <= 1.7) {
   etrellaUnoDivs.setAttribute("class", "fa-solid fa-star");
   etrellaDosDivs.setAttribute("class", "fa-solid fa-star-half-stroke");
   etrellaTresDivs.setAttribute("class", "fa-regular fa-star");
   etrellaCuatroDivs.setAttribute("class", "fa-regular fa-star");
   etrellaCincoDivs.setAttribute("class", "fa-regular fa-star");
}else if (puntuacion > 1.7 && puntuacion <= 2.2) {
   etrellaUnoDivs.setAttribute("class", "fa-solid fa-star");
   etrellaDosDivs.setAttribute("class", "fa-solid fa-star");
   etrellaTresDivs.setAttribute("class", "fa-regular fa-star");
   etrellaCuatroDivs.setAttribute("class", "fa-regular fa-star");
   etrellaCincoDivs.setAttribute("class", "ffa-regular fa-star");
}else if (puntuacion > 2.2 && puntuacion <= 2.7) {
   etrellaUnoDivs.setAttribute("class", "fa-solid fa-star");
   etrellaDosDivs.setAttribute("class", "fa-solid fa-star");
   etrellaTresDivs.setAttribute("class", "fa-solid fa-star-half-stroke");
   etrellaCuatroDivs.setAttribute("class","fa-regular fa-star");
   etrellaCincoDivs.setAttribute("class", "fa-regular fa-star");
}else if (puntuacion > 2.7 && puntuacion <= 3.2) {
   etrellaUnoDivs.setAttribute("class", "fa-solid fa-star");
   etrellaDosDivs.setAttribute("class", "fa-solid fa-star");
   etrellaTresDivs.setAttribute("class", "fa-solid fa-star");
   etrellaCuatroDivs.setAttribute("class", "fa-regular fa-star");
   etrellaCincoDivs.setAttribute("class", "fa-regular fa-star");
}else if (puntuacion > 3.2 && puntuacion <= 3.7) {
   etrellaUnoDivs.setAttribute("class", "fa-solid fa-star");
   etrellaDosDivs.setAttribute("class", "fa-solid fa-star");
   etrellaTresDivs.setAttribute("class", "fa-solid fa-star");
   etrellaCuatroDivs.setAttribute("class", "fa-solid fa-star-half-stroke");
   etrellaCincoDivs.setAttribute("class", "fa-regular fa-star");
}else if (puntuacion > 3.7 && puntuacion <= 4.2) {
   etrellaUnoDivs.setAttribute("class", "fa-solid fa-star");
   etrellaDosDivs.setAttribute("class", "fa-solid fa-star");
   etrellaTresDivs.setAttribute("class", "fa-solid fa-star");
   etrellaCuatroDivs.setAttribute("class", "fa-solid fa-star");
   etrellaCincoDivs.setAttribute("class", "fa-regular fa-star");
}else if (puntuacion > 4.2 && puntuacion <= 4.7) {
   etrellaUnoDivs.setAttribute("class", "fa-solid fa-star");
   etrellaDosDivs.setAttribute("class", "fa-solid fa-star");
   etrellaTresDivs.setAttribute("class", "fa-solid fa-star");
   etrellaCuatroDivs.setAttribute("class","fa-solid fa-star");
   etrellaCincoDivs.setAttribute("class","fa-solid fa-star-half-stroke");
}else if (puntuacion > 4.7 && puntuacion <= 5) {
   etrellaUnoDivs.setAttribute("class", "fa-solid fa-star");
   etrellaDosDivs.setAttribute("class", "fa-solid fa-star");
   etrellaTresDivs.setAttribute("class", "fa-solid fa-star");
   etrellaCuatroDivs.setAttribute("class","fa-solid fa-star");
   etrellaCincoDivs.setAttribute("class", "fa-solid fa-star");
 }
 

