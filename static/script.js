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
    .then(response => response.text())
    .then(data => {
        try {
            const jsonData = JSON.parse(data);

            if (jsonData.success) {
                document.getElementById('message').innerText = `Hello, ${jsonData.username}!`;
            } else {
                document.getElementById('message').innerText = 'Authentication failed. Please try again.';
            }
        } catch (error) {
            console.error('Error parsing JSON:', error);
            document.getElementById('message').innerText = 'An error occurred during login. Please try again.';
        }
    })
    .catch(error => {
        console.error('Error during login:', error);
        document.getElementById('message').innerText = 'An error occurred during login. Please try again.';
    });
}
