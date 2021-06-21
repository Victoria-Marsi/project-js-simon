let playerOrder = [];
let order = ['red', 'red', 'blue', 'green', 'red', 'red', 'green', 'blue'];
let playerStep = 0;
let seconds = 0;
let el = document.querySelector('.timeDisplay');

$('.simon-button.green').on('mousedown', function () {
  document.querySelector('.simon-button.green').style.filter = 'brightness(150%)';
});

$('.simon-button.green').on('mouseup', function () {
  document.querySelector('.simon-button.green').style.filter = 'brightness(100%)';
  if(order[playerStep] == 'green') {
    playerOrder.push('green');
    playerStep += 1;
    console.log("Guess correct");
    if(order.length == playerOrder.length){
      alert("Right length");
    }  
    if(playerOrder.length == order.length) {
      alert('It took you ' + seconds + ' seconds to win!');
    } 
  }
   else {
    console.log("GAME OVER!");
   }
});

$('.simon-button.red').on('mousedown', function () {
  document.querySelector('.simon-button.red').style.filter = 'brightness(150%)';
});

$('.simon-button.red').on('mouseup', function () {
  document.querySelector('.simon-button.red').style.filter = 'brightness(100%)';
  if(order[playerStep] == 'red') {
    playerOrder.push('red');
    playerStep += 1;
    console.log("Guess correct");
    if(order.length == playerOrder.length){
      console.log("Right length");
    }
    if(playerOrder.length == order.length) {
      alert('It took you ' + seconds + ' seconds to win!');
    }   
  }
   else {
    alert("GAME OVER!");
   }

});

$('.simon-button.yellow').on('mousedown', function () {
  document.querySelector('.simon-button.yellow').style.filter = 'brightness(150%)';
});

$('.simon-button.yellow').on('mouseup', function () {
  document.querySelector('.simon-button.yellow').style.filter = 'brightness(100%)';
  if(order[playerStep] == 'yellow') {
    playerOrder.push('yellow');
    playerStep += 1;
    console.log("Guess correct");
    if(order.length == playerOrder.length){
      console.log("Right length");
    }
    if(playerOrder.length == order.length) {
      alert('It took you ' + seconds + ' seconds to win!');
    } 
  }
   else {
    alert("GAME OVER!");
   }

});

$('.simon-button.blue').on('mousedown', function () {
  document.querySelector('.simon-button.blue').style.filter = 'brightness(150%)';
});

$('.simon-button.blue').on('mouseup', function () {
  document.querySelector('.simon-button.blue').style.filter = 'brightness(70%)';
  if(order[playerStep] == 'blue') {
    playerOrder.push('blue');
    playerStep += 1;
    console.log("Guess correct");
    if(order.length == playerOrder.length){
      console.log("Right length");
    }  
    if(playerOrder.length == order.length) {
      alert('It took you ' + seconds + ' seconds to win!');
    } 
  }
   else {
    alert("GAME OVER!");
   }

});

//This displays the the time for how long it took the user to complete the pattern 
//The user wants to beat their previous time each round

function incrementSeconds() {
  seconds += 1;
  el.innerHTML = seconds;
}

document.getElementById('start').addEventListener('click', function (event) {
  event.preventDefault();
  setInterval(incrementSeconds, 1000);
});

// document.getElementById('reset').addEventListener('click', function (event) {
//   <a href=""></a>;
// });