const loginForm = document.getElementById('loginForm'); 
const usernameInput = document.getElementById('username'); 
const passwordInput = document.getElementById('password'); 
const errorMessage = document.getElementById('error-message'); 

loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); 

 
  const username = usernameInput.value; 
  const password = passwordInput.value; 

  
  if (username === 'admin' && password === 'password123') {
    
    window.location.href = 'home.html'; 
  } else {
    
    errorMessage.textContent = 'Invalid username or password.';
  }
});
