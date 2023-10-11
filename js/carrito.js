let boxMinus = document.getElementById("boxMinus");
let boxCantidad = document.getElementById("boxCantidad");
let boxPlus = document.getElementById("boxPlus");
let subTotal = document.getElementById("subTotal");
let numeroProductos = document.getElementById("numeroProductos");
let valorProducto = 20000;
let auxValorProducto = new Intl.NumberFormat("de-DE").format(valorProducto);
document.getElementById("precioUnidad").innerHTML = auxValorProducto;


boxPlus.addEventListener("click", function() {
    let auxCant = boxCantidad.innerHTML;
    if(auxCant <= 10) {
        auxCant++;
        boxCantidad.innerHTML = auxCant;
        calcularSubtotal()  
      determinarSingularPlural(auxCant)
    }
  
});

boxMinus.addEventListener("click", function(){
    let auxCant= boxCantidad.innerHTML;
    if(auxCant > 0) {
        auxCant--;
        boxCantidad.innerHTML= auxCant;
        calcularSubtotal()
        determinarSingularPlural(auxCant);
        
    }
   
});

function calcularSubtotal() {
    let auxCant = valorProducto*Number(boxCantidad.innerHTML);
    let auxCantUMil = Intl.NumberFormat("de-DE").format(auxCant);
    document.getElementById("subTotal").innerHTML= "$" + auxCantUMil;
}

function determinarSingularPlural(auxCant) {
    if(auxCant == 1){
        numeroProductos.innerHTML ="("+ auxCant + "producto)"
      }
      else if ((auxCant == 0 )|| auxCant > 1) {
        numeroProductos.innerHTML = "(" + auxCant +"productos)"
      }
}
   
