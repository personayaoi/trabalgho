const simonEsquilo = document.querySelector("#meuID");
const h1coisa = document.getElementById("texto2");
const theodoreEffect = new Audio("theodore.mp3");
const divImg = document.getElementById("imagem");

simonEsquilo.addEventListener("click", function(){
    console.log("FUNCIONA");
    h1coisa.innerText = "THEODORE O ESQUILO VOTADO PARA PRESIDENTE 2026";
    theodoreEffect.play();
    divImg.innerHTML = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb1KU7ua2cxDwl2CctW6HQ7OBgPHCzCQDk43zbVE2JHw&s=10">'
})

