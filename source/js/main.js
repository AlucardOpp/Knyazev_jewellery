'use strict';

const FOCUSABLE_ELEMENTS_STRING = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
const pageHeader = document.querySelector('.page-header');
const html = document.querySelector('.page');
const pageHeaderField = document.querySelector('.page-header__field');
const pageHeaderMenuButton = document.querySelector('.page-header__menu-button');
const pageHeaderLogo = document.querySelector('.page-header__logo');
const pageHeaderCart = document.querySelector('.page-header__cart');
const pageHeaderMenu = document.querySelector('.page-header__menu');
const pageHeaderPromo = document.querySelector('.page-header__promo');
const pageMain = document.querySelector('.page-main');
const pageMainWrapper = document.querySelector('.page-main__wrapper');
const novelty = document.querySelector('.novelty');
const noveltySlick = document.querySelector('.novelty__slick');
const noveltyItems = document.querySelectorAll('.novelty__item');
const noveltyArrows = document.querySelectorAll('.novelty__arrow');
const noveltyCards = document.querySelector('.novelty__cards');
const body = document.querySelector('.body');
const questions = document.querySelector('.questions');
const filterList = document.querySelector('.filter__list');
const filterForm = document.querySelector('.filter__form');
const filterClearButton = document.querySelector('.filter__clear');
const filterButton = document.querySelector('.filter__button');
const filterClose = document.querySelector('.filter__close');
const pageHeaderLog = document.querySelector('.page-header__log');
const pageHeaderLogin = document.querySelector('.page-header__login');
const login = document.querySelector('.login');
const loginForm = document.querySelector('.login__form');
const loginEmail = document.querySelector('#email-login');
const loginClose = document.querySelector('.login__close');
let windowHeight = window.screen.height;
let lastFocusedElement;
let mainAccordionTriggers;
let catalogAccordionTriggers;
let mainTriggersExist = false;
let catalogTriggersExist = false;
let isStorageSupport = true;
let storageEmail = '';

try {
  storageEmail = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}

if (login && login.classList.contains('login--page')) {
  if (storageEmail) {
    loginEmail.value = storageEmail;
  }
}

if (questions) {
  mainTriggersExist = true;
  mainAccordionTriggers = questions.querySelectorAll('button');
}

if (filterList) {
  catalogTriggersExist = true;
  catalogAccordionTriggers = filterList.querySelectorAll('button');
}

if (filterClearButton) {
  filterClearButton.addEventListener('click', () => {
    filterForm.reset();
  });
}

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
    }]
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
    window.scrollTo(0, 0);
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

const onMainAccordionClick = (evt) => {
  const id = evt.target.getAttribute('data-accordion');
  const item = questions.querySelector('li[data-accordion="' + id + '"]');

  if (item) {
    item.classList.toggle('questions__item--show');
  }
};

if (mainTriggersExist) {
  mainAccordionTriggers.forEach(trigger => {
    trigger.addEventListener('click', onMainAccordionClick);
  });
}

const onCatalogAccordionClick = (evt) => {
  const id = evt.target.getAttribute('data-accordion');
  const item = filterList.querySelector('li[data-accordion="' + id + '"]');

  if (item) {
    item.classList.toggle('filter__tab--show');
  }
};

if (catalogTriggersExist) {
  catalogAccordionTriggers.forEach(trigger => {
    trigger.addEventListener('click', onCatalogAccordionClick);
  });
}

const closeForm = () => {
  pageMain.classList.remove('page-main--show');
  if (body) {
    body.classList.remove('body--hidden');
  }
  document.removeEventListener('keydown', onEscKeydown);
  pageMain.removeEventListener('click', onOverlayClick);
  if (filterClose) {
    filterClose.removeEventListener('click', closeForm);
  }
};

const onEscKeydown = (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    closeForm();
  }
}
const onOverlayClick = (evt) => {
  const target = evt.target;
  const itsForm = target === filterButton || filterForm.contains(target);
  if (!itsForm) {
    closeForm();
  }
};

