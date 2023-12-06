function validateForm(event) {
    event.preventDefault();
  
    // Simple email validation
    const emailInput = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    // Password strength validation (at least 8 characters)
    const passwordInput = document.getElementById('password');
    if (passwordInput.value.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
    }
  
    // Registration successful
    const nameInput = document.getElementById('name');
    const usernameInput = document.getElementById('username');
    const confirmationDiv = document.getElementById('confirmation');
    const userFullNameSpan = document.getElementById('userFullName');
  
    userFullNameSpan.textContent = nameInput.value;
    confirmationDiv.classList.remove('hidden');
  }
  