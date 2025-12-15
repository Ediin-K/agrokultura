const select = document.querySelector("#order-products");
const selected = select.querySelector(".selected");
const selectedText = select.querySelector(".selected-text");
const options = select.querySelector(".options");
const input = select.querySelector("input");

selected.addEventListener("click", () => {
	options.style.display =
		options.style.display === "block" ? "none" : "block";
});

options.addEventListener("click", (e) => {
	if (e.target.tagName === "LI") {
		selectedText.textContent = e.target.textContent;
		input.value = e.target.dataset.value;
		options.style.display = "none";
	}
});

document.addEventListener("click", (e) => {
	if (!select.contains(e.target)) {
		options.style.display = "none";
	}
});
