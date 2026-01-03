//code driven invocation
function myFunction(fullName, age, dateOfbirth = 1999){
  console.log(`hello ` + fullName + age + 'my dob is ' + dateOfbirth);
}
myFunction('nio ', 25, 2000);
myFunction('nio ', 25,);

//event driven invocation
function isSubscribed(){
  console.log('Subscribed');
}
document.getElementById('btn').addEventListener('click', isSubscribed);

//automatic (self-invoked) driven invocation
(function(Text){
  console.log('i am a good boy', Text);
}('hello world'))

//function expression
let math = function(x , y){
  return x * y;
};
console.log(math(20, 20));

function myFunc(){
  let firstName = 'yoyo';
  console.log(firstName);
}
myFunc();

//anynomas function
let numbers = [3,4,5,6,7];
let sqnumbers = numbers.map(function(number){
  return number * number;
});
console.log(sqnumbers);

// aray function
let add2 = function(x, y){
  return x + y;
};
console.log(add2(10, 10));

let add = (x, y) => x + y;
console.log(add(5,9));

// another function
function greet(firstName){
  function sayHello(){
    alert('hello' + firstName)
  }
  return sayHello();
}
greet('naimul');