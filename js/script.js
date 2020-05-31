window.addEventListener("DOMContentLoaded", () => {
	"use strict";

	//Modals

	const modal = document.querySelector(".overlay");
	const close = document.querySelector(".close");
	const modalBtn = document.querySelectorAll(".modal-btn");
	const cadrBtn = document.querySelectorAll(".card-btn");

	cadrBtn.forEach((item) => {
		item.addEventListener("click", () => {
			modal.style.display = "block";
			document.body.style.overflow = "hidden";
		});
	});

	modalBtn.forEach((item) => {
		item.addEventListener("click", () => {
			modal.style.display = "block";
			document.body.style.overflow = "hidden";
		});
	});

	close.addEventListener("click", (e) => {
		modal.style.display = "none";
		document.body.style.overflow = "";
	});

	// Tabs

	const tabContainer = document.querySelector(".tab-container");
	const tabs = document.querySelectorAll(".tab-item");
	const tabContent = document.querySelectorAll(".tab-content-item");

	function hideTabContent() {
		tabContent.forEach((item) => {
			if (item.classList.contains("show")) {
				item.classList.remove("show");
				item.classList.add("hide");
			}
		});

		tabs.forEach((item) => {
			if (item.classList.contains("active")) {
				item.classList.remove("active");
				item.classList.add("no-active");
			}
		});
	}

	function showTabContent(a) {
		tabContent[a].classList.remove("hide");
		tabContent[a].classList.add("show");

		tabs[a].classList.remove("no-active");
		tabs[a].classList.add("active");
	}

	hideTabContent();
	showTabContent(0);

	tabContainer.addEventListener("click", (e) => {
		if (e.target.classList.contains("tab-item")) {
			for (let i = 0; i < tabs.length; i++) {
				if (e.target == tabs[i]) {
					hideTabContent();
					showTabContent(i);
				}
			}
		}
	});

	//Slider

	const nextBtn = document.querySelector(".next");
	const prevBtn = document.querySelector(".prev");
	const sliderContent = document.querySelectorAll(".carousel_item");
	let sliderIndex = 1;

	function showSlides(n) {
		if (n > sliderContent.length) {
			sliderIndex = 1;
		}
		if (n < 1) {
			sliderIndex = sliderContent.length;
		}

		sliderContent.forEach((item) => (item.style.display = "none"));
		sliderContent[sliderIndex - 1].style.display = "block";
	}
	function plusSlide(n) {
		showSlides((sliderIndex += n));
	}

	showSlides(sliderIndex);
	nextBtn.addEventListener("click", () => {
		plusSlide(1);
	});
	prevBtn.addEventListener("click", () => {
		plusSlide(-1);
	});

	//Hamburger menu

	const menu = document.querySelector(".navigation");
	const menuItem = document.querySelectorAll(".navigation_item");
	const hamburger = document.querySelector(".hamburger");

	hamburger.addEventListener("click", () => {
		hamburger.classList.toggle("hamburger_active");
		menu.classList.toggle("navigation_active");
	});

	menuItem.forEach((item) => {
		item.addEventListener("click", () => {
			hamburger.classList.toggle("hamburger_active");
			menu.classList.toggle("navigation_active");
		});
	});
});
