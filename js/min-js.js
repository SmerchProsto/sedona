const searchForm=document.querySelector(".search-form"),overlay=document.querySelector(".overlay"),locationInformationButton=document.querySelector(".location-information-button"),html=document.getElementById("html"),closeFormButton=document.querySelector(".close-form-button");locationInformationButton.addEventListener("click",function(){event.preventDefault(),html.classList.toggle("overlay-off"),closeFormButton.classList.toggle("close-button-off"),searchForm.classList.toggle("search-form-off")}),closeFormButton.addEventListener("click",function(){event.preventDefault(),html.classList.toggle("overlay-off"),closeFormButton.classList.toggle("close-button-off"),searchForm.classList.toggle("search-form-off")});