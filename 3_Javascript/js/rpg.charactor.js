const main = document.querySelector(".main");


const player = {
    name: "",
    job: "",
    gender: "",
    level: 1,
    hp: 100,
    attack: 10,
    defense: 5,
    exp: 0,
    gold: 0,
    weapon: null,
    armor: null
};
const monster = {
    name: "Goblin",
    hp: 20,
    attack: 8,
    defense: 2,
    expReward: 15,
    dropRate: 0.5
  };
  
  const items = {
    sword: { name: "검", attackBonus: 5, price: 20 },
    shield: { name: "방패", defenseBonus: 3, price: 15 },
    potion: { name: "물약", hpBonus: 20, price: 10 }
  };
  

const level = document.getElementById("level");
const text = document.querySelectorAll(".text");
function textWindow() {
    text[0].innerHTML = `이름 : ${player.name}`;
    text[1].innerHTML = `직업 : ${player.job}`;
    text[2].innerHTML = `성별 : ${player.gender}`;
    text[3].innerHTML = `레벨 : ${player.level}`;
    text[4].innerHTML = `Hp : ${player.hp}`;
    text[5].innerHTML = `공격력 : ${player.attack}`;
    text[6].innerHTML = `방어력 : ${player.defense}`;
    text[7].innerHTML = `경험치 : ${player.exp}`;
    text[8].innerHTML = `Gold : ${player.gold}`;
    text[9].innerHTML = `무기 : ${player.weapon}`;
    text[10].innerHTML = `방어구 : ${player.armor}`;
}
  


const createBtn = document.getElementById("createCharactor");
const image = document.getElementById("container2");

createBtn.addEventListener("click", () => {
    image.style.backgroundImage = "none";
    
    let inputName;
    inputName = prompt("생성할 캐릭터의 이름을 입력해 주세요");
    player.name = inputName;

    let inputJob;
    inputJob = prompt("생성할 캐릭터의 직업을 입력해 주세요 [마법사/전사]");
    player.job = inputJob;

    let inputGender;
    inputGender = prompt("생성할 캐릭터의 성별을 입력해 주세요 [남자/여자]");
    player.gender = inputGender;

    alert("캐릭터가 생성되었습니다!")


    if(player.job == "마법사" && player.gender == "남자") {
        image.style.backgroundImage = "url('../rpg/남자_마법사.png')";
    }else if(player.job == "마법사" && player.gender == "여자") {
        image.style.backgroundImage = "url('../rpg/여자_마법사.png')";
        image.style.backgroundSize = "400px 800px";
    }else if(player.job == "전사" && player.gender == "남자") {
        image.style.backgroundImage = "url('../rpg/남자_전사.png')";
    }else if(player.job == "전사" && player.gender == "여자") {
        image.style.backgroundImage = "url('../rpg/여자_전사.png')";
    }
    textWindow();
});

const fight = document.getElementById("fight");
const startGame = document.getElementById("startGame");
let inner = "";

let i = 0;
const itemdrop = 0.5

