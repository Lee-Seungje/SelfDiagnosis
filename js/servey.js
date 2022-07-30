const bottomBTN = document.querySelector("#oriori");
function onClickFunction(){
    const firstI = document.querySelector('input[name="first"]:checked');
    const secondI = document.querySelector('input[name="check"]:checked');
    const thirdI = document.querySelector('input[name="third"]:checked');
    console.log(firstI.value, secondI.value);
    if((firstI.value == 'no')&&(secondI.value != 'bad')&&(thirdI.value == 'no'))
    {
        location.href = '../html/comfirm.html';
    }
    else
    {
        alert("등교 중지입니다");
    }







}
bottomBTN.addEventListener("click", onClickFunction);