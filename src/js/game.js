(function () {
  if ( typeof window.CustomEvent === "function" ) return false;

  function CustomEvent ( event, params ) {
    params = params || { bubbles: true, cancelable: true, detail: undefined };
    let evt = document.createEvent('submit');
    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
    return evt;
  }

  CustomEvent.prototype = window.Event.prototype;

  window.CustomEvent = CustomEvent;

})();

let evt = new CustomEvent("submit" );

document.getElementById("eventField").addEventListener("submit",function(event) {
  event.preventDefault();
});

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

document.getElementById('eventField').onkeydown = function(event){
  if (event.key !== undefined) {
    if(event.key === "Enter"){
      document.getElementById("eventField").dispatchEvent(evt);
    }
  } else if (event.keyCode !== undefined) {
    if(event.keyCode === 13){
      document.getElementById("eventField").dispatchEvent(evt);
    }
  }
};
