const personage = sessionStorage.getItem('current_personage');
let personage_name = event_map[personage]['name']

dialogue_list = event_map[personage]['dialogue'];

document.getElementById("dialogueNameButton").innerHTML = personage_name;
dialogue_idx = 1;
dialogueButton = document.getElementById("dialogueButton");
dialogueButton.innerHTML = dialogue_list[0];
// Intro du personnage
document.getElementById("eventAudioIntro").play();

document.getElementById('dialogueButton').addEventListener('click',function(){
  // Avancée dans le dialogue
  if ( dialogue_idx < dialogue_list.length ) {
    dialogueButton.innerHTML = dialogue_list[dialogue_idx];
    dialogue_idx ++;
  }
  // Sortie du personnage
  if ( dialogue_idx === dialogue_list.length ) {
    dialogueButton.style.backgroundImage = "url(../../img/dialogue_button_no_arrow.png)";
    document.getElementById("eventAudioDialogue").pause();
    document.getElementById("eventAudioFin").play();
  }
  else if ( dialogue_idx < dialogue_list.length ) {
    document.getElementById("eventAudioIntro").pause();
    document.getElementById("eventAudioDialogue").play();
  }

  // Spécial vigneron
  if ( dialogue_idx === ( 8 ) && personage_name === "Jean Duvalon, Vigneron" ) {
    let vigneron_done_stored = sessionStorage.getItem('vigneron_done');
    if (vigneron_done_stored === null) {
      questionLauncher();
    }
    else {
      resultLauncher(dialogueButton);
    }
  }
},false);
