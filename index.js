function endOfPlay() {
  sortArr(listOfPlayers)
 let winner= listOfPlayers[length].name
 debugger
  alert('the winner-'+winner)
  
}
function sortArr(arr) {
  //מיון בועות
  let strName, strId,strScore;
  for (i = arr.length - 1; i >= 0; i--)
    for (j = 0; j < i; j++) {
      if (Number(arr[j].key) > Number(arr[j + 1].key)) {
        strName = arr[j + 1].name;
        strId = arr[j + 1].id;
        strScore = arr[j + 1].score;
        arr[j + 1].name = arr[j].name;
        arr[j + 1].id = arr[j].id;
        arr[j + 1].score = arr[j].score;
        arr[j].name = strName;
        arr[j].id = strId;
        arr[j].id = strId;
        //console.log(str,strKey)
        listOfPlayers=arr
      }
    }
  }
function showCard(event) {//ניתן ללחוץ על השמות ובתגובה יפתחו חלונות שמציגים את הקלפים שהשחקנים הפכו
  let res = "";
  if (event.target.id < NumOfPlayers) {
    let myWindow = window.open("", "", "width=200, height=200");
    for (i of cards) if (i.player == event.target.id) res = res + i.typeOfCards;
    let res1 = res.split("").sort().join();

    myWindow.document.write(listOfPlayers[event.target.id].name, res1);

    setTimeout(() => {
      myWindow.close();
    }, 3000);
  }
}

function mOver() {
  if (cards[this.id].isLife == true) this.style["boxShadow"] = "2px 2px";
}

function mOut() {
  //this.removeattribute("hidden", "yellow;")
  this.style["boxShadow"] = "0px 0px";
}
function victory() {
  return cards.every((v) => v.isLife == false);
}
/* function checkvictory(){
   cards.map(v=>v.isLife=false)
   cards[0].isLife=true
} */
function timeFunction(isSucc) {
  setTimeout(() => {
    if (id1.classList == "cardred") id1.classList.remove("cardred");
    else id1.classList.remove("cardblue");

    if (id2.classList == "cardred") id2.classList.remove("cardred");
    else id2.classList.remove("cardblue");
    if (!isSucc) {
      id = id1.classList.add("hidden");
      id = id2.classList.add("hidden");
    } else {
      id = id1.classList.add("out");
      id = id2.classList.add("out");
    }
    count = 1;
  }, 1500);
}

function choiseCards() {
  //כרגע ממומש רק קלפים באנגלית כמות 20. יש אפשרות לממש אופציות נוספות
  let numOfCards = 20;
  let typeOfCards = "english";
  if (numOfCards == 10)
    cards =
      typeOfCards == "english" ? "AABBCCDDEE".split("") : "122334455".split("");
  if (numOfCards == 20)
    cards =
      typeOfCards == "english"
        ? "AABBCCDDEEFFGGHHIIJJ".split("")
        : "1122334455667788991010".split("");
  return cards;
}
function createObject(cards) {
  let cards_Res = [];
  for (i = 0; i < cards.length; i = i + 2) {
    cards_Res[i] = {
      typeOfCards: cards[i],
      color: i % 3 == 0 ? "blue" : "red",
      key: i,
      isLife: true,
      player: -1,
    };

    cards_Res[i + 1] = {
      typeOfCards: cards[i + 1],
      color: i % 3 == 0 ? "blue" : "red",
      key: i,
      isLife: true,
      player: -1,
    };
  }

  return cards_Res;
}
function createItemPlayers(name, id, score) {
  return {
    name,
    id,
    score,

    addScore: function (score) {
      this.score += score;
    },
  };
}
function findPlayer(num) {
  if (num == listOfPlayers.length) return 0;
  else return num;
}
function shuffle(list) {
  let list_res = [];

  let j = list.length;
  for (i = 0; i < j; i++) {
    let rand = Math.floor(Math.random() * list.length);

    list_res[i] = {
      typeOfCards: list[rand].typeOfCards,
      color: list[rand].color,
      key: list[rand].key,
      isLife: list[rand].isLife,
      player: list[rand].player,
    };

    list.splice(rand, 1);
  }
  return list_res;
}
function generate_table(status) {
  if (status == 1) body.removeChild(tbl);

  body = document.getElementsByTagName("body")[0];
  tbl = document.createElement("table");
  tbl.classList.add("table");

  let tblBody = document.createElement("tbody");
  for (let i = 0; i < 2; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < NumOfPlayers; j++) {
      let cell = document.createElement("td");
      cell.id = j + i * 20;

      if (cell.id == num) cell.style.color = "#0755ff";

      if (i == 0) {
        cellText = document.createTextNode(listOfPlayers[j].name);
        cellText.id = listOfPlayers[j].id;
      } else cellText = document.createTextNode(listOfPlayers[j].score);
      cell.appendChild(cellText);
      cell.onclick = showCard;
      row.appendChild(cell);
    }

    tblBody.appendChild(row);
  }

  tbl.appendChild(tblBody);
  body.appendChild(tbl);
}

