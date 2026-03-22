// Side Nav
const sideNav = document.getElementById("sideNav");
const navbar_menu = document.getElementById("navbar-menu");
navbar_menu.addEventListener("click", ()=>{
  sideNav.style.marginLeft = 0;
});

const sideNav_close = document.getElementById("sideNav-close");
sideNav_close.addEventListener("click", ()=>{
  sideNav.style.marginLeft = `-50%`;
});