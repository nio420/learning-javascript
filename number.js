// number javascript
const x = 5555555555555555;
const x2 = 9999999999999999; // 16 ta 9 hoile not exp result pabo
const y = 0.6;
const z = 0.7;
const l = y + z;
const l2 = (y +z).toFixed(2); // tofixed method

console.log(new Number(l));
console.log((y * 10 + z *10)/10); // evabe full result pabo otherwise not
console.log(l.toFixed(2)); // another method but string hoye jabe num convert need


const a = 20;
const b =30;
const c = 'javascript';
const e = b-c;
const f = 250;

console.log(b+a+c);
console.log(b - c);
console.log(b * c);
console.log(b / c);
console.log(e);

// loop while
let num = 3;
let value = '';
while (num != Infinity){
  num = num * num ;
  value = value + num +'<br>';
}
document.getElementById('title').innerHTML = 'value';

// binary deci hexa
const g = 300;
const h = new Number(300); // object but same true
const r = 10000;
const k = 10.78976;

console.log(f.toString(16)); // binary and hexa // tostring method
console.log(r.toPrecision(3));  // to precision method
console.log(k.toFixed(2));

// number methd
let newNum = Number.EPSILON
newNum = Number.MAX_SAFE_INTEGER
newNum = Number.MAX_VALUE
newNum = Number.MIN_VALUE
newNum = Number.POSITIVE_INFINITY
newNum = Number.NEGATIVE_INFINITY
newNum = Number.NaN
console.log(newNum);