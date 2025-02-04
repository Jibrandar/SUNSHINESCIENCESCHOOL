var swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// js for making read more section active
document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', () => {
      const target = document.querySelector(button.dataset.target);
      target.classList.toggle('show');
      button.textContent = target.classList.contains('show') ? 'Read less' : 'Read more';
    });
  });
