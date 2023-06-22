import { todaydeal } from "./todaydeals.js";

let slideleft = document.getElementById("slider-btnleft");
let slideright = document.getElementById("slider-btnright");
let imgitems = document.querySelectorAll(".image-items");

// console.log(imgitems.length - 1);
let startimg = 0;
let endimg = (imgitems.length - 1) * 100;

// console.log(endimg);

slideleft.addEventListener("click", handleLeftBtn);

function handleLeftBtn() {
  if (startimg < 0) {
    startimg = startimg + 100;
  }
  imgitems.forEach((element) => {
    element.style.transform = `translateX(${startimg}%)`;
  });
}
slideright.addEventListener("click", handleRightBtn);

function handleRightBtn() {
  if (startimg >= -endimg + 100) {
    startimg = startimg - 100;
  }

  imgitems.forEach((element) => {
    element.style.transform = `translateX(${startimg}%)`;
  });
}
// **************************render automatic
function renderSlide() {
  if (startimg >= -endimg + 100) {
    handleRightBtn();
  } else {
    startimg = 0;
  }
}
setInterval(renderSlide, 5000);

// ********************************************sidebar navigation

const sidebarnavele = document.getElementById("sidebar-nav2");
const navslider = document.getElementById("nav-slider");
const sidebarnavclose = document.getElementById("sidebar-navclose");

// console.log(sidebarnavele);

navslider.addEventListener("click", () => {
  sidebarnavele.classList.toggle("sidebar-show");
});

sidebarnavclose.addEventListener("click", () => {
  sidebarnavele.classList.toggle("sidebar-show");
});

// today deals*******************************************
console.log(todaydeal);
let todaypdts = document.querySelector(".today-products");
// console.log(todaypdts)
let todaydealpdthtml = "";

let todaydeallen = todaydeal.length;
// console.log(todaydeallen);
for (let i = 0; i < todaydeallen; i++) {
  // console.log(todaydeal[i]);

  todaydealpdthtml += `
  <div class="products">
    <img src=${todaydeal[i].img} />
      <div class="discount-container">
        <a href="">Upto ${todaydeal[i].discount}% off</a>
        <a href="">${todaydeal[i].dealofday}</a>
      </div>
      <p>${todaydeal[i].desc}</p>
  </div>
  `;
}
todaypdts.innerHTML = todaydealpdthtml;
console.log(todaydealpdthtml);

let todayleft = document.getElementById("today-deal-left");
let todayright = document.getElementById("today-deal-right");

let product = document.querySelectorAll(".products");

let todaydealstart = 0;
let startproduct = 0;

todayleft.addEventListener("click", () => {
  // alert("left");
  if (startproduct < 0) {
    startproduct += 600;
  }

  if (startproduct > -2400) {
    product.forEach((ele) => {
      ele.style.transform = `translateX(${startproduct}%)`;
    });
  }
});

todayright.addEventListener("click", () => {
  // alert("right");
  if (startproduct > -1200) {
    startproduct -= 600;
  }

  product.forEach((ele) => {
    ele.style.transform = `translateX(${startproduct}%)`;
  });
});

// back to top
let btt = document.querySelector(".backtotop");

btt.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
