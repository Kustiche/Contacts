import { phonebook } from "./phonebook.js";

export function changeFavorite(event) {
  const currentElement = event.target;

  if (currentElement.className === 'contacts__not-elected' || currentElement.className === 'contacts__not-elected elected') {
    const contact = currentElement.closest('.contacts__contact');
    const contactName = contact.querySelector('.contacts__name');
    const contactNotElected = contact.querySelector('.contacts__not-elected');
    const desiredContact = phonebook.find((contact) => contact.name === contactName.textContent);
    
    if (desiredContact.isFavorite) {
      desiredContact.isFavorite = false;
    }else {
      desiredContact.isFavorite = true;
    };

    if (desiredContact.isFavorite) {
      contactNotElected.classList.add('elected');
    }else {
      contactNotElected.classList.remove('elected');
    };
  };
};