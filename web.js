// Store user data
let users = [];

// Handle registration form submission
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the input values
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Check if the username already exists
    if (users.find(user => user.username === username)) {
        alert("Username already exists!");
        return;
    }

    // Add the user to the array
    users.push({ username, password });

    // Clear the form
    document.getElementById("registrationForm").reset();

    // Display a success message
    alert("Registration successful!");
});

// Handle login form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the input values
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Check if the username and password match
    let user = users.find(user => user.username === username && user.password === password);
    if (user) {
        // Clear the form
        document.getElementById("loginForm").reset();

        // Display a success message
        alert("Login successful!");
    } else {
        // Display an error message
        alert("Invalid username or password!");
    }
});
