const ConfirmationDate = document.querySelector(".BirthInput .PWinput");
const testDate = document.querySelector(".PasswordInput .PWinput");
const ExpectedDate = document.querySelector("#ExpectedInput");
const BottomBTN = document.querySelector(".bottom");

function noteFill(){
    const newName = sessionStorage.getItem("name");
    const newSchool = sessionStorage.getItem("school");
    const fillName = document.querySelector(".brank .InnerTextText");
    const fillSchool = document.querySelector(".Brank .InnerTextText");
    fillName.textContent = newSchool;
    fillSchool.textContent = newName;
    console.log(newName, newSchool);
    const ToDay = new Date();
    const date = String(ToDay.getDate()).padStart(2, "0");
    const year = String(ToDay.getFullYear()).padStart(2, "0");
    const month = String(ToDay.getMonth()+1).padStart(2, "0");
    const Sum = `${year}-${month}-${date}`;
    console.log(String(Sum));
    ConfirmationDate.value = Sum;
    ConfirmationDate.max = Sum;
    const Confirmationdate = String(ToDay.getDate()-6).padStart(2, "0");
    const ConfirmationSum = `${year}-${month}-${Confirmationdate}`;
    ConfirmationDate.min = ConfirmationSum;
    const testdate = String(ToDay.getDate()-1).padStart(2, "0");
    const testSum = `${year}-${month}-${testdate}`;
    testDate.value = testSum;
    testDate.min = ConfirmationSum;
    testDate.max = Sum;
    console.log(ToDay.getDate()+6);
    if((ToDay.getDate()+6)>=31){
        const Expectedmonth = String(ToDay.getMonth()+2).padStart(2, "0");
        const Expecteddate = String(ToDay.getDate()-25).padStart(2, "0");
        const ExpectedSum = `${year}-${Expectedmonth}-${Expecteddate}`;
        console.log(ExpectedSum);
        ExpectedDate.value = ExpectedSum;
    }
    else{
        const Expecteddate = String(ToDay.getDate()+6).padStart(2, "0");
        const ExpectedSum = `${year}-${month}-${Expecteddate}`;
        console.log(ExpectedSum);
        ExpectedDate.value = ExpectedSum;
    }
}
function handleToFirstInput(){
    console.log(ConfirmationDate.value);
    const Convalue = ConfirmationDate.value;
    const Year = Convalue.substring(0, 4);
    const orange = Convalue.substring(5);
    const Month = orange.substring(0, 2);
    const Date = Convalue.substring(8);
    console.log(Year);
    console.log(Month);
    console.log(Date);
    const mathYear = Math.ceil(Year);
    const mathMonth = Math.ceil(Month);
    const mathDate = Math.ceil(Date);

    const testdate = String(mathDate-1).padStart(2, "0");
    const testSum = `${Year}-${Month}-${testdate}`;
    testDate.value = testSum;

    if((mathDate+6)>=31){
        const Expectedmonth = String(mathMonth+1).padStart(2, "0");
        const Expecteddate = String(mathDate-25).padStart(2, "0");
        const ExpectedSum = `${Year}-${Expectedmonth}-${Expecteddate}`;
        ExpectedDate.value = ExpectedSum;
    }
    else{
        const Expecteddate = String(mathDate+6).padStart(2, "0");
        const ExpectedSum = `${Year}-${Month}-${Expecteddate}`;
        ExpectedDate.value = ExpectedSum;
    }
}
function handleToSecondInput(){
    const Convalue = testDate.value;
    const Year = Convalue.substring(0, 4);
    const orange = Convalue.substring(5);
    const Month = orange.substring(0, 2);
    const Date = Convalue.substring(8);
    console.log(Year);
    console.log(Month);
    console.log(Date);
    const mathYear = Math.ceil(Year);
    const mathMonth = Math.ceil(Month);
    const mathDate = Math.ceil(Date);

    if((mathDate+6)>=31){
        const Expectedmonth = String(mathMonth+1).padStart(2, "0");
        const Expecteddate = String(mathDate-25).padStart(2, "0");
        const ExpectedSum = `${Year}-${Expectedmonth}-${Expecteddate}`;
        ExpectedDate.value = ExpectedSum;
    }
    else{
        const Expecteddate = String(mathDate+6).padStart(2, "0");
        const ExpectedSum = `${Year}-${Month}-${Expecteddate}`;
        ExpectedDate.value = ExpectedSum;
    }
}

function handleToClick(){
    if (confirm("저장하시겠습니까?\n잘못 입력한 경우, 오늘안(등록일)에는 삭제 후 재등록 할 수 있습니다.\n내일부터는 학교에 연락하여 수정해 주십시오.") == true){ 
        sessionStorage.setItem("nomal", true);
        location.href="../html/main.html";
        }
    else{
        sessionStorage.removeItem("nomal");
    }
}

function changeColor(){
    const nomaL = sessionStorage.getItem("nomal");
    if(nomaL){
        const deletes = document.querySelector("#RedWill");
        deletes.innerText = '통보내역 삭제';
        const WillRed = document.querySelector(".greenFoot");
        WillRed.style.backgroundColor = 'rgb(207, 60, 60)';
        const onWon = document.querySelector(".onWon");
        onWon.remove();
        const WillP = document.querySelector(".won p");
        WillP.style.color = 'rgb(207, 60, 60)';
        WillP.innerText = '등교\n중지';
        const grayFoot = document.querySelector(".grayFoot");
        grayFoot.style.backgroundColor = "orange";
    }
}

if((window.location.pathname)=='/html/infect.html'){
    noteFill();
    ConfirmationDate.addEventListener("input", handleToFirstInput);
    testDate.addEventListener("input", handleToSecondInput);
    BottomBTN.addEventListener("click", handleToClick);
}
if(((window.location.pathname)=='/html/main.html'))
{
    changeColor();
}