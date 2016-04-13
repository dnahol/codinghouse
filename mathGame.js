//day2
document.addEventListener('DOMContentLoaded', init);
function init() {
  //display random number
  var num1 = randNum(1, 100);
  var num2 = randNum(1, 100);

  var eqn = document.getElementById('eqn');
  console.log("eqn: ", eqn);


//submit answer
  var submit = document.getElementById('btn-submit');
  console.log("submit ", submit);

  submit.addEventListener('click', submitClicked);


//clear console
  var clear = document.getElementById('btn-clear');
  console.log("clear: ", clear);
  clear.addEventListener('click', clearClicked);


//display answer
  var ans = document.getElementById('ans');
  console.log("ans: ", clear);

//enter guess via number buttons
//1
var one = document.getElementById('btn-1');
console.log("one: ", one);

one.addEventListener('click', oneClicked);

//2
var two = document.getElementById('btn-2');
console.log("two: ", two);

two.addEventListener('click', twoClicked);

//3
var three = document.getElementById('btn-3');
console.log("three: ", three);

three.addEventListener('click', threeClicked);

//4
var four = document.getElementById('btn-4');
console.log("four: ", four);

four.addEventListener('click', fourClicked);

//5
var five = document.getElementById('btn-5');
console.log("five: ", five);

five.addEventListener('click', fiveClicked);

//6
var six = document.getElementById('btn-6');
console.log("six ", six);

six.addEventListener('click', sixClicked);

//7
var seven = document.getElementById('btn-7');
console.log("seven: ", seven);

seven.addEventListener('click', sevenClicked);

//8
var eight = document.getElementById('btn-8');
console.log("eight: ", eight);

eight.addEventListener('click', eightClicked);

//9
var nine = document.getElementById('btn-9');
console.log("nine: ", nine);

nine.addEventListener('click', zeroClicked);

//0
var zero = document.getElementById('btn-0');
console.log("zero: ", zero);

zero.addEventListener('click', zeroClicked);

}

// Have two random integers (max and min is up to you)
function randNum(min, max) {
  var result = Math.floor((Math.random()* max) + min);
  return result;
}

function submitClicked() {
  console.log('sumbit clicked!');
}


function clearClicked() {
  console.log('clear clicked!');
}

//number button functions
//1
function oneClicked() {
  console.log('one clicked!');
}
//2
function twoClicked() {
  console.log('two clicked!');
}

//3
function threeClicked() {
  console.log('three clicked!');
}

//4
function fourClicked() {
  console.log('four clicked!');
}

//5
function fiveClicked() {
  console.log('five clicked!');
}

//6
function sixClicked() {
  console.log('six clicked!');
}

//7
function sevenClicked() {
  console.log('seven clicked!');
}

//8
function eightClicked() {
  console.log('eight clicked!');
}

//9
function nineClicked() {
  console.log('nine clicked!');
}

//0
function zeroClicked() {
  console.log('zero clicked!');
}
