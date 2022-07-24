const OInclick = document.querySelector(".foot");
const bottom = document.querySelector("#oriori");
function handleClick(){
    const inputValue = document.querySelector(".scINPUT").value;
    console.log(inputValue);
    if(inputValue=='')
    {
        alert("안 돼 돌아가");
    }
    else{
        localStorage.setItem("school", inputValue);
        alert("학교 입력 완료");
        location.href="../html/login.html";
        console.log(inputValue);
    }
}
function secondHandleClick(){
    const Na = document.querySelector(".nameinput").value;
    const DB = document.querySelector(".birthinput").value;
    const PW = document.querySelector(".PWinput").value;
    const Schchchool = localStorage.getItem("school");
    if((Na!='')&&(PW!='')&&(DB!='')&&(Schchchool!=undefined)){
        alert("로그인 되었습니다");
        localStorage.setItem("name", Na);
        location.href="../html/main.html";
    }
    else{
        alert("안 돼 돌아가");
    }
}
function mainFunction(){
    const Name = document.querySelector(".nameOfPerson");
    const School = document.querySelector(".schoolOfPerson");
    const NNNName = localStorage.getItem("name");
    const SSSschoool= localStorage.getItem("school");
    console.log(NNNName, SSSschoool);
    Name.textContent = NNNName;
    School.textContent = SSSschoool;
}
function schoolFunction(){
    const textModify = document.querySelector(".InnerTextText");
    const Schchchool = localStorage.getItem("school");
    textModify.innerText = Schchchool;
}
OInclick.addEventListener("click", handleClick);
bottom.addEventListener("click", secondHandleClick);

if((window.location.pathname)=='/html/main.html')
{
    mainFunction();
}
if((window.location.pathname)=='/html/login.html')
{
    schoolFunction();
}