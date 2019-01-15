const personage = sessionStorage.getItem('current_personage');

dialogue_list = event_map[personage]['dialogue'];

dialogue_idx = 1;
document.getElementById("dialogueButton").innerHTML = dialogue_list[0];

document.getElementById('dialogueButton').addEventListener('click',function(){
  if ( dialogue_idx < dialogue_list.length ) {
    document.getElementById("dialogueButton").innerHTML = dialogue_list[dialogue_idx];
    dialogue_idx ++;
  }
},false);
