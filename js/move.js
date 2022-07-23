const click = document.querySelector(".menu");
const move = document.querySelector(".move");
const body = document.querySelector(".main");
function onClick(){
    move.classList.toggle("moveLeft");
    body.classList.toggle("dark");
}

click.addEventListener("click", onClick);