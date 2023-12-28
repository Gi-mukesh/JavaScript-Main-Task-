function validateSignup() {
    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();




    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    if (!username || !password) {
        document.getElementById('usernameError').textContent = 'Fill the details';
        return false;
    }

    // Store user details in localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);



    var customAlertMessage = document.getElementById("customAlertMessage");
    customAlertMessage.innerHTML = "Account Created Successfully";
    customAlertMessage.style.backgroundColor = "#4caf50";  // Green color for success
    customAlertMessage.style.fontWeight = "bold";

    // Show the custom alert modal
    $('#customAlertModal').modal('show');

    // Prevent form submission
    return false;
}

// Function to redirect after a delay
function redirect() {

    setTimeout(function () {
        window.location.href = 'login.html';
    }, 1000);



    window.location.href = 'login.html';


    return false;
}