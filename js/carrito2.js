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

/////////
// Selecciona el carrito, el icono de cierre y el contenido de box-modal
var carrito = document.querySelector(".carrito");
var btnClose = document.querySelector(".style-btn2.fa-solid.fa-x");
var boxModal = document.querySelector(".box-modal");

// Obtiene el estado de visibilidad de box-modal del almacenamiento local
var isVisible = localStorage.getItem("isVisible") === "true";

// Establece la propiedad "display" de box-modal según el estado de visibilidad
boxModal.style.display = isVisible ? "flex" : "none";

// Agrega un evento "onclick" al carrito
carrito.onclick = function() {
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


  mainImgModal111.addEventListener("click", function() {

    if (mainContent.style.display === "none") {
    mainContent.style.display = "block";
    }
  
  });

  const containerImg = document.querySelector('.principal-container-img');
  const imagenPrincipal = document.getElementById('mainImgModal111');
  const miniatura1 = document.querySelectorAll('.principal-article');
  
  containerImg.addEventListener('mouseover', (event) => {
    if (event.target && event.target.classList.contains('principal-article')) {
      const src = event.target.querySelector('.img-mini-principal').getAttribute('src');
      imagenPrincipal.setAttribute('src', src);

  
      miniaturas.forEach((miniatura) => {
        miniatura.style.border = '2px double rgb(214, 211, 211)'; // Restablecer el borde de todas las miniaturas
      });
  
      event.target.style.border = '2px solid lightblue'; // Cambiar el borde de la miniatura al pasar el cursor
    }
  });
  
  containerImg.style.cursor = 'pointer';
  
  miniatura1.forEach((miniatura) => {
    miniatura.addEventListener('mouseover', () => {
      miniatura.style.border = '2px solid lightblue'; // Cambiar el borde al pasar el cursor por la miniatura
    });
  
    miniatura.addEventListener('mouseout', () => {
      miniatura.style.border = '2x double rgb(214, 211, 211)'; // Restablecer el borde al salir del cursor
    });
  });
  
            
