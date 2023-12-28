// This file contains the JavaScript for the login page.
// Version 1: initial login page
// Version 2: redirect to welcome page welcome.html

function login(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Send credentials to the backend for authentication
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        if (data.success) {
            // Redirect to the welcome page
            window.location.href = `/welcome/${data.username}`;
        } else {
            document.getElementById('message').innerText = 'Authentication failed. Please check your credentials and try again.';
        }
    })
    .catch(error => {
        console.error('Error during login:', error);
        document.getElementById('message').innerText = `An error occurred during login. Please try again. (${error.message})`;
    });
}
