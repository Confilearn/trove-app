const navBar = document.querySelectorAll(".navbar");
const menuBar = document.querySelector(".menu-bar ");

navBar.forEach((item) => {
  item.addEventListener("click", function () {
    this.classList.toggle("nav__expanded");
    menuBar.classList.toggle("change");
  });
});
