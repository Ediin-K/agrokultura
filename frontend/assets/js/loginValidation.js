const form = document.querySelector(".login-form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const email = emailInput.value.trim();
	const password = passwordInput.value.trim();

	emailInput.style.border = "";
	passwordInput.style.border = "";

	let valid = true;

	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailPattern.test(email)) {
		console.log("Email jo valid");
		emailInput.style.border = "2px solid red";
		valid = false;
	}

	if (password.length < 8) {
		console.log("Passwordi duhet te jete me i madh se 8");
		passwordInput.style.border = "2px solid red";
		valid = false;
	}

	if (valid) {
		form.submit();
	}
});
