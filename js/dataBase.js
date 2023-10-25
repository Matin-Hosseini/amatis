let recommandedProducts = [
  {
    id: 1,
    stars: 4.0,
    img: "assets/images/products/watch.png",
    name: "ساعت هوشمند جی-تب مدل W101 Hero",
    price: 1_200_000,
    priceAfterDiscount: 890_000,
  },
  {
    id: 2,
    stars: 3.5,
    img: "assets/images/products/iphone-13-ch.png",
    name: "گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت",
    price: 75_000_000,
    priceAfterDiscount: 63_000_000,
  },
  {
    id: 3,
    stars: 5,
    img: "assets/images/products/مینی_فرز_وات_پلاس_مدل_DW801_مینی_فرز_وات_پلاس_مدل.png",
    name: "مینی فرز وات پلاس مدل DW801",
    price: 14_300_000,
    priceAfterDiscount: 11_500_000,
  },
  {
    id: 4,
    stars: 2,
    img: "assets/images/products/میکروفن_بی_سیم_تسکو_مدل_TMIC_5500_میکروفن_بی_سیم_تسکو_مدل.png",
    name: "میکروفن بی سیم تسکو مدل TMIC 5500",
    price: 2_000_000,
    priceAfterDiscount: 940_000,
  },
  {
    id: 5,
    stars: 2.5,
    img: "assets/images/products/تبلت_اپل_مدل_iPad_Pro_11_2022_WIFI_ظرفیت_128_گیگابایت_و_رم_8_گیگابایت.png",
    name: "تبلت اپل مدل iPad Pro 11 2022 WIFI ظرفیت 128 گیگابایت و رم 8 گیگابایت",
    price: 44_690_000,
    priceAfterDiscount: 37_500_000,
  },
];

let bestSellersProducts = [
  {
    id: 1,
    name: "دوربین دیجیتال کانن مدل EOS 4000D به همراه لنز 18-55 میلی متر DC III",
    stars: 3.5,
    image:
      "assets/images/products/دوربین_دیجیتال_کانن_مدل_EOS_4000D_به_همراه_لنز_18-55_میلی_متر_DC_III.png",
    remaining: 3,
    price: 15_300_000,
    specialSelling: false,
    discountPercentage: 0,
  },
  {
    id: 2,
    name: "مانيتور مخصوص بازی جی پلاس مدل GGM-L328QN سايز 32 اينچ",
    stars: 4,
    image:
      "assets/images/products/مانيتور_مخصوص_بازی_جی_پلاس_مدل_GGM-L328QN_سايز_32_اينچ.png",
    remaining: 3,
    price: 13_950_000,
    specialSelling: true,
    discountPercentage: 60,
  },
  {
    id: 3,
    name: "ماشین ظرفشویی مایدیا مدل WQP6-3208A",
    stars: 3.5,
    image: "assets/images/products/ماشین_ظرفشویی_مایدیا_مدل_WQP6-3208A.png",
    remaining: 12,
    price: 18_500_000,
    specialSelling: false,
    discountPercentage: 0,
  },
  {
    id: 4,
    name: "تلویزیون ال ای دی هوشمند ایکس ویژن مدل 55XYU725 سایز 55 اینچ ",
    stars: 5,
    image:
      "assets/images/products/تلویزیون_ال_ای_دی_هوشمند_ایکس_ویژن_مدل_55XYU725_سایز_55_اینچ.png",
    remaining: 2,
    price: 21_500_000,
    specialSelling: true,
    discountPercentage: 40,
  },
  {
    id: 5,
    name: "گوشی موبایل شیائومی مدل Poco_X5_Pro_5G دو سیم کارت ظرفیت 256 گیگابایت و رم8  گیگابایت گلوبال",
    stars: 4.5,
    image: "assets/images/products/xiaomi-phone.png",
    remaining: 10,
    price: 16_640_000,
    specialSelling: false,
    discountPercentage: 0,
  },
];

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

export {
  recommandedProducts,
  bestSellersProducts,
  isEmailValid,
  separateThreeDigits,
};
