const gameNameButton = document.getElementById('gameNameButton');
const containerGame = document.getElementById('containerGame');
let currentColonne;
let currentQuestionNumber = 1;
const maximumQuestionNumber = 3;
let good_responses = 0;
const deplacezColonneText = "Déplacez la colonne";

function gameLauncher() {
  gameNameButton.innerText = deplacezColonneText;

  if ( currentQuestionNumber <= maximumQuestionNumber ) {
    document.getElementById("containerGame").style.display = "block";
    document.getElementById("containerEvent").style.display = "none";
    currentColonne = game_data_map[currentQuestionNumber.toString()];
    currentQuestionNumber++;
    createColonne(currentColonne)
  }
}

function createColonne(currentColonne) {
  let boundingClientRect = containerGame.getBoundingClientRect();
  let newColonne = document.createElement("div");
  document.body.appendChild(newColonne);
  newColonne.style.backgroundImage = "url(" + currentColonne["image"] + ")";
  newColonne.setAttribute("id", "colonne-" + currentColonne["id"]);
  newColonne.setAttribute("class", "btn drag-drop");
  newColonne.style.backgroundSize = "cover";
  newColonne.style.backgroundColor = "transparent";
  newColonne.style.backgroundPosition = "center center";
  newColonne.style.backgroundRepeat = "no-repeat";
  newColonne.style.position = "absolute";
  newColonne.style.top = (boundingClientRect.top + 110).toString() + "px";
  newColonne.style.left = (boundingClientRect.left + 170).toString() + "px";
  newColonne.style.height = "80px";
  newColonne.style.width = "80px";
  newColonne.style.zIndex="2";
  newColonne.style.display = "block";
}

gameLauncher();
