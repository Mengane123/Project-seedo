const mobile_nav = document.querySelector(".mobile-navbar-btn");
const header_nav = document.querySelector(".header");

const toggleNavbar = () => {
  header_nav.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());
