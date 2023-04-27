const hands: string[] = ['rock', 'paper', 'scissors'];
let pp1: number = 0;
let pp2: number = 0;
let p1w: boolean = false;
let p2w: boolean = false;

function getHand(): string {
  return hands[Math.floor(Math.random() * 3)];
}

const player1 = {
  name: 'player 1',
  getHand,
};

const player2 = {
  name: 'player 2',
  getHand,
};

function playRound(playerA: { getHand: () => string }, playerB: { getHand: () => string }): void {
  const hand1: string = playerA.getHand();
  const hand2: string = playerB.getHand();
  console.log('Player 1 chose: ' + hand1 + '!');
  console.log('Player 2 chose: ' + hand2 + '!');

  if (
    (hand1 === 'rock' && hand2 === 'scissors') ||
    (hand1 === 'paper' && hand2 === 'rock') ||
    (hand1 === 'scissors' && hand2 === 'paper')
  ) {
    console.log('');
    console.log('Player 1 wins that round!!');
    p1w = true;
    p2w = false;
  } else if (
    (hand2 === 'rock' && hand1 === 'scissors') ||
    (hand2 === 'paper' && hand1 === 'rock') ||
    (hand2 === 'scissors' && hand1 === 'paper')
  ) {
    console.log('');
    console.log('Player 2 wins that round!!');
    p1w = false;
    p2w = true;
  } else {
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
  } else if (p2w  && !p1w) {
    pp2 = pp2 + 1;
    console.log('');
    console.log('Scoreboard:');
    console.log('Player 1: ' + pp1);
    console.log('Player 2: ' + pp2);
    console.log('');
  } else {
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
} else if (pp2 === 3) {
  console.log('');
  console.log('Player 2 is the winner');
}
