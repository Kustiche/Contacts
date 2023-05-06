import { formName, formNumber, form, list } from "./view.js";
import { addСontact } from "./addContact.js";
import { openModal } from "./openModal.js";

form.addEventListener('submit', (event) => {
  event.preventDefault();

  addСontact(formName.value, formNumber.value);
});

list.addEventListener('click', () => {
  openModal(event);
});