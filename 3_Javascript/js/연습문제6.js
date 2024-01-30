const size = document.querySelector("#size");
const color = document.querySelector("#color");
const content = document.querySelector("#content");

const apply = document.querySelector("#apply");
const registration = document.querySelector("#registration");

const result = document.getElementById("result");


apply.addEventListener("click", () => {
    result.style.fontSize = `${size.value}px`;

    result.style.color = color.value;
});

registration.addEventListener("click", () => {
    result.innerText = content.value;
});