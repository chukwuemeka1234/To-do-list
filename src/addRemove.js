/* eslint-disable */
import { listArray } from "./index.js";

export class listArray {
  constructor(index, description, completed) {
    this.index = index;
    this.description = description;
    this.completed = completed;
  }

  /* eslint-enable */

  listCode() {
    return `<li data-id="${this.index}"><div data-id="${this.index + 1}" class="task"><input class="check-box to-do-list-${this.index}" type="checkbox"><p contenteditable="true" class="edit">${this.description}</p></div><div class="contain-icons"><i class="fas fa-trash-alt icon-d"></i> <i class="fas fa-ellipsis-v icons"></i></div>`;
  }

  static addTo(newList) {
    listArray.push(newList);
    localStorage.setItem('ListAr', JSON.stringify(listArray));
  }

  static remove(oldList) {
    listArray = listArray.filter((x) => x.index !== Number(oldList));
    for (let i = 0; i < listArray.length; i += 1) {
      listArray[i].index = i + 1;
    }
    localStorage.setItem('ListAr', JSON.stringify(listArray));
  }
}