import { modalName, modalNumber } from "./view.js";
import { hiddenModal } from "./hiddenModal.js";
import { deleteContact } from "./deleteContact.js";
import { showModalAvatar } from "./showModalAvatar.js";

export function renderModal(name, number) {
  modalName.value = name;
  modalNumber.value = number;

  hiddenModal();
  deleteContact(name);
  showModalAvatar();
};