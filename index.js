const hamburger = document.getElementById("hamburger");
const closeBtn = document.getElementById("hamburger-close");
const mobileMenu = document.getElementById("mobile-menu");

hamburger.addEventListener("click", function () {
  this.classList.add("hidden");
  closeBtn.classList.remove("hidden");

  mobileMenu.classList.remove("translated");
});

closeBtn.addEventListener("click", function () {
  this.classList.add("hidden");
  hamburger.classList.remove("hidden");

  mobileMenu.classList.add("translated");
});
