const checkObj = {
    "inputId" : false, // 아이디
    "inputPw" : false, // 비밀번호
    "inputPwConfirm" : false, // 비번확인
    "inputName" : false, // 이름
    "gender" : false, // 성별
    "inputTel" : false // 전화번호
}


document.getElementById("inputId").addEventListener("keyup", (e) => {
    const regExp1 = /^[a-z][a-zA-Z0-9-_]{5,13}$/;

    if(regExp1.test(e.target.value)) {
        e.target.style.backgroundColor = "lightgreen";
        checkObj["inputId"] = true;
    } else if(e.target.value.length == 0) {
        e.target.style.backgroundColor = "white";
        checkObj["inputId"] = false;
    } else {
        e.target.style.backgroundColor = "red";
        checkObj["inputId"] = false;
    }
    console.log(checkObj);
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
    }else if(e.target.value.length == 0) {
        pwms.innerHTML = "";
        pwms.classList.remove("confirm");
        pwms.classList.remove("error");
    } else {
        pwms.classList.remove("confirm")
        pwms.classList.add("error")
        pwms.innerText = "비밀번호가 불일치";
    }
});

document.getElementById("inputName").addEventListener("keyup", (e) => {
    const nameSpan = document.getElementById("nameMessage");
    const regExp2 = /^[가-힣]{2,5}$/;

    if(regExp2.test(e.target.value)) {
        nameSpan.innerText = "정상입력";
        nameSpan.classList.remove("error")
        nameSpan.classList.add("confirm")
    } else if(e.target.value.length == 0) {
        nameSpan.innerHTML = "";
        nameSpan.classList.remove("confirm");
        nameSpan.classList.remove("error");
    } else {
        nameSpan.innerText = "한글만 입력하세요"
        nameSpan.classList.remove("confirm")
        nameSpan.classList.add("error")
    }
});


document.getElementById("sign").addEventListener("click", () => {

    if(checkObj==true) {
        alert("회원가입 완료");
    }
    
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
});
