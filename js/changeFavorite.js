import { phonebook, modalIsFavorite } from "./view.js";

export function changeFavorite() {
  const contacts = document.querySelectorAll('.contacts__contact');

  contacts.forEach((contact) => {
    const nameContact = contact.querySelector('.contacts__name');
    const isFavoriteContact = contact.querySelector('.contacts__not-elected');

    const requiredContact = phonebook.find((contact) => contact.name === nameContact.textContent);

    isFavoriteContact.addEventListener('click', () => {

      if (!requiredContact.isFavorite) {
        requiredContact.isFavorite = true;
      }else {
        requiredContact.isFavorite = false;
      };

      if (requiredContact.isFavorite) {
        isFavoriteContact.classList.add('elected');
        modalIsFavorite.classList.add('elected');
      }else {
        isFavoriteContact.classList.remove('elected');
        modalIsFavorite.classList.remove('elected');
      };
    });
  });
};