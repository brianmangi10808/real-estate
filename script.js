// Assuming you have these variables defined in your JavaScript
const nameField = document.getElementById('nameField');
const title = document.getElementById('title');
const signupBtn = document.getElementById('signupBtn');
const loginBtn = document.getElementById('loginBtn');

// Initially hide the signup form
nameField.style.maxHeight = "0";

// Toggle the visibility when the signup button is clicked
signupBtn.onclick = function() {
    // Toggle the max-height and change the title
    if (nameField.style.maxHeight === "0") {
        nameField.style.maxHeight = "70px"; // Set the desired height
        title.innerHTML = "Sign Up";
        signupBtn.classList.add("disable");
        loginBtn.classList.remove("disable");
    } else {
        nameField.style.maxHeight = "0";
        title.innerHTML = "Login";
        signupBtn.classList.remove("disable");
        loginBtn.classList.add("disable");
    }
};
