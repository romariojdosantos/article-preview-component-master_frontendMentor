let shareBtn = document.querySelector(".share-icon");
let shareBox = document.querySelector(".socials-shares");

shareBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  shareBox.classList.toggle("open");
  shareBox.classList.toggle("fade-out");
});