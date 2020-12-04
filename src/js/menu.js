import { select, selectAll } from './utils/dom';

const active = select('.sidebar__list').getAttribute('data-active');
const opts = selectAll('.sidebar__list--item');

if (active === 'intro') {
  opts[0].setAttribute('data-active', true);
} else {
  const idx = +active.match(/\d/)[0];
  opts[0].setAttribute('data-active', false);
  opts[idx].setAttribute('data-active', true);
}
