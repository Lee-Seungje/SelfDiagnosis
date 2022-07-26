const CClick = document.querySelector(".menu");
const move = document.querySelector(".move");
const body = document.querySelector(".main");
const onLink = document.querySelector(".grayFoot");
const onGreen = document.querySelector(".greenFoot");
function onClick(){
    move.classList.toggle("moveLeft");
    body.classList.toggle("dark");
    CClick.classList.toggle("blue");
}
function onlink(){
    location.href="../html/servey.html";
}
function onGreenClick(){
    alert("최근 7일이내 방역기관에서 통보 받은 확진일자 및 검체채위일을 입력 하는 곳입니다.\n주의하여 입력해 주십시오.");
    location.href="../html/infect.html";
}

CClick.addEventListener("click", onClick);
onLink.addEventListener("click", onlink);
onGreen.addEventListener("click", onGreenClick);