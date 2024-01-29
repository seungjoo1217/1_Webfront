const number = document.querySelector("#number");
const btn = document.querySelector("#btn");
const container = document.querySelector("#container");
const sumBtn = document.querySelector("#sumBtn");
const result = document.getElementById("result");

btn.addEventListener("click", ()=> {
    const v1 = Number(number.value);

    for(let i = 0; i < v1; i++) {
        const row = document.createElement("input");
        row.classList.add("input-number");
        container.append(row);
    }

    sumBtn.addEventListener("click", () => {
        let total = 0;
        const numbers = document.querySelectorAll(".input-number");
        for(let j = 0; j < v1; j++) {
            total += Number(numbers[j].value);
        }
        result.innerText = total;
    });
});