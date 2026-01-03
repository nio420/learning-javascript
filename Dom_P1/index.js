const body = document.getElementById('body');
const button = document.querySelectorAll('li');

// const redColor = document.querySelector('.red');
// redColor.addEventListener('click', function(){
//   body.style.background = 'red';
//   redColor.style.border = '1px solid black';
// })   // not wise for many options

button.forEach(function(value){
  value.addEventListener('click',function(){
    let className = this.classList[0];
    let color = '';
    if(className === 'red'){
      color = 'red';
    }
    if(className === 'green'){
      color = 'green';
    }
    if(className === 'blue'){
      color = 'blue';
    }
    if(className === 'pink'){
      color = 'pink';
    }
    if(className === 'purple'){
      color = 'purple';
    }
  body.style.background = color;
  value.style.border = '1px solid #ffffff';
  })
})