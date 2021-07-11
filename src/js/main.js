// Select DOM items
const menuBtns = document.querySelectorAll(".menu-toggle");
const my_account = document.querySelector(".my_account");
const menu = document.querySelector(".aside");
const menuItems = document.querySelector("aside");
// const close_modal = document.querySelector('');
// const close_menu_toggle = document.querySelector('');

let showMenu = false;

menuBtns.forEach((menuBtn) => {
  menuBtn.addEventListener("click", toggleMenu);
});

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
