import { modalName, modalNumber, modalCategory, modalFavorite } from "./view.js";
import { hiddenModal } from "./hiddenModal.js";
import { showModalAvatar } from "./showModalAvatar.js";
import { changeModalFavorite } from "./changeModalFavorite.js";

export function renderModal(name, number, category, favorite) {
  modalName.value = name;
  modalNumber.value = number;
  modalCategory.value = category;

  if (favorite) {
    modalFavorite.classList.add('elected');
  }else {
    modalFavorite.classList.remove('elected');
  };

  hiddenModal();
  showModalAvatar();
  changeModalFavorite();
};