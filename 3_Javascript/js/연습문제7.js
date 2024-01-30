const cart = document.getElementById("cart");
const emptyCart = document.getElementById("empty-cart");
const total = document.getElementById("total");

let result = 0;
let clickCount = [0,0,0,0,0,0];
function addToCart(menu, price) {

    cart.style.display = "flex";
    cart.style.flexDirection = "column";
    cart.style.alignItems = "center";
    
    emptyCart.style.display = "none";
    
    
    const container = document.createElement("div");
    container.classList.add("container");
    container.style.display = "flex";
    container.style.justifyContent = "center";
    container.style.alignItems = "center";

    const row = document.createElement("div");
    row.classList.add("row");
    row.style.flexBasis = "15%";

    const minusBtn = document.createElement("div");
    minusBtn.innerHTML = "<button>-</button>";
    minusBtn.classList.add("minus");
    minusBtn.style.flexBasis = "32%";
    minusBtn.style.display = "flex";
    minusBtn.style.justifyContent = "end";

    const amount = document.createElement("span");
    amount.classList.add("amount");
    amount.style.flexBasis = "6%";

    const plusBtn = document.createElement("div");
    plusBtn.innerHTML = "<button>+</button>";
    plusBtn.classList.add("plus");
    plusBtn.style.flexBasis = "32%";
    plusBtn.style.display = "flex";

    const remove = document.createElement("span");
    remove.classList.add("remove");
    remove.style.flexBasis = "15%";
    remove.innerHTML = "&times;";
    remove.style.cursor = "pointer";

    cart.append(container);
    container.append(row,minusBtn,amount,plusBtn,remove);

    switch(menu) {
        case "김밥" : row.innerText += "김밥";
                    clickCount[0] += 1;
                    amount.innerText = clickCount[0];break;

        case "라면" : row.innerText += "라면";
                    clickCount[1] += 1;
                    amount.innerText = clickCount[1];break;

        case "튀김" : row.innerText += "튀김";
                    clickCount[2] += 1;
                    amount.innerText = clickCount[2];break;

        case "떡볶이" : row.innerText += "떡볶이";
                    clickCount[3] += 1;
                    amount.innerText = clickCount[3];break;

        case "돈까스" : row.innerText += "돈까스";
                    clickCount[4] += 1;
                    amount.innerText = clickCount[4];break;

        case "우동" : row.innerText += "우동";
                    clickCount[5] += 1;
                    amount.innerText = clickCount[5];break;


    }

    minusBtn.addEventListener("click",()=> {
        switch(menu) {
            case "김밥" : clickCount[0] -= 1;
                        amount.innerText = clickCount[0];break;

            case "라면" : clickCount[1] -= 1;
                        amount.innerText = clickCount[1];break;

            case "튀김" : clickCount[2] -= 1;
                        amount.innerText = clickCount[2];break;

            case "떡볶이" : clickCount[3] = 1;
                        amount.innerText -= clickCount[3];break;

            case "돈까스" : clickCount[4] = 1;
                        amount.innerText -= clickCount[4];break;

            case "우동" : clickCount[5] -= 1;
                        amount.innerText = clickCount[5];break;

        }
        result = 3000*clickCount[0]+4500*clickCount[1]+5000*clickCount[2]+6000*clickCount[3]+7500*clickCount[4]+5000*clickCount[5]
        total.innerText = `합계: ₩${result}`;
    });

    plusBtn.addEventListener("click",()=> {
        switch(menu) {
            case "김밥" : clickCount[0] += 1;
                        amount.innerText = clickCount[0];break;

            case "라면" : clickCount[1] += 1;
                        amount.innerText = clickCount[1];break;

            case "튀김" : clickCount[2] += 1;
                        amount.innerText = clickCount[2];break;
 
            case "떡볶이" : clickCount[3] = 1;
                        amount.innerText += clickCount[3];break;

            case "돈까스" : clickCount[4] = 1;
                        amount.innerText += clickCount[4];break;

            case "우동" : clickCount[5] += 1;
                        amount.innerText = clickCount[5];break;

        }
        result = 3000*clickCount[0]+4500*clickCount[1]+5000*clickCount[2]+6000*clickCount[3]+7500*clickCount[4]+5000*clickCount[5]
        total.innerText = `합계: ₩${result}`;
    });

    

    remove.addEventListener("click", e => {
        const parent = e.target.parentElement;
        parent.remove();
        result = 3000*clickCount[0]+4500*clickCount[1]+5000*clickCount[2]+6000*clickCount[3]+7500*clickCount[4]+5000*clickCount[5]
        total.innerText = `합계: ₩${result}`;
    });
    result = 3000*clickCount[0]+4500*clickCount[1]+5000*clickCount[2]+6000*clickCount[3]+7500*clickCount[4]+5000*clickCount[5]
    
    total.innerText = `합계: ₩${result}`;
}

