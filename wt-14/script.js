const form = document.getElementById("registration-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("cPassword");
const errorMessagesDiv = document.getElementById("error-messages");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let errors = [];
  // Validate Name
  if (nameInput.value.trim() === "") {
    errors.push("Name is required");
  }
  // Validate Email
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(emailInput.value)) {
    errors.push("Invalid email address");
  }
  // Validate Password
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$ /;
  if (!passwordRegex.test(passwordInput.value)) {
    errors.push(
      "Password must be at least 8 characters, contain at least one lowercase letter, one uppercase letter, one number, and one special character"
    );
  }
  // Validate Confirm Password

  if (passwordInput.value !== confirmPasswordInput.value) {
    errors.push("Passwords do not match");
  }
  // Display Error Messages
  if (errors.length > 0) {
    errorMessagesDiv.innerHTML = "";
    errors.forEach((error) => {
      const errorParagraph = document.createElement("p");
      errorParagraph.textContent = error;
      errorMessagesDiv.appendChild(errorParagraph);
    });
  } else {
    // Form is valid, submit the form or perform other actions
    console.log("Form is valid!");
  }
});
