document.addEventListener("DOMContentLoaded", function() {
    const menuItem = document.querySelector(".cot");
    const subMenu = document.querySelector(".subMenu");
    const Arr = document.querySelector("section#home header div.bottomSection ul li.cot img")

    menuItem.addEventListener("click", function() {
      subMenu.classList.toggle("actives")
      Arr.classList.toggle("rotate")
    });
});
  