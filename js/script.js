let buton = document.getElementById("boton");
let menu = document.querySelector("ul.menu")

buton.addEventListener("click", function(){
    menu.classList.toggle("open")
})