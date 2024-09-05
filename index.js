var refresh = document.getElementById("refresh");
refresh.addEventListener("click",refreshing);


var dice1=document.getElementsByClassName("img1");

var dice2=document.getElementsByClassName("img2");

function refreshing(){

    console.log("clicked");
    //generating random numbers
    var number1=Math.floor(Math.random()*6)+1;
    number1=Math.floor(number1);

    var number2=Math.floor(Math.random()*6)+1;
    console.log(number1);

    //soources for images
    var randomDiceImageLeft="images/dice"+number1+".png";

    var randomDiceImageRight="images/dice"+number2+".png";


    if(number1==1){
        dice1[0].setAttribute("src",randomDiceImageLeft);
    }else if(number1==2){
        dice1[0].setAttribute("src",randomDiceImageLeft);
    }else if(number1==3){
        dice1[0].setAttribute("src",randomDiceImageLeft);
    }else if(number1==4){
        dice1[0].setAttribute("src",randomDiceImageLeft);
    }else if(number1==5){
        dice1[0].setAttribute("src",randomDiceImageLeft);
    }else if(number1==6){
        dice1[0].setAttribute("src",randomDiceImageLeft);
    }

    if(number2==1){
        dice2[0].setAttribute("src",randomDiceImageRight);
    }else if(number2==2){
        dice2[0].setAttribute("src",randomDiceImageRight);
    }else if(number2==3){
        dice2[0].setAttribute("src",randomDiceImageRight);
    }else if(number2==4){
        dice2[0].setAttribute("src",randomDiceImageRight);
    }else if(number2==5){
        dice2[0].setAttribute("src",randomDiceImageRight);
    }else if(number2==6){
        dice2[0].setAttribute("src",randomDiceImageRight);
    }

    if(number1>number2){
        refresh.innerHTML="Player 1 won";
    }else if(number1==number2){
        refresh.innerHTML="No one won";
    }else{
        refresh.innerHTML="Player 2 won";
    }
}