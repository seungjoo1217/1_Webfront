let xindex = 0; // x좌표 방향대로 얼마만큼 이동했는지 기억할 변수
let yindex = 0; // y좌표 방향대로 얼마만큼 이동했는지 기억할 변수

// addEventListener( "이벤트종류", 함수(이벤트가 발생했을떄 수행할 기능) )
// 전달인자 2개
document.addEventListener( "keydown" , function(e) {

    // e : 이벤트 객체
    //console.log(a);

    const bomberman = document.querySelector("#bomberman"); // 봄버맨 이미지

    switch(e.key) {
        case 'ArrowRight' :
            xindex += 10;
            break;

        case 'ArrowLeft' :
            xindex -= 10;
            break;
        
        case 'ArrowUp' :
            yindex -= 10;
            break;

        case 'ArrowDown' :
            yindex += 10;
            break;

        case 'x' :
            const box = document.getElementById("box");
            box.innerHTML +=
            `<img src="../bomber/boom.png"
            style="transform : translate3d(${xindex}px, ${yindex}px, 0); position: absolute;">`
            break;

        default:
            alert("방향키와 x만 가능"); break;
    }

    bomberman.style.transform = `translate3d(${xindex}px, ${yindex}px, 0)`;


});