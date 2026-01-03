/*
* javascript bind method
*/
const greenLine ={
  bus: 'greenline',
  bCode: 'GL',
  ticket: [],
  book (sitNumber, name){
      console.log(`${name} booked a ticket on ${this.bus} and ticket is ${this.bCode}-${sitNumber}`);
      this.ticket.push({ticketInfo: `${this.bCode}- ${sitNumber}, ${name}`})
  }
};
greenLine.book('A1', 'Nio');
console.log(greenLine);

// call mehthod
const book = greenLine.book;

const shohagh = {
  bus: 'shohagh paribahan',
  bCode: 'sh',
  ticket: [],
};

book.call(shohagh, 'F1', 'Athai');
book.call(shohagh, 'F1', 'Anisha');
book.call(greenLine, 'A2', 'Rony');
console.log(shohagh);

const hanif = {
  bus: 'hanif paribahan',
  bCode: 'hn',
  ticket: [],
}
book.call(hanif, 'H1', 'Maisha');
console.log(hanif);

// apply method - giving data as array
const ticketData = ['B2', 'naimul'];
book.apply(shohagh, ticketData);
book.apply(greenLine, ['C8', 'Monir']);


// bind starts
const ticketSh = book.bind(shohagh);
ticketSh('E1', 'karim ali');

const ticketShPredefine = book.bind(shohagh, 'E1');
ticketShPredefine('asif akbar');

const person = {
  firstName: 'naimul',
  lastName: 'islam',
  display: function(){
      return this.firstName+ ' ' + this.lastName;
  },
};
const display = person.display()
console.log(display);

const person1 = {
  firstName: 'nio',
  lastName: 'islam',
  display: function(){
      console.log(this.firstName+ ' ' + this.lastName);
  },
};
const display1 = person1.display;
console.log(setTimeout(display1.bind(person1),2000));

// exm
greenLine.busses = 20;
greenLine.buyBus = function(){
  console.log(this);
  this.busses++;
  console.log(this.busses);
};
// greenLine.buyBus();

// document.querySelector('.btn').addEventListener('click', greenLine.buyBus); n/w
 document.querySelector('.btn').addEventListener('click', greenLine.buyBus.bind(greenLine));

 // partial application
 const addTax = (rate, value) => value + (value * rate)/100;
 console.log(addTax(10, 100));

 const addVat = addTax.bind(null, 15);
 console.log(addVat(100));