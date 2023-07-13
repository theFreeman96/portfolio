'use strict';

// Element toggle function
const elementToggleFunc = function (e) { e.classList.toggle("active"); }

// Sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// Page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });

}

// Accordion
const accordions = document.getElementsByClassName("accordion");
let current = null;

for (let accordion of accordions) {
  accordion.addEventListener("click", function() {
    // Collapse the currently expanded item
    if (current !== null && current !== this) {
      elementToggleFunc(current);
      var panel = current.nextElementSibling;
      panel.style.maxHeight = null;
    }

    // Toggle the clicked item
    elementToggleFunc(this);
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }

    // Update the currently expanded item
    current = (current === this) ? null : this;
  });

}

// Project select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// Add event in all select items
for (let selectItem of selectItems) {
  selectItem.addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });

}

// Project filter variable
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let filterItem of filterItems) {

    if (selectedValue === "all") {
      filterItem.classList.add("active");
    } else if (selectedValue === filterItem.dataset.category) {
      filterItem.classList.add("active");
    } else {
      filterItem.classList.remove("active");
    }

  }

}

// Add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let button of filterBtn) {

  button.addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}
