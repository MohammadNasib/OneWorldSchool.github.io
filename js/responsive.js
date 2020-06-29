burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
navList = document.querySelector(".nav-list");
rightDiv = document.querySelector(".right-div");

burger.addEventListener("click", () => {
  rightDiv.classList.toggle("v-clss");
  navList.classList.toggle("v-clss");
  navbar.classList.toggle("nav-h");
});
