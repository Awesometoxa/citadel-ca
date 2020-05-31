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
