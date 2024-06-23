const hamburger = document.querySelector("#hamburger-menu");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  navMenu.classList.toggle("translate-x-[-1000px]");
});

// klik diluar untuk hilangkan nav-menu
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.add("translate-x-[-1000px]");
  }
});
