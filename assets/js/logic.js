//variable to get the timercountdown
var clock = document.getElementById("time");
var startScreenDiv = document.getElementById("start-screen");
var startBtn = document.getElementById("start");
var saveBtn=document.getElementById("submit")
//quiz related
var questionsDiv = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var questionOptionsDiv = document.getElementById("choices");
var feedbackDiv = document.getElementById("feedback");

var endScreenDiv = document.getElementById("end-screen");
var message = document.createElement("h4");
var hrule=document.createElement("hr");
feedbackDiv.appendChild(hrule)
feedbackDiv.appendChild(message);
var finalscore=document.getElementById("final-score");
var questionIndex = 0;
 var score=0;

var timeLeft = 60;
// function used to displaythe question and its responses
function showQuestions() {
   
  console.log("the next "+questionIndex);
 
  questionTitle.textContent = quiz[questionIndex].question; //"add question here";
  console.log("letngh  "+quiz[questionIndex].answers.length);
  for (let i = 0; i < quiz[questionIndex].answers.length; i++) {
   
    var btn = document.createElement("button");
    btn.textContent = quiz[questionIndex].answers[i];
   
    btn.setAttribute("data-answer", i);
    btn.addEventListener("click", btnListener);
    questionOptionsDiv.appendChild(btn);
   


  }
}
// function to start the quiz when the start button is clicked
function startGame() {
 
  startScreenDiv.setAttribute("class",  "hide");
  questionsDiv.removeAttribute("class",  "hide");
  showQuestions();
  timerStart();
}
//function to start the timer countdown
function timerStart() {
  var countdown = setInterval(function () {
    timeLeft--;

    clock.textContent = timeLeft;
    if (timeLeft === 0 || timeLeft < 0||questionIndex===quiz.length-1) {
    
      gameOver();
      clearInterval(countdown);
    }
  }, 1000);
}


//function for when one of the answers are clicked
function btnListener(event) {
   const element=event.target;

  if (quiz[questionIndex].answer == element.dataset.answer) {
  
score++
    message.textContent = "Correct!";
    var correctSound = new Audio("./assets/sfx/correct.wav");
    correctSound.play();
    hideFeedback = setTimeout(function () {
        feedbackDiv.classList.add("hide");
        clearTimeout(hideFeedback);
      }, 2800);
  } else {
    message.textContent = "Incorrect !";
    var wrongSound = new Audio("./assets/sfx/incorrect.wav");
    wrongSound.play();
    hideFeedback = setTimeout(function () {
        feedbackDiv.classList.add("hide");
        clearTimeout(hideFeedback);
      }, 2800);
timeLeft-=10;
  }
 feedbackDiv.removeAttribute("class", "hide");
  displayNextQuestion();
  console.log("scores "+score)
}
//function to move to the next question
function displayNextQuestion(){
    if(questionIndex!=quiz.length-1){
        questionIndex++;
console.log("from showq");
questionOptionsDiv.innerHTML='';
showQuestions();

    }
    
}
//function to end the game 
function gameOver(){
 finalscore.textContent   =score;
    questionsDiv.setAttribute("class","hide");
    endScreenDiv.removeAttribute("class","hide");
    
}
saveScores=function(event){
const element =event.target;
event.preventDefault();

}

startBtn.addEventListener("click", startGame);
saveBtn.addEventListener("click",saveScores);
