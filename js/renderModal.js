import { hiddenModal } from "./hiddenModal.js";
import { deleteContact } from "./deleteContact.js";

export function renderModal(name, number) {
  hiddenModal();

  deleteContact(name);
};