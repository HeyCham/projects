document.addEventListener('DOMContentLoaded', function () {
  const closeEye = document.getElementById('close-eye');
  const closeEye2 = document.getElementById('close-eye2');

  function togglePasswordVisibility(inputElement, eyeElement) {
    const type = inputElement.getAttribute('type') === 'password' ? 'text' : 'password';
    inputElement.setAttribute('type', type);
    eyeElement.src = (type === 'password') ? 'images/close-eyes.svg' : 'images/open-eye.svg';
  }

  closeEye.addEventListener('click', () => {
    const passwordInput = document.querySelector('.password input');
    togglePasswordVisibility(passwordInput, closeEye);
  });

  closeEye2.addEventListener('click', () => {
    const confirmPasswordInput = document.querySelector('.password-confirm input');
    togglePasswordVisibility(confirmPasswordInput, closeEye2);
  });
});
