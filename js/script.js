// the fixt nav----------
let bgnav = document.querySelector("#navbar");
let topper = document.querySelector(".topper");

window.addEventListener("scroll", function () {
  let scrollValue = window.scrollY;
  if (scrollValue > 150) {
    bgnav.classList.add("hurray");
    topper.classList.add("toping");
  } else {
    bgnav.classList.remove("hurray");
    topper.classList.remove("toping");
  }
});
// the slick------------
$(function () {
  // banner fade---------------
  $(".background").slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 5000,
  });

  // product slide--------
  $(".slideme").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: true,
    prevArrow: ".slkbtn1 .ti-angle-left",
    nextArrow: ".slkbtn1 .ti-angle-right",
    DragEvent: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// aos------------------
AOS.init();

// professors-----------
$(function () {
  "use strict";
  $(".prof_slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
    DragEvent: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// testimonial----------
$(function () {
  "use strict";
  $(".testimonial_slider").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    DragEvent: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// blog slider----------
$(function () {
  "use strict";
  $(".blog_slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    DragEvent: true,
    // autoplay:true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
// popular img filter---
let room = Array.from(document.querySelectorAll(".glory_room img"));
let dot = Array.from(document.querySelectorAll(".dot .color"));

dot.map((fixt, index) => {
  fixt.addEventListener("click", () => {
    // catch all display image--------------
    let Dimg = fixt.parentElement.parentElement;
    let showImg = Array.from(Dimg.querySelectorAll(".glory_room img"));
    showImg.map((item) => {
      item.classList.remove("active");
    });
    // catch all circle color--------------
    let Cbton = fixt.parentElement;
    let x = Cbton.querySelectorAll(".dot .color");
    let allbtn = Array.from(x);
    allbtn.map((item) => {
      item.classList.remove("active");
    });
    // Active class add-------------------
    room[index].classList.add("active");
    dot[index].classList.add("active");
  });
});

// footer tooltip--------
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// counterup-------------
$(function () {
  "use strict";
  $(".counter").counterUp({
    delay: 10,
    time: 2000,
  });
});

// partnar slider--------
$(function () {
  "use strict";
  $(".slider-part").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// proService slider-----
$(function () {
  "use strict";
  $(".proSlider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: ".prev",
    nextArrow: ".next",
    DragEvent: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// proTestimonial slider-
$(function () {
  "use strict";
  $(".proTestSlider").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
// modernHouseSlick slider-
$(function () {
  "use strict";
  $(".modernBannerSlick").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
// mHouseAgentSlick slider-
$(function () {
  "use strict";
  $(".mHouseAgentSlick").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
  });
});

// descriptive range slider-
// let slidermx = document.querySelector('#slider');
// let selectormx = document.querySelector('.selector');
// let storemx = document.querySelector('.store');

// storemx.innerHTML = slidermx.value + ' Sq.ft';
// slidermx.oninput = function(){
//   storemx.innerHTML = slidermx.value + ' Sq.ft';
//   selectormx.style.left = this.value + ' Sq.ft';
// };

// dashboard articles viewer--------
let dashboard = Array.from(document.querySelectorAll(".div"));
let LeftNVbtn = Array.from(document.querySelectorAll("ul .LeftNVbtn"));

LeftNVbtn.map((item, index) => {
  item.addEventListener("click", () => {
    LeftNVbtn.map((it) => {
      it.classList.remove("active");
    });
    dashboard.map((filItm) => {
      filItm.classList.remove("active");
    });
    LeftNVbtn[index].classList.add("active");
    dashboard[index].classList.add("active");
  });
});

// responsive toggler nav------------
let myTogglar = document.querySelector(".myTogglar");
let responsivrMenu = document.querySelector(".responsivrMenu");
let lin1 = document.querySelector(".lin1");
let lin2 = document.querySelector(".lin2");
let lin3 = document.querySelector(".lin3");

myTogglar.addEventListener("click", function () {
  responsivrMenu.classList.toggle("goBack");
  lin1.classList.toggle("rotate1");
  lin2.classList.toggle("hide");
  lin3.classList.toggle("rotate2");
});

// glorry room filter-------------
let filterize = Array.from(document.querySelectorAll(".filterize"));
let filterbtn = Array.from(document.querySelectorAll(".me_btton"));

filterbtn.map((item, index) => {
  item.addEventListener("click", () => {
    filterbtn.map((it) => {
      it.classList.remove("active");
    });
    filterize.map((filItm) => {
      filItm.classList.remove("active");
    });
    filterbtn[index].classList.add("active");
    filterize[index].classList.add("active");
  });
});
