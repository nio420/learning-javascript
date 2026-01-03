// javascript events
function save(){
  document.getElementById('text').innerHTML = 'saved';
  document.getElementById('btn').innerHTML = 'saved';
  document.getElementById('btn').style.backgroundColor = 'green';
};

function like(){
 document.getElementById('like').innerHTML = '<i class="fa-regular fa-thumbs-up"></i> liked';
}

function keyPress(){
  document.getElementById('text2').innerHTML = 'key pressd';
}

/* for body*/
function onLoad(){
  alert('testing javascript on run');
  document.getElementById('text2').innerHTML = 'website loaded successfully';
}

function windowResize(){
  document.getElementById('btn_2').style.height = '100px';
  document.getElementById('form').style.fontFamily = 'Lucida Sans';
  document.getElementById('form').style.color = 'green';
}

function onScroll(){
  document.getElementById('text2').innerHTML = 'Scrolling';
}

//
document.getElementById('btn').onclick = function(){
  document.getElementById('btn').innerHTML = 'saved';  // good practice
}

document.getElementById('btn').addEventListener('click', function(){
  document.getElementById('btn').innerHTML = 'saved';  // modern practice
});


// javascript bubbling
document.getElementById('ul').addEventListener('click', function(e){
  console.log('ul checked');
}, true
);

document.getElementById('li').addEventListener('click', function(e){
  console.log('li checked');
}, true
);
