const menuBarItems = document.querySelectorAll(".header__item");
const toggleBtn = document.querySelector(".header__toggle");
const header = document.querySelector("header");

toggleBtn.addEventListener("click", () => {
    header.classList.toggle("active");
})

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0);
})

function toggle() {
    const header = document.getElementById('header');
    header.classList.toggle('active')
}