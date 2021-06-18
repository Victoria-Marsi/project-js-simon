let userClicks = [];

let greenButton = document.querySelector('.simon-button.green');
greenButton.addEventListener('click', function() {
  document.querySelector('.green').style.backgroundColor = 'lawngreen';
  userClicks.push('green');
});

let redButton = document.querySelector('.simon-button.red');
redButton.addEventListener('click', function() {
  document.querySelector('.red').style.backgroundColor = 'pink';
  userClicks.push('red');
});

let yellowButton = document.querySelector('.simon-button.yellow');
yellowButton.addEventListener('click', function() {
  document.querySelector('.yellow').style.backgroundColor = 'lemonchiffon';
  userClicks.push('yellow');
});

let blueButton = document.querySelector('.simon-button.blue');
blueButton.addEventListener('click', function() {
  document.querySelector('.blue').style.backgroundColor = 'skyblue';
  userClicks.push('blue');
});
// let startButton = document.getElementById('start');

// function startGame() {
//   startButton.classList.add('hidden');
// }

// startButton.addEventListener('click', startGame);

let prevSequence = [];

let buttonPresses = 0;

function generateSeq() {
  let tiles = ['red', 'green', 'blue', 'yellow'];
  let randomColor = tiles[Math.floor(Math.random() * tiles.length)]; //returns index of random color in tile 

  return randomColor;
}

function nextColor() {
  prevSequence.push(generateSeq());
}

//active pseudoclass



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
    