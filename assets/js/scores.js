var btnClr =document.getElementById("clear");
var highScores=[];
var  li=document.createElement("li");

retrieveScores();
function retrieveScores(){
highScores=JSON.parse(localStorage.getItem("scores"));
//if(highScores){
    console.log(highScores.length)
    for (let i = 0; i< highScores.length; i++)
    {
const element =highScores[i].init +"   "+highScores[i].score;
var li1 =document.createElement("li")
 
li1.textContent=element;
highscores.appendChild(li1)
 // }
   
    }

}

//reset the scores in localstorage
function resetScores(){
localStorage.removeItem("scores");
}


btnClr.addEventListener("click",resetScores);