let allProductsRow = document.querySelector(".allProducts-row");
let SearchInput = document.querySelector(".SearchInput");
let searchCount = document.querySelector(".searchCount");

function getProductsCard({
  name,
  id,
  description: desc,
  price,
  images,
  discount,
}) {
  return `
   <div class="product-card">
    <div class="product-card__body">
      <img src=${images[0]} alt=${name} />
      <p>${name}</p>
    </div>
    <div class="product-card__footer">
      <h3>${price} ₽</h3>
      <span class="product-discount">С картой</span>
      <p>${desc}</p>
      <button onclick="addToCart(${id})" class="buy_btn">В корзину</button>
    </div>
  </div>
 `;
}

function getProduct(data = products) {
  allProductsRow.innerHTML = "";
  if (data.length !== 0) {
    data.forEach((product) => {
      allProductsRow.innerHTML += getProductsCard(product);
    });
  } else {
    allProductsRow.innerHTML = `<div class="notResultDiv">
    <img src="../assets/images/notResult/notRes.gif" alt="giif" />
    <p class="notPr"> Ничего не найдено</p></div>`;
    searchCount.textContent = 0;
    return;
  }
  searchCount.textContent = data.length;
}
getProduct();

SearchInput.addEventListener("keyup", function () {
  let search = this.value.trim().toLowerCase();
  let searchProduct = products.filter(
    (pro) =>
      pro.name.toLowerCase().includes(search) ||
      pro.description.toLowerCase().includes(search)
  );
  getProduct(searchProduct);
});

function addToCart(id) {
  let product = products.find((pro) => pro.id === id);
  let check = cart.find((pro) => pro.id === id);
  if (check) {
    cart = cart.map((pro) => {
      if (pro.id === id) {
        pro.quantity++;
      }
      return pro;
    });
  } else {
    product.quantity = 1;
    cart.push(product);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  getCartTotal(product);
}
