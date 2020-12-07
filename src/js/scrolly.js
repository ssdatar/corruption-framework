import scrollama from 'scrollama';
import Stickyfill from 'stickyfilljs';
import {
  addClass, selectAll, removeClass,
} from './utils/dom';

const scrolly = (offset) => {
  selectAll('.sticky').forEach(el => Stickyfill.add(el));
  const o = offset || 0.2;

  scrollama()
    .setup({
      step: '.sticky',
      offset: window.innerWidth < 600 ? 0.5 : o,
    })
    .onStepEnter(({ element }) => {
      console.log('sticky enter');
      addClass(element, 'scrolly-fade-in');
    })
    .onStepExit(({ element }) => {
      removeClass(element, 'scrolly-fade-in');
    });

  scrollama()
    .setup({
      step: '.move-box',
      offset: 0,
    })
    .onStepEnter(({ element }) => {
      addClass(element, 'move-in-right');
    })
    .onStepExit(({ element }) => {
      removeClass(element, 'move-in-right');
    });
};

export default scrolly;
