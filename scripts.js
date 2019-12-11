// define variables
const priceToggle = document.getElementById("price-toggle");
const basicPrice = document.getElementById("basic-price");
const professionalPrice = document.getElementById("professional-price");
const masterPrice = document.getElementById("master-price");

// Monthly values
monthly = () => {
  basicPrice.innerHTML = "19.99";
  professionalPrice.innerHTML = "24.99";
  masterPrice.innerHTML = "39.99";
}

// Annually values
annually = () => {
  basicPrice.innerHTML = "199.99";
  professionalPrice.innerHTML = "249.99";
  masterPrice.innerHTML = "399.99";
}

// Listen to change on price toggle
priceToggle.addEventListener('change', event => {
  // Call function relating to new change
  if (event.target.checked) {
    //True = monthly
    monthly();
  } else {
    //False = annually
    annually();
  }
}, false)

// Checks if price toggle is already set to Annually if so then change to annually prices
window.onload = () => {
  if (!priceToggle.checked) {
    annually();
  }
}
