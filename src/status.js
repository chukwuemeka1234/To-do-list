/* eslint-disable */
import { listArray } from './index.js';
/* eslint-enable */

export function completed(state, description) {
    if (state) {
        description.classList.add('strike-through');
        const index = description.getAttribute('id');
        if(Number(index) === listArray[0].index) {
            listArray[0].completed = true;
            localStorage.setItem('ListAr', JSON.stringify(listArray));
        } else if (Number(index) === listArray[1].index) {
            listArray[1].completed = true;
            localStorage.setItem('ListAr', JSON.stringify(listArray));
        } else if(Number(index) === listArray[2].index) {
            listArray[2].completed = true;
            localStorage.setItem('ListAr', JSON.stringify(listArray));
        }
    }   else {
        description.classList.remove('strike-through');
        const index = description.getAttribute('id');
        if (Number(index) === listArray[0].index) {
            listArray[0].completed = false;
            localStorage.setItem('ListAr', JSON.stringify(listArray));
        }   else if (Number(index) === listArray[1].index) {
            listArray[1].completed = false;
            localStorage.setItem('ListAr', JSON.stringify(listArray));
        }   else if (Number(index) === listArray[2].index) {
            listArray[2].completed = false;
            localStorage.setItem('ListAr', JSON.stringify(listArray));
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
            }   else {
                completed(state, description);
            }
        });
    });
};