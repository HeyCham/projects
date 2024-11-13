let btn = document.querySelector('#btn');
let boxes = document.querySelectorAll('.box');
let boxBtn1 = document.getElementById('box1');
let boxBtn2 = document.getElementById('box2');
let boxBtn3 = document.getElementById('box3');
let boxBtn4 = document.getElementById('box4');
let resetBtn = document.getElementById('resetbtn');


boxBtn1.addEventListener('click', () => {
  document.body.style.backgroundColor = "#3B47D1"
  box1.style.border = '1px solid white';
});
boxBtn2.addEventListener('click', () => {
  document.body.style.backgroundColor = "#3BD13F";
  box2.style.border = '1px solid white';
})
boxBtn3.addEventListener('click', () => {
  document.body.style.backgroundColor = "#D1A93B"
  box3.style.border = '1px solid white';
})
boxBtn4.addEventListener('click', () => {
  document.body.style.backgroundColor = "#0CB8FF"
  box4.style.border = '1px solid white';
})

resetBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = '#9CA7B5';
})