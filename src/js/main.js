let minutes, seconds; // variables for time units
let targetDate;

const target_date_stored = sessionStorage.getItem('target_date');

if (target_date_stored !== null) {
  targetDate = new Date(0);
  targetDate.setUTCMilliseconds(parseInt(target_date_stored));
  targetDate = targetDate.getTime();
  console.log('targetDate existe déjà : ' + targetDate.toString());
}
else {
  targetDate = new Date().getTime() + (1000*3600); // set the countdown date
  console.log('targetDate créée : ' + targetDate.toString());
  sessionStorage.setItem('target_date', targetDate.toString());
}

let countdown = document.getElementById("tiles"); // get tag element

getCountdown();

setInterval(function () { getCountdown(); }, 1000);

function getCountdown(){

  // find the amount of "seconds" between now and target
  let currentDate = new Date().getTime();
  let seconds_left = (targetDate - currentDate) / 1000;
  if (seconds_left <= 0) {
    seconds_left = 0;
  }

  minutes = pad( parseInt( seconds_left / 60) );
  seconds = pad( parseInt( seconds_left % 60 ) );

  // format countdown string + set tag value
  countdown.innerHTML = "<span>" + minutes + "</span><span>" + seconds + "</span>";
}

function pad(n) {
  return (n < 10 ? '0' : '') + n;
}

<!-- Google Analytics: change UA-XXXXX-Y to be your site's ID. -->
window.ga = function () { ga.q.push(arguments) }; ga.q = []; ga.l = +new Date;
ga('create', 'UA-XXXXX-Y', 'auto'); ga('send', 'pageview');


document.getElementById('eventButton').addEventListener('click',function(){
  const event_current_id = document.getElementById('event-field').value;
  if ( event_current_id in event_map ) {
    sessionStorage.setItem('current_personage', event_current_id);
    location.href = event_map[event_current_id]["url"];
  }
  else{
    document.getElementById('error').innerHTML='Le mot de pass est incorecte';
  }
},false);

