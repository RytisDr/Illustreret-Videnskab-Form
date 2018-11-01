"use strict";

window.addEventListener("DOMContentLoaded", init);
function init() {
  let radioSelections = document.querySelectorAll(".selection");
  let morePaymentOpt = document.querySelector("#moreOptions");
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
