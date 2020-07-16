const menuBarItems = document.querySelectorAll(".header__item");
const toggleBtn = document.querySelector(".header__toggle");
const header = document.querySelector("header");


window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0);
})

function toggle() {
    header.classList.toggle('active');
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

gsap.registerPlugin(ScrollTrigger);

gsap.from(".home__title", {
    opacity: 0,
    y: -150,
    duration: 1,
    delay: 0.2
});
gsap.from(".home__subtitle", {
    opacity: 0,
    y: 100,
    duration: 1,
    delay: 0.5
});

gsap.from(".about__title", {
    scrollTrigger: {
        trigger: ".home__subtitle",
        scrub: 1
    },
    y: -100,
    scale: 1.3,
    duration: 1.5,
    opacity: 0
})

gsap.from(".about__introduction", {
    scrollTrigger: {
        trigger: ".about__introduction",
        scrub: 1
    },
    duration: 0.5,
    opacity: 0
})
gsap.from(".about__image_profile", {
    scrollTrigger: {
        trigger: ".home__subtitle",
        scrub: 1
    },
    duration: 0.5,
    opacity: 0,
    x: -innerWidth * 1,
    scale: 1
})

gsap.from(".btnProfile", {
    scrollTrigger: {
        trigger: ".about__introduction",
        scrub: 1
    },
    duration: 0.5,
    opacity: 0,
    y: 200,
    scale: 1.2
})

gsap.from(".portfolio__title", {
    scrollTrigger: {
        trigger: ".about__introduction",

        scrub: 1
    },
    x: -300,
    duration: 0.5,
    opacity: 0,
    scale: 1.2
})

gsap.from(".portfolio__description", {
    scrollTrigger: {
        trigger: ".about__introduction",

        scrub: 1
    },
    x: 300,
    duration: 0.5
})

gsap.from(".portfolio__animation", {
    scrollTrigger: {
        trigger: ".portfolio__ilustration",
        scrub: 0
    },
    duration: 0.3,
    opacity: 0,
    y: 200
})

gsap.from(".contact", {
    scrollTrigger: {
        trigger: ".portfolio_end",
        scrub: 0
    },
    duration: 0.5,
    opacity: 0,
    y: 300
})
gsap.from(".content__title", {
    scrollTrigger: {
        trigger: ".portfolio_end",
        scrub: 0
    },
    duration: 0.5,
    opacity: 0,
    x: 300
})
gsap.from(".content__description", {
    scrollTrigger: {
        trigger: ".btnVideos",
        scrub: 0
    },
    duration: 0.5,
    opacity: 0,
    x: -300
})

gsap.from(".contact__formContent", {
    scrollTrigger: {
        trigger: ".content__description",
        scrub: 0
    },
    duration: 0.5,
    opacity: 0,
    scale: 1.2
})