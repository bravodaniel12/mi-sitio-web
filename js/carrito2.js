let imgBox = document.getElementById("imgBox");
let imgMini1 = document.getElementById("imgMini1");
let imgMini2 = document.getElementById("imgMini2");
let imgMini3 = document.getElementById("imgMini3");
let imgMini4 = document.getElementById("imgMini4");

imgMini1.addEventListener("click",function(){
    imgBox.setAttribute("src","img/image-product-1.jpg")
    boxImgBox1.classList.add("box-img-mini")
    boxImgBox2.classList.remove("box-img-mini")
    boxImgBox3.classList.remove("box-img-mini")
    boxImgBox4.classList.remove("box-img-mini")
    boxImgBox1.classList.add("img-mini-act")
    boxImgBox2.classList.remove("img-mini-act")
    boxImgBox3.classList.remove("img-mini-act")
    boxImgBox4.classList.remove("img-mini-act")
})

imgMini2.addEventListener("click",function(){
    imgBox.setAttribute("src","img/image-product-2.jpg")
    boxImgBox2.classList.add("box-img-mini")
    boxImgBox1.classList.remove("box-img-mini")
    boxImgBox3.classList.remove("box-img-mini")
    boxImgBox4.classList.remove("box-img-mini")
    boxImgBox2.classList.add("img-mini-act")
    boxImgBox1.classList.remove("img-mini-act")
    boxImgBox3.classList.remove("img-mini-act")
    boxImgBox4.classList.remove("img-mini-act")
})

imgMini3.addEventListener("click",function(){
    imgBox.setAttribute("src","img/image-product-3.jpg")
    boxImgBox3.classList.add("box-img-mini")
    boxImgBox1.classList.remove("box-img-mini")
    boxImgBox2.classList.remove("box-img-mini")
    boxImgBox4.classList.remove("box-img-mini")
    boxImgBox3.classList.add("img-mini-act")
    boxImgBox1.classList.remove("img-mini-act")
    boxImgBox2.classList.remove("img-mini-act")
    boxImgBox4.classList.remove("img-mini-act")
})
imgMini4.addEventListener("click",function(){
    imgBox.setAttribute("src","img/image-product-4.jpg")
    boxImgBox4.classList.add("box-img-mini")
    boxImgBox1.classList.remove("box-img-mini")
    boxImgBox2.classList.remove("box-img-mini")
    boxImgBox3.classList.remove("box-img-mini")
    boxImgBox4.classList.add("img-mini-act")
    boxImgBox1.classList.remove("img-mini-act")
    boxImgBox2.classList.remove("img-mini-act")
    boxImgBox3.classList.remove("img-mini-act")
})

let btnmenos = document.getElementById("menos");
let canBox = document.getElementById("cantBox");
let btnCantidad = document.getElementById("canOb");
let btnmas =document.getElementById("mas");
let numElem = document.getElementById("numeroElementos");

let valorUnitario = 199000;
let valorUnitarioTxt = valorUnitario.toString();

let valoeUnitarioPeso = new Intl.NumberFormat().format(valorUnitario);

let cantNumTotal = valorUnitarioTxt.length;

let valorTotal = document.getElementById("valorTotal");
let valorTotalInt= 1; 


btnmas.addEventListener("click",function(){
    let numElementosTxt = document.getElementById("numeroElementos").innerHTML;
    let numeroEnterosInt = parseInt(numElementosTxt);
    


    if (numeroEnterosInt<=9) {
        let totalElementosInt= numeroEnterosInt + 1;
        let totalElementosTxt= totalElementosInt.toString();
        numElem.innerHTML= totalElementosTxt;
        valorTotalInt = valorUnitario*totalElementosInt;
        valorTotal.innerHTML = "$ " + new Intl.NumberFormat().format(valorTotalInt);
    } else {
        numElem.innerHTML= totalElementosTxt;
    }
    
});

