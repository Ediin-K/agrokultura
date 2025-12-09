const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("mobileMenu");
const dropdown = document.querySelector(".dropdown-h");
const produktetLink = document.getElementById("produktet-h");

// Toggle menun
hamburger.addEventListener("click", () => {
	menu.classList.toggle("active");
});

// Toggle dropdownin
produktetLink.addEventListener("click", (e) => {
	e.preventDefault();
	dropdown.classList.toggle("active");
});
