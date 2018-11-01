"use strict";

window.addEventListener("DOMContentLoaded", init);

function init() {}

const orderButton = document.querySelector("#order");
const checkoutPage = document.getElementById("magazineNr");
const landingPage = document.getElementById("landingpage");
const backButton = document.getElementById("back");

orderButton.addEventListener("click", switchtocheckout);
function switchtocheckout() {
  checkoutPage.style.marginLeft = "0";
  landingPage.classList.add("hidden");
  checkoutPage.classList.remove("hidden");
}
backButton.addEventListener("click", back);
function back() {
  checkoutPage.classList.add("hidden");
  landingPage.classList.remove("hidden");
}
function switchPages() {}
