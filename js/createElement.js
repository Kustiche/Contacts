import { list } from "./view.js";

export function createElement(nameText, numberText) {
  let newContact = document.createElement('div');
  let newAvatar = document.createElement('div');
  let newInner = document.createElement('div');
  let newName = document.createElement('span');
  let newNameText = document.createTextNode(nameText);
  let newNumber = document.createElement('span');
  let newNumberText = document.createTextNode(numberText);
  let newSvg = document.createElement('div');

  newContact.classList.add('contacts__contact')
  list.prepend(newContact);

  newAvatar.classList.add('contacts__avatar', 'temporary-class');
  newContact.prepend(newAvatar);

  newInner.classList.add('contacts__inner');
  newContact.append(newInner);

  newName.classList.add('contacts__name');
  newInner.prepend(newName);
  newName.prepend(newNameText);

  newNumber.classList.add('contacts__number');
  newInner.append(newNumber);
  newNumber.append(newNumberText);

  newSvg.classList.add('contacts__not-elected')
  newContact.append(newSvg);
};