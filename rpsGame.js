const hands = ['rock' , 'paper', 'scissors'];
let pp1 = 0
let pp2 = 0
let p1w = false;
let p2w =false;


function getHand() {
    return hands[parseInt(Math.random()*10)%3];
}

let player1 = {
    name: "player 1",
    getHand,
}

let player2 = {
    name: "player 2",
    getHand,
}

function playRound(playerA, playerB) {
    let hand1 = playerA.getHand();
    let hand2 = playerB.getHand();
    console.log("Player 1 chose: " + hand1 + "!")
    console.log("Player 2 chose: " + hand2  + "!")

    if ((hand1 === 'rock' && hand2 == 'scissors') || (hand1 === 'paper' && hand2 == 'rock') || (hand1 === 'scissors' && hand2 == 'paper')){
        console.log("")
        console.log("Player 1 wins that round!!")
        p1w = true;
        p2w = false;
    }
    else if ((hand2 === 'rock' && hand1 == 'scissors') || (hand2 === 'paper' && hand1 == 'rock') || (hand2 === 'scissors' && hand1 == 'paper')){
        console.log("")
        console.log("Player 2 wins that round!!")
        p1w = false;
        p2w =true;
    }
    else
    console.log("That round was a draw")

}

while (pp1 < 3 && pp2 < 3) {
    playRound(player1, player2);
    
    if (p1w == true && p2w == false){ 
        pp1 = pp1 + 1;
        console.log("")
        console.log("Scoreboard:")
        console.log("Player 1: " + pp1)
        console.log("Player 2: " + pp2)
        console.log("")
    }    
    else if (p2w == true && p1w == false )
       { pp2 = pp2 + 1;
        console.log("")
        console.log("Scoreboard:")
        console.log("Player 1: " + pp1)
        console.log("Player 2: " + pp2)
        console.log("")
       }
       else{
        console.log("")
        console.log("Scoreboard:")
        console.log("Player 1: " + pp1)
        console.log("Player 2: " + pp2)
        console.log("")
       }

}

if (pp1 == 3)
{
    console.log("")
    console.log("Player 1 is the winner")
}
 else if (pp2 == 3)
 {
    console.log("")
     console.log("Player 2 is the winner")
 }
 
