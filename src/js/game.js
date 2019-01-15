document.getElementById('eventButton').addEventListener('click',function(){
  const event_current_id = document.getElementById('eventField').value;
  if ( event_current_id in event_map ) {
    sessionStorage.setItem('current_personage', event_current_id);
    location.href = event_map[event_current_id]["url"];
  }
  else{
    document.getElementById('error').innerHTML='Le mot de pass est incorecte';
  }
},false);

document.getElementById("eventField").addEventListener("submit", function(){
  const event_current_id = document.getElementById('eventField').value;
  if ( event_current_id in event_map ) {
    sessionStorage.setItem('current_personage', event_current_id);
    location.href = event_map[event_current_id]["url"];
  }
  else{
    document.getElementById('error').innerHTML='Le mot de pass est incorecte';
  }
});
