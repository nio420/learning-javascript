let counter = document.querySelector('.counter');

counter.forEach(counter => {
  let updateCount = () => {
    let target = +counter.getAttribute('data-target');
    let count = +counter.innerText;

    let increament = target / count;

    if(count < target){
      counter.innerText = Math.floor(count + increament);
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
})