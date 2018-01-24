"use strict";

let quiz = ()=>
{
  let questions = [];
  questions[0] = document.getElementsByName("q1");
  questions[1] = document.getElementsByName("q2");
  questions[2] = document.getElementsByName("q3");
  questions[3] = document.getElementsByName("q4");
  questions[4] = document.getElementsByName("q5");
  questions[5] = document.getElementsByName("q6");
  questions[6]= document.getElementsByName("q7");
  questions[7] = document.getElementsByName("q8");
  questions[8] = document.getElementsByName("q9");
  questions[9] = document.getElementsByName("q10");
  const ANSWERS = [1, 1, 2, 0, 0, 1, 1, 0, 3, 1];
  let score = 0;
  for (let i=0; i<10; i++)
  {
    if(questions[i][ANSWERS[i]].checked == true)
    {
      score++;
    }
  }
  alert("vaše skóre je: " + score +"/10");
}

let btnService = ()=>
{
  let btn=document.getElementById("pushme");
  btn.addEventListener("click", quiz, false);
}

window.addEventListener("load", btnService, false);

let counter = ()=>
{
  let d1 = new Date();
  let d2 = new Date(2017, 11, 9, 17, 0, 0, 0);
  let utc_milis1 = d1.getTime();
  let utc_milis2 = d2.getTime();
  let result= (utc_milis1 - utc_milis2);
  result /= (1000*60*60*24);
  alert(result);
}
counter();
