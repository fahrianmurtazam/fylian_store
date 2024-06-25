// tombol search
const searchBtn = document.querySelector("#search-btn");
const searchForm = document.querySelector("#search-form");
const searchBox = document.querySelector("#search-box");

searchBtn.addEventListener("click", function () {
  searchForm.classList.toggle("scale-x-0");
  searchBox.focus();
});
// toggle shopping cart
const cartBtn = document.querySelector('#shopping-cart-btn')
const shoppingCart = document.querySelector('.shopping-cart')
cartBtn.addEventListener('click', function(){
  shoppingCart.classList.toggle('translate-x-[1000px]')
})
// klik diluar
const hm = document.querySelector("#hamburger-menu");
const navMenu = document.querySelector("#nav-menu");
const sb = document.querySelector("#search-btn");
const sc = document.querySelector("#shopping-cart-btn");
hm.addEventListener("click", function () {
  navMenu.classList.toggle("translate-x-[-1000px]");
});

// klik diluar untuk hilangkan nav-menu
document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.add("translate-x-[-1000px]");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.add("scale-x-0");
  }
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.add("translate-x-[1000px]");
}});

// modal box
const itemDetailBtns = document.querySelectorAll("#item-detail-btn")
const itemModal = document.querySelector("#item-detail-modal")

itemDetailBtns.forEach((btn) =>{
  btn.addEventListener("click", function(){
    itemModal.style.display="flex"
  })
})

// tombol close modal
const closeBtn = document.querySelector('.close-icon')
closeBtn.addEventListener('click', function(){
  itemModal.style.display="none"
})

window.addEventListener('click', function(e){
  if(e.target === itemModal){
    itemModal.style.display="none"
  }
})