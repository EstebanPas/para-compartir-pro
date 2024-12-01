const swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    autoplay: { delay: 5000, disableOnInteraction: false }
});

window.addEventListener('scroll', function() {
    const scrollTopBtn = document.querySelector('.back-to-top');
    if (window.scrollY > 200) scrollTopBtn.classList.add('show');
    else scrollTopBtn.classList.remove('show');
});