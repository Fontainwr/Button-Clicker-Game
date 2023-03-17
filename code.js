


window.addEventListener("load", () => {


let counting = 0; 
let clickCounter = document.querySelector(".selectThisButton");
let countNum = document.querySelector(".countNum h1");
let countScore = document.querySelector(".TheScore");


clickCounter.addEventListener("click", function() {
    counting += 1;
    countNum.innerText = counting;

    if ( counting >= 10 ) {
       countScore.innerText = "Wow you clicked to 10. Good work."
    }

    if ( counting >= 20 ) {
        countScore.innerText = "Ok over 20 now...that should be enough"
     }
    
     if ( counting >= 30 ) {
        countScore.innerText = "...Ok chill out... over 30 now!!!"
     }

     if ( counting >= 40 ) {
        countScore.innerText = ".....40 bruh"
     }

     if ( counting >= 50 ) {
        countScore.innerText = "...please stop clicking already"
     }

     if ( counting >= 60 ) {
        countScore.innerText = "...You have no life...whatever bro"
     }

     if ( counting >= 80 ) {
        countScore.innerText = "........."
     }

     if ( counting >= 100 ) {
        countScore.innerText = "AI has left chat"
     }
});

});