btnmenos.addEventListener("click", function(){
    let numElementosTxt = document.getElementById("numeroElementos").innerHTML;
    let numeroEnterosInt = parseInt(numElementosTxt);

    if (numeroEnterosInt>=1) {
        let totalElementosInt= numeroEnterosInt - 1;
        let totalElementosTxt= totalElementosInt.toString();
        numElem.innerHTML= totalElementosTxt;
        valorTotalInt = valorUnitario*totalElementosInt;
        valorTotal.innerHTML = "$ " + new Intl.NumberFormat().format(valorTotalInt);
        if (valorTotalInt<=0){
            valorTotal.innerHTML = "$ " + new Intl.NumberFormat().format(valorUnitario);
        }
    }
    else {
        numElem.innerHTML= totalElementosTxt;
    }
    
});

let lightBox =document.getElementById("lightBox");
let btnX = document.getElementById("btnX");

imgBox.addEventListener("click",function(){
    lightBox.classList.remove("lightbox-hidden");
})

btnX.addEventListener("click",function(){
   lightBox.classList.add("lightbox-hidden");
})

let imgEscPrin = document.getElementById("imgEscPrin");
let imgMiniEsc1 = document.getElementById("imgMiniEsc1");
let imgMiniEsc2 = document.getElementById("imgMiniEsc2");
let imgMiniEsc3 = document.getElementById("imgMiniEsc3");
let imgMiniEsc4 = document.getElementById("imgMiniEsc4");

imgMiniEsc1.addEventListener("click",function(){
    imgEscPrin.setAttribute("src","img/image-product-1.jpg");
    imgEsc1.classList.add("box-img-mini");
    imgEsc2.classList.remove("box-img-mini");
    imgEsc3.classList.remove("box-img-mini");
    imgEsc4.classList.remove("box-img-mini");
    imgEsc1.classList.add("img-mini-act");
    imgEsc2.classList.remove("img-mini-act");
    imgEsc3.classList.remove("img-mini-act");
    imgEsc4.classList.remove("img-mini-act");
})

imgMiniEsc2.addEventListener("click",function(){
    imgEscPrin.setAttribute("src","img/image-product-2.jpg")
    imgEsc2.classList.add("box-img-mini")
    imgEsc1.classList.remove("box-img-mini")
    imgEsc3.classList.remove("box-img-mini")
    imgEsc4.classList.remove("box-img-mini")
    imgEsc2.classList.add("img-mini-act")
    imgEsc1.classList.remove("img-mini-act")
    imgEsc3.classList.remove("img-mini-act")
    imgEsc4.classList.remove("img-mini-act")
})

imgMiniEsc3.addEventListener("click",function(){
    imgEscPrin.setAttribute("src","img/image-product-3.jpg")
    imgEsc3.classList.add("box-img-mini")
    imgEsc1.classList.remove("box-img-mini")
    imgEsc2.classList.remove("box-img-mini")
    imgEsc4.classList.remove("box-img-mini")
    imgEsc3.classList.add("img-mini-act")
    imgEsc1.classList.remove("img-mini-act")
    imgEsc2.classList.remove("img-mini-act")
    imgEsc4.classList.remove("img-mini-act")
})
imgMiniEsc4.addEventListener("click",function(){
    imgEscPrin.setAttribute("src","img/image-product-4.jpg")
    imgEsc4.classList.add("box-img-mini")
    imgEsc1.classList.remove("box-img-mini")
    imgEsc2.classList.remove("box-img-mini")
    imgEsc3.classList.remove("box-img-mini")
    imgEsc4.classList.add("img-mini-act")
    imgEsc1.classList.remove("img-mini-act")
    imgEsc2.classList.remove("img-mini-act")
    imgEsc3.classList.remove("img-mini-act")
})

let btnAtras = document.getElementById("btnAtras");
let btnAdelante = document.getElementById("btnAdelante");
let counter=0;
let numImg=["img/image-product-1.jpg","img/image-product-2.jpg","img/image-product-3.jpg","img/image-product-4.jpg"];

