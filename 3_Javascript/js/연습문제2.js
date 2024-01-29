const numbers = document.getElementsByClassName("number");
const result = document.getElementById("result");
const reset = document.getElementById("reset");


for(let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click",()=>{

        switch(numbers[i].innerText) {
            case "1" : result.innerText += 1; break;
            case "2" : result.innerText += 2; break;
            case "3" : result.innerText += 3; break;
            case "4" : result.innerText += 4; break;
            case "5" : result.innerText += 5; break;
            case "6" : result.innerText += 6; break;
            case "7" : result.innerText += 7; break;
            case "8" : result.innerText += 8; break;
            case "9" : result.innerText += 9; break;
            case "0" : result.innerText += 0; break;
        };
        
        if(result.innerText.length > 10) {
            alert("10자까지만 입력할 수 있습니다");
        };
        
    });
    
};


reset.addEventListener("click",()=>{
   result.innerText = ""; 
});