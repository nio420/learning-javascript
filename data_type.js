// data type
let firstName = 'omit';
firstName = 'sovo'

let fullName = 'my name is "omit" ';
let finalName = `this is ${'omit'}`;

let age = 20;
let age2 = 40;
let calculation = age + age2 + firstName + age2 + age;

let numBig = 9999999999999999n;
let numBig2 = BigInt(age);

let someInfo; // undefined
let someInfo2 = null; // null
let fruits = ['apple', 'orange', 'mango'];
fruits[2]= 'pine';

let student = {
  firstNames: 'naimul',
  ages: 25,
  dateOFbirth: 2000,
  address: 'dhaka'
}
console.log(student);
console.log(typeof student);
console.log(numBig / numBig2);
console.log(typeof fruits);
console.log(fruits [2]);
console.log(finalName);
console.log(calculation);
