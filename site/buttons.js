$('.simon-button.green').on('mousedown', function () {
  document.querySelector('.simon-button.green').style.filter = 'brightness(150%)';
});

$('.simon-button.green').on('mouseup', function () {
  document.querySelector('.simon-button.green').style.filter = 'brightness(100%)';
});

$('.simon-button.red').on('mousedown', function () {
  document.querySelector('.simon-button.red').style.filter = 'brightness(150%)';
});

$('.simon-button.red').on('mouseup', function () {
  document.querySelector('.simon-button.red').style.filter = 'brightness(100%)';
});

$('.simon-button.yellow').on('mousedown', function () {
  document.querySelector('.simon-button.yellow').style.filter = 'brightness(150%)';
});

$('.simon-button.yellow').on('mouseup', function () {
  document.querySelector('.simon-button.yellow').style.filter = 'brightness(100%)';
});

$('.simon-button.blue').on('mousedown', function () {
  document.querySelector('.simon-button.blue').style.filter = 'brightness(150%)';
});

$('.simon-button.blue').on('mouseup', function () {
  document.querySelector('.simon-button.blue').style.filter = 'brightness(70%)';
});

//This displays the the time for how long it took the user to complete the pattern 
//The user wants to beat their previous time each round

let seconds = 0;
let el = document.querySelector('.timeDisplay');

function incrementSeconds() {
  seconds += 1;
  el.innerHTML = seconds;
}

setInterval(incrementSeconds, 1000);

// let greenButton = document.querySelector('.simon-button.green');
// greenButton.addEventListener('click', function() {
//   document.querySelector('.green').style.backgroundColor = 'lawngreen';
//   userClicks.push('green');
// });

// let redButton = document.querySelector('.simon-button.red');
// redButton.addEventListener('click', function() {
//   document.querySelector('.red').style.backgroundColor = 'pink';
//   userClicks.push('red');
// });

// let yellowButton = document.querySelector('.simon-button.yellow');
// yellowButton.addEventListener('click', function() {
//   document.querySelector('.yellow').style.backgroundColor = 'lemonchiffon';
//   userClicks.push('yellow');
// });

// let blueButton = document.querySelector('.simon-button.blue');
// blueButton.addEventListener('click', function() {
//   document.querySelector('.blue').style.backgroundColor = 'lightblue';
//   userClicks.push('blue');
// });


// let prevSequence = [];

// let buttonPresses = 0;

// function generateSeq() {
//   let tiles = ['red', 'green', 'blue', 'yellow'];
//   let randomColor = tiles[Math.floor(Math.random() * tiles.length)]; //returns index of random color in tile 

//   return randomColor;
// }

// function nextColor() {
//   prevSequence.push(generateSeq());
// }

// let compareSeqs = (prevSequence, userClicks) =>
//   prevSequence.length === userClicks.length &&
//   prevSequence.every((v, i) => v === userClicks[i]);

//   console.log(compareSeqs(prevSequence, userClicks));
//   console.log(userClicks);

// if (compareSeqs){
//   nextColor();
// }
// else{
//   alert('GAME OVER');
// }

//list1 - empty list to append the user color that is clicked
//to add nameoflist.push
//list2 - list that has previous sequence 
//random color generator add to list2 
//click from user adds to list1 

//compare both list1 and list2, if == 
  //update the buttonPresses +1
  //add next color using random generator
  //else
    //lose
    //display buttonPress
    //buttonPress reset to 0