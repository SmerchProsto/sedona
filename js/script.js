const searchForm = document.querySelector(".search-form");
const overlay = document.querySelector(".overlay");
const locationInformationButton = document.querySelector(".location-information-button");
const html = document.getElementById("html");
const closeFormButton = document.querySelector(".close-form-button");

locationInformationButton.addEventListener("click", function () {
	event.preventDefault();
	html.classList.toggle("overlay-off");
	closeFormButton.classList.toggle("close-button-off");
	searchForm.classList.toggle("search-form-off");
});

closeFormButton.addEventListener("click", function () {
	event.preventDefault();
	html.classList.toggle("overlay-off");
	closeFormButton.classList.toggle("close-button-off");
	searchForm.classList.toggle("search-form-off");
});