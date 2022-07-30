
function addClick(){
    location.href = '../html/main.html';
    const grayFoot = document.querySelector(".grayFoot");
    grayFoot.style.backgroundColor = "#007eda";
}

if((window.location.pathname)=='/html/comfirm.html'){
    const nameP = document.querySelector(".firstP");
    const schoolP = document.querySelector(".secondP");
    const dateP = document.querySelector(".thirdP");
    const sessName = sessionStorage.getItem("name");
    const sessSchool = sessionStorage.getItem("school");
    const ToDay = new Date();
    const date = String(ToDay.getDate()).padStart(2, "0");
    const year = String(ToDay.getFullYear()).padStart(2, "0");
    const month = String(ToDay.getMonth()+1).padStart(2, "0");
    const Sum = `${year}-${month}-${date}`;
    nameP.innerText = sessName;
    schoolP.innerText = ` (${sessSchool})`;
    dateP.innerText = `금일(${Sum})`;
    const rightNav = document.querySelector(".rightNav");
    rightNav.addEventListener("click", addClick);
}