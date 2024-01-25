const boxList = document.querySelectorAll(".box");
const inputList = document.querySelectorAll(".color-input");

document.querySelector("#changeButton").addEventListener( "click" , function() {

    for(let i=0; i < boxList.length; i++) {
        boxList[i].style.backgroundColor = inputList[i].value;
    }
});