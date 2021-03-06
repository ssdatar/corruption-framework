/* eslint-disable no-new */
import AOS from 'aos';
import scrolly from './scrolly';

import removeMobileHover from './utils/removeMobileHover';
import wireSocialButtons from './utils/wireSocialButtons';
import './menu';

import 'lazysizes';
import 'picturefill';


removeMobileHover();

// Add class to html if JS is loaded
document.querySelector('html').classList.add('js-is-loaded');

// Wire header social if present
if (document.querySelectorAll('.g-header__share').length) {
  wireSocialButtons({
    facebook: '.g-header__share-button--fb',
    twitter: '.g-header__share-button--tw',
    mail: '.g-header__share-button--ma',
  });
}

scrolly();
AOS.init();
