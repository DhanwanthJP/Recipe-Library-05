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