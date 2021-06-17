let greenButton = document.querySelector('.simon-button.green');
greenButton.addEventListener('click', function() {
  document.querySelector('.green').style.backgroundColor = 'lawngreen';
});

let redButton = document.querySelector('.simon-button.red');
redButton.addEventListener('click', function() {
  document.querySelector('.red').style.backgroundColor = 'pink';
});

let yellowButton = document.querySelector('.simon-button.yellow');
yellowButton.addEventListener('click', function() {
  document.querySelector('.yellow').style.backgroundColor = 'lemonchiffon';
});

let blueButton = document.querySelector('.simon-button.blue');
blueButton.addEventListener('click', function() {
  document.querySelector('.blue').style.backgroundColor = 'skyblue';
});

// const nonRandom = ["red", "blue", "blue", "green"];
alert('red')
let afterAlert = document.querySelector('.simon-button.red');
let afterAlert2 = document.getElementById('tapBlue');
// let afterAlert2 = document.querySelector('.simon-button.blue');
// let afterAlert3 = document.querySelector('.simon-button.green');

afterAlert.addEventListener("click", () => {
 	alert('blue');
   if (afterAlert2.clicked){
     alert('GAME OVER!');
   }
  });
// });

// afterAlert.addEventListener('click', clickHandler);

// let redState = false;
// let blueState = false;
// let greenState = false;
// function clickHandler(){
//   if(afterAlert.clicked == true){
//     redState = true;
//     alert('blue');
//   }
//   else{
//     alert('GAME OVER!');
//   }
// }
