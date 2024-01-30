const cart = document.getElementById("cart");
const emptyCart = document.getElementById("empty-cart");
const total = document.getElementById("total");

let result = 0;
let firstClick = {김밥 : 0, 라면 : 0, 튀김 : 0, 떡볶이 : 0, 돈까스 : 0, 우동 : 0};
let clickCount = {김밥 : 0, 라면 : 0, 튀김 : 0, 떡볶이 : 0, 돈까스 : 0, 우동 : 0};
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
                    clickCount.김밥 += 1;
                    firstClick.김밥 += 1;
                    if(firstClick.김밥 > 1) {
                        container.remove();
                        clickCount.김밥 -= 1;
                    }
                    amount.innerText = clickCount.김밥;break;

        case "라면" : row.innerText += "라면";
                    clickCount.라면 += 1;
                    firstClick.라면 += 1;
                    if(firstClick.라면 > 1) {
                        container.remove();
                        clickCount.라면 -= 1;
                    }
                    amount.innerText = clickCount.라면;break;

        case "튀김" : row.innerText += "튀김";
                    clickCount.튀김 += 1;
                    firstClick.튀김 += 1;
                    if(firstClick.튀김 > 1) {
                        container.remove();
                        clickCount.튀김 -= 1;
                    }
                    amount.innerText = clickCount.튀김;break;

        case "떡볶이" : row.innerText += "떡볶이";
                    clickCount.떡볶이 += 1;
                    firstClick.떡볶이 += 1;
                    if(firstClick.떡볶이 > 1) {
                        container.remove();
                        clickCount.떡볶이 -= 1;
                    }
                    amount.innerText = clickCount.떡볶이;break;

        case "돈까스" : row.innerText += "돈까스";
                    clickCount.돈까스 += 1;
                    firstClick.돈까스 += 1;
                    if(firstClick.돈까스 > 1) {
                        container.remove();
                        clickCount.돈까스 -= 1;
                    }
                    amount.innerText = clickCount.돈까스;break;

        case "우동" : row.innerText += "우동";
                    clickCount.우동 += 1;
                    firstClick.우동 += 1;
                    if(firstClick.우동 > 1) {
                        container.remove();
                        clickCount.우동 -= 1;
                    }
                    amount.innerText = clickCount.우동;break;

    }



    minusBtn.addEventListener("click",(e)=> {
        switch(menu) {
            case "김밥" : clickCount.김밥 -= 1;
                        if(clickCount.김밥 == 0){
                            e.target.parentElement.parentElement.remove();
                        }
                        amount.innerText = clickCount.김밥;break;

            case "라면" : clickCount.라면 -= 1;
                        if(clickCount.라면 == 0){
                            e.target.parentElement.parentElement.remove();
                        }
                        amount.innerText = clickCount.라면;break;

            case "튀김" : clickCount.튀김 -= 1;
                        if(clickCount.튀김 == 0){
                            e.target.parentElement.parentElement.remove();
                        }
                        amount.innerText = clickCount.튀김;break;

            case "떡볶이" : clickCount.떡볶이 -= 1;
                        if(clickCount.떡볶이 == 0){
                            e.target.parentElement.parentElement.remove();
                        }
                        amount.innerText = clickCount.떡볶이;break;

            case "돈까스" : clickCount.돈까스 -= 1;
                        if(clickCount.돈까스 == 0){
                            e.target.parentElement.parentElement.remove();
                        }
                        amount.innerText = clickCount.돈까스;break;

            case "우동" : clickCount.우동 -= 1;
                        if(clickCount.우동 == 0){
                            e.target.parentElement.parentElement.remove();
                        }
                        amount.innerText = clickCount.우동;break;

        }
        if(cart.childElementCount == 0){
            cart.style.display = "none";
            emptyCart.style.display = "flex";
            emptyCart.style.justifyContent = "center";
            emptyCart.innerHTML = "장바구니가 비어 있습니다.";
        }

        result = 3000*clickCount.김밥+4500*clickCount.라면+5000*clickCount.튀김+6000*clickCount.떡볶이+7500*clickCount.돈까스+5000*clickCount.우동
        total.innerText = `합계: ₩${result}`;
    });

    plusBtn.addEventListener("click",()=> {
        switch(menu) {
            case "김밥" : clickCount.김밥 += 1;
                        amount.innerText = clickCount.김밥;break;

            case "라면" : clickCount.라면 += 1;
                        amount.innerText = clickCount.라면;break;

            case "튀김" : clickCount.튀김 += 1;
                        amount.innerText = clickCount.튀김;break;
 
            case "떡볶이" : clickCount.떡볶이 += 1;
                        amount.innerText = clickCount.떡볶이;break;

            case "돈까스" : clickCount.돈까스 += 1;
                        amount.innerText = clickCount.돈까스;break;

            case "우동" : clickCount.우동 += 1;
                        amount.innerText = clickCount.우동;break;

        }
        result = 3000*clickCount.김밥+4500*clickCount.라면+5000*clickCount.튀김+6000*clickCount.떡볶이+7500*clickCount.돈까스+5000*clickCount.우동
        total.innerText = `합계: ₩${result}`;
    });

    

    remove.addEventListener("click", e => {
        const parent = e.target.parentElement;
        parent.remove();
        switch(menu) {
            case "김밥" : clickCount.김밥 = 0;break;
            case "라면" : clickCount.라면 = 0;break;
            case "튀김" : clickCount.튀김 = 0;break;
            case "떡볶이" : clickCount.떡볶이 = 0;break;
            case "돈까스" : clickCount.돈까스 = 0;break;
            case "우동" : clickCount.우동 = 0;break;
        }
        result = 3000*clickCount.김밥+4500*clickCount.라면+5000*clickCount.튀김+6000*clickCount.떡볶이+7500*clickCount.돈까스+5000*clickCount.우동
        total.innerText = `합계: ₩${result}`;

        if(cart.childElementCount == 0){
            cart.style.display = "none";
            emptyCart.style.display = "flex";
            emptyCart.style.justifyContent = "center";
            emptyCart.innerHTML = "장바구니가 비어 있습니다.";
        }
    });
    result = 3000*clickCount.김밥+4500*clickCount.라면+5000*clickCount.튀김+6000*clickCount.떡볶이+7500*clickCount.돈까스+5000*clickCount.우동
    
    total.innerText = `합계: ₩${result}`;
}

