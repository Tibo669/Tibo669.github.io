const personage = sessionStorage.getItem('current_personage');
let personage_name = event_map[personage]['name'];
const nickname = event_map[personage]['nickname'].toLowerCase();
let from_indices = false;

dialogue_list = event_map[personage]['dialogue'];

document.getElementById("dialogueNameButton").innerHTML = personage_name;
dialogue_idx = 0;
dialogueButton = document.getElementById("dialogueButton");

if ( dialogue_list.length === 1 ){
  dialogueButton.style.backgroundImage = "url(../../img/dialogue_button_no_arrow.png)";
}

if ( sessionStorage.getItem('from_indices') === 'true') {
  sessionStorage.setItem('from_indices', 'false');
  from_indices = true;
  dialogueButton.style.backgroundImage = "url(../../img/dialogue_button_no_arrow.png)";
  dialogue_idx = event_map[personage]['important_dialogue'];
}

next_dialogue();

document.getElementById('dialogueButton').addEventListener('click', next_dialogue, false);

function next_dialogue() {
  // Avancée dans le dialogue
  if (dialogue_idx < dialogue_list.length) {
    dialogueButton.innerHTML = dialogue_list[dialogue_idx];
    playAudio();
  }

  // Sortie du personnage
  if (dialogue_idx === dialogue_list.length - 1) {
    dialogueButton.style.backgroundImage = "url(../../img/dialogue_button_no_arrow.png)";
  }

  // Spécial mechant
  if (personage_name === "Tennesse Johnson, Chasseur de trésor") {
    if (dialogue_idx === 5) {
      let personageImage = document.getElementById("personageImage");
      personageImage.src = "../../img/message.png";
      personageImage.addEventListener('click',function(){
        copyToClipboard("45.846141,4.575928");
      });
    }
  }

  // Spécial cantonnier
  if (personage_name === "Marius Bedron, Cantonnier") {
    if (dialogue_idx === 3) {
      let personageImage = document.getElementById("personageImage");
      personageImage.src = "../../img/bac_a_fleur.png";
    }
  }

  // Spécial vigneron
  if (personage_name === "Jean Duvalon, Vigneron") {
    if (dialogue_idx === 7) {
      let vigneron_done_stored = sessionStorage.getItem('vigneron_done');
      if (vigneron_done_stored === null) {
        questionLauncher();
      } else {
        resultLauncher(dialogueButton);
      }
    } else if (dialogue_idx === 6) {
      let personageImage = document.getElementById("personageImage");
      personageImage.src = "../../img/marbre_latin.jpg";
    }
  }

  // Spécial historienne
  if (personage_name === "Hélène Vincier, Historienne") {
    if (dialogue_idx === 5) {
      let historienne_done_stored = sessionStorage.getItem('historienne_done');
      if (historienne_done_stored === null) {
        gameLauncher();
      } else {
        solutionColonne(game_data_map, from_indices);
      }
    }
  }

  // Spécial cadenas
  if (personage_name === "Un étrange mecanisme vérouillé") {
    if (dialogue_idx === 1) {
      createCadenas();
    }
  }

  // Spécial cadenas
  if (personage_name === "Le Trésor !") {
    if (dialogue_idx === 1) {
      sessionStorage.setItem('tresor_found', 'true');
      document.location.href = "../map.html";
    }
  }

  if ( !from_indices ) {
    dialogue_idx++;
  }
}

function playAudio() {
  if (!document.contains(document.getElementById("audio"))) {
    let audio      = document.createElement('audio');
    audio.id       = 'audio';
    audio.controls = 'controls';
    audio.type     = 'audio/wav';
    document.body.appendChild(audio);
  }
  let audio = document.getElementById("audio");
  audio.pause();
  audio.src = '../../audio/' + nickname + '/' + nickname + dialogue_idx.toString() + '.wav';
  audio.play();
}

function copyToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0;
  textArea.style.width = '2em';
  textArea.style.height = '2em';
  textArea.style.padding = 0;
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';
  textArea.style.background = 'transparent';
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    document.getElementById('copyClipboardContainer').style.display = "block";
  }
  catch (err) {
    console.log('Oops, unable to copy');
  }
  document.body.removeChild(textArea);

}
