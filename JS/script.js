// Set current Year for Copyright
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Make Mobile Navigation Work
const headerEl = document.querySelector(".header");
const buttonMobileNavEl = document.querySelector(".btn-mobile-nav");

buttonMobileNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
