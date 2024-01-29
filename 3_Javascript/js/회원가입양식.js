const checkObj = {
    "inputId" : true, // 아이디
    "inputPw" : true, // 비밀번호
    "inputPwConfirm" : true, // 비번확인
    "inputName" : true, // 이름
    "gender" : true, // 성별
    "inputTel" : true // 전화번호
}


document.getElementById("inputId").addEventListener("keyup", (e) => {
    const regExp1 = /^[a-z][a-zA-Z0-9-_]{5,13}$/;

    if(regExp1.test(e.target.value)) {
        e.target.style.backgroundColor = "springgreen";
        checkObj["inputId"] = true;
    } else if(e.target.value.length == 0) {
        e.target.style.backgroundColor = "white";
        checkObj["inputId"] = false;
    } else {
        e.target.style.backgroundColor = "red";
        checkObj["inputId"] = false;
    }
});

document.getElementById("inputPwConfirm").addEventListener("keyup", (e) => {
    const pw = document.getElementById("inputPw");
    const pwms = document.getElementById("pwMessage")

    if(pw.value.length == 0) {
        e.target.value = "";
        alert("비밀번호를 입력해주세요");
        pw.focus();
    }

    
    if(e.target.value == pw.value){
        pwms.classList.remove("error")
        pwms.classList.add("confirm")
        pwms.innerText = "비밀번호 일치";
        checkObj["inputPw"] = true;
    }else if(e.target.value.length == 0) {
        pwms.innerHTML = "";
        pwms.classList.remove("confirm");
        pwms.classList.remove("error");
        checkObj["inputPw"] = false;
    } else {
        pwms.classList.remove("confirm")
        pwms.classList.add("error")
        pwms.innerText = "비밀번호가 불일치";
        checkObj["inputPw"] = false;
    }
});

document.getElementById("inputName").addEventListener("keyup", (e) => {
    const nameSpan = document.getElementById("nameMessage");
    const regExp2 = /^[가-힣]{2,5}$/;

    if(regExp2.test(e.target.value)) {
        nameSpan.innerText = "정상입력";
        nameSpan.classList.remove("error");
        nameSpan.classList.add("confirm");
        checkObj["inputName"] = true;
    } else if(e.target.value.length == 0) {
        nameSpan.innerHTML = "";
        nameSpan.classList.remove("confirm");
        nameSpan.classList.remove("error");
        checkObj["inputName"] = false;
    } else {
        nameSpan.innerText = "한글만 입력하세요"
        nameSpan.classList.remove("confirm");
        nameSpan.classList.add("error");
        checkObj["inputName"] = false;

    }
    console.log(checkObj.inputName);
});

function validate() {

    const gender = document.getElementsByName("gender");
    const tel = document.getElementById("inputTel");
    
    const regExp3 = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/;

    if(!gender[0].checked && !gender[1].checked) {
        alert("성별을 선택해주세요.");
        SubmitEvent.remove();
    }
    if(regExp3.test(tel.value) == false){
        alert("전화번호의 형식이 올바르지 않습니다");
        SubmitEvent.remove();
    }
}

document.getElementById("sign").addEventListener("click", () => {
    
    validate();

    if(checkObj.inputId == true &&
        checkObj.inputPw == true &&
        checkObj.inputPwConfirm == true &&
        checkObj.inputName == true &&
        checkObj.gender == true &&
        checkObj.inputTel == true) {
        alert("회원가입 성공");
    } else {
        alert("회원가입 실패")
        SubmitEvent.remove();
    }
});

document.getElementById("clear").addEventListener("click", () => {
    document.getElementsByTagName("input").innerHTML = "";
});