/*  function addFields() {//לשימוש עתידי- שמות השחקנים
  window.onkeyup = keyup;

  //creates a global Javascript variable
  let inputTextValue;
  let container;
  function keyup(e) {
    if (e.keyCode == 13) {
      //setting your input text to the global Javascript Variable for every key press
      inputTextValue = container.name;
      console.log(inputTextValue);
    }
  }
  let name1 = [];
  let button = document.createElement("button");
  button.type = "button";
  button.innerHTML = "Press me";
  button.className = "btn-styled";
  // button.className = 'btn-styled';

  container1 = document.getElementById("container1");
  container1.appendChild(button);

  // document.addEventListener('click', function() {
  container1.onclick = function () {
     button.onclick = function()  {
      for (i = 0; i < NumOfPlayers; i++)

        listOfPlayers.push(createItemPlayers(name1[i], i, 0));
      console.log("button");
      while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
      }
    }
  };
  // }, false);
  // Generate a dynamic number of inputs
  NumOfPlayers = document.getElementById("member").value;
  // Get the element where the inputs will be added to
  container = document.getElementById("container");
  // Remove every children it had before
  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }
  for (i = 0; i < NumOfPlayers; i++) {
       container.appendChild(document.createTextNode("Member " + (i + 1)));
        var input = document.createElement("input");
    input.type = "text";
    input.name = "member" + i;
    input.value = "";
        name1[i] = inputTextValue;
        container.appendChild(input);
        container.appendChild(document.createElement("br"));
  }
  generate_table(0);
}  */

function createplayers() {
  let val;
  NumOfPlayers = Number(document.getElementById("myText").value);

  for (let i = 0; i < NumOfPlayers; i++)
    listOfPlayers.push(createItemPlayers("player-" + (i + 1), i, 0));

  generate_table(0);
}

function flipCard(event) {
  switch (count) {
    case 1:
      {
        evId1 = event.target.id;
        id1 = event.target;
        if (cards[evId1].isLife == true) {
          id = id1.classList.remove("hidden");
          if (cards[evId1].color == "blue") id = id1.classList.add("cardblue");
          else id = id1.classList.add("cardred");
          count++;
        }
      }
      break;
    case 2: {
      //inAble = false;
      evId2 = event.target.id;
      id2 = event.target;

      if (cards[evId2].isLife == true) {
        if (evId1 == evId2) {
          break;
        }

        id = id2.classList.remove("hidden");
        if (cards[evId2].color == "blue") id = id2.classList.add("cardblue");
        else id = id2.classList.add("cardred");

        if (cards[evId1].key == cards[evId2].key) {
          //console.log("bool");
          listOfPlayers[num].score++;
          cards[evId1].isLife = false;
          cards[evId2].isLife = false;
          cards[evId1].player = num;
          cards[evId2].player = num;
          let audio = new Audio("applause-2.wav");
          audio.play();

          timeFunction(true);

          cards[evId1].isLife = false;
          cards[evId2].isLife = false;

          if (victory() == true) {
            endOfPlay();
            console.log("victory");
            count = 5;
            break;
          }
          count = 3;

          generate_table(1);
        } else {
          //console.log("wrong");

          let audio = new Audio("beep-03.wav");
          audio.play();
          count = 3;
          timeFunction(false);
        }
        num = findPlayer(++num);
      }
      
      generate_table(1);

      break;
    }
    default:
  }
}
//*************************************main******************************************************** */
let NumOfPlayers;
let count = 1,
  evId1,
  evId2,
  id1,
  id2;
cards = choiseCards();
cardsRes = createObject(cards);
cards = shuffle(cardsRes);

let listOfPlayers = [];
createplayers();

num = findPlayer(0);
let board = document.getElementById("game-table");
let elem;
let box = [cards.length];
for (i = 0; i < cards.length; i++) {
  elem = document.createElement("div");
  elem.innerText = cards[i].typeOfCards;
  elem.id = i;

  elem.className = "hidden";
  elem.onclick = flipCard;

  box[i] = elem;

  board.appendChild(elem);
}
for (i of box) {
  i.addEventListener("mouseover", mOver, false);
  i.addEventListener("mouseout", mOut, false);
}
