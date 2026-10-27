// Samira's Flower Shop: a simple interactive flower basket
const addButtons = document.querySelectorAll(".add-button");
const basketList = document.querySelector("#basket-list");
const basketMessage = document.querySelector("#basket-message");
const basketTotal = document.querySelector("#basket-total");
const clearBasketButton = document.querySelector("#clear-basket");

let total = 0;
let itemCount = 0;

// Add a flower to the basket when its Add button is clicked
addButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const flowerName = button.dataset.flower;
    const flowerPrice = Number(button.dataset.price);

    const item = document.createElement("li");
    item.textContent = flowerName + " - $" + flowerPrice;
    basketList.appendChild(item);

    total = total + flowerPrice;
    itemCount = itemCount + 1;

    updateBasket();
  });
});

// Update the total and basket message
function updateBasket() {
  basketTotal.textContent = "$" + total;

  if (itemCount === 0) {
    basketMessage.textContent = "Your basket is empty. Add a bouquet you like!";
  } else {
    basketMessage.textContent = "You have " + itemCount + " flower item(s) in your basket.";
  }
}

// Empty the basket
clearBasketButton.addEventListener("click", function () {
  basketList.innerHTML = "";
  total = 0;
  itemCount = 0;
  updateBasket();
});
