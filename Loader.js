window.addEventListener("load", () => {
  document.getElementById("preloader").style.zIndex = "9999";
  document.getElementById("preloader").style.height = "100%";
  document.getElementById("preloader").style.width = "100%";
  document.querySelector(".loader").style.display = "block";
  document.querySelector("body").style.overflow = "hidden";

  setTimeout(() => {
    document.getElementById("preloader").style.zIndex = "-9999";
    document.getElementById("preloader").style.height = "0";
    document.getElementById("preloader").style.width = "0";
    document.querySelector(".loader").style.display = "none";
    document.querySelector("body").style.overflow = "unset";
  }, 1300);
});
