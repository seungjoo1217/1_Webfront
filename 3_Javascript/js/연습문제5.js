const fruit = document.querySelectorAll(".fruit");
const fruitInput = document.querySelectorAll(".fruitInput");

document.addEventListener ("click",(e) => {
    for(let i = 0; i <fruit.length; i ++) {
        if(fruit[i].checked) {
            fruitInput[i].disabled = false;
        }
        if(!fruit[i].checked) {
            fruitInput[i].value = 0;
            fruitInput[i].disabled = true;
        }
    }
});


document.querySelector("#btn").addEventListener("click", () => {
    const result = document.getElementById("result")
    result.innerText = "";

    if(fruitInput[0].value != 0){
        result.innerText += `사과 ${fruitInput[0].value}개`
    }
    if(fruitInput[1].value != 0){
        result.innerText += ` 바나나 ${fruitInput[1].value}개`
    }
    if(fruitInput[2].value != 0){
        result.innerText += ` 메론 ${fruitInput[2].value}개`
    }

    result.innerText += ` 총합 ${2000*fruitInput[0].value + 3000*fruitInput[1].value + 5000*fruitInput[2].value}원`
});