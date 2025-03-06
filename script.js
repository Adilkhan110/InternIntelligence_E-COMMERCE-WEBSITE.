const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    },
  },
});

const popup = document.getElementById("popup1");
function open() {
  popup.classList.add("open");
}
const popup2 = document.getElementById("popup2");
function open() {
  popup.classList.add("open");
}
function close() {
  popup.classList.remove("open");
}

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__icons", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__container a", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__container .crew h4", {
  ...scrollRevealOption,
  delay: 1500,
});

// about container
ScrollReveal().reveal(".about__container .about__image", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__container .about__image.image__1", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".about__content", {
  ...scrollRevealOption,
  delay: 500,
});

// cast container
ScrollReveal().reveal(".cast__card", {
  ...scrollRevealOption,
  interval: 500,
});

// media container
ScrollReveal().reveal(".media__card", {
  ...scrollRevealOption,
  interval: 500,
});

function send() {
  Swal.fire({
    toast: true,
    icon: "success",
    title: "item Added Successfuly",
    position: "top-center",
    timer: "2000",
    timerProgressBar: true,
  });
}

// Show/Hide Button on Scroll
window.onscroll = function () {
  let scrollUpBtn = document.getElementById("scrollUpBtn");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollUpBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
  }
};

// Smooth Scroll to Top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
