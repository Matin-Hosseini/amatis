$(document).ready(function () {
  $("body").persiaNumber();
});

const registerForm = document.querySelector("#register-form");
const userNameInput = document.querySelector("#user-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const passwordVerificationInput = document.querySelector(
  "#password-verification-input"
);

const userNameInputValue = userNameInput.value.trim();
const emailInputValue = emailInput.value.trim();
const passwordInputValue = passwordInput.value.trim();
const passwordVerificationInputValue = passwordVerificationInput.value.trim();

const setError = (element, message) => {
  const messegeElement = element.parentElement.nextElementSibling;
  messegeElement.previousElementSibling.classList.add("border-danger");
  messegeElement.innerText = message;
  messegeElement.classList.add("error");
  $("body").persiaNumber();
};

const setSuccess = (element) => {
  const messegeElement = element.parentElement.nextElementSibling;
  messegeElement.classList.remove("error");
  messegeElement.innerText = "";
  messegeElement.previousElementSibling.classList.remove("border-danger");
  messegeElement.previousElementSibling.classList.add("border-success");
  $("body").persiaNumber();
};

const isEmailValid = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validateUserName = () => {
  const userNameInputValue = userNameInput.value.trim();

  if (!userNameInputValue) {
    setError(userNameInput, "لطفا نام کاربری خود را وارد کنید");
    return false;
  } else if (userNameInputValue.length < 5) {
    setError(userNameInput, "نام کاربری باید حداقل 5 حرف باشد.");
    return false;
  } else {
    setSuccess(userNameInput);
    return true;
  }
};

const validateEmail = () => {
  const emailInputValue = emailInput.value.trim();

  if (!emailInputValue) {
    setError(emailInput, "لطفا ایمیل خود را وارد کنید");
    return false;
  } else if (!isEmailValid(emailInputValue)) {
    setError(emailInput, "ایمیل نامعتبر می باشد");
    return false;
  } else {
    setSuccess(emailInput);
    return true;
  }
};

const validatePassword = () => {
  const passwordInputValue = passwordInput.value.trim();

  if (!passwordInputValue) {
    setError(passwordInput, "لطفا رمز عبور خود را وارد کنید.");
    return false;
  } else if (passwordInputValue.length < 8) {
    setError(passwordInput, "رمز عبور حداقل باید 8 کاراکتر باشد.");
    return false;
  } else {
    setSuccess(passwordInput);
    return true;
  }
};

const validatePasswordValidation = () => {
  const passwordInputValue = passwordInput.value.trim();
  const passwordVerificationInputValue = passwordVerificationInput.value.trim();

  if (passwordInputValue && passwordVerificationInputValue === "") {
    setError(passwordVerificationInput, "لطفا پسورد خود را مجددا وارد نمایید.");
    return false;
  } else if (!passwordInputValue && !passwordVerificationInputValue) {
    setError(
      passwordVerificationInput,
      "ابتدا یک رمز عبور انتخاب کرده و سپس آن را تکرار کنید."
    );
    return false;
  } else if (passwordVerificationInputValue !== passwordInputValue) {
    setError(passwordVerificationInput, "رمز عبود مطابقت ندارد");
    return false;
  } else {
    setSuccess(passwordVerificationInput);
    return true;
  }
};

const validateAllInputs = () => {
  validateUserName();
  validateEmail();
  validatePassword();
  validatePasswordValidation();

  return (
    validateUserName() &&
    validateEmail() &&
    validatePassword &&
    validatePasswordValidation &&
    true
  );
};

userNameInput.addEventListener("blur", validateUserName);
emailInput.addEventListener("blur", validateEmail);
passwordInput.addEventListener("blur", validatePassword);
passwordVerificationInput.addEventListener("blur", validatePasswordValidation);

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  validateAllInputs();
  validateAllInputs() && (location.pathname = "dist/user-panel.html");
 
  
});
