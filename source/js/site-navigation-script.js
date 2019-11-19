var siteNavigation = document.querySelector(".site-navigation");
var menuToggle = siteNavigation.querySelector(".site-navigation__toggle");

siteNavigation.classList.remove("site-navigation--nojs");
siteNavigation.classList.add("site-navigation--closed");
menuToggle.addEventListener("click", function () {
  siteNavigation.classList.toggle("site-navigation--closed");
})
