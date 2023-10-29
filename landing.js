document.addEventListener("DOMContentLoaded", function () {
const menu = document.querySelector(".menu");
const menuToggle = document.getElementById("menu-toggle");

menu.addEventListener("click", (event) => {
    if (event.target === menuToggle) {
        toggleMenu();
    }
});

function toggleMenu() {
    const menuItems = document.querySelector(".menu-items");
    if (menuItems.style.display === "block" || window.getComputedStyle(menuItems).display === "block") {
        menuItems.style.display = "none";
        document.removeEventListener("click", closeMenuOnClickOutside);
    } else {
        menuItems.style.display = "block";
        document.addEventListener("click", closeMenuOnClickOutside);
    }
}

function closeMenuOnClickOutside(event) {
    const menuItems = document.querySelector(".menu-items");
    if (!menu.contains(event.target) && event.target !== menuToggle) {
        menuItems.style.display = "none";
        document.removeEventListener("click", closeMenuOnClickOutside);
    }
}
});

