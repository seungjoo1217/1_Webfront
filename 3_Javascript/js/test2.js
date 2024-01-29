add.addEventListener("click", () => {
    const width = document.getElementById("width");
    const height = document.getElementById("height");
    const fontSize = document.getElementById("fontSize");
    const fontWeight = document.getElementsByName("fontWeight");
    const fontColor = document.getElementById("fontColor");
    const backgroundColor = document.getElementById("backgroundColor");
    const WtextAlign = document.getElementsByName("WtextAlign");
    const HtextAlign = document.getElementsByName("HtextAlign");
    const inputText = document.getElementById("inputText");
    
    const add = document.getElementById("add");
    const box = document.getElementById("box");
    const boxtext = document.getElementById("boxtext");



    // 너비 지정
    const widthValue = Number(width.value);
    box.style.width = `${widthValue}px`;


    // 높이 지정
    const heightValue = Number(height.value);
    box.style.height = `${heightValue}px`;


    // 글자 크기 지정
    const fontSizeValue = Number(fontSize.value);
    box.style.fontSize = `${fontSizeValue}px`;


    // 글자 굵기 지정
    if(fontWeight[0].checked)       box.style.fontWeight = "normal";
    if(fontWeight[1].checked)       box.style.fontWeight = "bold";



    // 글자 색깔 지정
    box.style.color = fontColor.value;



    // 배경 색깔 지정
    box.style.backgroundColor = backgroundColor.value;


    // 가로 정렬 지정
    if(WtextAlign[0].checked)       box.style.textAlign = "left";
    if(WtextAlign[1].checked)       box.style.textAlign = "center";
    if(WtextAlign[2].checked)       box.style.textAlign = "right";



    // 세로 정렬 지정
    if(HtextAlign[0].checked)       box.style.justifyContent = "start";
    if(HtextAlign[1].checked)       box.style.justifyContent = "center";
    if(HtextAlign[2].checked)       box.style.justifyContent = "end";



    // 글자 삽입
    boxtext.innerText = inputText.value;



});