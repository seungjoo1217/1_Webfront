// prompt 사용 연습
function test() {

    const password = prompt("비밀번호를 입력하세요");

    // 확인 -> 입력한 문자열
    // 취소 -> null

    if(password == null) { // 취소
        alert("취소");

    } else { // 확인
        
        if(password == '1234') {
            alert("비밀번호 일치");
        } else {
            alert("비밀번호 불일치!");
        }
    
    }
}


// ----------------------------------------------------
const output = document.getElementById("output"); // 잔액 출력 span
const amount = document.getElementById("amount"); // 금액 작성 input

let balance = 10000; // 잔액 기록 변수 (chrlrkqt 10000)
const password = '1234'; // 비밀번호 저장 변수 (초기 비밀번호 1234)

output.innerText = balance; // 초기 금액 설정

// 입금
function deposit() {
    // 1. 입금 버튼 클릭
    // 2. input 에 입력된 금액구하기
    //3. 구한 금액을 잔액(balbance)에 추가하기
    if(amount.value.length == 0) {
        alert("금액을 입력해주세요");
    }else {
        balance += Number(amount.value);
        // balance = balance + Number(amount.value);
        output.innerText = balance;
        
        amount.value = ''; // input에 작성된 값 제거
    }
}

// 출금
function withdrawal() {
    if(amount.value.length == 0) {
        alert("금액을 입력해주세요");
    } else {
        const num = prompt("비밀번호를 입력하세요");
    
        if(password == null) { // 취소
            alert("취소");
    
        } else { // 확인
            
            if(password == '1234') {
                if(amount.value > balance) {
                    alert("출금 금액이 잔액보다 클 수 없습니다");
                }else {
                    balance -= Number(amount.value);
                    output.innerText = balance;
                    alert(`비밀번호가 일치합니다. 총 금액은 ${balance}입니다.`);
                }
            } else {
                alert("비밀번호가 일치하지 않습니다.");
            }
        
        }
    }
    amount.value = '';
}
