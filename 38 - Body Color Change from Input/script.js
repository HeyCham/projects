const btn = document.querySelector('#btn');

const inputBox = document.querySelector('#input-box');

btn.addEventListener('click', () => {

  document.body.style.backgroundColor = inputBox.value;

})