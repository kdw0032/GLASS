// script.js
let currentIndex = 0;
const slides = document.querySelectorAll('.slides');
const totalSlides = slides.length;

function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    const slider = document.querySelector('.slider1');
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// 자동 슬라이드 전환 (3초마다)
setInterval(showNextSlide, 3000);