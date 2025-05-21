"use strict";
let overs = 1;
let chance = overs * 6 ;
let Swick = 2;      // Selected wick 
let Dwick = 0;      // Done wick
let Sruns = 0;      // Scored runs
let Truns = 15;     // Targeted runs
let click = 0;
let user;
let num1 , num2;

document.getElementById(`target`).textContent = Truns;

function gamePlay(){
    num1 = Math.floor((Math.random()*7));
    num2 = Math.floor((Math.random()*7));
}

function resetPg(){

    let Rbutton = document.getElementById("reset");

    Rbutton.style.opacity = '1';

    Rbutton.onclick = function(){
        location.reload();
    }

}

function ballsleft(){
    let ballL = document.getElementById(`ballLeft`).textContent = chance - click ;
}

document.getElementById("btn0").onclick = function(){
   
    if (click < chance && Dwick != Swick && Sruns < Truns){

        user = 0;
        click++;
        gamePlay();

        if(user == num1 || user == num2){
        Dwick++;
        document.getElementById("battle").textContent = "W";
        ballsleft();

        }
        else{
        Sruns = user + Sruns;
        document.getElementById("battle").textContent = user;
        ballsleft();
        }

        console.log(`runs: ${Sruns}`);
        console.log(`wicket: ${Dwick}`);
        console.log(`user: ${user}`);
        console.log(`Comp: ${num1 },${num2}`);

        document.getElementById("userRun").textContent = user;
        document.getElementById("totalR").textContent = Sruns;
        document.getElementById("totalW").textContent = Dwick;

        if(user == num1){
        document.getElementById("compRun").textContent = num1;
        }
        else if(user == num2){
        document.getElementById("compRun").textContent = num2;        
        }
        else{
        document.getElementById("compRun").textContent = num1;
        }
        console.log(`click:${click}`);
    }
    
    else if(Sruns >= Truns && (Dwick != Swick || Dwick == Swick || click == chance || click < chance)){
        document.getElementById("resutlD").innerHTML = "You won!";  
        resetPg()
    }

    else {
        document.getElementById("resutlD").innerHTML = "Game Over!";
        resetPg()
    }
}
document.getElementById("btn1").onclick = function(){
        
    if (click < chance && Dwick != Swick && Sruns < Truns){
    
        user = 1;
        click++;
        gamePlay();

        if(user == num1 || user == num2){
            Dwick++;
            document.getElementById("battle").textContent = "W";
            ballsleft();
        }
        else{
            Sruns = user + Sruns;
            document.getElementById("battle").textContent = user;
            ballsleft();
        }

        console.log(`runs: ${Sruns}`);
        console.log(`wicket: ${Dwick}`);
        console.log(`user: ${user}`);
        console.log(`Comp: ${num1 },${num2}`);

        document.getElementById("userRun").textContent = user;
        document.getElementById("totalR").textContent = Sruns;
        document.getElementById("totalW").textContent = Dwick;

        if(user == num1){
            document.getElementById("compRun").textContent = num1;
        }
        else if(user == num2){
            document.getElementById("compRun").textContent = num2;        
        }
        else{
            document.getElementById("compRun").textContent = num1;
        }
        console.log(`click:${click}`);
    }

    else if(Sruns >= Truns && (Dwick != Swick || Dwick == Swick || click == chance || click < chance)){
        document.getElementById("resutlD").innerHTML = "You won!";
        resetPg();  
    }

    else {
        document.getElementById("resutlD").innerHTML = "Game Over!";
        resetPg()
    }
}
document.getElementById("btn2").onclick = function(){

    if (click < chance && Dwick != Swick && Sruns < Truns){

        user = 2;
        click++;
        gamePlay();

        if(user == num1 || user == num2){
            Dwick++;
            document.getElementById("battle").textContent = "W";
            ballsleft();
        }
        else{
            Sruns = user + Sruns;
            document.getElementById("battle").textContent = user;
            ballsleft();
        }

        console.log(`runs: ${Sruns}`);
        console.log(`wicket: ${Dwick}`);
        console.log(`user: ${user}`);
        console.log(`Comp: ${num1 },${num2}`);

        document.getElementById("userRun").textContent = user;
        document.getElementById("totalR").textContent = Sruns;
        document.getElementById("totalW").textContent = Dwick;

        if(user == num1){
            document.getElementById("compRun").textContent = num1;
        }
        else if(user == num2){
            document.getElementById("compRun").textContent = num2;        
        }
        else{
            document.getElementById("compRun").textContent = num1;
        }
        console.log(`click:${click}`);
    }

    else if(Sruns >= Truns && (Dwick != Swick || Dwick == Swick || click == chance || click < chance)){
        document.getElementById("resutlD").innerHTML = "You won!";
        resetPg()  
    }

    else {
        document.getElementById("resutlD").innerHTML = "Game Over!";
        resetPg()
    }
}
document.getElementById("btn3").onclick = function(){

    if (click < chance && Dwick != Swick && Sruns < Truns){

        user = 3;
        click++;
        gamePlay();

        if(user == num1 || user == num2){
            Dwick++;
            document.getElementById("battle").textContent = "W";
            ballsleft();
        }
        else{
            Sruns = user + Sruns;
            document.getElementById("battle").textContent = user;
            ballsleft();
        }

        console.log(`runs: ${Sruns}`);
        console.log(`wicket: ${Dwick}`);
        console.log(`user: ${user}`);
        console.log(`Comp: ${num1 },${num2}`);

        document.getElementById("userRun").textContent = user;
        document.getElementById("totalR").textContent = Sruns;
        document.getElementById("totalW").textContent = Dwick;

        if(user == num1){
            document.getElementById("compRun").textContent = num1;
        }
        else if(user == num2){
            document.getElementById("compRun").textContent = num2;        
        }
        else{
            document.getElementById("compRun").textContent = num1;
        }
        console.log(`click:${click}`);
    }

    else if(Sruns >= Truns && (Dwick != Swick || Dwick == Swick || click == chance || click < chance)){
        document.getElementById("resutlD").innerHTML = "You won!";
        resetPg()  
    }

    else {
        document.getElementById("resutlD").innerHTML = "Game Over!";
        resetPg()
    }
}
document.getElementById("btn4").onclick = function(){

    if (click < chance && Dwick != Swick && Sruns < Truns){

        user = 4;
        click++;
        gamePlay();

        if(user == num1 || user == num2){
            Dwick++;
            document.getElementById("battle").textContent = "W";
            ballsleft();
        }
        else{
            Sruns = user + Sruns;
            document.getElementById("battle").textContent = user;
            ballsleft();
        }

        console.log(`runs: ${Sruns}`);
        console.log(`wicket: ${Dwick}`);
        console.log(`user: ${user}`);
        console.log(`Comp: ${num1 },${num2}`);

        document.getElementById("userRun").textContent = user;
        document.getElementById("totalR").textContent = Sruns;
        document.getElementById("totalW").textContent = Dwick;

        if(user == num1){
            document.getElementById("compRun").textContent = num1;
        }
        else if(user == num2){
            document.getElementById("compRun").textContent = num2;        
        }
        else{
            document.getElementById("compRun").textContent = num1;
        }
        console.log(`click:${click}`);
    }

    else if(Sruns >= Truns && (Dwick != Swick || Dwick == Swick || click == chance || click < chance)){
        document.getElementById("resutlD").innerHTML = "You won!";
        resetPg()  
    }

    else {
        document.getElementById("resutlD").innerHTML = "Game Over!";
        resetPg()
    }
}
document.getElementById("btn5").onclick = function(){

    if (click < chance && Dwick != Swick && Sruns < Truns){

        user = 5;
        click++;
        gamePlay();

        if(user == num1 || user == num2){
            Dwick++;
            document.getElementById("battle").textContent = "W";
            ballsleft();
        }
        else{
            Sruns = user + Sruns;
            document.getElementById("battle").textContent = user;
            ballsleft();
        }

        console.log(`runs: ${Sruns}`);
        console.log(`wicket: ${Dwick}`);
        console.log(`user: ${user}`);
        console.log(`Comp: ${num1 },${num2}`);

        document.getElementById("userRun").textContent = user;
        document.getElementById("totalR").textContent = Sruns;
        document.getElementById("totalW").textContent = Dwick;

        if(user == num1){
            document.getElementById("compRun").textContent = num1;
        }
        else if(user == num2){
            document.getElementById("compRun").textContent = num2;        
        }
        else{
            document.getElementById("compRun").textContent = num1;
        }
        console.log(`click:${click}`);
    }

    else if(Sruns >= Truns && (Dwick != Swick || Dwick == Swick || click == chance || click < chance)){
        document.getElementById("resutlD").innerHTML = "You won!";
        resetPg()  
    }

    else {
        document.getElementById("resutlD").innerHTML = "Game Over!";
        resetPg()
    }
}
document.getElementById("btn6").onclick = function(){

    if (click < chance && Dwick != Swick && Sruns < Truns){

        user = 6;
        click++;
        gamePlay();

        if(user == num1 || user == num2){
            Dwick++;
            document.getElementById("battle").textContent = "W";
            ballsleft();
        }
        else{
            Sruns = user + Sruns;
            document.getElementById("battle").textContent = user;
            ballsleft();
        }

        console.log(`runs: ${Sruns}`);
        console.log(`wicket: ${Dwick}`);
        console.log(`user: ${user}`);
        console.log(`Comp: ${num1 },${num2}`);

        document.getElementById("userRun").textContent = user;
        document.getElementById("totalR").textContent = Sruns;
        document.getElementById("totalW").textContent = Dwick;

        if(user == num1){
            document.getElementById("compRun").textContent = num1;
        }
        else if(user == num2){
            document.getElementById("compRun").textContent = num2;        
        }
        else{
            document.getElementById("compRun").textContent = num1;
        }
        console.log(`click:${click}`);
    }

    else if(Sruns >= Truns && (Dwick != Swick || Dwick == Swick || click == chance || click < chance)){
        document.getElementById("resutlD").innerHTML = "You won!";
        resetPg()  
    }

    else {
        document.getElementById("resutlD").innerHTML = "Game Over!";
        resetPg()
    }
}
