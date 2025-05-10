"use strict";
let overs = 1;
let chance = overs * 6 ;
let Swick = 2; //selected wick 
let Dwick = 0; // done wick
let Druns = 0; // done runs
let Sruns = 10;//selected runs
let click = 0;
let user;

let num1 , num2;

function gamePlay(){
    num1 = Math.floor((Math.random()*7));
    num2 = Math.floor((Math.random()*7));
}

document.getElementById("btn0").onclick = function(){
   
    if (click < chance){

        user = 0;
        click++;
        gamePlay();

        if(user == num1 || user == num2){
        Dwick++;
        }
        else{
        Druns = user + Druns;
        }

        console.log(`runs: ${Druns}`);
        console.log(`wicket: ${Dwick}`);
        console.log(`user: ${user}`);
        console.log(`Comp: ${num1 },${num2}`);

        document.getElementById("userR").textContent = user;
        document.getElementById("totalR").textContent = Druns;
        document.getElementById("totalW").textContent = Dwick;

        if(user == num1){
        document.getElementById("compR").textContent = num1;
        }
        else if(user == num2){
        document.getElementById("compR").textContent = num2;        
        }
        else{
        document.getElementById("compR").textContent = num1;
        }
        console.log(`click:${click}`);
    }
    
    else {
        console.log("game over!!");
    }
}
document.getElementById("btn1").onclick = function(){
        
    if (click < chance){
    
        user = 1;
        click++;
        gamePlay();

        if(user == num1 || user == num2){
            Dwick++;
        }
        else{
            Druns = user + Druns;
        }

        console.log(`runs: ${Druns}`);
        console.log(`wicket: ${Dwick}`);
        console.log(`user: ${user}`);
        console.log(`Comp: ${num1 },${num2}`);

        document.getElementById("userR").textContent = user;
        document.getElementById("totalR").textContent = Druns;
        document.getElementById("totalW").textContent = Dwick;

        if(user == num1){
            document.getElementById("compR").textContent = num1;
        }
        else if(user == num2){
            document.getElementById("compR").textContent = num2;        
        }
        else{
            document.getElementById("compR").textContent = num1;
        }
        console.log(`click:${click}`);
    }
    else {
        console.log("game over!!");
    }
}
document.getElementById("btn2").onclick = function(){

    if (click < chance){

        user = 2;
        click++;
        gamePlay();

        if(user == num1 || user == num2){
            Dwick++;
        }
        else{
            Druns = user + Druns;
        }

        console.log(`runs: ${Druns}`);
        console.log(`wicket: ${Dwick}`);
        console.log(`user: ${user}`);
        console.log(`Comp: ${num1 },${num2}`);

        document.getElementById("userR").textContent = user;
        document.getElementById("totalR").textContent = Druns;
        document.getElementById("totalW").textContent = Dwick;

        if(user == num1){
            document.getElementById("compR").textContent = num1;
        }
        else if(user == num2){
            document.getElementById("compR").textContent = num2;        
        }
        else{
            document.getElementById("compR").textContent = num1;
        }
        console.log(`click:${click}`);
    }
    else {
        console.log("game over!!");
    }
}
document.getElementById("btn3").onclick = function(){

    if (click < chance){

        user = 3;
        click++;
        gamePlay();

        if(user == num1 || user == num2){
            Dwick++;
        }
        else{
            Druns = user + Druns;
        }

        console.log(`runs: ${Druns}`);
        console.log(`wicket: ${Dwick}`);
        console.log(`user: ${user}`);
        console.log(`Comp: ${num1 },${num2}`);

        document.getElementById("userR").textContent = user;
        document.getElementById("totalR").textContent = Druns;
        document.getElementById("totalW").textContent = Dwick;

        if(user == num1){
            document.getElementById("compR").textContent = num1;
        }
        else if(user == num2){
            document.getElementById("compR").textContent = num2;        
        }
        else{
            document.getElementById("compR").textContent = num1;
        }
        console.log(`click:${click}`);
    }
    else {
        console.log("game over!!");
    }
}
document.getElementById("btn4").onclick = function(){

    if (click < chance){

        user = 4;
        click++;
        gamePlay();

        if(user == num1 || user == num2){
            Dwick++;
        }
        else{
            Druns = user + Druns;
        }

        console.log(`runs: ${Druns}`);
        console.log(`wicket: ${Dwick}`);
        console.log(`user: ${user}`);
        console.log(`Comp: ${num1 },${num2}`);

        document.getElementById("userR").textContent = user;
        document.getElementById("totalR").textContent = Druns;
        document.getElementById("totalW").textContent = Dwick;

        if(user == num1){
            document.getElementById("compR").textContent = num1;
        }
        else if(user == num2){
            document.getElementById("compR").textContent = num2;        
        }
        else{
            document.getElementById("compR").textContent = num1;
        }
        console.log(`click:${click}`);
    }
    else {
        console.log("game over!!");
    }
}
document.getElementById("btn5").onclick = function(){

    if (click < chance){

        user = 5;
        click++;
        gamePlay();

        if(user == num1 || user == num2){
            Dwick++;
        }
        else{
            Druns = user + Druns;
        }

        console.log(`runs: ${Druns}`);
        console.log(`wicket: ${Dwick}`);
        console.log(`user: ${user}`);
        console.log(`Comp: ${num1 },${num2}`);

        document.getElementById("userR").textContent = user;
        document.getElementById("totalR").textContent = Druns;
        document.getElementById("totalW").textContent = Dwick;

        if(user == num1){
            document.getElementById("compR").textContent = num1;
        }
        else if(user == num2){
            document.getElementById("compR").textContent = num2;        
        }
        else{
            document.getElementById("compR").textContent = num1;
        }
        console.log(`click:${click}`);
    }
    else {
        console.log("game over!!");
    }
}
document.getElementById("btn6").onclick = function(){

    if (click < chance){

        user = 6;
        click++;
        gamePlay();

        if(user == num1 || user == num2){
            Dwick++;
        }
        else{
            Druns = user + Druns;
        }

        console.log(`runs: ${Druns}`);
        console.log(`wicket: ${Dwick}`);
        console.log(`user: ${user}`);
        console.log(`Comp: ${num1 },${num2}`);

        document.getElementById("userR").textContent = user;
        document.getElementById("totalR").textContent = Druns;
        document.getElementById("totalW").textContent = Dwick;

        if(user == num1){
            document.getElementById("compR").textContent = num1;
        }
        else if(user == num2){
            document.getElementById("compR").textContent = num2;        
        }
        else{
            document.getElementById("compR").textContent = num1;
        }
        console.log(`click:${click}`);
    }
    else {
        console.log("game over!!");
    }
}

