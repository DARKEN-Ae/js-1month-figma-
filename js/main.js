// header menu toggle
let headerButton = document.querySelector(".menu_btn");
let toggleButton = document.querySelector(".next_menu_btn");
let menuToggle = document.querySelector(".menu_toggle");
let cartCount = document.querySelector(".cardCount");

headerButton.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
});

toggleButton.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
});
// done

let cartJson = localStorage.getItem("cart");
let cart = JSON.parse(cartJson) || [];

function getCartTotal() {
  cartCount.textContent = cart.length;
}
getCartTotal();
