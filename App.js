window.addEventListener("load", () => {
  document.getElementById("preloader").style.zIndex = "9999";
  document.getElementById("preloader").style.height = "100%";
  document.getElementById("preloader").style.width = "100%";
  document.querySelector(".loader").style.display = "block";
  document.querySelector("*").style.overflow = "hidden";

  setTimeout(() => {
    document.getElementById("preloader").style.zIndex = "-9999";
    document.getElementById("preloader").style.height = "0";
    document.getElementById("preloader").style.width = "0";
    document.querySelector(".loader").style.display = "none";
    document.querySelector("*").style.overflow = "auto";
  }, 1300);
});

var swiper1 = new Swiper(".mySwiper1", {
  effect: "cards",
  direction: "vertical",
  grabCursor: true,
  autoplay: true,
  speed: 1000,
  loop: true,
});

var swiper2 = new Swiper(".mySwiper2", {
  effect: "cards",
  direction: "vertical",
  grabCursor: true,
  autoplay: true,
  speed: 1000,
  loop: true,
});

var swiper3 = new Swiper(".mySwiper3", {
  effect: "cards",
  direction: "vertical",
  grabCursor: true,
  autoplay: true,
  speed: 1000,
  loop: true,
});
