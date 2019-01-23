let minutes, seconds; // variables for time units
let targetDate;

let target_date_stored = sessionStorage.getItem('target_date');

if (target_date_stored !== null) {
  targetDate = new Date(0);
  targetDate.setUTCMilliseconds(parseInt(target_date_stored));
  targetDate = targetDate.getTime();
}
else {
  targetDate = new Date().getTime() + (1000*3600); // set the countdown date
  sessionStorage.setItem('target_date', targetDate.toString());
}

let countdown = document.getElementById("tiles"); // get tag element

getCountdown();

let intervalCountdown = setInterval(function () { getCountdown(); }, 1000);

function getCountdown(){
  target_date_stored = sessionStorage.getItem('target_date');
  targetDate = new Date(0);
  targetDate.setUTCMilliseconds(parseInt(target_date_stored));
  targetDate = targetDate.getTime();
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