btnAtras.addEventListener("click", function(){
    if (counter>0) {
        counter--;
    } else {
        counter = numImg.length-1;
    }
    imgEscPrin.setAttribute("src",numImg[counter]);   
    
    if (counter==0) {
        imgEsc1.classList.add("box-img-mini");
        imgEsc2.classList.remove("box-img-mini");
        imgEsc3.classList.remove("box-img-mini");
        imgEsc4.classList.remove("box-img-mini");
        imgEsc1.classList.add("img-mini-act");
        imgEsc2.classList.remove("img-mini-act");
        imgEsc3.classList.remove("img-mini-act");
        imgEsc4.classList.remove("img-mini-act");
    } else if(counter==1) {
        imgEsc2.classList.add("box-img-mini")
        imgEsc1.classList.remove("box-img-mini")
        imgEsc3.classList.remove("box-img-mini")
        imgEsc4.classList.remove("box-img-mini")
        imgEsc2.classList.add("img-mini-act")
        imgEsc1.classList.remove("img-mini-act")
        imgEsc3.classList.remove("img-mini-act")
        imgEsc4.classList.remove("img-mini-act")
    } else if (counter==2) {
        imgEsc3.classList.add("box-img-mini")
        imgEsc1.classList.remove("box-img-mini")
        imgEsc2.classList.remove("box-img-mini")
        imgEsc4.classList.remove("box-img-mini")
        imgEsc3.classList.add("img-mini-act")
        imgEsc1.classList.remove("img-mini-act")
        imgEsc2.classList.remove("img-mini-act")
        imgEsc4.classList.remove("img-mini-act")
    } else {
        imgEsc4.classList.add("box-img-mini")
        imgEsc1.classList.remove("box-img-mini")
        imgEsc2.classList.remove("box-img-mini")
        imgEsc3.classList.remove("box-img-mini")
        imgEsc4.classList.add("img-mini-act")
        imgEsc1.classList.remove("img-mini-act")
        imgEsc2.classList.remove("img-mini-act")
        imgEsc3.classList.remove("img-mini-act")
    }

})

btnAdelante.addEventListener("click", function(){
    if (counter<3) {
       counter++;
    } else {
        counter =0;
    }
   imgEscPrin.setAttribute("src",numImg[counter]);

   if (counter==0) {
    imgEsc1.classList.add("box-img-mini");
    imgEsc2.classList.remove("box-img-mini");
    imgEsc3.classList.remove("box-img-mini");
    imgEsc4.classList.remove("box-img-mini");
    imgEsc1.classList.add("img-mini-act");
    imgEsc2.classList.remove("img-mini-act");
    imgEsc3.classList.remove("img-mini-act");
    imgEsc4.classList.remove("img-mini-act");
} else if(counter==1) {
    imgEsc2.classList.add("box-img-mini")
    imgEsc1.classList.remove("box-img-mini")
    imgEsc3.classList.remove("box-img-mini")
    imgEsc4.classList.remove("box-img-mini")
    imgEsc2.classList.add("img-mini-act")
    imgEsc1.classList.remove("img-mini-act")
    imgEsc3.classList.remove("img-mini-act")
    imgEsc4.classList.remove("img-mini-act")
} else if (counter==2) {
    imgEsc3.classList.add("box-img-mini")
    imgEsc1.classList.remove("box-img-mini")
    imgEsc2.classList.remove("box-img-mini")
    imgEsc4.classList.remove("box-img-mini")
    imgEsc3.classList.add("img-mini-act")
    imgEsc1.classList.remove("img-mini-act")
    imgEsc2.classList.remove("img-mini-act")
    imgEsc4.classList.remove("img-mini-act")
} else {
    imgEsc4.classList.add("box-img-mini")
    imgEsc1.classList.remove("box-img-mini")
    imgEsc2.classList.remove("box-img-mini")
    imgEsc3.classList.remove("box-img-mini")
    imgEsc4.classList.add("img-mini-act")
    imgEsc1.classList.remove("img-mini-act")
    imgEsc2.classList.remove("img-mini-act")
    imgEsc3.classList.remove("img-mini-act")
}
})






