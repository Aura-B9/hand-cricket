"use strict";
let button = document.getElementById("toss");
let coin = document.getElementById("coin");
let i = 1;


function userSel(){

  let res = document.getElementById("choice").value;
  
  console.log(res);

  if(res == "Tails"){
    console.log("yupp!")
  }
  else{
  console.log("nope!") 
  }

}

button.onclick = function(){
  
  if(i == 1){
    coin.style.animationName = "spin";
    userSel();
  }
  else{
    document.getElementById("instuct").innerHTML = "You can't Toss twice";
  }
  i++;
}

document.getElementById("reload").onclick = function(){
  location.reload();
}