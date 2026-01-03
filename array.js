// // javascript array
// const language = ['html', 'css', 'pthon', true, 100];
// const language2 = new Array ('html', 'css', 'pthon', true, 100);
// language[2] = 'javascript';
// language[5] = 'vue js';

// language.pop();  // remove last item
// language.push('react js');  // add to last item
// language.unshift('basic computing');  // add to first item
// language.shift();  // remove first item
// language.splice(1,0, 'info', 'info 2'); // add a item in beetwen
// language.splice(0, 4); // remove item in beetwen

// console.log(language);
// console.log(language.toString()); // for string value use this
// console.log(language.join('$')); // for separetion use this
// console.log(language.length); // to get the length
// console.log(language[language.length - 1]);
// console.log(language2[3]);


// // make array like object wise
// const person =[];
// person['firstName'] = 'naimul';
// person['lastName'] = 'islam';
// person[2] = 25;

// console.log(person);
// console.log(person.length);

// // new array vs array
// const num = new Array(20, 29);
// console.log(num);

// // make all array in one
// const x =[1,2,3,4];
// const y =[1,2,3,4];
// const p =[1,2,6];
// const z = x.concat(y, p);
// console.log(z);

// const a =[
//   [1,3,4],
//   [4,6,4],
//   [8,2,7],
// ]
// console.log(a);
// console.log(a.flat());



/*
* javascript higher order array loop
*/
const fruits = ['mango', 'Banana', 'apple', 'orange', 'watermelon'];
for(let f = 0; f < fruits.length; f++){
 console.log(fruits[f]);
};

for (const f of fruits) {
 console.log(fruits);  // very easy to handle. called forof loops
}

const myName = 'naimul islam';
for (const name of myName) {
   console.log(`each char is ${name}`);
}

// using map method
const country = new Map([
  ['bn', 'bangladesh'],
  ['in', 'india'],
  ['pk', 'pakistan'],
  ['np', 'nepal']
]);
country.set('Us', 'United state') //set method to add element in arry

for (const key of country) {
   console.log(key);
}
for (const [key, value] of country) {
   console.log(key,':', value);  // it will show the value
}

// same jinis using as object
const myCountry ={
   bn: 'bangladesh',
   in: 'india',
   pk: 'pakistan',
   np: 'nepal',
};
// for (const key of myCountry) {
//       console.log(key);  // for of loop not work
// }
for (const key of Object.keys(myCountry)) {
   console.log(key);  // use like this can work
}

for (const key in myCountry) {
   console.log(key, myCountry[key] );
}

// for each method loop
fruits.forEach (function (i){
   console.log(i);
})
fruits.forEach ((item, index, arr) =>{ // arrow func
   console.log(item, index, arr);
})
function myFruits (f){
   console.log(f);
}
fruits.forEach(myFruits);

const stack = [
   {
      name: 'mern stack',
      property: 'mongo express react node',
      foundation: 'javascript',
      price: 2000,
   },
      {
      name: 'laravel',
      property: 'javascript vue php laravel mysql',
      foundation: 'php',
      price: 2000,
   },
      {
      name: 'wordpress',
      property: 'javascript php wordpress mysql',
      foundation: 'php',
      price: 2000,
   },
];
stack.forEach(info => {
   console.log(`want to learn ${info.name}? then learn this ${info.property}`);
});



/*
* JavaScript Filter, Map and Reduce
*/
fruits.forEach(fruit => {
   console.log(fruit);
})

// filter
const fruitsCap = fruits.filter(fruit =>fruit.toLowerCase().startsWith('b'));
console.log(fruitsCap);
const fruitsLen = fruits.filter(fruit => fruit.length == 6);
console.log(fruitsLen);
const fruitsStart = fruits.filter(fruit =>fruit.toLowerCase().includes('g'));
console.log(fruitsStart);

const numbers = [1,2,3,4,5,6,7,8,9];
const newBig = numbers.filter(num =>{
   return num > 5;
});
console.log(newBig);

let userStack = stack.filter(key => key.foundation === 'php');
console.log(userStack);

// map
const  myNum = numbers.map(num => num + 5.);
const  myNum2 = numbers
.map(num => num + 5.)
.map(num => num * 5)
.filter(num => num >= 50);
console.log(myNum2);

// Reduce // things we need accumulator, currntvalue, initial value
const myTotal = numbers.reduce((acc, curValue) =>{
   console.log(`accumulator is ${acc} and current value is ${curValue}`);
   return acc + curValue;
}, 0);

const cPrice = stack.reduce((acc, course) => acc + course.price, 0);
console.log(cPrice);