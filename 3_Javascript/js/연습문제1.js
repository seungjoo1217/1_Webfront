

function printJSObject() {
    const userName = document.getElementById("userName");
    const userAge = document.getElementById("userAge");
    const userGender = document.getElementById("userGender");

    const userInfo = {
        이름 : userName.value,
        나이 : userAge.value,
        성별 : userGender.value

    };

    console.log(userInfo);
}