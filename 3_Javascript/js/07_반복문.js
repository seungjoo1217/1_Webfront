/*
for(let num = 1; num <= 5; num++) {
    // 조건식이 TRUE인 경우 반복 수행할 코드;
    console.log("통과!");
}*/

function check1() {

    let result = ""; // 빈 문자열

    for(let num = 1; num <= 5; num++) {
        // console.log(num);

        result += num;
        // result = result + num;
        //     "1" = ""     +  1   (1턴)
        //    "12" = "1"    +  2   (2턴)
        //   "123" = "12"   +  3   (3턴)
        //  "1234" = "123"  +  4   (4턴)
        // "12345" = "1234" +  5   (5턴)
    }
    console.log(result);
}

function check2() {
    //1부터 10까지 1씩 증가하며 출력
    for(let num = 1; num <= 10; num++) {
        console.log(num);
    }
}

function check3() {
    //1부터 20까지 1씩 증가하며 출력
    for(let num = 1; num <= 20; num++) {
        console.log(num);
    }
}

function check4() {
    //5부터 15까지 1씩 증가하며 출력
    for(let num = 5; num <= 15; num++) {
        console.log(num);
    }
}

function check5() {
    //1부터 30까지 2씩 증가하며 출력
    for(let num = 1; num <= 30; num+=2) {
        console.log(num);
    }
}

function check6() {
    //1부터 10까지 모든 정수의 합

    let sum = 0; // 합계를 저장하기 위한 변수

    for(let num = 0; num <= 10; num++) {
        sum += num;
    }
    console.log(sum);
}



const v1 = document.getElementById("inputNumber1-1");
const v2 = document.getElementById("inputNumber1-2");

const result1 = document.getElementById("result1");

function sumFn() {
    const value1 = Number(v1.value);
    const value2 = Number(v2.value);

    let num = "";
    let total = 0;

    for(num = value1; num <= value2; num++){
        total += num;
    }
    result1.innerText = total;
}


const v3 = document.getElementById("inputNumber2-1");
const v4 = document.getElementById("inputNumber2-2");
const v5 = document.getElementById("inputNumber2-3");

const result2 = document.getElementById("result2");

function executeFn2() {
    const value1 = Number(v3.value);
    const value2 = Number(v4.value);
    const value3 = Number(v5.value);

    let num = "";

    result2.innerHTML = ""; // 이전 ul에 작성된 내용을 모두 삭제
    for(num = value1; num <= value2; num += value3) {
        result2.innerHTML += `<li>${num}</li>`;
    }
}

// 요소.innerText = `<li>${num}</li>`;
// -> 요소의 내용으로 문자열을 대입
// (HTML 태그를 해석하지 않고 문자열 그대로 보여줌)

// 요소.innerHTML = `<li>${num}</li>`;
// -> HTML 태그를 해석해서 화면에 태그의 본 기능대로 출력



// ----------------------------------------------------
const number1 = document.getElementById("input3");
const ul = document.getElementById("result3");

function executeFn3() {
    const v1 = Number(number1.value);

    if(v1>=2 && v1<=9) {
        let num = "";
    
        ul.innerHTML = "";
        for(num = 1; num <= 9; num++) {
            let total = v1 * num
            ul.innerHTML += `<li>${v1}X${num}=${total}</li>`;
        }
    } else {
        alert("2에서 9사이의 숫자를 입력하세요.")
    }

}

