function validateForm() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let nameError = document.getElementById("nameError");
    let passwordError = document.getElementById("passwordError");

    nameError.innerHTML = "";
    passwordError.innerHTML = "";

    let isValid = true;

    // Validate Name (Only alphabets)
    let nameRegex = /^[A-Za-z ]+$/;
    if (!nameRegex.test(name)) {
        nameError.innerHTML = "Name should contain only alphabets!";
        isValid = false;
    }

    // Validate Password Match
    if (password !== confirmPassword) {
        passwordError.innerHTML = "Passwords do not match!";
        isValid = false;
    }

    return isValid;
}
