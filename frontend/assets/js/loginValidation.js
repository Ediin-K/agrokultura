const form = document.querySelector(".login-form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const emailErrorMsg = document.querySelector("#emailErrorMsg");
const passwordErrorMsg = document.querySelector("#passwordErrorMsg");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

let liveValidate = false;

const validateEmail = () => {
	const email = emailInput.value.trim();
	if (!emailPattern.test(email)) {
		emailInput.style.border = "2px solid red";
		emailErrorMsg.textContent = "Ju lutem shkruani nje email valid";
		return false;
	}
	emailInput.style.border = "";
	emailErrorMsg.textContent = "";
	return true;
};

const validatePassword = () => {
	const password = passwordInput.value.trim();
	if (!passwordPattern.test(password)) {
		passwordInput.style.border = "2px solid red";
		passwordErrorMsg.textContent =
			"Fjalekalimi duhet te jete te pakten 8 karaktere i gjate, te kete 1 shkronje dhe 1 numer";
		return false;
	}
	passwordInput.style.border = "";
	passwordErrorMsg.textContent = "";
	return true;
};

emailInput.addEventListener("input", () => {
	if (liveValidate) validateEmail();
});
passwordInput.addEventListener("input", () => {
	if (liveValidate) validatePassword();
});

form.addEventListener("submit", (e) => {
	e.preventDefault();

	liveValidate = true;

	const isEmailValid = validateEmail();
	const isPasswordValid = validatePassword();

	if (isEmailValid && isPasswordValid) {
		form.submit();
	}
});
