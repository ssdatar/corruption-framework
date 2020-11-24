import scrollama from 'scrollama';
import Stickyfill from 'stickyfilljs';
import {
  addClass, selectAll, removeClass,
} from './utils/dom';

const scrolly = () => {
  selectAll('.sticky').forEach(el => Stickyfill.add(el));

  scrollama()
    .setup({
      step: '.sticky',
      offset: window.innerWidth < 600 ? 0.5 : 0.1,
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
