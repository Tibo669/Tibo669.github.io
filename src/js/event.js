const personage = sessionStorage.getItem('current_personage');
let personage_name = event_map[personage]['name']

dialogue_list = event_map[personage]['dialogue'];

document.getElementById("dialogueNameButton").innerHTML = personage_name;
dialogue_idx = 1;
dialogueButton = document.getElementById("dialogueButton");
dialogueButton.innerHTML = dialogue_list[0];
if ( dialogue_list.length === 1 ){
  dialogueButton.style.backgroundImage = "url(../../img/dialogue_button_no_arrow.png)";
}
else {
// Intro du personnage
  document.getElementById("eventAudioIntro").play();
}

document.getElementById('dialogueButton').addEventListener('click',function(){
  // Avancée dans le dialogue
  if ( dialogue_idx < dialogue_list.length ) {
    dialogueButton.innerHTML = dialogue_list[dialogue_idx];
  }

  // Sortie du personnage
  if ( dialogue_idx === dialogue_list.length - 1 ) {
    dialogueButton.style.backgroundImage = "url(../../img/dialogue_button_no_arrow.png)";
    document.getElementById("eventAudioDialogue").pause();
    document.getElementById("eventAudioFin").play();
  }
  else if ( dialogue_idx === 1 && dialogue_list.length !== 1 ) {
    document.getElementById("eventAudioIntro").pause();
    document.getElementById("eventAudioDialogue").play();
  }

  // Spécial mechant
  if ( personage_name === "Tennesse Johnson, Chasseur de trésor" ) {
    if ( dialogue_idx === 4 ) {
      let personageImage = document.getElementById("personageImage");
      personageImage.src = "../../img/message.png";
    }
  }

  // Spécial vigneron
  if ( personage_name === "Jean Duvalon, Vigneron" ) {
    if ( dialogue_idx === 8 ) {
      let vigneron_done_stored = sessionStorage.getItem('vigneron_done');
      document.getElementById("eventAudioDialogue").pause();
      if (vigneron_done_stored === null) {
        questionLauncher();
      } else {
        resultLauncher(dialogueButton);
      }
    }
    else if ( dialogue_idx === 7 ) {
      let personageImage = document.getElementById("personageImage");
      personageImage.src = "../../img/marbre_latin.jpg";
    }
  }

  // Spécial historienne
  if ( personage_name === "Hélène Vincier, Historienne" ) {
    if ( dialogue_idx === 4 ) {
      let historienne_done_stored = sessionStorage.getItem('historienne_done');
      document.getElementById("eventAudioDialogue").pause();
      if (historienne_done_stored === null) {
        gameLauncher();
      } else {
        solutionColonne(game_data_map);
      }
    }
  }
  dialogue_idx ++;
},false);
