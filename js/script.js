// Grabs the stacked hamburger icon
const navicon = document.querySelector(".navicon");

// Grabs the ul list element
const navMenu = document.querySelector(".navlist");

// Adds the "mobileMenu" function for whenever the stacked hamburger icon is clicked (via the addEventListener)
navicon.addEventListener("click", mobileMenu);

function mobileMenu() {
    navicon.classList.toggle("active");
    navMenu.classList.toggle("active");
}

/// Grabs the "a" links in the list and closes the menu whenever any of those are clicked
const navItem = document.querySelectorAll(".navitem");

navItem.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    navicon.classList.remove("active");
    navMenu.classList.remove("active");
}