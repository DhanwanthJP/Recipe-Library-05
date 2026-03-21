// Adding ingredient
let ingCount = 0;

function addIngredient(name = "", qty = "") {
  ingCount++;
  const list = document.getElementById("ingredients-list");
  const row = document.createElement("div");
  row.className = "ingredient-row";
  row.innerHTML = `
    <input type="text" placeholder="Ingredient name" value="${name}" class="ing-name" />
    <input type="text" placeholder="e.g. 2 cups, 1 tsp" value="${qty}" class="ing-qty" />
    <button type="button" class="btn-remove" title="Remove">✕</button>
  `;
  row.querySelector(".btn-remove").addEventListener("click", () => {
    setTimeout(() => row.remove(), 200);
  });
  list.appendChild(row);
}

document
  .getElementById("add-ingredient")
  .addEventListener("click", () => addIngredient());

// Adding empty ingredient rows on start-up
addIngredient();
addIngredient();

// Step Rows
let stepCount = 0;

function addStep(text = "") {
  stepCount++;
  const list = document.getElementById("steps-list");
  const row = document.createElement("div");
  row.className = "step-row";
  row.innerHTML = `
    <div class="step-number">${stepCount}</div>
    <textarea placeholder="Describe step ${stepCount}…" class="step-text">${text}</textarea>
    <button type="button" class="btn-remove" style="margin-top:9px;" title="Remove">✕</button>
  `;
  row.querySelector(".btn-remove").addEventListener("click", () => {
    setTimeout(() => {
      row.remove();
      renumberSteps();
    }, 200);
  });
  list.appendChild(row);
}

function renumberSteps() {
  document
    .querySelectorAll(".step-number")
    .forEach((element, i) => (element.textContent = i + 1));
  stepCount = document.querySelectorAll(".step-row").length;
}

document.getElementById("add-step").addEventListener("click", () => addStep());

/* Adding 2 steps on loading */
addStep();
addStep();

// Selecting category
document.querySelectorAll('input[name="category"]').forEach((radio) => {
  radio.addEventListener("change", function () {
    document.getElementById("opt-veg").classList.remove("selected-veg");
    document.getElementById("opt-nonveg").classList.remove("selected-nonveg");
    if (this.value === "veg") {
      document.getElementById("opt-veg").classList.add("selected-veg");
    } else {
      document.getElementById("opt-nonveg").classList.add("selected-nonveg");
    }
    document.getElementById("cat-error").style.display = "none";
  });
});

// Image url toggle
document.getElementById("url-toggle").addEventListener("click", () => {
  const field = document.getElementById("image-url-field");
  if (field.style.display === "block") {
    field.style.display = "none";
  } else {
    field.style.display = "block";
  }
});

// description char counter
const recipe_desc = document.getElementById("recipe-desc");
const desc_count = document.getElementById("desc-count");
recipe_desc.addEventListener("input", () => {
  desc_count.textContent = recipe_desc.value.length;
});

// Form Validation
function validate() {
  let ok = true;

  /* Checks text/number/select field */
  function checkField(fieldId, inputId) {
    const field = document.getElementById(fieldId);
    const element = document.getElementById(inputId);
    if (!element || !element.value.trim()) {
      field.classList.add("has-error");
      ok = false;
    } else {
      field.classList.remove("has-error");
    }
  }

  checkField("field-name", "recipe-name");
  checkField("field-desc", "recipe-desc");
  checkField("field-cook-time", "cook-time");
  checkField("field-servings", "servings");

  /* Category radio */
  if (!document.querySelector('input[name="category"]:checked')) {
    document.getElementById("cat-error").style.display = "block";
    ok = false;
  }

  // Checks atleast one ingredient filled
  const hasIng = [...document.querySelectorAll(".ing-name")].some((i) =>
    i.value.trim(),
  );
  document.getElementById("ing-error").style.display = hasIng
    ? "none"
    : "block";
  if (!hasIng) {
    ok = false;
  }

  // Check atleast one step is filled
  const hasStep = [...document.querySelectorAll(".step-text")].some((t) =>
    t.value.trim(),
  );
  document.getElementById("step-error").style.display = hasStep
    ? "none"
    : "block";
  if (!hasStep) {
    ok = false;
  }

  return ok;
}

// Form Subject
document.getElementById("recipe-form").addEventListener("submit", function (e) {
  e.preventDefault();

  if (!validate()) {
    /* Scroll to first error */
    const firstError = document.querySelector(
      '.has-error, [id$="-error"]:not([style*="display: none"])',
    );
    firstError?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  const btn = document.getElementById("submit-btn");
  const spinner = document.getElementById("spinner");
  const text = document.getElementById("submit-text");

  btn.disabled = true;
  spinner.style.display = "block";
  text.textContent = "Publishing…";

  /* Simulate async publish */
  setTimeout(() => {
    spinner.style.display = "none";
    text.textContent = "✅ Published!";
    btn.style.background = "var(--green)";
    showToast("Recipe published! 🎉 It's now live in the library.");

    /* Reset button after delay */
    setTimeout(() => {
      btn.disabled = false;
      btn.style.background = "";
      text.textContent = "Publish Recipe";
    }, 3500);
  }, 2000);
});

// Save as draft
document.getElementById("save-draft").addEventListener("click", () => {
  showToast("Draft saved! You can continue editing anytime.", 3000);
});

function showToast(msg, duration = 4000) {
  const toast = document.getElementById("toast");
  document.getElementById("toast-msg").textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), duration);
}
