const userInfoForm = document.querySelector(".user-info-form");
const email = document.getElementById("email");
const country = document.getElementById("country");
const zipcode = document.getElementById("zipcode");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

const emailError = document.querySelector(".emailError");
const countryError = document.querySelector(".countryError");
const zipcodeError = document.querySelector(".zipcodeError");
const confirmPasswordError = document.querySelector(".confirmPasswordError");

const passwordError1 = document.querySelector(".PassError1");
const passwordError2 = document.querySelector(".PassError2");
const passwordError3 = document.querySelector(".PassError3");

// email.addEventListener("focusout", validateEmail);
country.addEventListener("focusout", validateCountry);
password.addEventListener("focusout", validatePassword);
zipcode.addEventListener("focusout", validateZipcode);
confirmPassword.addEventListener("focusout", validateConfirmPassword);

userInfoForm.addEventListener("submit", (e) => {
  if (!email.validity.valid) {
    showEmailError();
    e.preventDefault();
  }
  if (country.value === "Select a Country") {
    validateCountry();
    e.preventDefault();
  }
  if (!zipcode.value) {
    validateZipcode();
    e.preventDefault();
  }
  if (!password.value) {
    validatePassword();
    e.preventDefault();
  }
  if (!confirmPassword.value) {
    validateConfirmPassword();
    e.preventDefault();
  }
});

email.addEventListener("focusout", (e) => {
  const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email.validity.valid) {
    emailError.textContent = "Valid email";
    emailError.classList.remove("error");
    emailError.classList.add("correct");
  } else {
    showEmailError();
  }

  if (!emailRegexp.test(email.value)) {
    emailError.textContent = "Please enter an appropriate e-mail";
    emailError.classList.add("error");
    emailError.classList.remove("correct");
  }
});

function showEmailError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "You need to enter an e-mail address";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Entered value needs to be an e-mail address";
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}`;
  }

  emailError.classList.remove("correct");
  emailError.classList.add("error");
}

// function validateEmail(emailInput) {
//   const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   if (emailRegexp.test(email.value)) {
//     emailError.textContent = "verified format";
//     emailError.classList.remove("error");
//     emailError.classList.add("correct");
//   } else {
//     emailError.textContent =
//       "Please enter the correct email format using @ and .";
//   }
// }

function validateCountry() {
  if (country.value === "Select a Country") {
    countryError.textContent = "Please select a country";
    countryError.classList.add("error");
    countryError.classList.remove("correct");
  } else if (country.validity.valid) {
    countryError.textContent = "Country is valid";
    countryError.classList.add("correct");
    countryError.classList.remove("error");
  }
}

// function validateCountry() {
//   if (country.value === "Select a Country") {
//     countryError.textContent = "Please select a country";
//   } else {
//     countryError.textContent = "verified";
//     countryError.classList.remove("error");
//     countryError.classList.add("correct");
//   }
// }

function validateZipcode() {
  if (!zipcode.value) {
    zipcodeError.textContent = "Please enter a ZIP Code";
    zipcodeError.classList.add("error");
    zipcodeError.classList.remove("correct");
  } else if (zipcode.validity.patternMismatch) {
    zipcodeError.textContent = "Please enter a valid ZIP Code";
    zipcodeError.classList.add("error");
    zipcodeError.classList.remove("correct");
  } else {
    zipcodeError.textContent = "Valid ZIP Code";
    zipcodeError.classList.add("correct");
    zipcodeError.classList.remove("error");
  }

  const zipcodeValue = zipcode.value;
  const zipcodeRegexp = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
  //does the value satisfy the tested object's pattern?
  if (zipcodeRegexp.test(zipcodeValue)) {
    zipcodeError.textContent = "Valid ZIP Code";
    zipcodeError.classList.remove("error");
    zipcodeError.classList.add("correct");
  }
}

// function validateZipcode() {
//   const zipcodeValue = zipcode.value;
//   const zipcodeRegexp = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
//   //does the value satisfy the tested object's pattern?
//   if (zipcodeRegexp.test(zipcodeValue)) {
//     zipcodeError.textContent = "verified";
//     zipcodeError.classList.remove("error");
//     zipcodeError.classList.add("correct");
//   } else {
//     zipcodeError.textContent = "Please enter the correct ZIP code format";
//   }
// }

function validatePassword() {
  if (!password.value) {
    passwordError1.textContent = "Please enter a password";
    passwordError1.classList.remove("correct");
    passwordError1.classList.add("error");
  } else {
    if (password.value) {
      if (password.validity.tooShort) {
        passwordError1.textContent =
          "Your password must be at least 6 characters.";
        passwordError1.classList.remove("correct");
        passwordError1.classList.add("error");
      } else {
        passwordError1.textContent = "";
      }

      if (password.validity.patternMismatch) {
        passwordError2.textContent =
          "Your password must contain at least one lowercase letter, one uppercase letter, one number, and one special character";
        passwordError2.classList.remove("correct");
        passwordError2.classList.add("error");
      } else {
        passwordError2.textContent = "";
      }

      if (password.validity.tooLong) {
        passwordError3.textContent =
          "Your password must be no more than 20 characters.";
        passwordError3.classList.remove("correct");
        passwordError3.classList.add("error");
      } else {
        passwordError3.textContent = "";
      }
    }

    if (
      !password.validity.tooShort &&
      !password.validity.patternMismatch &&
      !password.validity.tooLong
    ) {
      passwordError1.textContent = "Your password is valid";
      passwordError1.classList.remove("error");
      passwordError1.classList.add("correct");
    }
  }
}

// function validatePassword() {
//   const passwordValue = password.value;
//   passwordError1.textContent = "";
//   passwordError2.textContent = "";
//   passwordError3.textContent = "";
//   passwordError4.textContent = "";
//   // errors = [];
//   if (passwordValue.length < 8) {
//     passwordError1.textContent = "Your password must be at least 8 characters.";
//   }
//   if (passwordValue.search(/[a-z]/i) < 0) {
//     passwordError2.textContent =
//       "Your password must contain at least one letter.";
//   }
//   if (passwordValue.search(/[0-9]/) < 0) {
//     passwordError3.textContent =
//       "Your password must contain at least one digit.";
//   }
//   if (passwordValue.length >= 20) {
//     passwordError4.textContent =
//       "Your password cannot be more than 20 characters.";
//   }

//   //   if (passwordValue.length > 0) {
//   //     // alert(errors.join("\n"));
//   //     return false;
//   //   }
//   return true;
// }

function validateConfirmPassword() {
  const confirmPassword = document.getElementById("confirm-password");
  const password = document.getElementById("password");
  const confirmPasswordValue = confirmPassword.value;

  console.log(confirmPasswordValue);

  //   confirmPasswordError.textcontent = "";

  if (!password.value) {
    confirmPasswordError.textContent = "Please enter a password first";
  } else if (!confirmPassword.value) {
    confirmPasswordError.textContent = "Please enter a matching password";
  } else if (confirmPasswordValue === password.value) {
    confirmPasswordError.textContent = "Passwords match";
    confirmPasswordError.classList.remove("error");
    confirmPasswordError.classList.add("correct");
  } else {
    confirmPasswordError.textContent = "Passwords do not match";
    confirmPasswordError.classList.remove("correct");
    confirmPasswordError.classList.add("error");
  }
}
