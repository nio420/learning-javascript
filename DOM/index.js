
/*
*document.querySelector('h1').innerText;
'welcome'
*document.querySelector('h1').textContent
'welcome Back'
*document.querySelector('h1').innerHTML
'welcome <span style="display: none;">Back</span>'
*/
// h1,p
document.querySelector('h1').innerText = 'Subsribe';


// div id and clss
const box = document.querySelector('.box');
box.style.backgroundColor = 'yellow';
box.style.width = '200px';
box.style.height = '200px';
box.style.textAlign = 'center';

document.getElementById('boxx').style.color = 'green';

// nav using foreach
const menuItem = document.querySelectorAll('a');
menuItem[1].style.color = 'hotpink';  // not wise
menuItem.forEach(function (i) {
  i.style.color = 'black';
  i.style.textDecoration = 'none';
  i.style.fontSize = '2rem';
})

// using class for nav
const cusClass = document.getElementsByClassName('nav-link');
const convertClass = Array.from(cusClass);

for(let i = 0; i<cusClass.length; i++){
  console.log(cusClass[i]);
}
convertClass.forEach(function (i){
  i.style.margin = '0 10px 15px';
  i.style.backgroundColor = 'skyblue';
  i.style.padding = '10px 25px';
  i.style.display = 'inline-block';
})

// attribute finding
document.querySelector('.box').getAttribute('id');
document.querySelector('.cta').setAttribute('class', 'text-white cta');


/* DOM part 2*/

let hello = document.querySelector('h2'); // add text inside tag
// hello.innerText = 'hey';
hello.innerText = hello.innerText + ' '+ 'Bangladesh';

// change text
const boxes = document.querySelectorAll('.box');
boxes[0].innerText = 'hello box';

let newNum = 0;
for (const box of boxes) {
box.innerText = `box no ${newNum}`;
newNum++;
};

// create element
const learnBtn = document.createElement('button');
learnBtn.innerText = 'Learn More';

const heroArea = document.querySelector('.hero');
heroArea.append(learnBtn); // last
heroArea.prepend(learnBtn); // first
heroArea.before(learnBtn); // before
heroArea.after(learnBtn); // after

// add element
function addElement(namefruits){
const li = document.createElement('li');
li.innerHTML = `${namefruits}`;  // normal way
li.appendChild(document.createTextNode(namefruits)); // optimized way

document.querySelector('ul').appendChild(li);
}
addElement('');

// Edit element
const editElement = document.querySelector('li:first-child');
editElement.innerText = 'orange';
editElement.textContent = 'oranges';

// replace element
const newElement = document.querySelector('li');
newElement.innerText = 'strawberry';
editElement.replaceWith(editElement);

// edit with tag
const editTag = document.querySelector('li:last-child');
editTag.outerHTML = '<p> lemon </p>';
editTag.remove();   // remove