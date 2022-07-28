function noteFill(){
    const newName = sessionStorage.getItem("name");
    const newSchool = sessionStorage.getItem("school");
    const fillName = document.querySelector(".brank .InnerTextText");
    const fillSchool = document.querySelector(".Brank .InnerTextText");
    fillName.textContent = newSchool;
    fillSchool.textContent = newName;
    console.log(newName, newSchool);
    
    const ConfirmationDate = document.querySelector(".BirthInput .PWinput");
    const testDate = document.querySelector(".PasswordInput .PWinput");
    const ExpectedDate = document.querySelector("#ExpectedInput");
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

noteFill();
// setInterval(noteFill, 1000);