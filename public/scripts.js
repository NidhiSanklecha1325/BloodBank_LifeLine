document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Perform login validation and submission
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (email && password) {
        // Simulate a login request
        alert('Login successful');
    } else {
        alert('Please enter your email and password');
    }
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Perform registration validation and submission
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (name && email && password) {
        // Simulate a registration request
        alert('Registration successful');
    } else {
        alert('Please fill in all fields');
    }
});
