var hands = ['rock', 'paper', 'scissors'];
var pp1 = 0;
var pp2 = 0;
var p1w = false;
var p2w = false;
function getHand() {
    return hands[Math.floor(Math.random() * 3)];
}
var player1 = {
    name: 'player 1',
    getHand: getHand,
};
var player2 = {
    name: 'player 2',
    getHand: getHand,
};
function playRound(playerA, playerB) {
    var hand1 = playerA.getHand();
    var hand2 = playerB.getHand();
    console.log('Player 1 chose: ' + hand1 + '!');
    console.log('Player 2 chose: ' + hand2 + '!');
    if ((hand1 === 'rock' && hand2 === 'scissors') ||
        (hand1 === 'paper' && hand2 === 'rock') ||
        (hand1 === 'scissors' && hand2 === 'paper')) {
        console.log('');
        console.log('Player 1 wins that round!!');
        p1w = true;
        p2w = false;
    }
    else if ((hand2 === 'rock' && hand1 === 'scissors') ||
        (hand2 === 'paper' && hand1 === 'rock') ||
        (hand2 === 'scissors' && hand1 === 'paper')) {
        console.log('');
        console.log('Player 2 wins that round!!');
        p1w = false;
        p2w = true;
    }
    else {
        console.log('That round was a draw');
    }
}
while (pp1 < 3 && pp2 < 3) {
    playRound(player1, player2);
    if (p1w && !p2w) {
        pp1 = pp1 + 1;
        console.log('');
        console.log('Scoreboard:');
        console.log('Player 1: ' + pp1);
        console.log('Player 2: ' + pp2);
        console.log('');
    }
    else if (p2w && !p1w) {
        pp2 = pp2 + 1;
        console.log('');
        console.log('Scoreboard:');
        console.log('Player 1: ' + pp1);
        console.log('Player 2: ' + pp2);
        console.log('');
    }
    else {
        console.log('');
        console.log('Scoreboard:');
        console.log('Player 1: ' + pp1);
        console.log('Player 2: ' + pp2);
        console.log('');
    }
}
if (pp1 === 3) {
    console.log('');
    console.log('Player 1 is the winner');
}
else if (pp2 === 3) {
    console.log('');
    console.log('Player 2 is the winner');
}
