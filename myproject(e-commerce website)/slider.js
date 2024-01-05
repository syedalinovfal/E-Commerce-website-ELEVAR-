const slider = document.querySelector(".slider");
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
function showSlide(index) {
  slider.style.transform = `translateX(-${index * 100}%)`;
}
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  console.log(currentIndex);
  showSlide(currentIndex);
}
function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}
/*setInterval(nextSlide,);*/
//* */ Auto-advance the slider every 5 seconds **// Add event listeners for navigation buttons (optional)
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);