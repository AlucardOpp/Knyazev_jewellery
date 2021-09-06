'use strict';

const pageHeader = document.querySelector('.page-header');
const pageHeaderField = document.querySelector('.page-header__field');
const pageHeaderMenuButton = document.querySelector('.page-header__menu-button');
const pageHeaderLogo = document.querySelector('.page-header__logo');
const pageHeaderCart = document.querySelector('.page-header__cart');
const pageHeaderMenu = document.querySelector('.page-header__menu');
const pageHeaderPromo = document.querySelector('.page-header__promo');
const novelty = document.querySelector('.novelty');
const noveltySlick = document.querySelector('.novelty__slick');
const noveltyItems = document.querySelectorAll('.novelty__item');
const noveltyArrows = document.querySelectorAll('.novelty__arrow');
const noveltyCards = document.querySelector('.novelty__cards');
const body = document.querySelector('.body');
const questions = document.querySelector('.questions');
const accordionTriggers = questions.querySelectorAll('button');

document.addEventListener('DOMContentLoaded', function() {
  $(".novelty__slick").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    dots: true,
    swipe: false,

    responsive: [{
        breakpoint: 1024,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: true,
          dots: true,
          swipe: true,
        }
      }, {
        breakpoint: 768,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: true,
          dots: true,
          swipe: true,
        }
      }
    ]
  });
});

if (novelty) {
  novelty.classList.remove('novelty--nojs');
}

if (noveltySlick) {
  noveltySlick.classList.remove('novelty__slick--nojs');
}

if (noveltyItems) {
  noveltyItems.forEach(item => {
    item.classList.remove('novelty__item--nojs');
    item.classList.remove('novelty__item--tablet');
    item.classList.remove('novelty__item--mobile')
  });
}

if (noveltyArrows) {
  noveltyArrows.forEach(arrow => {
    arrow.classList.remove('novelty__arrow--nojs');
  });
}

if (noveltyCards) {
  noveltyCards.classList.remove('novelty__cards--nojs');
}

if (pageHeader) {
  pageHeader.classList.remove('page-header--nojs');
}

if (pageHeaderField) {
  pageHeaderField.classList.remove('page-header__field--nojs');
}

if (pageHeaderMenuButton) {
  pageHeaderMenuButton.classList.remove('page-header__menu-button--nojs');
}

if (pageHeaderLogo) {
  pageHeaderLogo.classList.remove('page-header__logo--nojs');
}

if (pageHeaderCart) {
  pageHeaderCart.classList.remove('page-header__cart--nojs');
}

if (pageHeaderMenu) {
  pageHeaderMenu.classList.remove('page-header__menu--nojs');
}

if (pageHeaderMenuButton) {
  pageHeaderMenuButton.addEventListener('click', () => {
    if (pageHeader) {
      pageHeader.classList.toggle('page-header--opened');
    }

    if (pageHeaderField) {
      pageHeaderField.classList.toggle('page-header__field--opened');
    }

    if (pageHeaderMenuButton) {
      pageHeaderMenuButton.classList.toggle('page-header__menu-button--opened');
    }

    if (pageHeaderLogo) {
      pageHeaderLogo.classList.toggle('page-header__logo--opened');
    }

    if (pageHeaderCart) {
      pageHeaderCart.classList.toggle('page-header__cart--opened');
    }

    if (pageHeaderMenu) {
      pageHeaderMenu.classList.toggle('page-header__menu--opened');
    }

    if (pageHeaderPromo) {
      pageHeaderPromo.classList.toggle('page-header__promo--opened');
    }

    if (body) {
      body.classList.toggle('body--hidden');
    }
  });
}

const onAccordionClick = (evt) => {
  const id = evt.target.getAttribute('data-accordion');
  const item = questions.querySelector('li[data-accordion="' + id + '"]');

  if (item) {
    item.classList.toggle('questions__item--show');
  }
};

if (accordionTriggers) {
  accordionTriggers.forEach(trigger => {
    trigger.addEventListener('click', onAccordionClick);
  });
}
