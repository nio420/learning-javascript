// conditional statement
/*
? if , else , else if, switch
*/

let age = 25;

if(age> 40){
  console.log('you are fucking old');
}  else if(age> 18){
  console.log('you are verified');
}
else{
  console.log('you are not verified');
}

// switch
let catagory = 'air';
let carType;

switch (catagory){
  case 'car':
  carType = 'this is a car';
  break;

  case 'bike':
  carType = 'this is bike';
  break;

  case 'truck':
    carType = 'this is big truck';
    break;

    default:
      carType = 'this is unknown vehicle'
}
console.log(carType);