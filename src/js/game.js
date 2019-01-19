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

function loseOneMinute() {
  let target_date_stored = sessionStorage.getItem('target_date');
  let targetDate = new Date(0);
  targetDate.setUTCMilliseconds(parseInt(target_date_stored));
  targetDate -= 1000 * 60;
  sessionStorage.setItem('target_date', targetDate.toString());
}

let evt = new CustomEvent("submit" );

document.getElementById("eventField").addEventListener("submit",function(event) {
  event.preventDefault();
});

let wrongEvent = document.getElementById('wrongEventContainer');

// When the user clicks anywhere outside of the wrongEvent, close it
window.onclick = function(event) {
  if (event.target === wrongEvent) {
    wrongEvent.style.display = "none";
  }
};

document.getElementById('eventButton').addEventListener('click',function(){
  const event_current_id = document.getElementById('eventField').value;
  if ( event_current_id !== "") {
    if (event_current_id in event_map) {
      sessionStorage.setItem('current_personage', event_current_id);
      location.href = event_map[event_current_id]["url"];
    } else {
      wrongEvent.style.display = "block";
      loseOneMinute();
    }
  }
},false);

document.getElementById("eventField").addEventListener("submit", function(){
  const event_current_id = document.getElementById('eventField').value;
  if ( event_current_id !== "") {
    if (event_current_id in event_map) {
      sessionStorage.setItem('current_personage', event_current_id);
      location.href = event_map[event_current_id]["url"];
    } else {
      wrongEvent.style.display = "block";
      loseOneMinute();
    }
  }
});

document.getElementById('eventField').onkeydown = function(event){
  if (event.key !== undefined) {
    if(event.key === "Enter"){
      $(document.activeElement).filter(':input:focus').blur();
      document.getElementById("eventField").dispatchEvent(evt);
    }
  } else if (event.keyCode !== undefined) {
    if(event.keyCode === 13){
      $(document.activeElement).filter(':input:focus').blur();
      document.getElementById("eventField").dispatchEvent(evt);
    }
  }
};
