const hands = ['rock', 'paper', 'scissors'];

function getHand() {
  return hands[parseInt(Math.random() * 10) % 3];
}

const player1 = {
  name: 'Player 1',
  getHand,
};

const player2 = {
  name: 'Player 2',
  getHand,
};

function playRound(playerA, playerB) {
  const handA = playerA.getHand();
  const handB = playerB.getHand();

  console.log(`${playerA.name} played ${handA}`);
  console.log(`${playerB.name} played ${handB}`);

  if (handA === handB) {
    console.log("It's a tie");
    return null;
  } else if (
    (handA === 'rock' && handB === 'scissors') ||
    (handA === 'scissors' && handB === 'paper') ||
    (handA === 'paper' && handB === 'rock')
  ) {
    console.log(`${playerA.name} wins!`);
    return playerA;
  } else {
    console.log(`${playerB.name} wins!`);
    return playerB;
  }
}

const winner = playRound(player1, player2);

console.log(`The winner is: ${winner ? winner.name : 'no one'}`);