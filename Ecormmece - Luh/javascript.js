const navbar = document.querySelect(".navbar");
const menyButton = document.querySelector(".menu-button");

menuButton.addEventListener('click', () => {
    navbar.calssLists.toggle("show-menu");
});