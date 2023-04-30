import { phonebook, modalName, modalNumber, modalIsFavorite } from "./view.js";

export function renderModal(contact) {
  const contactName = contact.querySelector('.contacts__name');
  const isFavoriteContact = contact.querySelector('.contacts__not-elected');

  const desiredContact = phonebook.find((contact) => contact.name === contactName.textContent);

  modalName.value = desiredContact.name;
  modalNumber.value = desiredContact.number;

  modalIsFavorite.addEventListener('click', () => {
    if (!desiredContact.isFavorite) {
      desiredContact.isFavorite = true;
    }else {
      desiredContact.isFavorite = false;
    };

    if (desiredContact.isFavorite) {
      modalIsFavorite.classList.add('elected');
      isFavoriteContact.classList.add('elected');
    }else {
      modalIsFavorite.classList.remove('elected');
      isFavoriteContact.classList.remove('elected');
    };
  });

  modalName.addEventListener('click', () => {

  });
}