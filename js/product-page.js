$(document).ready(function () {
  $("header").persiaNumber();
  $(".product-seller").persiaNumber();
  $(".seller").persiaNumber();
  $(".product-info").persiaNumber();
  $("footer").persiaNumber();
});

const productColorsContainer = document.querySelector(
  ".product-colors-container"
);


const productcolorName = document.querySelector(".product-color-name");
productcolorName.innerHTML = productColorsContainer.querySelector(".active").dataset.colorName;

const setProductColors = ()=>{
    const colorElems = productColorsContainer.querySelectorAll("li")
    colorElems.forEach((colorElem)=>{
        colorElem.style.backgroundColor = colorElem.dataset.color
    })
}
productColorsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("d-inline-block")) {
    productColorsContainer.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    productcolorName.innerHTML = e.target.dataset.colorName
  }
}); 

window.addEventListener("load", setProductColors)