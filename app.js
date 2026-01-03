console.log("hello");
document.getElementById('title').innerHTML ='hello world';

let firstName = 'omit';
let age = 25;

firstName = 'nio';
console.log(age+85);


let sum = 20+50;
console.log(sum);
if(sum>100){
  console.log('wow');
} else{
  console.log('ahh');
}

function sayHello(name) {
  console.log(`hello ${name}`);
}
sayHello('naimul');

function funcName(){
  console.log('my first function');
}
funcName();

//javascript varriable
let fruits = 'mango';
console.log(`${fruits} is my fav, I like to eat ${fruits}`);

// var varriavle
var a = 10;
var b = 200;
var a = 20;
var blocked = 50;
{
  console.log(blocked);
}
console.log(b/a);
// let
let Y = 10;
Y = 15;
{
  console.log(Y);
}
//const
 const c = 80;
 {
  const d = 150;
  console.log(c);
  console.log(d);
 }
 const person = {
  firstName: 'naimul',
  age: 25,
 };
 person.country = 'bangladesh';
 person.age = 35;
 console.log(person);