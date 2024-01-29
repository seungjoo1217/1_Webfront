const createBtn = document.querySelector("#createBtn");
const lottoBoard = document.querySelector("#lottoBoard");

createBtn.addEventListener("click",() => {
    lottoBoard.innerHTML = "";
    for(let i = 1; i < 46; i++) {
        const number = document.createElement("div");
        number.classList.add("number");
        number.innerText = i;

        lottoBoard.append(number);

        number.addEventListener("click",()=>{
            number.style.backgroundColor = "orange";
        });
    }
});
