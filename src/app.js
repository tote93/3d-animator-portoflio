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

function playFullScreenVideo(e) {
    const video = document.getElementById(e.id);
    video.currentTime = 0;
    video.play();
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    }
}