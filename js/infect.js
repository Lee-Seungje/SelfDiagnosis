const ConfirmationDate = document.querySelector(".BirthInput .PWinput");
const testDate = document.querySelector(".PasswordInput .PWinput");
const ExpectedDate = document.querySelector("#ExpectedInput");

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



noteFill();
ConfirmationDate.addEventListener("input", handleToFirstInput);