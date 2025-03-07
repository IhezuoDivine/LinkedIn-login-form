
document.addEventListener("DOMContentLoaded", function () {
    let emailInput = document.getElementById("email");
    let passwordInput = document.getElementById("password");
    let loginButton = document.getElementById("loginbtn");
    let errorMessage = document.getElementById("error-message");
    let togglePassword = document.getElementById("togglePassword"); // Toggle button

    // ✅ Function to show error messages with a delay
    function showError(message) {
        setTimeout(() => {
            errorMessage.textContent = message;
            errorMessage.style.color = "red";
        }, 500); // Delay error message by 0.5 seconds
    }

    // ✅ Function to validate email format
    function isValidEmail(email) {
        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

    // ✅ Validation Function
    loginbtn.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form from refreshing
        let email = emailInput.value.trim();
        let password = passwordInput.value.trim();
        //(emailInput.value === ""|| passwordInput.value === "") {
         //  showError("Please fill all fields");
         // }
         if (emailInput.value === "") {
            showError("Enter email");
        } 
        else if (!isValidEmail(emailInput.value)) {
            showError("Enter a valid email address");
        } 
        else if (passwordInput.value === "") {
            showError("Enter password");
        } 
          else if(emailInput.value==="" || passwordInput.value===""){
            showError("Please fill all fields");
        }
          else {
            errorMessage.textContent = "Login Successful!";
            errorMessage.style.color = "green";
        }
    });

    // ✅ Password Toggle Function
    if (togglePassword) { 
        togglePassword.addEventListener("click", function (event) {
            event.preventDefault(); // 🛑 Prevent form submission

            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                togglePassword.textContent = "Hide"; // Change text to "Hide"
            } else {
                passwordInput.type = "password";
                togglePassword.textContent = "Show"; // Change text to "Show"
            }
        });
    }
});