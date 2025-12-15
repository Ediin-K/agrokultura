const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("mobileMenu");
const dropdown = document.querySelector(".dropdown-h");
const produktetLink = document.getElementById("produktet-h");

// Toggle menun
hamburger.addEventListener("click", () => {
	menu.classList.toggle("active");
});

// Toggle dropdownin kryesor (Produktet)
produktetLink.addEventListener("click", (e) => {
	e.preventDefault();
	dropdown.classList.toggle("active");
});

// Toggle nested subcategories (Fara & Bime, Ushqim & Mbrojtje, etj.)
const subCategories = document.querySelectorAll(".dropdown-menu-h > li > a");

subCategories.forEach((category) => {
	category.addEventListener("click", (e) => {
		e.preventDefault();
		const parentLi = category.parentElement;
		const submenu = category.nextElementSibling;

		if (submenu && submenu.tagName === "UL") {
			// Toggle active class në parent li
			parentLi.classList.toggle("active");
		}
	});
});
