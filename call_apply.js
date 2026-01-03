/*
* javascript call and apply method
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