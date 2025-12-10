const form = document.querySelector(".register-form");
const fullNameInput = document.querySelector("#fullname");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");
const phoneInput = document.querySelector("#phone");
const addressInput = document.querySelector("#address");
const cityInput = document.querySelector("#city");
const zipInput = document.querySelector("#zip");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const fullname = fullNameInput.value.trim();
	const email = emailInput.value.trim();
	const password = passwordInput.value.trim();
	const confirmPassword = confirmPasswordInput.value.trim();
	const phone = phoneInput.value.trim();
	const address = addressInput.value.trim();
	const city = cityInput.value.trim();
	const zip = zipInput.value.trim();

	const checkbox = document.getElementById("terms");

	emailInput.style.border = "";
	passwordInput.style.border = "";
	confirmPasswordInput.style.border = "";
	phoneInput.style.border = "";
	addressInput.style.border = "";
	cityInput.style.border = "";
	zipInput.style.border = "";

	let valid = true;

	if (fullname.length < 3) {
		console.log("Emri duhet te jete me i gjate se 3 karaktere");
		fullNameInput.style.border = "2px solid red";
		valid = false;
	}

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

	if (password == "" || password !== confirmPassword) {
		console.log("Passwordet nuk perputhen");
		confirmPasswordInput.style.border = "2px solid red";
		valid = false;
	}

	const phonePattern = /^\d{10}$/;
	if (!phonePattern.test(phone)) {
		console.log("Numri i telefonit jo valid");
		phoneInput.style.border = "2px solid red";
		valid = false;
	}

	if (address == "" || address.length < 5) {
		console.log("Adresa duhet te jete me e gjate se 5 karaktere");
		addressInput.style.border = "2px solid red";
		valid = false;
	}

	if (city == "" || city.length < 2) {
		console.log("Qyteti duhet te jete me i gjate se 2 karaktere");
		cityInput.style.border = "2px solid red";
		valid = false;
	}

	const zipPattern = /^\d{5}$/;
	if (!zipPattern.test(zip)) {
		console.log("Kodi postar jo valid");
		zipInput.style.border = "2px solid red";
		valid = false;
	}

	if (!checkbox.checked) {
		console.log("Duhet te pranoni termat dhe kushtet");
		valid = false;
	}

	if (valid) {
		form.submit();
	}
});
