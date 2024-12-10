// card products
let discountRow = document.querySelector(".discount-row");
let newProductsRow = document.querySelector(".newProducts-row");
let boughtProductsRow = document.querySelector(".boughtProducts-row");

function getProducts(product) {
  let productCard = document.createElement("div");
  productCard.className = "product-card";

  let productCardBody = document.createElement("div");
  productCardBody.className = "product-card__body";

  let productImage = document.createElement("img");
  productImage.src = product.images[0];
  productImage.alt = product.name;
  productCardBody.appendChild(productImage);

  let productLike = document.createElement("img");
  productLike.src = "../assets/icon/header/like.png";
  productLike.alt = "like";
  productLike.className = "product-like";
  productLike.addEventListener("click", function () {
    productLike.style.backgroundColor = "red";
  });

  let productCardFooter = document.createElement("div");
  productCardFooter.className = "product-card__footer";

  let productDiscountRow = document.createElement("div");
  productDiscountRow.className = "product-card__discount-row";
  productDiscountRow.innerHTML = `-${product.discount}%`;

  let productTitle = document.createElement("p");
  productTitle.innerHTML = `${product.description}`;

  let productPrice = document.createElement("h3");
  productPrice.innerHTML = `${product.price} ₽`;

  let productDiscount = document.createElement("span");
  productDiscount.className = "product-discount";
  productDiscount.innerHTML = `С картой`;

  let productBtn = document.createElement("button");
  productBtn.className = "buy_btn";
  productBtn.innerHTML = `В корзину`;

  productCardFooter.prepend(productBtn);
  productCardFooter.prepend(productTitle);
  productCardFooter.prepend(productDiscount);
  productCardFooter.prepend(productPrice);
  productCardFooter.prepend(productDiscountRow);
  productCardFooter.prepend(productLike);

  productCard.append(productCardBody, productCardFooter);

  return productCard;
}

let discountProducts = products.filter((pro) => pro.discount).slice(-4);
discountProducts.map((discount) => {
  let card = getProducts(discount);
  discountRow.appendChild(card);
});

let newProducts = products.slice(-4);
newProducts.map((newPro) => {
  let card = getProducts(newPro);
  newProductsRow.appendChild(card);
});

let boughtProducts = products.toSorted((a, b) => a.rating - b.rating).slice(-4);

boughtProducts.map((bought) => {
  let card = getProducts(bought);
  boughtProductsRow.appendChild(card);
});
// done

// map
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".buttons button");
  const maps = document.querySelectorAll(".map");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("active"));

      button.classList.add("active");

      maps.forEach((map) => map.classList.remove("active"));

      const mapId = button.getAttribute("data-map");
      document.getElementById(mapId).classList.add("active");
    });
  });
});
