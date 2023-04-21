const hands = ['Rock', 'Paper', 'Scissors'];

function getHand() {
  return hands[parseInt(Math.random() * 10) % 3];
}

let User = {
  name: "User",
  inputhand: "",
  score: 0,
  hand: "",
};

let Computer = {
  name: "Computer",
  getHand,
  score: 0,
  hand: "",
};

localStorage.setItem('User', JSON.stringify(User));
localStorage.setItem('Computer', JSON.stringify(Computer));

function getUserHand(handPick) {
  const User = JSON.parse(localStorage.getItem('User'));
  User.inputhand = handPick;
  User.hand = handPick;
  localStorage.setItem('User', JSON.stringify(User));

  const userC = document.getElementById("userC");
  userC.textContent = `User has chosen ${User.inputhand}`;
} 

function getComputerHand() {
    const Computer = JSON.parse(localStorage.getItem('Computer'));
    Computer.inputhand = getHand();
    Computer.hand = Computer.inputhand;
    localStorage.setItem('Computer', JSON.stringify(Computer));
    const userC = document.getElementById("comC");
    userC.textContent = `Computer has chosen ${Computer.inputhand}`;
  } 



/////////////////////////////////////////////////////////////////////////
function playGame() {
    const playerA = JSON.parse(localStorage.getItem('User'));
    const playerB = JSON.parse(localStorage.getItem('Computer'));

    playerA.hand = playerA.hand;
    playerB.hand = playerB.hand;
    var winner = document.getElementById("winner")

    if ((playerA.hand === 'Rock' && playerB.hand == 'Scissors') || (playerA.hand === 'Paper' && playerB.hand == 'Rock') || (playerA.hand === 'Scissors' && playerB.hand == 'Paper')) {
        playerA.score = playerA.score + 1;
        winner.textContent = `The Winner of this Round is User`;
      } else if ((playerB.hand == 'Rock' && playerA.hand == 'Scissors') || (playerB.hand == 'Paper' && playerA.hand == 'Rock') || (playerB.hand == 'Scissors' && playerA.hand == 'Paper')) {
        playerB.score = playerB.score + 1;
        winner.textContent = `The Winner of this Round is the Computer`;
      } else if ((playerB.hand == 'Scissors' && playerA.hand == 'Scissors') || (playerB.hand == 'Rock' && playerA.hand == 'Rock') || (playerB.hand == 'Paper' && playerA.hand == 'Paper')) {
        winner.textContent = `It is a Draw`;
      }

      localStorage.setItem('User', JSON.stringify(playerA));
      localStorage.setItem('Computer', JSON.stringify(playerB));
      
      const User = JSON.parse(localStorage.getItem('User'));
      const Computer = JSON.parse(localStorage.getItem('Computer'));
      
      const Uscore = document.getElementById('Uscore');
      Uscore.textContent = `User: ${User.score}`;
      
      const Cscore = document.getElementById('Cscore');
      Cscore.textContent = `Computer: ${Computer.score}`;gi
}

const rpsForm = document.getElementById('rpsChoice');

rpsForm.addEventListener('submit', (event) => {
    event.preventDefault(); 
    const choice = document.getElementById('choice').value;
    getUserHand(choice);
    getComputerHand();
    playGame(User, Computer)
    rpsForm.reset();
  });






