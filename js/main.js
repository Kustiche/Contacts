import { form, list, arrow, deleteBtn, modal } from "./view.js";
import { getDataForm } from "./getDataForm.js";
import { openModal } from "./openModal.js";
import { hideModal } from "./hideModal.js";
import { deleteContact } from "./deleteContact.js";
import { getDataModalForm } from "./getDataModalForm.js";

form.addEventListener('submit', (event) => {
  event.preventDefault();

  getDataForm();
});

list.addEventListener('click', openModal);

modal.addEventListener('submit', (event) => {
  event.preventDefault();

  getDataModalForm();
})

arrow.addEventListener('click', hideModal);

deleteBtn.addEventListener('click', deleteContact);