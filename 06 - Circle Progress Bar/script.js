let countNumber = document.querySelector("#number");

let number = 0;

setInterval(() => {
  if (number == 80) {
    clearInterval
  } else {
    number += 1;
    countNumber.innerHTML = `${number}%`
  }
}, (2000 / 80))

