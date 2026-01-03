// data and time
const myDate = new Date();

console.log(myDate);
console.log(myDate.toString()); // same date as well console and terminalnode
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString('default',{
  weekday: 'long'
}));
console.log(myDate.getDate());
console.log(myDate.getHours());

// custom date
const updateDate = new Date(2025,5,13,9,15,40,0);
const updateDate2 = new Date('2000-6-28')
console.log(updateDate2);

// mili sec time
let myTime = Date.now();
function task (){
  for (let step = 0; step <10; step ++){
    console.log('walking', );
  }
}
let startTime = Date.now();
task ();
let endTime = Date.now ();
console.log(myTime);
console.log(`this task took ${endTime - startTime} millisecond to complete `);
console.log(Math.floor(myTime/1000));  // if want to see in second use it