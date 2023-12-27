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

var Index=7;
var currentQuestion=questions[Index];

var timeLeft =60;

function showQuestions(){
    //console.log(currentQuestion.question.toString());
questionTitle.textContent=currentQuestion.question ;//"add question here";
console.log(questionOptionsDiv.length)
for (let i = 0; i < 4; i++) {
   

    var btn = document.createElement("button");
    btn.textContent=currentQuestion.answers[i]
    console.log("btnelement"+btn);
    btn.setAttribute("id",i)
    //btn.addEventListener('click',"act")
    questionOptionsDiv.appendChild(btn);
    
}
};

function startGame(){
    var showhide='hide';
    startScreenDiv.setAttribute("class",showhide);
    questionsDiv.removeAttribute("class", showhide);
    showQuestions();
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