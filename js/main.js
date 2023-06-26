import { formName, formNumber, form, list, modal, modalName, modalCategory, modalDumpster } from "./view.js";
import { addСontact } from "./addContact.js";
import { openModal } from "./openModal.js";
import { changeFavorite } from "./changeFavorite.js";
import { changeDataContact } from "./changeDataContact.js";
import { changeCategory } from "./changeCategory.js";
import { phonebook } from "./phonebook.js";
import { render } from "./render.js";
import { deleteContact } from "./deleteContact.js";

let name = '';
render();

formNumber.addEventListener('click', () => {
  const isFormNumberOperator = formNumber.value.includes('+');
  if (!isFormNumberOperator) {
    formNumber.value = '+';
  };
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  addСontact(formName.value, formNumber.value);
  localStorage.setItem('phonebook', JSON.stringify(phonebook));
});

list.addEventListener('click', (event) => {
  openModal(event);
  changeFavorite(event);
});

modalName.addEventListener('click', () => {
  name = modalName.value;
});

modalCategory.addEventListener('click', () => {
  name = modalName.value;
});

modal.addEventListener('submit', (event) => {
  event.preventDefault();

  changeDataContact(name);
  changeCategory(name);
});

modalDumpster.addEventListener('click', () => {
  name = modalName.value;
  deleteContact(name)
});