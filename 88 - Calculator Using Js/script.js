const display = document.getElementById('display');

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    const result = eval(display.value);
    
    if (isNaN(result) || !isFinite(result)) {
      throw new Error("Invalid operation");
    }

    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}


function clearDisplay() {
  document.getElementById('display').value = '';
}

function deleteLastCharacter() {
  display.value = display.value.slice(0, -1);
}

