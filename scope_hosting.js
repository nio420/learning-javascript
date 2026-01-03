// javascript scope
/*
? global scope and local scope
*/
let car = 'bmw';
console.log(car);

function name (){
  let bike = 'suzuki';
  console.log(bike);  // we cant access outside the block
  function lastName (){
    let fruits = 'mango';
    console.log(fruits);
  }
  lastName ();
}
name();

if(true){
  let bike = 'honda';
  let cycle = 'duronto';
  console.log(bike + ' '+ cycle);   // we cant access outside the block
  if (false){
    let fish = 'hilsha';
    console.log(fish);
  }
}

let x = 100;
console.log(x);
function main (){
  let x = 10;
  console.log(x);
}
main ();
console.log(x);


/*
! javascript hosting
? varriable and functional hosting
! let and const dont support hoisting
*/

var x2; // declaretion

x2 = 10; // initializing
console.log(x); // usage

const game = 'football';
console.log(game);

// function hoisting

aha('fz');
function aha (moto){
  console.log(`i love a car ${moto}.`);
}

let student = function (fname){
  console.log(`my name is ${fname}`);  // cant access before intializing
}
student('nio');
