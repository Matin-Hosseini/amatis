$("document").ready(function () {
  $("body").persiaNumber();
});

const options = document.querySelector("#options");
const shoppingBasketContainer = document.querySelector(
  "#shopping-basket-container"
);
const productsPriceElem = document.querySelector("#products-price");
const shoppingCartPriceElem = document.querySelector("#shopping-cart-price");
const usersProfitElem = document.querySelector("#users-profit");
const productsCountElem = document.querySelector("#products-count");
const nextShoppingsContainer = document.querySelector(
  "#next-shoppings-container"
);

const separateThreeDigits = (Number) => {
  Number += "";
  Number = Number.replace(",", "");
  let x = Number.split(".");
  let y = x[0];
  let z = x.length > 1 ? "." + x[1] : "";
  let rgx = /(\d+)(\d{3})/;
  while (rgx.test(y)) y = y.replace(rgx, "$1" + "," + "$2");
  return y + z;
};

options.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    options.querySelector("li.active").classList.remove("active");
    e.target.classList.add("active");
    const targetID = e.target.id;
    const targetElem = document.querySelector(`[data-id="${targetID}"]`);
    document
      .querySelector(".show-basket-content")
      .classList.remove("show-basket-content");
    targetElem.classList.add("show-basket-content");
  }
});

let shoppingCartProducts = [
  {
    id: 184196,
    image: "assets/images/products/watch.png",
    name: "ساعت هوشمند جی-تب مدل W101 Hero",
    price: 12_000_000,
    count: 1,
  },
  {
    id: 15616,
    image: "assets/images/products/iphone-13-ch.png",
    name: "گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت ",
    price: 40_000_000,
    count: 1,
  },
  {
    id: 2432765,
    image:
      "assets/images/products/مینی_فرز_وات_پلاس_مدل_DW801_مینی_فرز_وات_پلاس_مدل.png",
    name: "مینی فرز وات پلاس مدل DW801 مینی فرز وات پلاس مدل",
    price: 1_270_000,
    count: 1,
  },
  {
    id: 4,
    image:
      "assets/images/products/میکروفن_بی_سیم_تسکو_مدل_TMIC_5500_میکروفن_بی_سیم_تسکو_مدل.png",
    name: "میکروفن بی سیم تسکو مدل TMIC 5500 میکروفن بی سیم تسکو مدل",
    price: 127_000,
    count: 1,
  },
];

let nextShoppingsArray = [
  {
    id: 54515,
    image:
      "assets/images/products/دوربین_دیجیتال_کانن_مدل_EOS_4000D_به_همراه_لنز_18-55_میلی_متر_DC_III.png",
    name: "دوربین دیجیتال کانن مدل EOS 4000D به همراه لنز 18-55 میلی متر DC III",
    price: 15_300_000,
    count: 1,
  },
];

function showProductsToDOM(shoppingCartProducts) {
  if (!shoppingCartProducts.length) {
    shoppingBasketContainer.innerHTML = `
    <div class="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
      <i class="bi bi-cart-x text-danger" style="font-size: 6rem;"></i>
      <p class="h1">سبد خرید شما خالی می باشد</p>
    </div>
    `;
  } else {
    shoppingBasketContainer.innerHTML = "";
    shoppingCartProducts.forEach(function (product) {
      let productPrice = separateThreeDigits(product.price);
      shoppingBasketContainer.insertAdjacentHTML(
        "beforeend",
        `
    <div class="item d-flex flex-column flex-md-row border rounded-4 gap-3">
      <div class="d-flex justify-content-center">
          <div class="item__image mb-3">
              <a href="#">
                  <img src="${product.image}" alt="${product.name}">
              </a>
          </div>
      </div>
      <div class="item__content flex-grow-1">
          <h2 class="item__title h3">${product.name}</h2>
          <ul class="item__options mt-3 mb-4">
              <li class="d-flex align-items-center gap-3">
                  <span class="item-color"></span>
                  <span>خاکستری</span>
              </li>
              <li class="d-flex align-items-center gap-3">
                  <i class="bi bi-shield-check"></i>
                  <span>ضمانت اصالت کالا</span>
              </li>
              <li class="d-flex align-items-center gap-3">
                  <i class="bi bi-shop"></i>
                  <span>نام فروشنده</span>
              </li>
              <li class="d-flex align-items-center gap-3">
                  <i class="bi bi-patch-check text-primary"></i>
                  <spam>موجود در انبار</spam>
              </li>
          </ul>
          <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex flex-column gap-2 ">
                  <div class="item__quantity d-flex align-items-center justify-content-between gap-3">
                      <i class="bi bi-plus-lg addProduct" onclick="productCountUp(${
                        product.id
                      })"></i>
                      <span class="h3">${product.count}</span>
                      <i class="bi ${
                        product.count > 1 ? "bi-dash-lg" : "bi-trash"
                      } text-danger reduceProduct" onclick="productCountDown(${
          product.id
        })"></i>
                  </div>
                  <span class="product__price">
                      ${productPrice} تومان
                  </span>
              </div>
              <a href="#" class="d-flex align-items-center gap-2" onclick="addToNextShoppings(${
                product.id
              })">
                  <span class="text-primary">افزودن به خرید بعدی</span>
                  <i class="bi bi-arrow-left-short text-primary"></i>
              </a>
          </div>
      </div>
   </div>
    `
      );
    });
  }

  calculateShoppingCart(shoppingCartProducts);
  $("body").persiaNumber();
}

