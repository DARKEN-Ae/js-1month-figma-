let cartContent = document.querySelector(".cart-content");

function getCartCard({ id, images, name, description: desc, price, quantity }) {
  return `
   <div class="card-body-footer-father">
      <div class="cart-body">
        <img src="${images[0]}" alt="${name}" />
      </div>
      <div class="cart-footer">
        <h3>${name}</h3>
        <p>${desc}</p>
        <p>Price: ${price}$</p>
        <div class="add_remove_btn">
          <button class="minus" onclick="decreaseQuantity(${id})">-</button>
          <span>${quantity}</span>
          <button class="plus" onclick="increaseQuantity(${id})">+</button>
        </div>
      </div>
  </div>
`;
}

function getCartProducts() {
  cartContent.innerHTML = "";
  cart.forEach((pro) => {
    cartContent.innerHTML += getCartCard(pro);
  });
}
getCartProducts();

function increaseQuantity(id) {
  cart = cart.map((pro) => {
    if (pro.id === id) {
      pro.quantity++;
    }
    return pro;
  });
  localStorage.setItem("cart", JSON.stringify(cart));
  getCartProducts();
}

function decreaseQuantity(id) {
  let product = cart.find((pro) => pro.id === id);

  if (product.quantity === 1) {
    let isDelete = confirm("Delete product?");
    if (isDelete) {
      cart = cart.filter((pro) => pro.id !== id);
    }
  } else {
    cart = cart.map((pro) => {
      if (pro.id === id) {
        pro.quantity--;
      }
      return pro;
    });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  getCartProducts();
  getCartTotal();
}
