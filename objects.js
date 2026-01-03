//object js
const newSymb = Symbol('key');
const mobileModel ={
  brand: 'Xiomi',
  model: 'redmi note 13 pro',
  processor: 'snapdragon gen 7 plus',
  camera: ['200mp', '50mp', '8mp'],
  zoomCamera: true,
  'selfie camera mp': 16,
  [newSymb]: 'key',

  brandModel: function(){
    return `my mobile name is ${this.brand} and my model is ${this.model}`
  },

  battary: {
   mah: 5000,
  }

};
console.log(mobileModel.battary.mah);
mobileModel.brand = 'Vivo';
Object.freeze(mobileModel);// make all obj freeze

console.log(mobileModel.brandModel());

console.log(mobileModel.brand);
console.log(mobileModel.hasOwnProperty ('camera')); // to verified object is exist
console.log(Object.keys(mobileModel));
console.log(Object.values(mobileModel));
console.log(mobileModel[newSymb]); // for create symbol in object
console.log(mobileModel['selfie camera mp']); // for no gap

// all obj in one obj
const obj1 = {
  a: 1,
  b: 2,
  c: 3,
};
const obj2 = {
  p: 1,
  q: 2,
  r: 3,
};
const obj3 = {
  x: 1,
  y: 2,
  z: 3,
};

// const objFinal ={...obj1, ...obj2, ...obj3};
// console.log(objFinal); // modern practice

const objFinal =Object.assign({}, obj1, obj2, obj3);
console.log(objFinal);

// constructor object
function Person(){
  this.firstName= 'naimul',
  this.lastName= 'islam';
}
const details = new Person();
Person.age = 25;
console.log(details);
