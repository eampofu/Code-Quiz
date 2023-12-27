//variable to get the timercountdown
var clock= document.getElementById("time");
var startScreenDiv =document.getElementById("start-screen");
var startBtn =document.getElementById("start");
//quiz related 
var questionsDiv =document.getElementById("questions");
var questionTitle= document.getElementById("question-title");
var questionOptionsDiv=document.getElementById("choices");
var feedbackDiv=document.getElementById("feedback");

var endScreenDiv=document.getElementById("end-screen");

var timeLeft =60;

function showQuestions(){

};

function startGame(){
timerStart();
};

function timerStart(){
    var countdown =setInterval(function (){
timeLeft--;

clock.textContent=timeLeft;
if(timeLeft==0){

  clearInterval(countdown)  
}


    },1000)
}
startBtn.addEventListener('click',startGame);