showProductsToDOM(shoppingCartProducts);

function calculateShoppingCart(ProductsArray) {
  productsCountElem.innerHTML = `قیمت کالاها (${ProductsArray.length} کالا)`;
  let productsSum = 0;
  let profitPercentage = 20;

  ProductsArray.forEach(
    (product) => (productsSum += Number(product.price) * product.count)
  );

  let usersProfit = (productsSum * profitPercentage) / 100;
  let shoppingCartPrice = productsSum - usersProfit;

  productsPriceElem.innerHTML = `${separateThreeDigits(productsSum)} تومان`;
  shoppingCartPriceElem.innerHTML = `${separateThreeDigits(
    shoppingCartPrice
  )} تومان`;
  usersProfitElem.innerHTML = `(${profitPercentage}%) ${separateThreeDigits(
    usersProfit
  )} تومان`;
}

function productCountUp(productID) {
  const mainProduct = shoppingCartProducts.find(
    (product) => product.id === productID
  );
  mainProduct.count++;
  showProductsToDOM(shoppingCartProducts);
  
}

function productCountDown(productID) {
  const mainProduct = shoppingCartProducts.find(
    (product) => product.id === productID
  );
  if (mainProduct.count > 1) {
    mainProduct.count--;
    showProductsToDOM(shoppingCartProducts);
  } else if (mainProduct.count == 1) {
    const mainProductIndex = shoppingCartProducts.indexOf(mainProduct);
    shoppingCartProducts.splice(mainProductIndex, 1);
    showProductsToDOM(shoppingCartProducts);
  }
}

function addToNextShoppings(productID) {
  const mainProduct = shoppingCartProducts.find(
    (product) => product.id === productID
  );
  const mainProductIndex = shoppingCartProducts.indexOf(mainProduct);
  shoppingCartProducts.splice(mainProductIndex, 1);
  nextShoppingsArray.push(mainProduct);
  showProductsToDOM(shoppingCartProducts);
  showNextShoppings();
}

function showNextShoppings() {
  if (!nextShoppingsArray.length) {
    nextShoppingsContainer.innerHTML = `
    <div class="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
      <i class="bi bi-card-list text-danger" style="font-size: 6rem;"></i>
      <p class="h1">لیست خرید بعدی شما خالی می باشد</p>
    </div>
    `;
  } else {
    nextShoppingsContainer.innerHTML = "";
    nextShoppingsArray.forEach((product) => {
      nextShoppingsContainer.insertAdjacentHTML(
        "beforeend",
        `
    <div class="item border rounded-4">
      <div class="d-flex flex-column flex-md-row">
        <div class="d-flex justify-content-center mx-md-4">
          <div class="item__image ">
            <a href="#">
                <img src="${product.image}" alt="">
            </a>
        </div>
      </div>
      <div class="item__content">
        <h2 class="item__title h3">${product.name}</h2>
        <ul class="item__options mt-3 mb-4">
            <li class="d-flex align-items-center gap-3">
                <span class="item-color"></span>
                <span>خاکستری</span>
            </li>
            <li class="d-flex align-items-center gap-3">
                <i class="bi bi-shield-check"></i>
                <span>ضمانت اصالت کالا</span>
            </li>
            <li class="d-flex align-items-center gap-3">
                <i class="bi bi-shop"></i>
                <span>نام فروشنده</span>
            </li>
            <li class="d-flex align-items-center gap-3">
                <i class="bi bi-patch-check text-primary"></i>
                <spam>موجود در انبار</spam>
            </li>
        </ul>
      </div>
    </div>
    <div class="d-flex gap-4">
      <button class="remove-btn next-shoppings__item-btn text-secondary border border-secondary rounded-3 py-2 px-4 bg-transparent" onclick="removeFromNextShoppings(${product.id})">
        <i class="bi bi-trash text-secondary"></i>
        حذف
      </button>
      <button class="next-shoppings__item-btn  text-danger border border-danger rounded-3 py-2 px-4 bg-transparent" onclick="addToShoppingCart(${product.id})">
        <i class="bi bi-cart-plus text-danger"></i>
        افزودن به سبد خرید
      </button>
    </div>
  </div>
    `
      );
    });
  }
  $("body").persiaNumber();
}
showNextShoppings(nextShoppingsArray);

function removeFromNextShoppings(productID) {
  const mainProduct = nextShoppingsArray.find(
    (product) => product.id === productID
  );
  const mainProductIndex = nextShoppingsArray.indexOf(mainProduct);
  nextShoppingsArray.splice(mainProductIndex, 1);
  showNextShoppings();
}

function addToShoppingCart(productID) {
  const mainProduct = nextShoppingsArray.find(
    (product) => productID === product.id
  );
  const mainProductIndex = nextShoppingsArray.findIndex(
    (product) => productID === product.id
  );

  nextShoppingsArray.splice(mainProductIndex, 1);
  shoppingCartProducts.push(mainProduct);

  showNextShoppings();
  showProductsToDOM(shoppingCartProducts);
  calculateShoppingCart(shoppingCartProducts);
}
