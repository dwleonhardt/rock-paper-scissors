(function wantToPlay() {

  confirm('Do you want to play?');
  if (true) {
    playGame();
  } else {

  }
})();

function playGame() {
  var computer = ['rock', 'paper', 'scissors'];
  var compChoice = computer[Math.ceil(Math.random() * 2)];
  var playChoice = prompt('Rock, Paper, Scissors, shoot...');
  if (playChoice === 'rock') {
    if (compChoice === 'scissors') {
      alert (compChoice + ' ' + 'you win!');
    } else {
      alert (compChoice + ' ' + 'you lose!');
    }
  } else if (playChoice === 'paper') {
    if (compChoice === 'rock') {
      alert (compChoice + ' ' + 'you win!');
    } else {
      alert (compChoice + ' ' + 'you lose!');
    }
  } else if (playChoice === 'scissors') {
    if (compChoice === 'paper') {
      alert (compChoice + ' ' + 'you win!');
    } else {
      alert (compChoice + ' ' + 'you lose!');
    }
  }
  playGame();
}

// var $playChoice = $('body');
//
// $playChoice.click(function (event) {
//   var $target = $(event.target);
//   console.log($target);
//   if ($target.hasClass('scissors')) {
//     console.log(true);
//   }
// });
