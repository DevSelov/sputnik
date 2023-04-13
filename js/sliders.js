const pagination = (element) => {
    return {
        el: `.${element} .swiper-pagination`,
        type: 'bullets',
        clickable: true,
    }
}

const navigation = (element) => {
    return {
        nextEl: `.${element} .swiper-button-next`,
        prevEl: `.${element} .swiper-button-prev`
    }
}

document.querySelectorAll('[data-swiper=main]').forEach(el => {
    let slide = el.hasAttribute('data-swiper-slide') ? el.getAttribute('data-swiper-slide') : 1;
    let breakpoin = el.getAttribute('data-breakpoints') ? JSON.parse(el.getAttribute('data-breakpoints')) : {};
    let margin = el.hasAttribute('data-swiper-margin') ? 0 : 30;
    let paginat = el.hasAttribute('data-swiper-pagination') ? pagination(el.classList[1] ? el.classList[1] : el.classList[0]) : {};
    let navigat = el.hasAttribute('data-swiper-navigation') ? navigation(el.classList[0]) : {};
    let touncMove = el.hasAttribute('data-swiper-touch') ? true : false;
    let loop = el.hasAttribute('data-swiper-loop') ? true : false;
    let element = el.classList.contains('swiper') ? el : el.querySelector('.swiper');
    let destr = el.getAttribute('data-swiper-destroy') ? true : false;

    new Swiper(element, {
        slidesPerView: slide,
        spaceBetween: margin,
        loop: loop,
        navigation: navigat,
        pagination: paginat,
        // allowTouchMove: true,
        breakpoints: breakpoin,
    });

});

function mediaMax(value) {
    return window.matchMedia(`(max-width: ${parseInt(value)}px)`).matches
}

function setPadding() {
    if (mediaMax('600') && document.querySelector('.detail-block__content--text > .section-title')) {
        let heightElem = document.querySelector('.detail-block__content--text .section-title').scrollHeight;
        const PADDING = 20;
        document.querySelector('.detail-block__box').style.paddingTop = `${heightElem + PADDING}px`;
    }
}

window.addEventListener('DOMContentLoaded', () => {
    setPadding();
});

document.querySelector('.gamburger').addEventListener('click', () => {
    document.querySelector('.header-menu').classList.add('_active');
});

document.querySelector('.esc-popup').addEventListener('click', () => {
    document.querySelector('.header-menu').classList.remove('_active');
});