const URL = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';

const generateButton= document.getElementById('qr-btn');
const inputText = document.getElementById('input-text');
const imgBox = document.querySelector('.img-box');
const imgSrc = document.getElementById('img-src');

function generateQR() {
  if (inputText.value.length > 0) {
    imgSrc.src = URL + encodeURIComponent(inputText.value);
    imgBox.classList.add('showimg');
  } else {
    inputText.classList.add('error');
    inputText.style.backgroundColor = '#FFCFCF';
    setTimeout(() => {
      inputText.classList.remove('error');
      inputText.style.backgroundColor = '#fff';
    }, 1000);
  }
}

generateButton.addEventListener('click', generateQR);

