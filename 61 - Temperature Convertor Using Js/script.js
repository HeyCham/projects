let btnConvert = document.querySelector('#covertBtn');
let resetBtn = document.querySelector('#resetBtn');
let result = document.querySelector('#result');
let inputNumber = document.querySelector('#inputNum');


let first = document.querySelector('#firstOption');
let second = document.querySelector('#secondOption');


function calculate() {
  btnConvert.addEventListener('click', () => {
    let inputNum = inputNumber.value;
    //console.log(inputNum);
    if (first.value === 'fahrenheit' && second.value === 'celcius') {
      let cel = (inputNum - 32) * 5 / 9;
      result.textContent = cel.toFixed(3) + ' °C';


    } else if (first.value === 'celcius' && second.value === 'fahrenheit') {
      let fah = ((inputNum * 9 / 5) + 32);
      result.textContent = fah.toFixed(3) + ' °F';
    }
    else {
      result.textContent = 'Error';
    }

    resetBtn.addEventListener('click', () => {
      result.textContent = '';
      inputNumber.value = '';

    })
    
  })
}
calculate();