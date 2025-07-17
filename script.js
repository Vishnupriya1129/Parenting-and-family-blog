document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
      registerForm.addEventListener('submit', async function (event) {
        event.preventDefault();
        const formData = {
          firstName: document.getElementById('firstName').value,
          lastName: document.getElementById('lastName').value,
          mobileNumber: document.getElementById('mobileNumber').value,
          email: document.getElementById('email').value,
          username: document.getElementById('username').value,
          password: document.getElementById('password').value,
        };
  
        try {
          const response = await fetch('/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });
          const data = await response.json();
          alert(data.message); // Show success or error message
        } catch (error) {
          console.error(error);
          alert('An error occurred. Please try again later.');
        }
      });
    }
  });
  
