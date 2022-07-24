const CClick = document.querySelector(".menu");
const move = document.querySelector(".move");
const body = document.querySelector(".main");
function onClick(){
    move.classList.toggle("moveLeft");
    body.classList.toggle("dark");
    CClick.classList.toggle("blue");
}

CClick.addEventListener("click", onClick);