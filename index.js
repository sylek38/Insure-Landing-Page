const toggleBtn = document.querySelector('.toggle__btn');

toggleBtn.addEventListener("click", toggleMenu);

function toggleMenu() {

    const nav = document.querySelector('.header__nav');
    const toggleOpen = document.querySelector(".toggle__open");
    const toggleClose = document.querySelector(".toggle__close");

    const navOpen = nav.classList.contains("showNav");
    const navOpenStatus = !navOpen;

    toggleBtn.setAttribute("aria-expanded", navOpenStatus);
    nav.classList.toggle("showNav");
    toggleOpen.classList.toggle("active");
    toggleClose.classList.toggle("active");

// Close the nav when a link is clicked

const navLinks = document.querySelectorAll(".nav__item");

navLinks.forEach(
    function (navLink) {
        navLink.addEventListener("click", toggleMenu);
    }
)
}