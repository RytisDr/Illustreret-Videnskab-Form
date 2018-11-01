"use strict";

window.addEventListener("DOMContentLoaded", init);

const orderButton = document.querySelector("#order");
const checkoutPage = document.getElementById("magazineNr");
const landingPage = document.getElementById("landingpage");
const backButton = document.getElementById("back");
const backButtonCustomerInfo = document.querySelector("#back2");
const aboutButton = document.querySelector(".about");
const nextButton = document.querySelector("#next");
const customerInfo = document.querySelector("#customerInfo");

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

function switchToCustomerInfo() {
  console.log("Also works");
  nextButton.addEventListener("click", function() {
    customerInfo.style.left = "0vw";
  });
}
function backFromCustomerInfo() {
  console.log("works");
  backButtonCustomerInfo.addEventListener("click", function() {
    customerInfo.style.left = "100vw";
  });
}
function init() {
  let radioSelections = document.querySelectorAll(".selection");
  let morePaymentOpt = document.querySelector("#moreOptions");

  switchToCustomerInfo();
  backFromCustomerInfo();

  radioSelections.forEach(e =>
    e.addEventListener("click", function() {
      e.querySelector("input").checked = true;
    })
  );
  morePaymentOpt.addEventListener("click", function() {
    showMoreOpt(morePaymentOpt);
  });
}
function showMoreOpt(button) {
  button.style.opacity = "0";
  button.addEventListener("transitionend", function() {
    button.style.display = "none";
    document
      .querySelectorAll(".selection")
      .forEach(e => e.classList.remove("hidden"));
  });
}
function switchPages() {}
