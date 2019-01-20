let current_question;
let current_question_number = 1;
let maximum_question_number = 3;
let missing_good_responses = maximum_question_number;

questionHeader = document.getElementById("questionHeader");
response1 = document.getElementById("response1");
response2 = document.getElementById("response2");
response3 = document.getElementById("response3");
response4 = document.getElementById("response4");

function questionLauncher() {
  document.getElementById("containerQuestionEvent").style.display = "block";
  document.getElementById("dialogue").style.display = "none";
  current_question = event_question_data_map["1"];

  let question_text = "Question " + current_question_number.toString() + "/" + maximum_question_number.toString() + " :\n";

  questionHeader.innerText = question_text + current_question["question"];
  response1.innerText = current_question["responses"]["1"];
  response2.innerText = current_question["responses"]["2"];
  response3.innerText = current_question["responses"]["3"];
  response4.innerText = current_question["responses"]["4"];
  current_question_number += 1;
}

function resolveQuestion(responseId, response) {

  if ( responseId !== current_question["good_response"] ) {
    createMark(response, "red_cross");
  }
  else {
    missing_good_responses -= 1;
  }
  let goodResponse = document.getElementById("response" + current_question["good_response"]);
  createMark(goodResponse, "green_check");
}

response1.addEventListener('click',function(){
  resolveQuestion("1", response1);
});

response2.addEventListener('click',function(){
  resolveQuestion("2", response2);
});

response3.addEventListener('click',function(){
  resolveQuestion("3", response3);
});

response4.addEventListener('click',function(){
  resolveQuestion("4", response4);
});

function createMark(response, imageType) {
  let boundingClientRect = response.getBoundingClientRect();
  let goodResponseImage = document.createElement("a");
  document.body.appendChild(goodResponseImage);
  goodResponseImage.className += " mark";
  goodResponseImage.style.backgroundImage = "url(../../img/" + imageType + ".png)";
  goodResponseImage.style.backgroundSize = "cover";
  goodResponseImage.style.backgroundColor = "transparent";
  goodResponseImage.style.backgroundPosition = "center center";
  goodResponseImage.style.backgroundRepeat = "no-repeat";
  goodResponseImage.style.position = "absolute";
  goodResponseImage.style.top = (boundingClientRect.top + 5).toString() + "px";
  goodResponseImage.style.left = (boundingClientRect.left + 55).toString() + "px";
  goodResponseImage.style.height = "40px";
  goodResponseImage.style.width = "40px";
  goodResponseImage.style.zIndex="2";
  goodResponseImage.style.display = "block";
  goodResponseImage.style.opacity = "0.5";
}