if (filterButton) {
  filterButton.addEventListener('click', () => {
    pageMain.classList.add('page-main--show');
    window.scrollTo(0, 0);
    if (body) {
      body.classList.add('body--hidden');
    }
    document.addEventListener('keydown', onEscKeydown);
    pageMain.addEventListener('click', onOverlayClick);
    if (filterClose) {
      filterClose.addEventListener('click', closeForm);
    }
  });
}

const closeLogin = () => {
  login.classList.remove('login--show');
  body.classList.remove('body--hidden');
  html.classList.remove('page--hidden');
  loginClose.removeEventListener('click', closeLogin);
  document.removeEventListener('keydown', onEscLoginKeydown);
  login.removeEventListener('mousedown', onOverlayLoginClick);
  lastFocusedElement.focus();
  html.classList.remove('page--overflow');
  body.classList.remove('body--overflow');
  loginForm.classList.remove('login__form--overflow');
};

const onOverlayLoginClick = (evt) => {
  const target = evt.target;
  const itsForm = target === pageHeaderLog || loginForm.contains(target);
  if (!itsForm) {
    closeLogin();
  }
};

const onEscLoginKeydown = (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    closeLogin();
  }
};

const onPageHeaderLoginClick = (evt) => {
  evt.preventDefault();
  window.scrollTo(0, 0);
  lastFocusedElement = document.activeElement;
  let focusableElements = login.querySelectorAll(FOCUSABLE_ELEMENTS_STRING);
  focusableElements = Array.prototype.slice.call(focusableElements);
  let firstTabStop = focusableElements[0];
  let lastTabStop = focusableElements[focusableElements.length - 1];
  if (login) {
    login.addEventListener('keydown', (evt) => {
      if (evt.key === 'Tab') {
        if (evt.shiftKey) {
          if (document.activeElement === firstTabStop) {
            evt.preventDefault();
            lastTabStop.focus();
          }
        } else {
          if (document.activeElement === lastTabStop) {
            evt.preventDefault();
            firstTabStop.focus();
          }
        }
      }
    });
    login.classList.add('login--show');
    const loginHeight = loginForm.offsetHeight;
    loginEmail.focus();
    if (storageEmail) {
      loginEmail.value = storageEmail;
    }
    loginForm.addEventListener('submit', () => {
      if (isStorageSupport) {
        if (loginEmail.value) {
          localStorage.setItem('email', loginEmail.value);
        }
      }
    });
    loginClose.addEventListener('click', closeLogin);
    document.addEventListener('keydown', onEscLoginKeydown);
    login.addEventListener('mousedown', onOverlayLoginClick);
    body.classList.add('body--hidden');
    html.classList.add('page--hidden');
    if (pageHeader.classList.contains('page-header--opened')) {
      pageHeader.classList.remove('page-header--opened');
      pageHeaderMenu.classList.remove('page-header__menu--opened');
      pageHeaderPromo.classList.remove('page-header__promo--opened');
      pageHeaderField.classList.remove('page-header__field--opened');
      pageHeaderMenuButton.classList.remove('page-header__menu-button--opened');
      pageHeaderLogo.classList.remove('page-header__logo--opened');
      pageHeaderCart.classList.remove('page-header__cart--opened');
    }
    if (login.classList.contains('login--show')) {
      if (loginHeight > windowHeight) {
        loginForm.classList.add('login__form--overflow');
        html.classList.add('page--overflow');
        body.classList.add('body--overflow');
      } else {
        loginForm.classList.remove('login__form--overflow');
        html.classList.remove('page--overflow');
        body.classList.remove('body--overflow');
      }

      window.addEventListener('resize', () => {
        if (login.classList.contains('login--show')) {
          windowHeight = window.screen.height;
          if (loginHeight > windowHeight) {
            loginForm.classList.add('login__form--overflow');
            html.classList.add('page--overflow');
            body.classList.add('body--overflow');
          } else {
            loginForm.classList.remove('login__form--overflow');
            html.classList.remove('page--overflow');
            body.classList.remove('body--overflow');
          }
        }
      });
    }
  }
};

if (pageHeaderLog) {
  pageHeaderLog.addEventListener('click', onPageHeaderLoginClick);
  pageHeaderLogin.addEventListener('click', onPageHeaderLoginClick);
}
