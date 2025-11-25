const summaries = document.querySelectorAll(".faq-summary");

summaries.forEach((summary) =>
	summary.addEventListener("click", () => {
		const wrapper = summary.parentElement;
		const content = summary.nextElementSibling;

		if (wrapper.classList.contains("open")) {
			content.style.maxHeight = null;
			wrapper.classList.remove("open");
		} else {
			document
				.querySelectorAll(".faq-item-wrapper.open")
				.forEach((openItem) => {
					openItem.classList.remove("open");
					openItem.querySelector(".faq-content").style.maxHeight =
						null;
				});

			wrapper.classList.add("open");
			content.style.maxHeight = content.scrollHeight + "px";
		}
	})
);
