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
      offset: 0,
    })
    .onStepEnter(({ element }) => {
      addClass(element, 'fade-in');
    })
    .onStepExit(({ element }) => {
      removeClass(element, 'fade-in');
    });
};

export default scrolly;
