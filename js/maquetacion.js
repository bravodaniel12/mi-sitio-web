let barMenu = document.getElementById("bar-menu");
let mainMenu = document.getElementById("mainMenu");
let main_nav = document.getElementById("main-nav");

barMenu.addEventListener("click", function () {
  if (main_Menu.classList.contains("main-menu")) {
    main_Menu.classList.add("main-menu");
    main_Menu.classList.remove("main-menu");
    main_Menu.classList.remove("main-nav");
  }
  else {
    main_Menu.classList.remove("main-nav");
    main_Menu.classList.add("main-menu ");
    main_Menu.classList.add("main-menu");
  }
});

/* <div class="main-page">
        <header class="box">
            <div id="mainLogo" class="logo"><!-- Logo --></div>
            <div id="mainMenu1" class="main-menu1 style-text">      
                 <!-- -->
                <label id="barMenu" class="bar-menu">&#9776</label>
                <ul id="mainMenu" class="main-menu">
                        
                    <li class="item-main-menu"><a class="item-menu" href="#">Inicio</a></li>
                    <li class="item-main-menu"><a class="item-menu" href="#">Nosotros</a></li>
                    <li class="item-main-menu"><a class="item-menu" href="#">Nuestros Clientes</a></li>
                    <li class="item-main-menu"><a class="item-menu" href="#">Galeria</a></li>
                    <li class="item-main-menu"><a class="item-menu" href="#">Otros</a></li>
                </ul>
            </div>
        </header> */