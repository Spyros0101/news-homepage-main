const hamburger = document.querySelector(".hamburger")
const primaryNav = document.querySelector(".primary-nav")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  primaryNav.classList.toggle("active");
} )