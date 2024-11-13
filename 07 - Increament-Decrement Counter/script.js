const decrease = document.getElementById('decrease');
const restart = document.getElementById('restart');
const increase = document.getElementById('increase');

const countLabel = document.getElementById('count-label');

let count = 0;

decrease.addEventListener('click', () => {
  count--;
  countLabel.textContent = count;
  if (count < -10) {
    countLabel.style.color = '#FF2C2C';
  } else if (count > 10) {
    countLabel.style.color = '#00DB44';
  }
  else {
    countLabel.style.color = '#fff'
  }
})

increase.addEventListener('click', () => {
  count++;
  countLabel.textContent = count;
  if (count > 10) {
    countLabel.style.color = '#00DB44';
  } else if (count < -10) {
    countLabel.style.color = '#FF2C2C';

  }
  else {
    countLabel.style.color = '#fff'
  }

})

restart.addEventListener('click', () => {
  count = 0;
  countLabel.textContent = count;
  countLabel.style.color = "#fff"
})
