const output = document.getElementById("output");
const add = document.querySelector("#add");
const clear = document.querySelector("#clear");
const container = document.querySelector("#right");



function num(op) {
    switch(op) {
        case "1" : output.innerText += "1";break;
        case "2" : output.innerText += "2";break;
        case "3" : output.innerText += "3";break;
        case "4" : output.innerText += "4";break;
        case "5" : output.innerText += "5";break;
        case "6" : output.innerText += "6";break;
        case "7" : output.innerText += "7";break;
        case "8" : output.innerText += "8";break;
        case "9" : output.innerText += "9";break;
        case "#" : output.innerText += "#";break;
        case "0" : output.innerText += "0";break;
        case "*" : output.innerText += "*";break;
    }
}



let count = 0;

add.addEventListener("click", () => {
    
    const row = document.createElement("div");
    row.classList.add("row");

    const num = document.createElement("div");
    num.innerText =output.innerHTML

    const span1 = document.createElement("div");
    span1.classList.add("star");
    span1.innerHTML = " ☆ ";

    const span2 = document.createElement("div");
    span2.classList.add("remove-row");
    span2.innerHTML = " &times; ";


    container.append(row);
    row.append(num);
    row.append(span1);
    row.append(span2);

    
    span1.addEventListener("click", () =>{
        count += 1;

        if(count % 2 == 1) {
            span1.innerHTML = "★";
            span1.style.color = "gold";
            num.style.color = "red";
        }else {
            span1.innerHTML = " ☆ ";
            span1.style.color = "black";
            num.style.color = "black";
        }
    });

    span2.addEventListener("click", e => {
        const parent = e.target.parentElement;
        parent.remove();
    });
    
    output.innerText = "";
});


clear.addEventListener("click",() =>{
    output.innerText = "";
});
