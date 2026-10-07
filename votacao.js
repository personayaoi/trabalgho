const BozoLula = document.querySelector("#meuID");
const LulaBozo = document.querySelector("#meuID2");
const h1coisa = document.getElementById("texto2");
const h2coisa = document.getElementById("texto2");
const urnaEffectBozo = new Audio("urna.mp3");
const urnaEffectPT = new Audio("urna.mp3");
const divImg = document.getElementById("imagem");

BozoLula.addEventListener("click", function(){
    console.log("VOTOU");
    h1coisa.innerText = "por favor recarregue a pagina e vote novamente !nao faça esse erro";
})
    
LulaBozo.addEventListener("click", function(){
    console.log("VOTOU");
    h2coisa.innerText = "ebaa";
})

    urnaEffectBozo.play();
    divImg.innerHTML = '<img src="https://media1.tenor.com/m/sHi7KKRhQyQAAAAC/bolsonaro-dan%C3%A7ando-taxa%C3%A7%C3%A3o-do-amor.gif">'

    urnaEffectPT.play();
    divImg.innerHTML = '<img src="https://media1.tenor.com/m/0a09KUNuY6oAAAAC/lula-lula-presidente.gif">'