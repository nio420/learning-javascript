const height = document.getElementById('height');
const weight = document.getElementById('weight');
const result = document.querySelector('.result');
const score = document.getElementById('score');


const button = document.getElementById('btn');
button.addEventListener('click', function(){
  let newHeight = parseFloat(height.value);
  let newWeight = parseFloat(weight.value);
  newHeight = newHeight / 100;
  let sqrHeight = newHeight * newHeight;

  let BMI = newWeight / sqrHeight;
  // console.log(BMI.toFixed(2));
  score.textContent = BMI.toFixed(2);
  result.style.display = 'block';

  if(score.textContent < 18.6){
    score.style.background = '#ffbe76';
  } else if (score.textContent < 24.9){
    score.style.background = '#6ab04c';
  } else{
    score.style.background = '#eb4d4b';
  }
})

const form = document.getElementById('form');
form.addEventListener('submit', function(e){
  e.preventDefault();
})