function firstAttack() {
    if(i%2 ===0){
        const rowPlayer = document.createElement("div");
        rowPlayer.classList.add("row");
        monster.hp -= player.attack-monster.defense;
        inner = `${player.name}(이/가)  ${monster.name}(을/를) 공격했습니다!`
        rowPlayer.innerText = inner;
        fight.append(rowPlayer);

        if(monster.hp <= 0 ){
            alert(`몬스터를 처치했습니다! $${monster.expReward} 경험치 획득!`);
            player.exp += monster.expReward;
            text[7].innerHTML = `경험치 : ${player.exp}`
            player.gold += 10;
            text[8].innerHTML = `Gold : ${player.gold}`

            const randomNumber = Math.random();
            if(randomNumber < itemdrop){
                if(randomNumber >=0 && randomNumber < 0.18){
                    inner = `${monster.name}이 SWORD를 드랍했습니다`
                    rowPlayer.innerText = inner;
                    player.attack += 10;
                    text[5].innerHTML = `공격력 : ${player.attack}`
                    player.weapon = "SWORD"
                    text[9].innerHTML = `무기 : ${player.weapon}`;
                }
                if(randomNumber >=0.18 && randomNumber < 0.36){
                    inner = `${monster.name}이 SHIELD를 드랍했습니다`
                    rowPlayer.innerText = inner;
                    player.attack += 10;
                    text[6].innerHTML = `방어력 : ${player.defense}`
                    player.armor = "SHIELD"
                    text[10].innerHTML = `방어구 : ${player.armor}`;
                }
                if(randomNumber >=0.36 && randomNumber < 0.5){
                    inner = `${monster.name}이 POTION를 드랍했습니다`
                    rowPlayer.innerText = inner;
                    player.hp += 5;
                    text[4].innerHTML = `Hp : ${player.hp}`
                }
            }
        }
    } else {
        const rowMonster = document.createElement("div");
        rowMonster.classList.add("row");
        player.hp -= monster.attack-player.defense;
        inner = `${monster.name}(이/가)  ${player.name}(을/를) 공격했습니다!`
        rowMonster.innerText = inner;
        fight.append(rowMonster);
        text[4].innerHTML = `Hp : ${player.hp}`;

        if(player.hp <= 0 ){
            alert("전투에서 패배했습니다");
        }
    }

    i++;

    if(player.hp > 0 && monster.hp > 0){
        setTimeout(firstAttack, 1000);
    }
}

startGame.addEventListener("click",() => {
    if(player.name == "") {
        alert("캐릭터가 생성되지 않았습니다");
    }else {
        firstAttack();
    }
});

document.querySelector("#swordBuy").addEventListener("click", () => {
    if(player.name == "") {
        alert("캐릭터가 생성되지 않았습니다");
    }else {
        price = 10;
        if(player.gold < price){
            alert("보유한 골드가 적습니다")
        }else {
            const rowPlayer = document.createElement("div");
            rowPlayer.classList.add("row");
            inner = `${player.name}(이/가) SWORD를 구매했습니다`
            fight.append(rowPlayer);
            rowPlayer.innerText = inner;
            player.gold -= price;
            text[8].innerHTML = `Gold : ${player.gold}`;
            player.attack += 10;
            text[5].innerHTML = `공격력 : ${player.attack}`
            player.weapon = "SWORD"
            text[9].innerHTML = `무기 : ${player.weapon}`;
        }          
    }
});

document.querySelector("#shieldBuy").addEventListener("click", () => {
    if(player.name == "") {
        alert("캐릭터가 생성되지 않았습니다");
    }else {
        price = 10;
        if(player.gold < price){
            alert("보유한 골드가 적습니다")
        }else {
            const rowPlayer = document.createElement("div");
            rowPlayer.classList.add("row");
            inner = `${player.name}(이/가) SHIELD를 구매했습니다`
            fight.append(rowPlayer);
            player.gold -= price;
            text[8].innerHTML = `Gold : ${player.gold}`;
            player.defense += 10;
            text[6].innerHTML = `방어력 : ${player.defense}`
            player.armor = "SHIELD"
            text[10].innerHTML = `방어구 : ${player.armor}`;
        }        
    }
});

document.querySelector("#potionBuy").addEventListener("click", () => {
    if(player.name == "") {
        alert("캐릭터가 생성되지 않았습니다");
    }else {
        price = 5;
        if(player.gold < price){
            alert("보유한 골드가 적습니다")
        }else {
            const rowPlayer = document.createElement("div");
            rowPlayer.classList.add("row");
            inner = `${player.name}(이/가) POTION를 구매했습니다`
            fight.append(rowPlayer);
            player.gold -= price;
            text[8].innerHTML = `Gold : ${player.gold}`;
            player.hp += 5;
            text[4].innerHTML = `Hp : ${player.hp}`
        }         
    }
});




