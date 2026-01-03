const randomQuotes = [
  "The best way to get started is to quit talking and begin doing. – Walt Disney",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
  "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "Act as if what you do makes a difference. It does. – William James",
  "Dream big and dare to fail. – Norman Vaughan",
  "It does not matter how slowly you go as long as you do not stop. – Confucius",
  "Everything you’ve ever wanted is on the other side of fear. – George Addair",
  "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
  "If you’re going through hell, keep going. – Winston Churchill",
  "You miss 100% of the shots you don’t take. – Wayne Gretzky",
  "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
  "Don't be afraid to give up the good to go for the great. – John D. Rockefeller",
  "I never dreamed about success. I worked for it. – Estée Lauder",
  "Opportunities don't happen. You create them. – Chris Grosser",
  "Hope is the Ultimate freedom. - Naimul Islam"
];

const quoteElement = document.querySelector('#quote');
const authorElement = document.querySelector('#author');
const button = document.querySelector('#btn');

  function autoQuote (){
  const index = Math.floor(Math.random() * randomQuotes.length);
  console.log(index);
  quoteElement.textContent = randomQuotes[index];
  }
  autoQuote ();

  button.addEventListener('click', autoQuote);