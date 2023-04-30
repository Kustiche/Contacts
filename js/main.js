import { form, list, arrow, deleteBtn, modal } from "./view.js";
import { getDataForm } from "./getDataForm.js";
import { openModal } from "./openModal.js";
import { hideModal } from "./hideModal.js";
import { deleteContact } from "./deleteContact.js";
import { getDataModalForm } from "./getDataModalForm.js";
import { changeCategory } from "./changeCategory.js";

export const phonebook = [];

form.addEventListener('submit', (event) => {
  event.preventDefault();

  getDataForm();
});

list.addEventListener('click', openModal);

modal.addEventListener('submit', (event) => {
  event.preventDefault();

  getDataModalForm();
  changeCategory();
  hideModal();
})

arrow.addEventListener('click', hideModal);

deleteBtn.addEventListener('click', deleteContact);