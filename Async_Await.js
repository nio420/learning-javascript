/*
?Asynchronous JavaScript
?callback, promise, fatch, async/await -- we learning
*/
/*
! synchronous ans single threaded
*/
function a(){
  console.log('a');
}
console.log('end');
a();

const a = function(){
  console.log(`function working`);
  let aTime = new Date().getTime();
  while(aTime + 5000 >= new Date().getTime());
  console.log(`completed`);
}
console.log(`first line`);
a();
console.log(`last line`);

/*
* settimeout
* setintervel
* promise
* fetch
* axios
* xmlHttprequest
*/
// setTimeout(Callback, Timeinmilsec);
console.log(`hello1`);
console.log(`hello2`);
setTimeout(function(){
console.log(`hello3`);
}, 5000);
console.log(`hello4`);
console.log(`hello5`);

const coffee = new Promise((res, rej) => {
  if(true){
    return res();  // Resolved
  } else {
    return rej();  // Rejected
  }
})
coffee.then( function() {
  console.log(`resolved`);
}).catch( function() {
  console.log(`rejected`);
})

const mathAns = new Promise((res, rej) => {
  let n = Math.floor(Math.random() * 10);
  console.log(`Generated number: ${n}`);
  if(n < 5){
    return res();
  } else {
    return rej();
  }
});
mathAns.then(function(){
  console.log(`Below`);
})
.catch(function(){
  console.log(`Above`);
})

const setp1 = new Promise((res, rej) =>{
  setTimeout(() => {
     res(`step one done`);
  }, 4000);
})
const setp2 = new Promise((res, rej) =>{
  setTimeout(() => {
     res(`step two done`);
  }, 5000);
})
setp1.then(function(res){
  console.log(res);
})
setp2.then(function(res){
  console.log(res);
})

/*
!! make all promise in one array
*/
Promise.all([setp1, setp2]).then(res => {
console.log(res);
})
Promise.race([setp1, setp2]).then(res => {
console.log(res);   // which one first load will show rest of dont show to use race
})


// ***chain in promise
let promise1 = new Promise((res, rej) => {
  return res(`step one done`);
})
let promise2 = promise1.then(function(data){
  console.log(data);
  return new Promise(function(res, rej){
    return res (`step two done`);
  })
})
let promise3 = promise2.then(function(data){
  console.log(data);
  return new Promise(function(res, rej){
    return res(`step three done`);
  })
})
promise3.then(function(data){
  console.log(data);
})


/*
! understanding fetch
*/
let urlApi = 'https://randomuser.me/api/';
function randomUser (){
  fetch(urlApi).then(function(raw){
    return raw.json();
  }).then(function(data){
    console.log(data);
  }).catch(function(){
    console.log(`data not found`);
  })
}
randomUser();

/*
* async and await
*/
async function myName() {
  return 'hello';
}
console.log(myName());
myName();

async function randomUser (){
  let urlApi = await fetch(`https://randomuser.me/api/`);
  let rawData = await urlApi.json();
  console.log(rawData);

  console.log(`${rawData.results[0].name.title} ${rawData.results[0].name.first} ${rawData.results[0].name.last}`);
  console.log(`${rawData.results[0].gender}`);
  console.log(`${rawData.results[0].location.country}`);
}
randomUser();
