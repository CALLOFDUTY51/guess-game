let guess=document.querySelector(".guess");
let randomnumber= Math.trunc(Math.random()*20)+1;
let checkbutton=document.getElementById("btn_check");

console.log("guess value",guess);
console.log("random number",randomnumber);

let scores=20;
let number=document.querySelector(".number");
let hed=document.querySelector(".g");
let again=document.querySelector(".btn_again");
let highscor=0;
let score=document.querySelector(".score");
let highscore=document.querySelector(".highscore");
function checknumber(){

    let guessvalue=Number(guess.value);

    if(guessvalue==randomnumber){
        console.log("correct number");
        number.textContent="correct number...";
        hed.textContent="you win";
        score.textContent=scores
        document.querySelector("body").style.backgroundColor="green";
        if(scores>highscor){
           highscor=scores;
           highscore.textContent=highscor;
        }
        
    }
    else if(guessvalue<randomnumber){
             console.log("too low");
             scores--;
             

    }
    else{
        console.log("too high");
        scores--;
    }
       
}

function retry(){
    number.textContent="?"
    hed.textContent="guess my number"
    randomnumber=Math.trunc(Math.random()*20+1);
    score.textContent="20";
    scores=20;
    console.log("random number",randomnumber);
    document.querySelector("body").style.backgroundColor="gray";
}

checkbutton.addEventListener("click",checknumber);
again.addEventListener("click",retry);