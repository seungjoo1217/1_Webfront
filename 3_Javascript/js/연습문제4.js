const createBtn = document.querySelector("#createBtn");
const lottoBoard = document.querySelector("#lottoBoard");


let count = 0;

createBtn.addEventListener("click",() => {
    lottoBoard.innerHTML = "";
    for(let i = 1; i < 46; i++) {
        const number = document.createElement("div");
        number.classList.add("number");
        number.innerText = i;

        lottoBoard.append(number);

        number.addEventListener("click",()=>{
            count += 1;
            number.style.backgroundColor = "orange";
            if(count > 6) number.style.backgroundColor = "white";
        });
        
    }
});
