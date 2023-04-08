const hands = ['rock' , 'paper', 'scissors'];

function getHand() {
    return hands[parseInt(Math.random()*10)%3];
}

let player1 = {
    name: "player 1",
    getHand,
    score: 0,
    hand: "",
    isWinner: false,
}

let player2 = {
    name: "player 2",
    getHand,
    score: 0,
    hand: "",
    isWinner: false,
}


let player3 = {
    name: "player 3",
    getHand,
    score: 0,
    hand: "",
    isWinner: false,
}


let player4 = {
    name: "player 4",
    getHand,
    score: 0,
    hand: "",
    isWinner: false,
}


function playGame(playerA, playerB, playUntil) {
    playerA.hand = playerA.getHand();
    playerB.hand = playerB.getHand();

    console.log("Player 1 chose: " + playerA.hand  + "!")
    console.log("Player 2 chose: " + playerB.hand   + "!")

    if ((playerA.hand === 'rock' && playerB.hand  == 'scissors') || (playerA.hand  === 'paper' && playerB.hand  == 'rock') || (playerA.hand  === 'scissors' && playerB.hand  == 'paper')){
        console.log("")
        console.log("Player 1 wins that round!!")
        playerA.score = playerA.score + 1;
        console.log("")
        console.log("Scoreboard:")
        console.log("Player 1: " + playerA.score)
        console.log("Player 2: " + playerB.score)
        console.log("")
    }
    else if ((playerB.hand  === 'rock' && playerA.hand  == 'scissors') || (playerB.hand  === 'paper' && playerA.hand  == 'rock') || (playerB.hand  === 'scissors' && playerA.hand  == 'paper')){
        console.log("")
        console.log("Player 2 wins that round!!")
        playerB.score = playerB.score + 1;
        console.log("")
        console.log("Scoreboard:")
        console.log(playerA.name + ": " + playerA.score)
        console.log(playerB.name + ": " + playerB.score)
        console.log("")
       }
    else if ((playerB.hand  === 'scissors' && playerA.hand  == 'scissors') || (playerB.hand  === 'rock' && playerA.hand  == 'rock') || (playerB.hand  === 'paper' && playerA.hand  == 'paper')){
        console.log("That round was a draw")
        console.log("")
        console.log("Scoreboard:")
        console.log(playerA.name + ": " + playerA.score)
        console.log(playerB.name + ": " + playerB.score)
        console.log("")
    }

    if (playerA.score < playUntil && playerB.score < playUntil){
        playGame(playerA,playerB,playUntil)

    }
    else if (playerA.score >= playUntil)
        {
            console.log("")
            console.log(playerA.name  + " is the winner their match")
            playerA.isWinner = true

         }
    else if (playerB.score >= playUntil)
        {
            console.log("")
            console.log(playerB.name + " is the winner their match")
            playerB.isWinner = true
        }

}

// playGame(player1,player2,3)

console.log("")
console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")
console.log("")

 function playtournament(playerA, playerB, playerC, playerD, playUntil) {

    playGame(playerA, playerB, playUntil)
    playGame(playerC, playerD, playUntil)
    
    playerA.score = 0;
    playerB.score = 0;
    playerC.score = 0;
    playerD.score = 0;


    if (playerA.isWinner == true && playerC.isWinner == true){
        console.log("")
        console.log(playerA.name + " will be playing " + playerC.name +" for the champion ship")
        playGame(playerA, playerC, playUntil)
    }
    else if (playerA.isWinner == true && playerD.isWinner == true){
        console.log("")
        console.log(playerA.name + " will be playing " + playerD.name +" for the championship")
        playGame(playerA, playerD, playUntil)
    }
    else if (playerB.isWinner == true && playerC.isWinner == true){
        console.log("")
        console.log(playerB.name + " will be playing " + playerD.name +" for the championship")
        playGame(playerB, playerC, playUntil)
    }
    else if (playerB.isWinner == true && playerD.isWinner == true){
        console.log("")
        console.log(playerB.name + " will be playing " + playerD.name +" for the championship")
        playGame(playerB, playerD, playUntil)
    }

    if (playerA.score == 3){
        console.log("")
        console.log(playerA.name + " is the world champion")
    }
    else if (playerB.score == 3){
        console.log("")
        console.log(playerB.name + " is the world champion")
    }
    else if (playerC.score == 3){
        console.log("")
        console.log(playerC.name + " is the world champion")
    }
    else if (playerD.score == 3){
        console.log("")
        console.log(playerD.name + " is the world champion")
    }
} 
   

playtournament(player1, player2, player3, player4, 3)