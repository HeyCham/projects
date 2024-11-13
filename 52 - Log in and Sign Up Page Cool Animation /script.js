const signUp = document.querySelector('.btns');
const innerWrapper = document.querySelector('.inner-wrapper');
const wrapperContent = document.querySelector('.wrapper-content');
const signIn = document.getElementById('signIn'); 
const signUpText = document.getElementById('signUpText'); 
const textSignUp = document.getElementById('textSignUp'); 
const confirmPassword = document.getElementById('confirm-password'); 
const forgotPassword = document.getElementById('forgotPassword'); 
const logInBtn = document.querySelector('.logInBtn');
const icons = document.querySelector('.icons');
const iconText = document.getElementById('iconText');
const inputFeilds = document.querySelector('.input-feilds');
const checkbox = document.querySelector('.checkbox');



signUp.addEventListener('click',() =>{
  innerWrapper.classList.toggle('slide');
  let toggle=  wrapperContent.classList.toggle('wrapper-content-slide');
  if(toggle){
    signIn.classList.toggle('fade');

    setTimeout(()=>{
      signIn.innerHTML = "Sign Up";
      signUpText.innerHTML = "Create your free account.";
      textSignUp.style.top = "50%";
      textSignUp.innerHTML = "We are glad to you to see here.Sign your email id and enjoy our services. Lets back with new interface.";
      confirmPassword.style.display = "block";
      forgotPassword.style.display = "none";
      logInBtn.innerHTML = "Sign Up";
      logInBtn.style.transform = "translateY(-30px)";
      logInBtn.style.marginTop = "5px";
      signUp.innerHTML = "Log In";
      icons.style.marginTop = "5px";
      iconText.style.display = "none";
      inputFeilds.style.top = "40%";
      checkbox.style.display = "block";
      
    },500);
  }
  else {
    signIn.classList.toggle('fade');
    setTimeout(() =>{
      signIn.innerHTML = "Sign In";
      signUpText.innerHTML = "Welcome, Friends!";
      textSignUp.style.top = "40%";
      textSignUp.innerHTML = "We are glad to you to see here.If you've signed up then login else Please Sign up first.";
      confirmPassword.style.display = "none";
      forgotPassword.style.display = "block";
      logInBtn.innerHTML = "Log In";
      logInBtn.style.marginTop = "10px";
      signUp.innerHTML = "Sign Up";
      icons.style.display = "block";
      iconText.style.display = "block";
      inputFeilds.style.top = "50%";
      checkbox.style.display = "none";
      logInBtn.style.transform = "";
    },500);
  }
  
})