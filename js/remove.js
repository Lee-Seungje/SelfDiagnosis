function fillOn(){
    const school = sessionStorage.getItem("school");
    const name = sessionStorage.getItem("name");
    const date1 = sessionStorage.getItem("date1");
    const date2 = sessionStorage.getItem("date2");
    const date3 = sessionStorage.getItem("date3");
    console.log(date1, date2, date3);

    const innerSchool = document.querySelector(".brank p");
    const innerName = document.querySelector(".Brank p");
    const date1Inner = document.querySelector("#firstBrank p");
    const date2Inner = document.querySelector("#secondBrank p");
    const date3Inner = document.querySelector("#thirdBrank p");

    innerSchool.innerText = school;
    innerName.innerText = name;
    date1Inner.innerText = date1;
    date2Inner.innerText = date2;
    date3Inner.innerText = date3;
}
function handleToClickofBTN(){
    if (confirm("방역기관 통보내역을 삭제하시겠습니까?") == true){ 
            sessionStorage.removeItem("nomal");
            sessionStorage.removeItem("date1");
            sessionStorage.removeItem("date2");
            sessionStorage.removeItem("date3");
            alert("방역기관 통보내역 삭제를 완료하였습니다");
            location.href = '../html/main.html';
        }
}

if(((window.location.pathname)=='/html/remove.html'))
{
    fillOn();
    const BTNBootom = document.querySelector("#oriori");
    BTNBootom.addEventListener("click", handleToClickofBTN);
}