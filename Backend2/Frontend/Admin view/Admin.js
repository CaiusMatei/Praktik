document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const loginMessage = document.getElementById('login-message');
    const forgotPasswordLink = document.getElementById('forgot-password-link');
    const forgotPasswordModal = document.getElementById('forgot-password-modal');
    const closeBtn = document.querySelector('.close');
  
    
    forgotPasswordLink.addEventListener('click', function(event) {
      event.preventDefault();
      forgotPasswordModal.style.display = 'block';
    });
  
    
    closeBtn.addEventListener('click', function() {
      forgotPasswordModal.style.display = 'none';
    });
  
    
    window.addEventListener('click', function(event) {
      if (event.target == forgotPasswordModal) {
        forgotPasswordModal.style.display = 'none';
      }
    });
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault(); 
  
      
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      
      if (username === 'admin' && password === '123') {
        loginMessage.textContent = 'Login successful!';
        loginMessage.style.color = 'green';
        
      } else {
        loginMessage.textContent = 'Invalid username or password!';
        loginMessage.style.color = 'red';
      }
    });
  });
  