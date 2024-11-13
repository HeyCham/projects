function calculate() {

  const principalInput = document.querySelector('#principal');
  const rateInput = document.querySelector('#rate');
  const timeInput = document.querySelector('#time');
  const btn = document.querySelector('#btn');
  const total_amount = document.querySelector('#total-amount');
  const reset = document.querySelector('#btn2')

  // Take user input value and convert a number

  let principal = Number(principalInput.value);
  let rate = Number(rateInput.value);
  let time = Number(timeInput.value);

  let results = (principal * rate * time) / 100;

  // Format for Indian Rupee 

  total_amount.textContent = results.toLocaleString(undefined, { style: "currency", currency: "INR" });

  // Function for reset button.
  reset.addEventListener('click', function() {
    // Clear input fields
    principalInput.value = principalInput;
    rateInput.value = rateInput;
    timeInput.value = timeInput;

    // Clear result
    total_amount.textContent = '₹0.00';
  });

}
calculate();
