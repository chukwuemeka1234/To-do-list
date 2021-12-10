/* eslint-disable */
import { checkBox } from './status.js';
import { ListArrayClass } from './addRemove.js';
import './style.css';

export let listArray = JSON.parse(localStorage.getItem('ListAr')) || [];
/* eslint-enable */

const div = document.createElement('div');
div.className = 'list-container';

const heading = document.createElement('p');
heading.className = 'heading';
heading.textContent = 'Today\'s To do';
const span = document.createElement('span');
span.innerHTML = '<i class="fas fa-sync-alt icons iconed"></i>';
heading.append(span);
div.append(heading);

const contain = document.createElement('div');
contain.className = 'contain';
const list = document.createElement('div');
list.className = 'input';
const input = document.createElement('input');
input.placeholder = 'Add to your list...';
input.type = 'text';
input.className = 'text';
const span1 = document.createElement('div');
span1.innerHTML = '<i class="fas fa-plus sub-icon"></i>';
contain.append(list);
contain.append(span1);
list.append(input);
div.append(contain);

const delBtn = document.createElement('button');
delBtn.type = 'button';
delBtn.className = 'clear-all';
delBtn.textContent = 'Clear all completed';
document.body.insertAdjacentElement('afterbegin', div);

const save = document.createElement('button');
save.className = 'save';
save.textContent = 'Save edits';

const todo = document.querySelector('.to-do-list');
div.append(todo);
div.append(delBtn);
div.append(save);

export function displayList() {
  const listsCode = listArray.map((newList) => new ListArrayClass(
    newList.index,
    newList.description,
    newList.completed,
  ).listCode());

  todo.innerHTML = listsCode.join('');

  const checkbox = document.querySelectorAll('.check-box');
  checkBox(checkbox);

  const btn = document.querySelectorAll('.icon-d');
  btn.forEach((el) => {
    el.addEventListener('click', (e) => {
      const oldList = e.target.parentElement.parentElement.getAttribute('data-id'); // get parent
      ListArrayClass.remove(oldList);
      displayList();
    });
  });
}

displayList();

document.addEventListener('DOMContentLoaded', () => {
  const submitBtn = document.querySelector('.sub-icon');
  submitBtn.addEventListener('click', () => {
    const descInput = document.querySelector('.text');
    const description = descInput.value.trim();
    if (!description) {
      return;
    }

    let id = 0;
    if (listArray.length === 0) {
      id = listArray.length + 1;
    } else if (listArray.length > 0) {
      id = listArray[listArray.length - 1].index + 1;
    }

    const index = id;

    const completed = false;
    const newList = new ListArrayClass(index, description, completed);
    ListArrayClass.addTo(newList);
    displayList();
    descInput.value = '';
  });

  const delCompleted = document.querySelector('.clear-all');
  delCompleted.addEventListener('click', () => {
    listArray = listArray.filter((x) => x.completed === false);
    displayList();
    for (let i = 0; i < listArray.length; i += 1) {
      listArray[i].index = i + 1;
    }
    localStorage.setItem('ListAr', JSON.stringify(listArray));
  });

  const isCompleted = document.querySelectorAll('.check-box');
  isCompleted.forEach((el) => {
    for (let i = 0; i < listArray.length; i += 1) {
      if (listArray[i].completed === true) {
        const completedId = el.parentElement.getAttribute('id');
        if (Number(completedId) === listArray[i].index) {
          el.parentElement.classList.add('strike-through');
          el.checked = true;
        }
      }
    }
  });
});