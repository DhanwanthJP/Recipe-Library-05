const slider = document.getElementById("slider");

function getScrollAmount() {
  const card = document.querySelector(".recipe-card");
  const gap = 20; 
  return card.offsetWidth + gap;
}

function slideRight() {
  slider.scrollBy({
    left: getScrollAmount(),
    behavior: "smooth"
  });
}

function slideLeft() {
  slider.scrollBy({
    left: -getScrollAmount(),
    behavior: "smooth"
  });
}