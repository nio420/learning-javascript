/*
* immediatly invoked function expression (IIFE)
*/
const aFunction = function(a,b){
  console.log(`a simple function ${a+b}`);
}
aFunction(5,5);

//IIFE
(function(a,b){
  console.log(a+b);
})(8,9);
             // we need to put semicolon in two iife func
(function(a,b){
  console.log(a+b);
})(11,9);

((a,b) => console.log(a*b))(3,5);

// DOM
(function(){
  const h2 = document.querySelector('.h2');
  const h3 = document.querySelector('.h3');
  h2.style.backgroundColor = "red";
  h3.style.backgroundColor= "yellow";
})();

// for global access
const myModule = (function(){
  let privat = `this is private`;
  function privatFunc (){
    console.log(`this is private function`);
  }

  return{
    publicVar: 'this is public var',
    publicVar2:   function (){
    console.log(`this is private function`);
  }
  };
})();
console.log(myModule.privat); // unaccessable
console.log(myModule.privatFunc); // unaccessable
console.log(myModule.publicVar);  // accessable for return only
console.log(myModule.publicVar2()); // accessable for return only
