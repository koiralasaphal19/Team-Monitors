document.getElementById('reset-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;

    if (email) {
        alert('Password reset link has been sent to ' + email);
        // Here you would typically send the email to the server for further processing
    } else {
        alert('Please enter a valid email address.');
    }
});
