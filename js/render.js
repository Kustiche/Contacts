import { list } from "./view.js";
import { phonebook } from "./phonebook.js";
import { createElement } from "./createElement.js";
import { showContactAvatar } from "./showContactAvatar.js";

export function render() {
  list.textContent = '';

  phonebook.forEach((contact) => {
    createElement(contact.name, contact.number);

    showContactAvatar(contact.name);
  });
};