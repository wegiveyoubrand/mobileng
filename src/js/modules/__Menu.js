// Function
function toggleMenu() {
  if (!showMenu) {
    menu.classList.add("open");
    menuItems.classList.add("show");

    showMenu = true;
  } else {
    menu.classList.remove("open");
    menuItems.classList.remove("show");

    showMenu = false;
  }
}

// DOM
const menu = document.querySelector(".aside");
const menuItems = document.querySelector("aside");
const menuBtns = document.querySelectorAll(".menu-toggle");
let showMenu = false;

// Initialize function
menuBtns.forEach((menuBtn) => {
  menuBtn.addEventListener("click", toggleMenu);
});
