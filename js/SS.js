const click = document.querySelector(".foot");
const textModify = document.querySelector(".InnerTextText");
const bottom = document.querySelector("#oriori");
function handleClick(){
    const inputValue = document.querySelector(".scINPUT").value;
    console.log(inputValue);
    if(inputValue=='')
    {
        alert("안 돼 돌아가");
    }
    else{
        alert("학교 입력 완료");
        location.href="../html/login.html";
        textModify.innerText = inputValue;
        console.log(inputValue);
    }
}
function secondHandleClick(){
    const Na = document.querySelector(".nameinput").value;
    const DB = document.querySelector(".birthinput").value;
    const PW = document.querySelector(".PWinput").value;
    if((Na!='')&&(PW!='')&&(DB!='')){
        alert("로그인 되었습니다");
        location.href="../html/main.html";
    }
    else{
        alert("안 돼 돌아가");
    }
}

click.addEventListener("click", handleClick);
bottom.addEventListener("click", secondHandleClick);