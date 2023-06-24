import { modalName, modalFavorite } from "./view.js";
import { phonebook } from "./phonebook.js";
import { render } from "./render.js";

export function changeModalFavorite() {
  const contact = phonebook.find((contact) => contact.name === modalName.value);

  modalFavorite.addEventListener('click', () => {
    if (contact.isFavorite) {
      contact.isFavorite = false;
      modalFavorite.classList.remove('elected');
      render();
    }else {
      contact.isFavorite = true;
      modalFavorite.classList.add('elected');
      render();
    };
  });
};