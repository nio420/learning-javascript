// memory javascript
/*
? call stack
! primitive data type
* string, number, boolean, undefined, null, symb, bigint
*/

let fullName = 'naimul islam';
let webDev = fullName;

console.log(fullName);
console.log(webDev);

/*
? heap
! non primitive data type
* object , array
*/

let student = {
  name: 'omit',
  age: 25,
};

let people = student;
// people = {
//   name: 'nio',
//   age: 20,
// };
people.name = 'pepo';
people.age = 24;

let car = ['bmw', 'red'];
let newCar = car;
newCar[0]= 'audi';

console.log(people);
console.log(student);
console.log(car);
console.log(newCar);