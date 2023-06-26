import { list } from "./view.js";
import { phonebook } from "./phonebook.js";
import { createElement } from "./createElement.js";
import { showContactAvatar } from "./showContactAvatar.js";
import { newPhonebook } from "./deleteContact.js";

export function render() {
  list.textContent = '';

  phonebook.forEach((contact) => {
    createElement(contact.name, contact.number, contact.isFavorite);

    showContactAvatar(contact.name);
  });

  newPhonebook.forEach((contact) => {
    createElement(contact.name, contact.number, contact.isFavorite);

    showContactAvatar(contact.name);
  });
};