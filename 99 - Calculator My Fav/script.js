let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

function calculate() {
  arr.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default behavior for all buttons

      if (e.target.innerHTML == '=') {
        try {
          // Replace "x" with "*" for multiplication
          string = string.replace(/x/g, '*');
          string = math.evaluate(string);
          input.value = string;
        } catch (error) {
          input.value = 'Error';
        }
      } else if (e.target.innerHTML == 'C') {
        clearInput();
      } else if (e.target.classList.contains('delete')) {
        deleteLastCharacter();
      }
      else {
        string += e.target.innerHTML;
        input.value = string;
      }
    });
  });
}

function clearInput() {
  string = "";
  input.value = string;
}

function deleteLastCharacter() {
  string = string.substring(0, string.length - 1);
  input.value = string;
}

calculate();



const buttonsAll = document.querySelectorAll('.buttons');

buttonsAll.forEach(btn => {
  btn.addEventListener('click', (e) => {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    const span = document.createElement('span');
    span.style.left = x + 'px';
    span.style.top = y + 'px';

    e.currentTarget.appendChild(span);

    setTimeout(() => {
      span.remove();
    }, 600);
  })
})

