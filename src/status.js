/* eslint-disable */
import { listArray } from './index.js';
/* eslint-enable */

export function completed(state, description) {
  if (state) {
    description.classList.add('strike-through');
    const index = description.getAttribute('id');
    for (let i = 0; i < listArray.length; i += 1) {
      listArray[i].index = i + 1;
      if (Number(index - 1) === listArray[i].index) {
        listArray[i].completed = true;
        localStorage.setItem('ListAr', JSON.stringify(listArray));
      }
    }
  } else {
    description.classList.remove('strike-through');
    const index = description.getAttribute('id');
    for (let i = 0; i < listArray.length; i += 1) {
      if (Number(index - 1) === listArray[i].index) {
        listArray[i].completed = false;
        localStorage.setItem('ListAr', JSON.stringify(listArray));
      }
    }
  }
}

export const checkBox = (arr) => {
  arr.forEach((el) => {
    el.addEventListener('change', (e) => {
      const state = e.target.checked;
      const description = e.target.parentElement;
      if (state === true) {
        completed(state, description);
      } else {
        completed(state, description);
      }
    });
  });
};