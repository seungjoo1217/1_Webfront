const total = document.getElementById("total");

function num0() {
    total.innerText = 0;
}
function num1() {
    total.innerText = 1;
}
function num2() {
    total.innerText = 2;
}
function num3() {
    total.innerText = 3;
}
function num4() {
    total.innerText = 4;
}
function num5() {
    total.innerText = 5;
}
function num6() {
    total.innerText = 6;
}
function num7() {
    total.innerText = 7;
}
function num8() {
    total.innerText = 8;
}
function num9() {
    total.innerText = 9;
}



function plusFn() {
    const value1 = total.innerText
}



// ---------------------------------------------------------
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

const result = document.getElementById("result");

function plus() {
    const value1 = Number(num1.value);
    const value2 = Number(num2.value);

    result.innerText = value1 + value2;
}