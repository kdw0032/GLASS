// script.js
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// 자동 슬라이드 전환 (3초마다)
setInterval(showNextSlide, 3000);

// script.js
let currentIndex2 = 0;
const slides2 = document.querySelectorAll('.slide2');
const totalSlides2 = slides.length;

function showNextSlide2() {
    currentIndex2 = (currentIndex2 + 1) % totalSlides2;
    const slider2 = document.querySelector('.slider2');
    slider2.style.transform = `translateX(-${currentIndex2 * 100}%)`;
}

// 자동 슬라이드 전환 (3초마다)
setInterval(showNextSlide2, 3000);

 // 드롭다운 토글 함수
 function toggleDropdown() {
    document.querySelector('.dropdown-contents').classList.toggle('active');
  }

  // 드롭다운 닫기 함수
  function closeDropdown() {
    document.querySelector('.dropdown-contents').classList.remove('active');
  }

  // 화면 외부 클릭 시 드롭다운 닫기
  window.onclick = function(event) {
    const dropdown = document.querySelector('.dropdown-contents');
    if (!event.target.closest('.dropdown-contents') && !event.target.closest('[onclick="toggleDropdown()"]')) {
      closeDropdown();
    }
  }