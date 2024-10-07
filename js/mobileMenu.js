const button = document.getElementById("mobile-menu__toggler");
const menu = document.getElementById("mobile-menu");

const mobileLinks = document.querySelectorAll(".mobile-menu__navigation-link");

const openIcon = document.querySelector(".header__menu-btn-icon-open");
const closeIcon = document.querySelector(".header__menu-btn-icon-close");

function toggleMenu() {
  menu.classList.toggle("mobile-menu__wrap--close");
  // Toggle icon display
  if (closeIcon.style.display === "none" || closeIcon.style.display === "") {
    closeIcon.style.display = "block";
    openIcon.style.display = "none";
    document.body.classList.add("no-scroll");
  } else {
    closeIcon.style.display = "none";
    openIcon.style.display = "block";
    document.body.classList.remove("no-scroll");
  }
}

button.addEventListener("click", toggleMenu);

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    toggleMenu();
  });
});

function closeMenuOnClickOutside(event) {
  const clickedInsideMenu = menu.contains(event.target);
  const clickedButton = button.contains(event.target);
  if (
    !clickedInsideMenu &&
    !clickedButton &&
    !menu.classList.contains("mobile-menu__wrap--close")
  ) {
    toggleMenu();
  }
}

document.addEventListener("click", closeMenuOnClickOutside);
