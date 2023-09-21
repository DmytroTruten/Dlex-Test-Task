const form = document.getElementById("newsletterForm");
const firstNameInput = form.querySelector('input[name="first_name"]');
const lastNameInput = form.querySelector('input[name="last_name"]');
const emailInput = form.querySelector('input[name="email"]');
const phoneInput = form.querySelector("input[name='phone']");
const callbackCheckbox = form.querySelector("#callback-checkbox");
const errorMsg = document.querySelector("#phone-error");
const errorMap = [
  "Invalid number",
  "Invalid country code",
  "Too short",
  "Too long",
  "Invalid number",
];

// Function for checking first name validity
function isValidFirstName(firstName) {
  const isValidLength = firstName.length >= 2;
  const isValidPattern = /^[a-zA-Z]+$/.test(firstName);
  return isValidLength && isValidPattern;
}

// Function for checking last name validity
function isValidLastName(lastName) {
  const isValidLength = lastName.length >= 2;
  const isValidPattern = /^[a-zA-Z]+$/.test(lastName);
  return isValidLength && isValidPattern;
}

// Function for checking email validity
function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

// Function for checking email validity
function isValidPhone() {
  const inputValue = phoneInput.value.trim();

  if (!/^\d*$/.test(inputValue)) {
    highlightField(phoneInput, false, "Please enter only numbers");
    return false;
  }

  if (!inputValue) {
    highlightField(phoneInput, false, errorMap[errorCode]);
    return false;
  }

  if (iti.isValidNumber()) {
    highlightField(phoneInput, true, "");
    errorMsg.innerHTML = "";
    return true;
  } else if (inputValue.length === 1) {
    errorMsg.innerHTML = errorMap[2];
    return false;
  } else {
    const errorCode = iti.getValidationError();
    errorMsg.innerHTML = errorMap[errorCode];
    highlightField(phoneInput, false, errorMap[errorCode]);
    return false;
  }
}

// Function to highlight fields with errors
function highlightField(input, isValid, errorMessage) {
  const errorSpan = document.getElementById(`${input.name}-error`);
  if (isValid) {
    input.style.border = "1px solid #ccc"; // Resetting the highlight
    errorSpan.textContent = ""; // Clear the error message
  } else {
    input.style.border = "1px solid red"; // Highlight the field
    errorSpan.textContent = errorMessage; // Set the error message
  }
}

// Event handlers for validating data input
firstNameInput.addEventListener("input", () => {
  const isValidLength = firstNameInput.value.length >= 2;
  const isValidPattern = /^[a-zA-Z]+$/.test(firstNameInput.value);
  const isValid = isValidLength && isValidPattern;
  const errorMessage = isValid
    ? ""
    : isValidLength
    ? "Please use only letters"
    : "Please enter at least 2 characters.";

  highlightField(firstNameInput, isValid, errorMessage);
});

lastNameInput.addEventListener("input", () => {
  const isValidLength = lastNameInput.value.length >= 2;
  const isValidPattern = /^[a-zA-Z]+$/.test(lastNameInput.value);
  const isValid = isValidLength && isValidPattern;
  const errorMessage = isValid
    ? ""
    : isValidLength
    ? "Please use only letters"
    : "Please enter at least 2 characters.";

  highlightField(lastNameInput, isValid, errorMessage);
});

emailInput.addEventListener("input", () => {
  const isValid = isValidEmail(emailInput.value);
  const errorMessage = isValid
    ? ""
    : "Please enter a valid email address (e.g., example@example.com)";
  highlightField(emailInput, isValid, errorMessage);
});

phoneInput.addEventListener("input", () => {
  isValidPhone();
});

// Form submission handler
form.addEventListener("submit", (e) => {
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const email = emailInput.value;

  if (
    !isValidFirstName(firstName) ||
    !isValidLastName(lastName) ||
    !isValidEmail(email) ||
    !isValidPhone()
  ) {
    e.preventDefault();
  } else {
    alert("You filled out the form");
    e.preventDefault();
  }
});
