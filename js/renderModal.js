import { modalName, modalNumber, modalCategory } from "./view.js";
import { hiddenModal } from "./hiddenModal.js";
import { deleteContact } from "./deleteContact.js";
import { showModalAvatar } from "./showModalAvatar.js";

export function renderModal(name, number, category) {
  modalName.value = name;
  modalNumber.value = number;
  modalCategory.value = category;

  hiddenModal();
  deleteContact(name);
  showModalAvatar();
};