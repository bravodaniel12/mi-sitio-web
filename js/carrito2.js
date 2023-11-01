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
