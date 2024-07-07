document.getElementById('change-password-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const currentPassword = document.getElementById('current-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const newPassword = document.getElementById('new-password').value;

    if (currentPassword && confirmPassword && newPassword) {
        if (confirmPassword !== newPassword) {
            alert('Confirm password and new password do not match.');
        } else {
            // Handle the password change logic here
            alert('Password changed successfully.');
        }
    } else {
        alert('Please fill in all fields.');
    }
});
