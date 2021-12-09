/* eslint-disable */
import { checkBox } from './status.js';
import './style.css';

export let listArray = JSON.parse(localStorage.getItem('ListAr')) || [
  {
    index: 0,
    description: 'wash the dishes',
    completed: false,
  },
  {
    index: 1,
    description: 'complete To Do list project',
    completed: false,
  },
];
/* eslint-enable */

const listContainer = document.querySelector('.to-do-list');

function displayList() {
  const heading = document.createElement('li');
  heading.innerHTML = '<p>Today\'s To do</p> <i class="fas fa-sync-alt icons"></i>';
  listContainer.append(heading);

  const input = document.createElement('li');
  input.innerHTML = '<input class="input-text" placeholder="Add to your list..."> <i class="fas fa-plus icons"></i>';
  listContainer.append(input);

  for (let i = 0; i < listArray.length; i += 1) {
    if (listArray[0].index === i) {
      const listCode = `<li data-id="${i}"><div id="${i}" class="task"><input class="check-box list-${i}" type="checkbox"><p>${listArray[i].description}</p></div>
      <i class="fas fa-ellipsis-v icons"></i>`;
      listContainer.innerHTML += listCode;
    } else if (listArray[1].index === i) {
      const listCode = `<li data-id="${i}"><div id="${i}" class="task"><input class="check-box list-${i}" type="checkbox"><p>${listArray[i].description}</p></div>
      <i class="fas fa-ellipsis-v icons"></i>`;
      listContainer.innerHTML += listCode;
    } 
  }

  const btn = document.createElement('li');
  btn.innerHTML = '<button type="button">Clear all completed</button>';
  listContainer.append(btn);
}

displayList();

document.addEventListener('DOMContentLoaded', () => {
  if (listArray[0].completed === true) {
    document.getElementById('0').classList.add('strike-through');
    document.querySelector('.to-do-list-0').checked = true;
    console.log(checked);
  }

  if (listArray[1].completed === true) {
    document.getElementById('1').classList.add('strike-through');
    document.querySelector('.to-do-list-1').checked = true;
  }

  const checkbox = document.querySelectorAll('.check-box');
  checkBox(checkbox);
});
