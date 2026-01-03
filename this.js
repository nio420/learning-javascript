// javascript this
// 'use strict';

console.log(this);

function myName (){
  return this;
}
console.log(myName());

// arrow function
const myFunc = () => {
  console.log(this);
}
myFunc();

//
const myBtn = document.querySelector('button');
myBtn.addEventListener('click', function() {
  console.log(this); // 'this' refers to the button element
});

/*
* method reffer => object
* function reffer => window/ global
*/

// let fName = 'omit'; **
var fName = 'omit';
const student = {
  fName: 'nio',
 info: function (){
  return `${this.fName} is good boy`;
 },
 arrowFunc: ()=> {
    return `${this.fName} is good boy`;
 }
}
console.log(student.info());
console.log(student.arrowFunc());

// another
function newPhone (){
  let phone = 'ios';
  console.log(this. phone); // this cant access undefined
}
newPhone();

// binding method

const game = {
  gName: 'football',
  info: function (){
    console.log(`love to play ${this.gName}`);
  },
};

const aGame = {
  gName: 'cricket',

};

const bindGame = game.info.bind(aGame);
console.log(bindGame());