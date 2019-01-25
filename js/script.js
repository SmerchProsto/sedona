const searchForm = document.querySelector(".search-form");
const overlay = document.querySelector(".overlay");
const locationInformationButton = document.querySelector(".location-information-button");
const html = document.getElementById("html");
const closeFormButton = document.querySelector(".close-form-button");
const amountAdults = document.getElementById("amount-adults");
const amountKids = document.getElementById("amount-kids");
const plusNumberAdults = document.getElementById("plus-number-adults");
const minusNumberAdults = document.getElementById("minus-number-adults");
const plusNumberKids = document.getElementById("plus-number-kids");
const minusNumberKids = document.getElementById("minus-number-kids");


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

minusNumberAdults.addEventListener("click", function () {
	if (amountAdults.value > 0) {
		amountAdults.value -=1;
	}
});

minusNumberKids.addEventListener("click", function () {
	if (amountKids.value > 0) {
		amountKids.value -=1;
	}
});

plusNumberAdults.addEventListener("click", function () {
	amountAdults.value = amountAdults.value -1 + 2;
})

plusNumberKids.addEventListener("click", function () {
	amountKids.value = amountKids.value -1 + 2;
});