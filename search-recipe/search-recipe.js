// Get checkboxes AND radio buttons both
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const radioButtons = document.querySelectorAll('input[type="radio"]');
const cards = document.querySelectorAll('.card');

// Listen to checkboxes
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', filterCards);
});

// Listen to radio buttons too
radioButtons.forEach(function(radio) {
  radio.addEventListener('change', filterCards);
});

function filterCards() {

  // Collect checked checkbox values
  const checkedValues = [];

  checkboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
      checkedValues.push(checkbox.value);
    }
  });

  // Collect selected radio value
  radioButtons.forEach(function(radio) {
    if (radio.checked) {
      checkedValues.push(radio.value);
    }
  });

  // Loop through each card
  cards.forEach(function(card) {
    const cardCategory = card.dataset.category;

    // If nothing selected, show all
    if (checkedValues.length === 0) {
      card.style.display = 'block';
      return;
    }

    // Check if card matches
    const isMatch = checkedValues.some(function(value) {
      return cardCategory.includes(value);
    });

    if (isMatch) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}



const recipe1 = document.getElementById("recipe-1");
const recipe2 = document.getElementById("recipe-2");
const recipe3 = document.getElementById("recipe-3");
const recipe4 = document.getElementById("recipe-4");
const recipe5 = document.getElementById("recipe-5");
const recipe6 = document.getElementById("recipe-6");
const recipe7 = document.getElementById("recipe-7");
const recipe8 = document.getElementById("recipe-8");
const recipe9 = document.getElementById("recipe-9");
const recipe10 = document.getElementById("recipe-10");
const recipe15 = document.getElementById("recipe-15");
const recipe16 = document.getElementById("recipe-16");

recipe1.addEventListener("click", function(){
window.location.href = "../recipe-details/chickenPizza/SpicyBurgerChicken.html";
})
recipe2.addEventListener("click", function(){
window.location.href = "../recipe-details/chickenPizza/grilledGravy.html";
})
recipe3.addEventListener("click", function(){
window.location.href = "../recipe-details/chickenPizza/indianGrilledChicken.html";
})
recipe4.addEventListener("click", function(){
window.location.href = "../recipe-details/chickenPizza/chickenPizza.html";
})

recipe5.addEventListener("click", function(){
window.location.href = "../recipe-details/chickenPizza/pannerNoodles.html";
})
recipe6.addEventListener("click", function(){
window.location.href = "../recipe-details/chickenPizza/chickenPizza.html";
})
recipe7.addEventListener("click", function(){
window.location.href = "../recipe-details/chickenPizza/chineseVegGravy.html";
})
recipe8.addEventListener("click", function(){
window.location.href = "../recipe-details/chickenPizza/chickenPizza.html";
})
recipe9.addEventListener("click", function(){
window.location.href = "../recipe-details/chickenPizza/potatoFry.html";
})
recipe10.addEventListener("click", function(){
window.location.href = "../recipe-details/chickenPizza/sproutedSalad.html";
})
recipe15.addEventListener("click", function(){
window.location.href = "../recipe-details/chickenPizza/pasta.html";
})
recipe16.addEventListener("click", function(){
window.location.href = "../recipe-details/chickenPizza/stuffedOmelette.html";
})





