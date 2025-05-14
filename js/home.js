const swiper = new Swiper('.home-experts-showcase-main.swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: '.home-experts-vector .right-arrow',
        prevEl: '.home-experts-vector .left-arrow',
    },
})
const related = new Swiper('.home-courses-related-main.swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
})

const languages = document.querySelectorAll('.footer-language');

languages.forEach(lang => {
  lang.addEventListener('click', () => {
    languages.forEach(l => l.classList.remove('active'));
    lang.classList.add('active');
  });
});
const column = document.querySelectorAll('.footer-column-txt');

languages.forEach(lang => {
  lang.addEventListener('click', () => {
    languages.forEach(l => l.classList.remove('active'));
    lang.classList.add('active');
  });
});