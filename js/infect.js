function noteFill(){
    const newName = sessionStorage.getItem("name");
    const newSchool = sessionStorage.getItem("school");
    const fillName = document.querySelector(".brank .InnerTextText");
    const fillSchool = document.querySelector(".Brank .InnerTextText");
    fillName.textContent = newSchool;
    fillSchool.textContent = newName;
    console.log(newName, newSchool);
}

    noteFill();