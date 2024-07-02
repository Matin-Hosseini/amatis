import {
  separateThreeDigits,
  recommandedProducts,
  bestSellersProducts,
} from "./dataBase.js";

// $(document).ready(function () {
//   $("body").persiaNumber();
// });

const recommandedProductsContainer = document.querySelector(
  "#recommanded-products"
);
const bestSellersContainer = document.querySelector("#best-sellers-contanier");

const createProductStarsElement = (productStarsAmount) => {
  const fullStarsAmount = Math.floor(productStarsAmount);
  const halfStarsAmount = productStarsAmount - Math.floor(productStarsAmount);
  const emptyStarsAmount = Math.floor(5 - productStarsAmount);

  let fullStarsContainer = document.createElement("div");
  let halfStarsContainer = document.createElement("div");
  let emptyStarsContainer = document.createElement("div");

  for (let i = 0; i < fullStarsAmount; i++) {
    fullStarsContainer.insertAdjacentHTML(
      "beforeend",
      `<i class="bi bi-star-fill"></i>`
    );
  }
  for (let i = 0; i < Math.ceil(halfStarsAmount); i++) {
    halfStarsContainer.insertAdjacentHTML(
      "beforeend",
      `<i class="bi bi-star-half"></i>`
    );
  }
  for (let i = 0; i < emptyStarsAmount; i++) {
    emptyStarsContainer.insertAdjacentHTML(
      "beforeend",
      `<i class="bi bi-star"></i>`
    );
  }

  let productStars =
    fullStarsContainer.innerHTML +
    halfStarsContainer.innerHTML +
    emptyStarsContainer.innerHTML;

  return productStars;
};

recommandedProductsContainer.innerHTML = "";
recommandedProducts.forEach((product) => {
  let discountPercentage = Math.floor(
    100 - (product.priceAfterDiscount * 100) / product.price
  );

  recommandedProductsContainer.insertAdjacentHTML(
    "beforeend",
    `
      <div class="item">
        <div class="product">
          <div class="product__rate d-flex">
            ${createProductStarsElement(product.stars)}
          </div>
          <div class="product__image my-5">
            <a href="#"><img src="${product.img}" alt="${product.name}"></a>
          </div>
          <div class="product__info">
            <a href="#"><h2 class="product__name">${product.name}</h2></a>
            <div class="product__info d-flex justify-content-between align-items-center">
              <span class="product__dicount-percentage">${discountPercentage}%</span>
              <div class="product__price d-flex flex-column gap-2 align-items-center">
                <span class="product__discount-price">${separateThreeDigits(
                  product.priceAfterDiscount
                )} تومان</span>
                <span class="product__old-price">${separateThreeDigits(
                  product.price
                )} تومان</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  );
});

async function showRecommandedProducts() {
  $("#recommanded-products").load("products.json", function () {
    $("#recommanded-products").trigger("destroy.owl.carousel");
    $("#recommanded-products").owlCarousel({
      rtl: true,
      loop: false,
      margin: 0,
      nav: true,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        800: { items: 3 },
        1200: { items: 4 },
        1600: { items: 5 },
      },
      navText: [
        "<i class='bi bi-chevron-right'></i>",
        "<i class='bi bi-chevron-left'></i>",
      ],
    });
  });
  let recommandedProducts = null;
  await fetch(" http://localhost:3000/recommanded-products")
    .then((res) => res.json())
    .then((data) => (recommandedProducts = data));

  recommandedProductsContainer.innerHTML = "";
  recommandedProducts.forEach((product) => {
    let discountPercentage = Math.floor(
      100 - (product.priceAfterDiscount * 100) / product.price
    );

    recommandedProductsContainer.insertAdjacentHTML(
      "beforeend",
      `
          <div class="item">
            <div class="product">
              <div class="product__rate d-flex">
                ${createProductStarsElement(product.stars)}
              </div>
              <div class="product__image my-5">
                <a href="#"><img src="${product.img}" alt="${product.name}"></a>
              </div>
              <div class="product__info">
                <a href="#"><h2 class="product__name">${product.name}</h2></a>
                <div class="product__info d-flex justify-content-between align-items-center">
                  <span class="product__dicount-percentage">${discountPercentage}%</span>
                  <div class="product__price d-flex flex-column gap-2 align-items-center">
                    <span class="product__discount-price">${separateThreeDigits(
                      product.priceAfterDiscount
                    )} تومان</span>
                    <span class="product__old-price">${separateThreeDigits(
                      product.price
                    )} تومان</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `
    );
    $(".products-carousel").persiaNumber();
  });
}
// showRecommandedProducts();

bestSellersContainer.innerHTML = "";
bestSellersProducts.forEach((product) => {
  const productRemainingELem =
    product.remaining < 4
      ? `<span class="h6 text-danger">تنها ${product.remaining} عدد در انبار باقی مانده است.</span>`
      : `<span class="h6 text-primary">موحود در انبار آماتیس</span>`;

  const productPriceAfterDiscount =
    product.price - (product.price * product.discountPercentage) / 100;

  const productPriceAfterDiscountElem =
    productPriceAfterDiscount !== product.price
      ? `<span class="text-danger h6 text-decoration-line-through">${separateThreeDigits(
          productPriceAfterDiscount
        )} تومان</span> `
      : `<span class="d-none"></span>`;

  bestSellersContainer.insertAdjacentHTML(
    "beforeend",
    `
  <div class="item">
  <div class="product bg-white position-relative">
    <p class="product__special-selling ${
      product.specialSelling ? null : "d-none"
    }">فروش ویژه</p>
    <div class="product__rate ">
     ${createProductStarsElement(product.stars)}
    </div>
    <div class="product__image my-3">
      <a href="#"><img src="${product.image}" alt="${product.name}"></a>
    </div>
    <div class="product__info">
      <a href="#"><h2 class="product__name">${product.name}</h2></a>
      <div class="product__info d-flex justify-content-between align-items-center">
        <div class="d-flex flex-column justify-content-center">
          <span class="d-flex align-items-center gap-2 mb-1">
            <i class="bi bi-airplane text-success h4"></i>
            <p class=" h5">تحویل فوری</p>
          </span>
          ${productRemainingELem}          
        </div>
        <div class="product__price d-flex flex-column justify-content-center gap-2 align-items-center">
          <span class="product-price h5 m-0">${separateThreeDigits(
            product.price
          )} <span class="text-success h6">تومان</span>
          </span>
          ${productPriceAfterDiscountElem}
        </div>
      </div>
    </div>
  </div>
</div>
  `
  );
});

let user = {
  name: "Matin",
  family: "hosseini",
  age: 20,
};

// fetch("https://amatis-dfc65-default-rtdb.firebaseio.com/users.json", {
//   method: "POST",
//   headers: {
//     "Content-type": "application/json",
//   },
//   body: JSON.stringify(user),
// })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// fetch("https://amatis-dfc65-default-rtdb.firebaseio.com/", {
//   method: "GET",
//   mode: "no-cors",
// })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
