const form = document.getElementById("newsletterForm");
const firstNameInput = form.querySelector('input[name="first_name"]');
const lastNameInput = form.querySelector('input[name="last_name"]');
const emailInput = form.querySelector('input[name="email"]');
const phoneInput = form.querySelector("#phoneInput");
const callbackCheckbox = form.querySelector("#callbackCheckbox");

// Function for checking email validity
function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

// Function for checking phone validity
function isValidPhone() {
  // Getting the current value of the input field
  const phoneNumber = iti.getNumber();

  // Checking the validity of the phone number
  return phoneNumber && phoneNumber.isValid();
}

// Function to highlight fields with errors
function highlightField(input, isValid) {
  if (isValid) {
    input.style.border = "1px solid #ccc"; // Resetting the highlight
  } else {
    input.style.border = "1px solid red"; // Highlight the field
  }
}

// Event handlers for validating data input
firstNameInput.addEventListener("input", () => {
  highlightField(firstNameInput, firstNameInput.value.length >= 2);
});

lastNameInput.addEventListener("input", () => {
  highlightField(lastNameInput, lastNameInput.value.length >= 2);
});

emailInput.addEventListener("input", () => {
  highlightField(emailInput, isValidEmail(emailInput.value));
});

phoneInput.addEventListener("input", () => {
  highlightField(phoneInput, isValidPhone(phoneInput.value));
});

// Form submission handler
form.addEventListener("submit", (e) => {
  if (
    firstNameInput.value.length < 2 ||
    lastNameInput.value.length < 2 ||
    !isValidEmail(emailInput.value) ||
    !isValidPhone()
  ) {
    e.preventDefault();
    alert("Please, set all fields correctly");
  } else {
    alert("You filled out the form")
  }
});
