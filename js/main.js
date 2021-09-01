'use strict';

const pageHeader = document.querySelector('.page-header');
const pageHeaderField = document.querySelector('.page-header__field');
const pageHeaderMenuButton = document.querySelector('.page-header__menu-button');
const pageHeaderLogo = document.querySelector('.page-header__logo');
const pageHeaderCart = document.querySelector('.page-header__cart');
const pageHeaderMenu = document.querySelector('.page-header__menu');
const pageHeaderPromo = document.querySelector('.page-header__promo');
const body = document.querySelector('.body');

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

    if(pageHeaderPromo) {
      pageHeaderPromo.classList.toggle('page-header__promo--opened');
    }

    if(body) {
      body.classList.toggle('body--hidden');
    }
  });
}
