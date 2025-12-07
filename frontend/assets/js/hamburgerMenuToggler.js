const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("mobileMenu");
const dropdown = document.querySelector(".dropdown-h");
const produktetLink = document.getElementById("produktet-h");

// Toggle mobile menu
hamburger.addEventListener("click", () => {
	menu.classList.toggle("active");
});

// Toggle dropdown inside mobile menu
produktetLink.addEventListener("click", (e) => {
	e.preventDefault();
	dropdown.classList.toggle("active");
});
