const personage = sessionStorage.getItem('current_personage');
let personage_name = event_map[personage]['name'];

dialogue_list = event_map[personage]['dialogue'];

const dialogueNameButton = document.getElementById("dialogueNameButton")
dialogueNameButton.innerHTML = personage_name;
dialogue_idx = 1;
dialogueButton = document.getElementById("dialogueButton");
dialogueButton.innerHTML = dialogue_list[0];

// Lancement du son d'intro
document.getElementById("eventAudioIntro").play();


document.getElementById('dialogueButton').addEventListener('click',function(){
  // Avancée dans le dialogue
  if ( dialogue_idx < dialogue_list.length ) {
    dialogueButton.innerHTML = dialogue_list[dialogue_idx];
  }

  // Sortie du personnage
  if ( dialogue_idx === dialogue_list.length - 1 ) {
    dialogueButton.style.backgroundImage = "url(../img/dialogue_button_no_arrow.png)";
    startGame();
  }
  dialogue_idx ++;
},false);

function startGame() {
  let boundingClientRect = dialogueNameButton.getBoundingClientRect();
  let startGame = document.createElement("a");
  document.body.appendChild(startGame);
  startGame.className += " mark dialogueNameButton";
  startGame.style.backgroundImage = "url(../img/dialogue_next_question.png)";
  startGame.setAttribute("href", "game.html");
  startGame.style.position = "absolute";
  startGame.style.color = "black";
  startGame.style.textDecoration = "none";
  startGame.style.top = boundingClientRect.top + "px";
  startGame.style.left = boundingClientRect.left + "px";
  startGame.style.paddingTop = "5px";
  startGame.style.marginTop = "0";
  startGame.style.zIndex="2";
  startGame.style.display = "block";
  startGame.innerText = "Commencer l'exploration";
}
