/* eslint-disable */
import './style.css';

const listContainer = document.querySelector('.to-do-list');

const listArray = [
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
  {
    index: 2,
    description: 'do the laundry',
    completed: false,
  },
];
/* eslint-enable */

function displayList() {
  const heading = document.createElement('li');
  heading.innerHTML = '<p>Today\'s To do</p> <i class="fas fa-sync-alt icons"></i>';
  listContainer.append(heading);

  const input = document.createElement('li');
  input.innerHTML = '<input class="input-text" placeholder="Add to your list..."> <i class="fas fa-plus icons"></i>';
  listContainer.append(input);

  listArray.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<p><input type="checkbox">${item.description}</p><i class="fas fa-ellipsis-v icons"></i>`;
    listContainer.append(listItem);
  });

  const btn = document.createElement('li');
  btn.innerHTML = '<button type="button">Clear all completed</button>';
  listContainer.append(btn);
}

document.addEventListener('DOMContentLoaded', () => {
  displayList();
});
