const randomQuotes = [
  {
    quote: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    quote: "Don’t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    quote: "Act as if what you do makes a difference. It does.",
    author: "William James"
  },
  {
    quote: "Dream big and dare to fail.",
    author: "Norman Vaughan"
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius"
  },
  {
    quote: "Everything you’ve ever wanted is on the other side of fear.",
    author: "George Addair"
  },
  {
    quote: "Hardships often prepare ordinary people for an extraordinary destiny.",
    author: "C.S. Lewis"
  },
  {
    quote: "If you’re going through hell, keep going.",
    author: "Winston Churchill"
  },
  {
    quote: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky"
  },
  {
    quote: "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau"
  },
  {
    quote: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller"
  },
  {
    quote: "I never dreamed about success. I worked for it.",
    author: "Estée Lauder"
  },
  {
    quote: "Opportunities don't happen. You create them.",
    author: "Chris Grosser"
  },
  {
    quote: "Hope is the Ultimate freedom.",
    author: "Naimul Islam"
  }
];


const quoteElement = document.querySelector('#quote');
const authorElement = document.querySelector('#author');
const button = document.querySelector('#btn');

  function autoQuote (){
  const index = Math.floor(Math.random() * randomQuotes.length);
  console.log(index);
  quoteElement.textContent = randomQuotes[index].quote;
  authorElement.textContent = randomQuotes[index].author;
  }
  autoQuote ();

  button.addEventListener('click', autoQuote);