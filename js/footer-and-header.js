const menuBtn = document.querySelector(".side-menu-btn");
const sideBar = document.querySelector("#side-bar");
const sideMenu = document.querySelector("#side-menu-btn");
const newsletterForm = document.querySelector(".newsletter-form");
const newsLetterEmailInput = document.querySelector("#newsletter-input");
const newsletterEmailMessege = document.querySelector(
  "#newsletter__email-messege"
);

//mega-menu
const megaMenuLinks = document.querySelectorAll(".mega-menu__link");
const megaMenuContent = document.querySelector(
  ".mega-menu-content .mega-sub-menu"
);
//mega-menu
megaMenuLinks.forEach((megaMenuLink) => {
  megaMenuLink.addEventListener("mouseenter", () => {
    megaMenuLinks.forEach((megaMenuLink) =>
      megaMenuLink.classList.remove("active")
    );
    megaMenuLink.classList.add("active");
    const megaMenuLinkContent =
      megaMenuLink.parentElement.querySelector("ul").innerHTML;

    megaMenuContent.innerHTML = "";
    megaMenuContent.innerHTML = megaMenuLinkContent;
  });
});

function isEmailValid(email) {
  if (
    String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    return true;
  } else {
    return false;
  }
}

const openSideBar = () => {
  sideBar.classList.add("open");
};

document.addEventListener("click", (e) => {
  if (!e.target.closest(".side-bar") && e.target.id != "side-menu-btn")
    sideBar.classList.remove("open");
});

menuBtn.addEventListener("click", () => {
  sideBar.classList.add("open");
});

newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!newsLetterEmailInput.value) {
    newsletterEmailMessege.textContent = "لطفا ایمیل خود را وارد کنید.";
    newsletterEmailMessege.style.visibility = "visible";
  } else if (!isEmailValid(newsLetterEmailInput.value)) {
    newsletterEmailMessege.textContent = "ایمیل نامعتبر می باشد";
    newsletterEmailMessege.style.visibility = "visible";
  } else if (isEmailValid(newsLetterEmailInput.value)) {
    newsletterEmailMessege.textContent = "";
    let newsletterEmailModal = document.createElement("DIV");
    newsletterEmailModal.innerHTML = "ایمیل شما با موفقیت ثبت شد.";
    newsletterEmailModal.classList.add("newsletter__email-modal");
    document.body.appendChild(newsletterEmailModal);
    setTimeout(() => {
      newsletterEmailModal.remove();
    }, 5000);
  }
});

$("document").ready(function () {
  $(".side-menu__link").click(function () {
    $(this).next(".sub-menu").slideToggle();
    $(this).find(".dropdown").toggleClass("open");
  });
});
