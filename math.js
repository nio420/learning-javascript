// javascript math
let num = 20.000000000001;
console.log(Math.round(num));
console.log(Math.ceil(num));
console.log(Math.floor(num));

//sqare value
let num2 = 2;
console.log(Math.pow(2, 4));
console.log(Math.sqrt(128)); // root value
console.log(Math.abs(-10)); // absoulate value
console.log(Math.PI);  // pi
console.log(Math.min(1,2,3,4,5,6,7,8));
console.log(Math.max(1,2,3,4,5,6,7,8));

// sin cos ten value
console.log(Math.sin(180 * Math.PI)/180);

console.log(Math.random().toFixed(2) * 10 + 1); // for random num
console.log(Math.floor(Math.random().toFixed(2) * 10 + 1)); // for random num >=10

// ludo math
let upperValue = 6;
let lowerValue = 1;
let resultValue = Math.ceil(Math.random()* upperValue);
console.log(resultValue);

function rollDice (){
  let ranNum = Math.floor(math.random()* 6)+ 1;
  let imgSource = ranNum + '.png';
  document.getElementById('ludo').src = imgSource;
}