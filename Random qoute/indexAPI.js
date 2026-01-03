const quoteElement = document.querySelector('#quote');
const authorElement = document.querySelector('#author');
const button = document.querySelector('#btn');

const urlAPI = 'https://api.api-ninjas.com/v1/quotes';
const keyAPI = '1/oKJRPHysO4ayMxPeyIKQ==LtLV5TwyEaOZsc5m';

const getQuote = () =>{
  fetch(urlAPI, {
     headers:
     { 'X-Api-Key': keyAPI },
  }).then(data => data.json()).then(item =>
    { //console.log(item);
      quoteElement.textContent = item[0].quote;
      authorElement.textContent = item[0].author;
    });
}
getQuote();

button.addEventListener('click', getQuote);