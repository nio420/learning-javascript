// javascript strings

const fullName = 'naimul islam';
const fullName2 = new String('omit'); // object
const country  = 'bangladesh';
const someText = "bill gates is \n \"great rich\"";

let info = 'naimul ' + 'islam';
let info2 = info + " " + country;
let info3 = "I am "+ info+ " i am from "+ country;
let info4 = `i am ${fullName} i am from ${country}`
document.getElementById('title').innerText = info3;
console.log(fullName2);

console.log(info4.length);  // length
console.log(info4.charAt(2));  // character specify
console.log(info4.indexOf('m'));  // index specify
console.log(info4.toLocaleUpperCase()); // upper and lower

// slice ans substring
const student = 'nio okay            '
console.log(student.slice(4,1));
console.log(student.substring(4,1)); // - not allowed

// trim space use this
console.log(student.trim());
console.log(student.trimEnd());
console.log(student.trimStart());

// replace string
const url = 'https://naimul.com/new%20blog';
console.log(url.replace("%20", "-"));
console.log(info4.split(" "));