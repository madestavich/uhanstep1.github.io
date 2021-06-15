"use strict";

let servicesMenu = document.querySelector(".services-menu");
let servicesLinks = document.querySelectorAll(".services-menu-link");
let servicesDescription = document.querySelectorAll(".services-description");

servicesMenu.addEventListener("click", (e) => {
  servicesLinks.forEach((e) => {
    e.classList.remove("active");
  });
  servicesDescription.forEach((element) => {
    if (e.target.innerHTML === element.dataset.title) {
      element.classList.add("active");
      e.target.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
});

let workMenu = document.querySelector(".work-menu");
let workLinks = document.querySelectorAll(".work-menu-link");
let workCards = document.querySelectorAll(".work-card");

workMenu.addEventListener("click", (e) => {
  if (e.target.classList.contains("work-menu-link")) {
    workLinks.forEach((e) => {
      e.classList.remove("active");
    });
  }
  workCards.forEach((element) => {
    if (e.target.innerHTML === element.dataset.type) {
      element.classList.remove("filter");
      e.target.classList.add("active");
    } else if (e.target.innerHTML === "All") {
      e.target.classList.add("active");
      element.classList.remove("filter");
    } else if (e.target.classList.contains("work-menu-link")) {
      element.classList.add("filter");
    }
  });
});

let loadMoreBtn = document.getElementById("show-more");
let loader = document.querySelector(".loader");

loadMoreBtn.addEventListener("click", (e) => {
  e.target.style = "display: none";
  loader.classList.toggle("hide");
  setTimeout(function timered() {
    loader.classList.toggle("hide");
    workCards.forEach((element) => {
      element.classList.remove("hide");
    });
    if (workLinks[0].classList.contains("active")) {
      workCards.forEach((element) => {
        element.classList.remove("filter");
      });
    }
  }, 3000);
});

let sliderNavigation = document.querySelector(".slider-navigation");
let slideContent = document.querySelector(".slide-content");
let clientsImages = document.querySelectorAll(".client-image");
let slides = document.querySelectorAll(".slide");

sliderNavigation.addEventListener("click", (e) => {
  if (e.target.classList.contains("client-image")) {
    clientsImages.forEach((e) => {
      e.classList.remove("active");
    });
    e.target.classList.add("active");
    slideContent.style = `transform: translate(-${
      slides[e.target.dataset.position].offsetLeft
    }px)`;
  }
});

let btnBack = document.querySelector(".button-back");
let btnForward = document.querySelector(".button-forward");

btnBack.addEventListener("click", () => {
  if (clientsImages[0].classList.contains("active")) {
    clientsImages[3].click();
  } else if (clientsImages[1].classList.contains("active")) {
    clientsImages[0].click();
  } else if (clientsImages[2].classList.contains("active")) {
    clientsImages[1].click();
  } else if (clientsImages[3].classList.contains("active")) {
    clientsImages[2].click();
  }
});

btnForward.addEventListener("click", () => {
  if (clientsImages[3].classList.contains("active")) {
    clientsImages[0].click();
  } else if (clientsImages[2].classList.contains("active")) {
    clientsImages[3].click();
  } else if (clientsImages[1].classList.contains("active")) {
    clientsImages[2].click();
  } else if (clientsImages[0].classList.contains("active")) {
    clientsImages[1].click();
  }
});
