const swiper = new Swiper('.collection-content', {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  }
});

let header = document.querySelector("header");

window.addEventListener('scroll', () => {
     header.classList.toggle("shadow", window.scrollY > 0);
});

let menu = document.querySelector("nav-links");

document.querySelector("#menu-icon").onclick = () => {
    menu.classList.toggle("menu-open")
};

const animate = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: "2500",
    delay:'400',
})

animate.reveal(".nav");
animate.reveal(".home-text,.highlight-img,.promotion-text" , { origin: "left" ,});
animate.reveal(".home-img,.highlight-text,.promotion-img" , { origin: "bottom" ,});
animate.reveal(".feature,.collection-box.footer-box" , { interval: 100 });
