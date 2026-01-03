/*
// javascript loop
let number = [1,2,3,4,5,6,7,8,9,];
number.push (777);

console.log(number[4]);
console.log(number[7]);

// for loop
for (let i = 0; i < 9; i++){
  // console.log(number);
  console.log(number[i]);
}

// if u want see the added item
for (let i = 0; i < number.length; i++){
  // console.log(number);
  console.log(number[i]);
}

// for in loop
let person = {
  name: 'nio',
  age: 25,
  country: 'bangladesh'
};
for (let i in person){
  let capLetter = i.charAt(0).toUpperCase()+ i.slice(1); // first letter boro hobe
  console.log(i + ': ' + person [i]);
  console.log(capLetter + ': ' + person [i]);
}

// for of loop
for(let i of number){
  console.log(i);    // can use only array not object
}

// for each method
number.forEach(function(i){
  console.log(i);    // can use only array not object
});

// while loop method
let i = 0;
while (i < 10){
  console.log(i);
  i++;
};
*/






/*
! loop project           */

// guess the number
function guessTheNumber (difficulty){
  let random;
  let attampt = 0;
  let maxAttampts = 10;
  let range;

  // set difficulty based to parameters
  switch (difficulty){
    case  'easy':
    range = 10;
    maxAttampts = 5;
    random = Math.floor(Math.random() * 10) +1;  // range 1-10
    console.log("random number easy (easy):", random);
    break;

      case 'medium':
      range = 50;
      maxAttampts = 7;
      random = Math.floor(Math.random() * 50) + 1;  // range 1-50
      console.log("Random number (medium):", random);
      break;

    case 'hard':
      range = 100;
      maxAttampts = 10;
      random = Math.floor(Math.random() * 100) + 1;  // range 1-100
      console.log("Random number (hard):", random);
      break;

    default:
      console.error('Invalid difficulty selected.');
      return;
}
// get user input to check guesses
while(attampt < maxAttampts){
  let guess = parseInt(prompt(`guess the number between 1 to ${range}. you have ${maxAttampts - attampt} attampt left`));
  attampt++;

  if(guess === random){
   console.log(`Congratulation! you guess the number in ${attampt} attampt`);
   break;
  } else if(guess < random){
    console.log('too low. try again');
  } else{
    console.log('too high. try again');
  }
   console.log(guess);
}
  if(attampt === maxAttampts){
   console.log(`sorry! you ran out of attampts. the number was ${random}`);
}
}

// get user input
let difficulty = prompt('choose your difficulty (easy , medium , hard)').toLowerCase();

guessTheNumber(difficulty);
console.log(difficulty);
