const personage = sessionStorage.getItem('current_personage');

dialogue_list = event_map[personage]['dialogue'];

document.getElementById("dialogueNameButton").innerHTML = event_map[personage]['name'];
dialogue_idx = 1;
dialogueButton = document.getElementById("dialogueButton");
dialogueButton.innerHTML = dialogue_list[0];
// Intro du personnage
document.getElementById("eventAudioIntro").play();

document.getElementById('dialogueButton').addEventListener('click',function(){
  // Sortie du personnage
  if ( dialogue_idx === dialogue_list.length - 1 ) {
    dialogueButton.style.backgroundImage = "url(../../img/dialogue_button_no_arrow.png)";
    document.getElementById("eventAudioDialogue").pause();
    document.getElementById("eventAudioFin").play();
  }
  else if ( dialogue_idx < dialogue_list.length - 1 ) {
    document.getElementById("eventAudioIntro").pause();
    document.getElementById("eventAudioDialogue").play();
  }
  // Avancée dans le dialogue
  if ( dialogue_idx < dialogue_list.length ) {
    dialogueButton.innerHTML = dialogue_list[dialogue_idx];
    dialogue_idx ++;
  }
},false);
