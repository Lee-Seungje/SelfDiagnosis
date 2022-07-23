const click = document.querySelector(".foot");
const textModify = document.querySelector(".InnerTextText");
function handleClick(){
    const inputValue = document.querySelector(".scINPUT").value;
    console.log(inputValue);
    if(inputValue=='')
    {
        alert("안돼 돌아가");
    }
    else{
        alert("학교 입력 완료");
        location.href="../html/login.html";
        textModify.innerText = inputValue;
    }
}

click.addEventListener("click", handleClick);