
let hamburgueMenu = document.getElementById("hamburguerMenu");
let mainMenu = document.getElementById("mainMenu");

hamburgueMenu.addEventListener("click", function() {
    if (mainMenu.classList.contains("main-menu")) {
    mainMenu.classList.add("main-menu-block")
    mainMenu.classList.remove("main-menu") 
}
else {
    mainMenu.classList.remove("main-menu-block")
    mainMenu.classList.add("main-menu") 
}
});
