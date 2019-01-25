const gameNameButton = document.getElementById('gameNameButton');
const containerGame = document.getElementById('containerGame');
let currentColonne;
let currentQuestionNumber = 1;
const maximumQuestionNumber = 4;
let good_responses = 0;
const deplacezColonneText = "Déplacez la colonne vers la bonne époque";

function gameLauncher() {
  gameNameButton.innerText = deplacezColonneText;

  if ( currentQuestionNumber <= maximumQuestionNumber ) {
    document.getElementById("containerGame").style.display = "block";
    document.getElementById("containerEvent").style.display = "none";
    currentColonne = game_data_map[currentQuestionNumber.toString()];
    currentQuestionNumber++;
    createColonne(currentColonne)
  }
  else {
    let toRemove = document.getElementsByClassName('mark');
    while (toRemove.length > 0) {
      toRemove[0].parentNode.removeChild(toRemove[0]);
    }
    // On reconstruit le jeu avec la solution.
    solutionColonne(game_data_map);
  }
  //solutionColonne(game_data_map);
}

function solutionColonne(game_data_map) {
  Object.keys(game_data_map).forEach(function(key) {
    const currentColonne = game_data_map[key];
    const objectColonne = createColonne(currentColonne, true);
    const objectDropzone = document.getElementById('dropzone-' + currentColonne["id"]);
    const objectDropzoneBCRect = objectDropzone.getBoundingClientRect();
    objectColonne.style.top = (objectDropzoneBCRect.top + 40).toString() + "px";
    objectColonne.style.left = (objectDropzoneBCRect.left + 20).toString() + "px";
  });
  document.getElementById('gameNameButton').style.display = 'none';
  document.getElementById("containerEvent").style.display = "block";
}

function createColonne(currentColonne, solution=false) {
  let boundingClientRect = containerGame.getBoundingClientRect();
  let newColonne = document.createElement("div");
  document.body.appendChild(newColonne);
  newColonne.style.backgroundImage = "url(" + currentColonne["image"] + ")";
  newColonne.setAttribute("id", "colonne-" + currentColonne["id"]);
  if (!solution) {
    newColonne.setAttribute("class", "btn drag-drop mark");
    newColonne.style.top = (boundingClientRect.top + 110).toString() + "px";
    newColonne.style.left = (boundingClientRect.left + 120).toString() + "px";
    newColonne.style.zIndex="2";
  }
  else {
    newColonne.setAttribute("class", "btn");
    newColonne.style.zIndex="-1";
  }
  newColonne.style.backgroundSize = "cover";
  newColonne.style.backgroundColor = "transparent";
  newColonne.style.backgroundPosition = "center center";
  newColonne.style.backgroundRepeat = "no-repeat";
  newColonne.style.position = "absolute";
  newColonne.style.height = "80px";
  newColonne.style.width = "80px";
  newColonne.style.display = "block";
  return newColonne;
}

gameLauncher();
