import { phonebook, list } from "./view.js";
import { addDomContact } from "./addDomContact.js";
import { showLetterAvatar } from "./showLetterAvatar.js";
import { changeFavorite } from "./changeFavorite.js";

export function render() {
  list.innerHTML = '';

  phonebook.forEach((contact) => {
    addDomContact(contact.name, contact.number)

    showLetterAvatar(contact.name);

    changeFavorite();
  })
};